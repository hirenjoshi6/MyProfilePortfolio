/**
 * Build Testing Utility Script
 * File: scripts/test-build.js
 * 
 * This script automates the testing of environment-specific builds.
 * It performs comprehensive checks to ensure the build is ready for deployment.
 * 
 * Usage:
 *   node scripts/test-build.js <environment>
 * 
 * Example:
 *   node scripts/test-build.js dev
 *   node scripts/test-build.js qa
 *   node scripts/test-build.js demo
 *   node scripts/test-build.js prod
 * 
 * What this script does:
 * 1. Validates the environment argument
 * 2. Checks if build directory exists
 * 3. Verifies critical files (index.html, assets, web.config)
 * 4. Analyzes bundle size
 * 5. Checks for common issues
 * 6. Provides actionable recommendations
 * 7. Generates a test report
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module equivalents for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ============================================================================
// CONFIGURATION SECTION
// ============================================================================

const VALID_ENVIRONMENTS = ['dev', 'qa', 'demo', 'prod'];
const PREVIEW_PORTS = {
  dev: 4173,
  qa: 4174,
  demo: 4175,
  prod: 4176
};

// Bundle size thresholds (in bytes)
// Note: These are generous for comprehensive admin portals with source maps
const SIZE_THRESHOLDS = {
  warn: 50 * 1024 * 1024,  // 50 MB warning
  error: 100 * 1024 * 1024 // 100 MB error
};

// ============================================================================
// UTILITY FUNCTIONS SECTION
// ============================================================================

/**
 * Logs colored messages to console
 */
const logger = {
  info: (msg) => console.log(`ℹ️  ${msg}`),
  success: (msg) => console.log(`✅ ${msg}`),
  warn: (msg) => console.log(`⚠️  ${msg}`),
  error: (msg) => console.log(`❌ ${msg}`),
  section: (msg) => console.log(`\n${'='.repeat(60)}\n${msg}\n${'='.repeat(60)}`),
};

/**
 * Formats bytes to human-readable size
 */
function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Gets total directory size recursively
 */
function getDirectorySize(dirPath) {
  let totalSize = 0;

  function calculateSize(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      
      if (stats.isDirectory()) {
        calculateSize(filePath);
      } else {
        totalSize += stats.size;
      }
    });
  }

  try {
    calculateSize(dirPath);
  } catch (error) {
    logger.error(`Error calculating directory size: ${error.message}`);
  }

  return totalSize;
}

/**
 * Checks if a file exists
 */
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

/**
 * Reads file content safely
 */
function readFileSafe(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    logger.error(`Error reading file ${filePath}: ${error.message}`);
    return null;
  }
}

/**
 * Gets all files in a directory recursively
 */
function getAllFiles(dirPath, arrayOfFiles = []) {
  try {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
      } else {
        arrayOfFiles.push(filePath);
      }
    });
  } catch (error) {
    logger.error(`Error reading directory: ${error.message}`);
  }

  return arrayOfFiles;
}

// ============================================================================
// VALIDATION FUNCTIONS SECTION
// ============================================================================

/**
 * Validates build directory exists
 */
function validateBuildDirectory(buildDir) {
  logger.info('Checking build directory...');
  
  if (!fs.existsSync(buildDir)) {
    logger.error(`Build directory not found: ${buildDir}`);
    logger.info('Please run the build command first:');
    logger.info(`  npm run build:${environment}`);
    return false;
  }
  
  logger.success(`Build directory found: ${buildDir}`);
  return true;
}

/**
 * Validates critical files exist
 */
function validateCriticalFiles(buildDir) {
  logger.info('Checking critical files...');
  
  const criticalFiles = [
    'index.html',
  ];
  
  let allFilesPresent = true;
  
  criticalFiles.forEach(file => {
    const filePath = path.join(buildDir, file);
    if (fileExists(filePath)) {
      logger.success(`Found: ${file}`);
    } else {
      logger.error(`Missing: ${file}`);
      allFilesPresent = false;
    }
  });
  
  return allFilesPresent;
}

/**
 * Validates assets directory
 */
function validateAssets(buildDir) {
  logger.info('Checking assets...');
  
  const assetsDir = path.join(buildDir, 'assets');
  
  if (!fs.existsSync(assetsDir)) {
    logger.error('Assets directory not found!');
    return false;
  }
  
  const assetFiles = fs.readdirSync(assetsDir);
  
  if (assetFiles.length === 0) {
    logger.error('Assets directory is empty!');
    return false;
  }
  
  const jsFiles = assetFiles.filter(f => f.endsWith('.js'));
  const cssFiles = assetFiles.filter(f => f.endsWith('.css'));
  
  logger.success(`Found ${jsFiles.length} JavaScript files`);
  logger.success(`Found ${cssFiles.length} CSS files`);
  
  return true;
}

/**
 * Analyzes bundle size
 */
function analyzeBundleSize(buildDir) {
  logger.info('Analyzing bundle size...');
  
  const totalSize = getDirectorySize(buildDir);
  const formattedSize = formatBytes(totalSize);
  
  logger.info(`Total build size: ${formattedSize}`);
  
  if (totalSize > SIZE_THRESHOLDS.error) {
    logger.error(`Bundle size exceeds ${formatBytes(SIZE_THRESHOLDS.error)} limit!`);
    logger.warn('Consider code splitting and lazy loading');
    return false;
  } else if (totalSize > SIZE_THRESHOLDS.warn) {
    logger.warn(`Bundle size exceeds ${formatBytes(SIZE_THRESHOLDS.warn)} warning threshold`);
    logger.info('Consider optimizing bundle size');
  } else {
    logger.success('Bundle size is within acceptable limits');
  }
  
  return true;
}

/**
 * Checks index.html for common issues
 */
function validateIndexHtml(buildDir) {
  logger.info('Validating index.html...');
  
  const indexPath = path.join(buildDir, 'index.html');
  const content = readFileSafe(indexPath);
  
  if (!content) {
    logger.error('Could not read index.html');
    return false;
  }
  
  let hasIssues = false;
  
  // Check for asset references
  if (!content.includes('<script')) {
    logger.error('No script tags found in index.html');
    hasIssues = true;
  } else {
    logger.success('Script tags found');
  }
  
  // Check for CSS references
  if (!content.includes('<link') && !content.includes('<style')) {
    logger.warn('No CSS links or styles found in index.html');
  } else {
    logger.success('CSS references found');
  }
  
  // Check for root div
  if (!content.includes('id="root"')) {
    logger.error('Root div (#root) not found in index.html');
    hasIssues = true;
  } else {
    logger.success('Root div found');
  }
  
  return !hasIssues;
}

/**
 * Checks for source maps in production
 */
function checkSourceMaps(buildDir, environment) {
  if (environment !== 'prod') {
    return true; // Source maps are OK in non-prod
  }
  
  logger.info('Checking for source maps (should not exist in production)...');
  
  const allFiles = getAllFiles(buildDir);
  const mapFiles = allFiles.filter(f => f.endsWith('.map'));
  
  if (mapFiles.length > 0) {
    logger.warn(`Found ${mapFiles.length} source map files in production build`);
    logger.warn('Source maps should be disabled in production for security');
    mapFiles.slice(0, 5).forEach(f => {
      logger.info(`  - ${path.basename(f)}`);
    });
    return false;
  }
  
  logger.success('No source maps found (good for production)');
  return true;
}

/**
 * Validates web.config for IIS deployment
 */
function validateWebConfig(buildDir) {
  logger.info('Checking web.config for IIS deployment...');
  
  const webConfigPath = path.join(buildDir, 'web.config');
  
  if (!fileExists(webConfigPath)) {
    logger.warn('web.config not found (required for IIS deployment)');
    logger.info('This file should be copied during build');
    return false;
  }
  
  const content = readFileSafe(webConfigPath);
  
  if (!content) {
    logger.error('Could not read web.config');
    return false;
  }
  
  // Check for critical IIS rewrite rules
  if (!content.includes('rewrite')) {
    logger.warn('web.config may be missing rewrite rules for SPA routing');
  } else {
    logger.success('web.config contains rewrite rules');
  }
  
  logger.success('web.config found and validated');
  return true;
}

// ============================================================================
// REPORT GENERATION SECTION
// ============================================================================

/**
 * Generates a test report
 */
function generateTestReport(environment, results) {
  const timestamp = new Date().toISOString();
  const reportPath = path.join(__dirname, '..', `build-test-report-${environment}.json`);
  
  const report = {
    environment,
    timestamp,
    results,
    passed: Object.values(results).every(r => r === true),
  };
  
  try {
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    logger.success(`Test report saved: ${reportPath}`);
  } catch (error) {
    logger.error(`Could not save test report: ${error.message}`);
  }
  
  return report;
}

// ============================================================================
// MAIN EXECUTION SECTION
// ============================================================================

/**
 * Main test execution function
 */
function runBuildTest(environment) {
  logger.section(`🚀 BUILD TEST FOR ENVIRONMENT: ${environment.toUpperCase()}`);
  
  const buildDir = path.join(__dirname, '..', 'dist', environment);
  const port = PREVIEW_PORTS[environment];
  
  logger.info(`Build directory: ${buildDir}`);
  logger.info(`Preview port: ${port}`);
  logger.info(`Preview URL: http://localhost:${port}`);
  
  // Run all validations
  const results = {
    buildDirectory: validateBuildDirectory(buildDir),
  };
  
  if (!results.buildDirectory) {
    logger.section('❌ BUILD TEST FAILED');
    logger.error('Build directory not found. Please build first.');
    process.exit(1);
  }
  
  results.criticalFiles = validateCriticalFiles(buildDir);
  results.assets = validateAssets(buildDir);
  results.bundleSize = analyzeBundleSize(buildDir);
  results.indexHtml = validateIndexHtml(buildDir);
  results.sourceMaps = checkSourceMaps(buildDir, environment);
  results.webConfig = validateWebConfig(buildDir);
  
  // Generate report
  const report = generateTestReport(environment, results);
  
  // Print summary
  logger.section('📊 TEST SUMMARY');
  
  const passed = Object.entries(results).filter(([, v]) => v === true).length;
  const failed = Object.entries(results).filter(([, v]) => v === false).length;
  const total = Object.keys(results).length;
  
  logger.info(`Total checks: ${total}`);
  logger.success(`Passed: ${passed}`);
  if (failed > 0) {
    logger.error(`Failed: ${failed}`);
  }
  
  // Print next steps
  logger.section('📋 NEXT STEPS');
  
  if (report.passed) {
    logger.success('All checks passed! ✨');
    logger.info('\nTo preview the build locally:');
    logger.info(`  npm run preview:${environment}`);
    logger.info(`\nThen open: http://localhost:${port}`);
    logger.info('\nManual testing checklist:');
    logger.info('  ☐ Application loads without errors');
    logger.info('  ☐ Authentication works');
    logger.info('  ☐ API calls work correctly');
    logger.info('  ☐ Navigation works');
    logger.info('  ☐ No console errors');
    logger.info('  ☐ Performance is acceptable');
  } else {
    logger.error('Some checks failed. Please fix the issues before deployment.');
    logger.info('\nFailed checks:');
    Object.entries(results)
      .filter(([, v]) => v === false)
      .forEach(([check]) => {
        logger.error(`  ✗ ${check}`);
      });
  }
  
  // Exit with appropriate code
  process.exit(report.passed ? 0 : 1);
}

// ============================================================================
// SCRIPT ENTRY POINT
// ============================================================================

// Validate command line arguments
const environment = process.argv[2];

if (!environment) {
  logger.error('Environment argument is required!');
  logger.info('Usage: node scripts/test-build.js <environment>');
  logger.info(`Valid environments: ${VALID_ENVIRONMENTS.join(', ')}`);
  logger.info('\nExamples:');
  logger.info('  node scripts/test-build.js dev');
  logger.info('  node scripts/test-build.js qa');
  logger.info('  node scripts/test-build.js prod');
  process.exit(1);
}

if (!VALID_ENVIRONMENTS.includes(environment)) {
  logger.error(`Invalid environment: ${environment}`);
  logger.info(`Valid environments: ${VALID_ENVIRONMENTS.join(', ')}`);
  process.exit(1);
}

// Run the test
try {
  runBuildTest(environment);
} catch (error) {
  logger.section('💥 UNEXPECTED ERROR');
  logger.error(error.message);
  console.error(error.stack);
  process.exit(1);
}

