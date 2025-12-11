#!/usr/bin/env node

/**
 * Copy environment-specific web.config file
 * This script copies the appropriate web.config file based on the build mode
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use the single environment configuration
const mode = 'dev';
console.log(`🔧 Copying web.config for environment: ${mode}`);

// Define the source and destination paths
const sourceFile = path.join(__dirname, '..', 'public', `web.config.${mode}`);
const destFile = path.join(__dirname, '..', 'public', 'web.config');

// Check if source file exists
if (!fs.existsSync(sourceFile)) {
  console.error(`❌ Error: web.config.${mode} not found at ${sourceFile}`);
  console.log('Available web.config files:');
  const publicDir = path.join(__dirname, '..', 'public');
  const files = fs.readdirSync(publicDir).filter(file => file.startsWith('web.config.'));
  files.forEach(file => console.log(`  - ${file}`));
  process.exit(1);
}

try {
  // Copy the environment-specific web.config to web.config
  fs.copyFileSync(sourceFile, destFile);
  console.log(`✅ Successfully copied web.config.${mode} to web.config`);
  
  // Log the target API URL for verification
  const configContent = fs.readFileSync(destFile, 'utf8');
  const apiUrlMatch = configContent.match(/url="([^"]+)"/);
  if (apiUrlMatch) {
    console.log(`🎯 API Proxy Target: ${apiUrlMatch[1]}`);
  }
  
} catch (error) {
  console.error(`❌ Error copying web.config: ${error.message}`);
  process.exit(1);
}
