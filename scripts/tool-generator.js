const fs = require('fs');
const path = require('path');

/**
 * Tool-Generator CLI
 * Generates boilerplate for new VillaForge tools.
 */
function generateTool(name) {
  const toolTemplate = `module.exports = async (args) => {\n  console.log('Executing ${name}...');\n  // TODO: Implement logic\n  return { success: true };\n};`;
  const filePath = path.join(__dirname, '..', 'tools', `${name}.js`);
  
  if (!fs.existsSync(path.join(__dirname, '..', 'tools'))) {
    fs.mkdirSync(path.join(__dirname, '..', 'tools'));
  }
  
  fs.writeFileSync(filePath, toolTemplate);
  console.log(`Tool ${name} created at ${filePath}`);
}

const args = process.argv.slice(2);
if (args.length > 0) {
  generateTool(args[0]);
} else {
  console.error('Usage: node scripts/tool-generator.js <tool-name>');
}