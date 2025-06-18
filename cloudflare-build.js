#!/usr/bin/env node

const { execSync } = require('child_process');

// Helper function to run commands and log output
function runCommand(command, message) {
    console.log(`\n🔄 ${message}...\n`);
    try {
        execSync(command, { stdio: 'inherit' });
        return true;
    } catch (error) {
        console.error(`\n❌ Error during ${message}:`, error.message);
        return false;
    }
}

// Main build process
console.log('\n🚀 Starting Cloudflare build process for React 19.1.0 compatibility\n');

// Install dependencies with legacy peer deps
if (!runCommand('npm install --legacy-peer-deps --force', 'Installing dependencies')) {
    process.exit(1);
}

// Patch react-helmet-async
try {
    require('./patch-helmet.cjs');
} catch (error) {
    console.error('\n❌ Error patching react-helmet-async:', error.message);
    process.exit(1);
}

// Build the project
if (!runCommand('npm run build', 'Building project')) {
    process.exit(1);
}

console.log('\n✅ Build completed successfully for React 19.1.0\n'); 