#!/usr/bin/env node

// This script patches the react-helmet-async package.json to make it compatible with React 19
const fs = require('fs');
const path = require('path');

try {
  const helmetPath = path.join(process.cwd(), 'node_modules', 'react-helmet-async', 'package.json');
  
  console.log('Looking for react-helmet-async at:', helmetPath);
  
  if (fs.existsSync(helmetPath)) {
    console.log('Patching react-helmet-async package.json for React 19 compatibility...');
    
    const packageJson = JSON.parse(fs.readFileSync(helmetPath, 'utf8'));
    
    if (packageJson.peerDependencies && packageJson.peerDependencies.react) {
      console.log('Current peer dependency:', packageJson.peerDependencies.react);
      packageJson.peerDependencies.react = "^16.6.0 || ^17.0.0 || ^18.0.0 || ^19.0.0";
      console.log('Updated peer dependency:', packageJson.peerDependencies.react);
      
      fs.writeFileSync(helmetPath, JSON.stringify(packageJson, null, 2));
      console.log('Successfully patched react-helmet-async for React 19 compatibility');
    } else {
      console.log('No react peer dependency found in react-helmet-async');
    }
  } else {
    console.log('react-helmet-async package.json not found');
  }
} catch (error) {
  console.error('Error patching react-helmet-async:', error);
} 