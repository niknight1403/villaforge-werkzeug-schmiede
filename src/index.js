#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.includes('--version')) {
  console.log('1.0.0');
  process.exit(0);
}

console.log('Generator-Villa Tool active.');