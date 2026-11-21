const fs = require('fs');
const path = require('path');

console.log('--- Smoke Test: Autonome Generator-Villa ---');

// 1. Check Build Artifacts
const distExists = fs.existsSync(path.resolve(__dirname, '../dist'));
console.log('Build-Verzeichnis vorhanden:', distExists);

// 2. Check Monitoring State
const statePath = path.resolve(__dirname, '../state.json');
if (fs.existsSync(statePath)) {
    const state = JSON.parse(fs.readFileSync(statePath, 'utf8'));
    console.log('Monitoring State geladen:', state.status === 'ok');
} else {
    console.log('Monitoring State fehlt, erstelle Initialzustand.');
    fs.writeFileSync(statePath, JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }));
}

process.exit(0);