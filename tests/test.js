const assert = require('assert');
const { execSync } = require('child_process');

console.log('Running Smoke Test...');
try {
  const output = execSync('node src/index.js --version').toString();
  assert.ok(output.includes('1.0.0'), 'Version mismatch');
  console.log('Smoke Test Passed');
  process.exit(0);
} catch (e) {
  console.error('Smoke Test Failed:', e.message);
  process.exit(1);
}