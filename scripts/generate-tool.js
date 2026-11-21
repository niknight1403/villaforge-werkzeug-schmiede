#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const [,, name] = process.argv;
if (!name) {
  console.error('Usage: node generate-tool.js <tool-name>');
  process.exit(1);
}

const template = `#!/bin/bash
echo "Executing ${name}..."
# Add logic here
`;

const target = path.join('bin', `${name}.sh`);
if (!fs.existsSync('bin')) fs.mkdirSync('bin');
fs.writeFileSync(target, template, { mode: 0o755 });
console.log(`Tool created at ${target}`);