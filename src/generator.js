const fs = require('fs');
const path = require('path');

function generateTool(name) {
  const content = `#!/usr/bin/env node\nconsole.log("Tool ${name} initialized");\n`;
  const filePath = path.join('bin', `${name}.js`);
  if (!fs.existsSync('bin')) fs.mkdirSync('bin');
  fs.writeFileSync(filePath, content);
  fs.chmodSync(filePath, '755');
  return filePath;
}

module.exports = { generateTool };