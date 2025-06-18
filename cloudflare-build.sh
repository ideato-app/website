#!/bin/bash

echo "📦 Installing with --force and --legacy-peer-deps for React 19.1.0 compatibility..."
npm install --force --legacy-peer-deps

echo "🔧 Patching react-helmet-async for React 19 compatibility..."
node patch-helmet.cjs

echo "🏗️ Building project..."
# Skip the npm install in the build script since we already did it
SKIP_INSTALL=true npm run build

echo "✅ Build completed for React 19.1.0"
