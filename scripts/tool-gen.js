const fs = require('fs');
const path = require('path');

/**
 * Tool-Generator CLI
 * Usage: node scripts/tool-gen.js <tool-name>
 */

const toolName = process.argv[2];
if (!toolName) {
  console.error('Error: Provide a tool name.');
  process.exit(1);
}

const template = `// Generated Tool: ${toolName}\nmodule.exports = async (args) => {\n  console.log('Executing ${toolName} with:', args);\n  return { success: true };\n};`;

const filePath = path.join(__dirname, '..', 'src', 'tools', `${toolName}.js`);
if (!fs.existsSync(path.dirname(filePath))) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

fs.writeFileSync(filePath, template);
console.log(`Tool ${toolName} created at ${filePath}`);