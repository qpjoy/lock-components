#!/usr/bin/env bash
echo "┏━━━ 🕵️‍♀️ RM ALL: ${pwd}━━━━━━━"
yarn lerna run rm --concurrency 4
rm -rf dist node_modules *.tsbuildinfo tests/*.js yarn-error.log yarn.lock