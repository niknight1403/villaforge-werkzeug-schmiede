const fs = require('fs');
const path = require('path');

console.log('--- Smoke Test: Autonome Generator-Villa ---');

const buildDir = path.join(__dirname, '../build');
const statePath = path.join(__dirname, '../state.json');

if (!fs.existsSync(buildDir)) {
  fs.mkdirSync(buildDir);
  console.log('Build-Verzeichnis erstellt: true');
} else {
  console.log('Build-Verzeichnis vorhanden: true');
}

if (fs.existsSync(statePath)) {
  const state = JSON.parse(fs.readFileSync(statePath, 'utf8'));
  console.log('Monitoring State geladen: true');
} else {
  const initialState = { status: 'active', lastUpdate: new Date().toISOString() };
  fs.writeFileSync(statePath, JSON.stringify(initialState, null, 2));
  console.log('Monitoring State initialisiert: true');
}

process.exit(0);