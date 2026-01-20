#!/usr/bin/env sh
set -e

echo "🔍 Running ESLint..."
npm run lint

echo "🧪 Running unit tests..."
npm run test:ci

echo "✅ Pre-commit checks passed"
