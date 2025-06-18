#!/bin/bash

echo "📦 Installing with legacy-peer-deps for React 19.1.0 compatibility..."
npm install --legacy-peer-deps

echo "🏗️ Building project..."
npm run build

echo "✅ Build completed for React 19.1.0"
