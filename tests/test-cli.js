const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  execSync('node src/cli-generator.js testTool');
  if (fs.existsSync(path.join(process.cwd(), 'testTool.js'))) {
    console.log('Test PASSED: Tool generated.');
    fs.unlinkSync('testTool.js');
    process.exit(0);
  } else {
    throw new Error('File not found');
  }
} catch (e) {
  console.error('Test FAILED:', e.message);
  process.exit(1);
}