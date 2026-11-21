const { generateTool } = require('../src/tool-generator');
const fs = require('fs');
const path = require('path');

const testToolName = 'test-tool';
try {
  generateTool(testToolName, 'Test description');
  const exists = fs.existsSync(path.join(process.cwd(), 'tools', `${testToolName}.js`));
  if (exists) {
    console.log('Test passed: Tool generated.');
    process.exit(0);
  } else {
    console.error('Test failed: Tool not found.');
    process.exit(1);
  }
} catch (e) {
  console.error(e);
  process.exit(1);
}