#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

function generateTool(name) {
  const content = `// Tool: ${name}\nmodule.exports = { run: () => console.log('Running ${name}') };`;
  fs.writeFileSync(path.join(process.cwd(), `${name}.js`), content);
  console.log(`Tool ${name}.js created.`);
}

const args = process.argv.slice(2);
if (args.length > 0) {
  generateTool(args[0]);
} else {
  console.error('Usage: node src/cli-generator.js <tool-name>');
  process.exit(1);
}