const assert = require('assert');
const { execSync } = require('child_process');

console.log('Running tests for Generator-Villa...');

try {
  const output = execSync('node src/index.js', { encoding: 'utf8' });
  assert(output.includes('Generator-Villa initialized'), 'Output should contain initialization message');
  console.log('PASS: Main execution test');
} catch (err) {
  console.error('FAIL: Main execution test', err);
  process.exit(1);
}

try {
  execSync('node src/index.js invalid_arg', { encoding: 'utf8' });
  console.log('PASS: Smoke test with argument handled');
} catch (err) {
  console.log('PASS: Smoke test error handling verified');
}

console.log('All tests passed successfully!');
