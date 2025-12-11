#!/usr/bin/env node

/**
 * Build Verification Script
 * Verifies that the build output is correct before deployment
 * 
 * Usage: node scripts/verify-build.js [environment]
 * If no environment is provided, it will check the default dist directory
 * Example: node scripts/verify-build.js
 * Example: node scripts/verify-build.js dev
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get environment from command line argument or use 'dist' as default
const environment = process.argv[2] || '';

// Define build directory based on environment
const buildDir = environment 
  ? path.join(__dirname, '..', 'dist', environment)
  : path.join(__dirname, '..', 'dist');

console.log(`\n🔍 Verifying build${environment ? ` for environment: ${environment}` : ''}\n`);
console.log(`📁 Build directory: ${buildDir}\n`);

// Define paths
const indexPath = path.join(buildDir, 'index.html');
const assetsDir = path.join(buildDir, 'assets');
const webConfigPath = path.join(buildDir, 'web.config');

// Verification results
const results = {
  passed: [],
  failed: [],
  warnings: []
};

// Helper function to format file size
function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Helper function to add result
function addResult(type, check, status, message) {
  const result = { check, message };
  results[type].push(result);
  
  const emoji = type === 'passed' ? '✅' : type === 'failed' ? '❌' : '⚠️';
  console.log(`${emoji} ${check}: ${message}`);
}

// Check 1: Build directory exists
if (fs.existsSync(buildDir)) {
  addResult('passed', 'Build Directory', true, `Found build directory: ${buildDir}`);
  
  // List contents of the build directory for debugging
  try {
    const files = fs.readdirSync(buildDir);
    console.log('📦 Build directory contents:');
    files.forEach(file => {
      const filePath = path.join(buildDir, file);
      const stats = fs.statSync(filePath);
      console.log(`   ${stats.isDirectory() ? '📁' : '📄'} ${file} (${formatFileSize(stats.size)})`);
    });
    console.log('');
  } catch (error) {
    addResult('warnings', 'Directory Listing', false, `Could not list directory contents: ${error.message}`);
  }
} else {
  addResult('failed', 'Build Directory', false, `Build directory not found: ${buildDir}`);
  console.error('\n❌ Build verification failed! Build directory does not exist.\n');
  console.log('💡 Try running `npm run build` or `npm run build:dev` first.\n');
  process.exit(1);
}

// Check 2: index.html exists
if (fs.existsSync(indexPath)) {
  addResult('passed', 'index.html', true, 'index.html exists');
  
  // Check 2a: index.html has <title> tag
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  if (indexContent.includes('<title>')) {
    addResult('passed', 'HTML Title', true, 'index.html contains <title> tag');
  } else {
    addResult('failed', 'HTML Title', false, 'index.html missing <title> tag');
  }
  
  // Check 2b: index.html has proper script tags
  if (indexContent.includes('<script') && indexContent.includes('/assets/')) {
    addResult('passed', 'Script Tags', true, 'index.html has script tags with correct paths');
  } else {
    addResult('warnings', 'Script Tags', false, 'Script tags may have incorrect paths');
  }
  
  // Check 2c: index.html has CSS link
  if (indexContent.includes('<link') && indexContent.includes('.css')) {
    addResult('passed', 'CSS Link', true, 'index.html has CSS link');
  } else {
    addResult('warnings', 'CSS Link', false, 'CSS link may be missing');
  }
} else {
  addResult('failed', 'index.html', false, 'index.html not found');
}

// Check 3: web.config exists
if (fs.existsSync(webConfigPath)) {
  addResult('passed', 'web.config', true, 'web.config exists');
  
  // Check 3a: web.config has proper XML structure
  const webConfigContent = fs.readFileSync(webConfigPath, 'utf8');
  if (webConfigContent.includes('<?xml') && webConfigContent.includes('<configuration>')) {
    addResult('passed', 'web.config XML', true, 'web.config has proper XML structure');
  } else {
    addResult('failed', 'web.config XML', false, 'web.config XML structure is invalid');
  }
  
  // Check 3b: web.config has rewrite rules
  if (webConfigContent.includes('<rewrite>') && webConfigContent.includes('<rules>')) {
    addResult('passed', 'Rewrite Rules', true, 'web.config has rewrite rules');
  } else {
    addResult('warnings', 'Rewrite Rules', false, 'web.config may be missing rewrite rules');
  }
  
  // Check 3c: web.config has SPA fallback
  if (webConfigContent.includes('index.html') || webConfigContent.includes('React Routes')) {
    addResult('passed', 'SPA Fallback', true, 'web.config has SPA fallback rule');
  } else {
    addResult('warnings', 'SPA Fallback', false, 'web.config may be missing SPA fallback');
  }
} else {
  addResult('failed', 'web.config', false, 'web.config not found');
}

// Check 4: assets directory exists and has files
if (fs.existsSync(assetsDir)) {
  const assetFiles = fs.readdirSync(assetsDir);
  const jsFiles = assetFiles.filter(f => f.endsWith('.js'));
  const cssFiles = assetFiles.filter(f => f.endsWith('.css'));
  
  addResult('passed', 'Assets Directory', true, `Assets directory exists with ${assetFiles.length} files`);
  
  if (jsFiles.length > 0) {
    addResult('passed', 'JavaScript Files', true, `Found ${jsFiles.length} JS files`);
  } else {
    addResult('failed', 'JavaScript Files', false, 'No JavaScript files found in assets');
  }
  
  if (cssFiles.length > 0) {
    addResult('passed', 'CSS Files', true, `Found ${cssFiles.length} CSS files`);
  } else {
    addResult('warnings', 'CSS Files', false, 'No CSS files found in assets');
  }
} else {
  addResult('failed', 'Assets Directory', false, 'Assets directory not found');
}

// Check 5: favicon exists (check multiple formats)
const faviconFormats = ['.png', '.ico', '.svg', '.jpg', '.jpeg', ''];
let faviconFound = false;
let faviconPath = '';

for (const format of faviconFormats) {
  const pathToCheck = path.join(buildDir, `favicon${format}`);
  if (fs.existsSync(pathToCheck)) {
    faviconFound = true;
    faviconPath = pathToCheck;
    break;
  }
}

// Also check in the root of the build directory for a favicon.ico
if (!faviconFound) {
  const rootFavicon = path.join(buildDir, '../favicon.ico');
  if (fs.existsSync(rootFavicon)) {
    faviconFound = true;
    faviconPath = rootFavicon;
  }
}

if (faviconFound) {
  addResult('passed', 'Favicon', true, `Found favicon at ${path.basename(faviconPath)}`);
} else {
  // Make this a lower priority warning since some sites might not need a favicon
  addResult('info', 'Favicon', true, 'No favicon found (optional)');
}

// Check 6: Check for common asset directories
const assetDirs = [
  { path: path.join(buildDir, 'images'), name: 'Build Images' },
  { path: path.join(buildDir, 'assets'), name: 'Build Assets' },
  { path: path.join(process.cwd(), 'public/images'), name: 'Public Images' },
  { path: path.join(process.cwd(), 'public/assets'), name: 'Public Assets' },
  { path: path.join(process.cwd(), 'src/assets'), name: 'Source Assets' }
];

let foundAssets = false;
for (const dir of assetDirs) {
  if (fs.existsSync(dir.path)) {
    try {
      const files = fs.readdirSync(dir.path).filter(file => !file.startsWith('.'));
      if (files.length > 0) {
        addResult('passed', dir.name, true, `Found ${files.length} files in ${dir.name} directory`);
        foundAssets = true;
      }
    } catch (e) {
      addResult('warnings', dir.name, false, `Error reading ${dir.name} directory: ${e.message}`);
    }
  }
}

if (!foundAssets) {
  addResult('info', 'Asset Directories', true, 'No asset directories found (this is optional)');
}

// Print summary
console.log('\n--- Build Verification Summary ---');

console.log(`✅ Passed: ${results.passed.length}`);
console.log(`⚠️  Warnings: ${results.warnings.length}`);
console.log(`❌ Failed: ${results.failed.length}`);

if (results.failed.length > 0) {
  console.log('\n❌ Failed checks:');
  results.failed.forEach((item, index) => {
    console.log(`  ${index + 1}. ${item.check}: ${item.message}`);
  });
  console.log('\n❌ Build verification failed! Please fix the issues above.');
  console.log('💡 Try running `npm run build` or `npm run build:dev` first.');
  process.exit(1);
}

if (results.warnings.length > 0) {
  console.log('\n⚠️  Warnings:');
  results.warnings.forEach((item, index) => {
    console.log(`  ${index + 1}. ${item.check}: ${item.message}`);
  });
}

// Show success with build info
try {
  if (fs.existsSync(indexPath)) {
    const stats = fs.statSync(indexPath);
    console.log(`\n📊 Build Information:`);
    console.log(`   • index.html: ${formatFileSize(stats.size)}`);
    
    // Count assets if assets directory exists
    if (fs.existsSync(assetsDir)) {
      const assets = fs.readdirSync(assetsDir);
      console.log(`   • Assets: ${assets.length} files`);
    }
  }
} catch (error) {
  addResult('warnings', 'Build Info', false, `Could not gather build information: ${error.message}`);
  console.log('✅ Build verification PASSED! Build is ready for deployment.\n');
  process.exit(0);
}

