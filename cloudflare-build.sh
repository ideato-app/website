#!/bin/bash

echo "📦 Installing with legacy-peer-deps..."
npm install --legacy-peer-deps

echo "🏗️ Building project..."
npm run build
