#!/bin/bash

echo "📦 Installing with --force and --legacy-peer-deps for React 19.1.0 compatibility..."
npm install --force --legacy-peer-deps

echo "🔧 Patching react-helmet-async for React 19 compatibility..."
node react-helmet-patch.js

echo "🏗️ Building project..."
npm run build

echo "✅ Build completed for React 19.1.0"
