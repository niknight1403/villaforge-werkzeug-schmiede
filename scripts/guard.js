const fs = require('fs');
const files = fs.readdirSync('.');
if (files.length < 2) {
  console.error('Error: Projektverzeichnis scheint leer zu sein.');
  process.exit(1);
}
console.log('Guard: Projektstruktur validiert.');
process.exit(0);