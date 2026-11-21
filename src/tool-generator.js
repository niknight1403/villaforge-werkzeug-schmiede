const fs = require('fs');
const path = require('path');

function generateTool(name, description) {
  const template = `#!/usr/bin/env node
/**
 * ${description}
 */
console.log('Tool ${name} initialized.');
`;
  const filePath = path.join(process.cwd(), 'tools', `${name}.js`);
  if (!fs.existsSync('tools')) fs.mkdirSync('tools');
  fs.writeFileSync(filePath, template);
  console.log(`Tool ${name} created at ${filePath}`);
}

module.exports = { generateTool };