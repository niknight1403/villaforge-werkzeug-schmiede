/**
 * Generator-Villa fuer VillaForge - Core Tool Generator & Monitoring Agent
 */
const fs = require('fs');
const path = require('path');

class GeneratorVilla {
  constructor(config = {}) {
    this.version = '1.0.0';
    this.statePath = config.statePath || path.join(process.cwd(), 'state.json');
  }

  generateTool(name, templateType = 'cli') {
    if (!name || typeof name !== 'string') {
      throw new Error('Tool name must be a valid non-empty string.');
    }
    const sanitized = name.replace(/[^a-zA-Z0-9_-]/g, '');
    const toolDir = path.join(process.cwd(), 'tools', sanitized);
    
    if (!fs.existsSync(toolDir)) {
      fs.mkdirSync(toolDir, { recursive: true });
    }

    const scriptContent = `#!/usr/bin/env node
/**
 * Generated Tool: ${sanitized}
 * VillaForge Autonomous Generator
 */
console.log('Running generated tool: ${sanitized}');
`;
    
    const scriptPath = path.join(toolDir, `${sanitized}.js`);
    fs.writeFileSync(scriptPath, scriptContent, 'utf8');

    return { success: true, tool: sanitized, path: scriptPath };
  }

  updateState(statusData = {}) {
    const state = {
      version: this.version,
      timestamp: new Date().toISOString(),
      status: statusData.status || 'HEALTHY',
      metrics: statusData.metrics || { activeTools: 0, lastRun: null },
      healingConditions: statusData.healingConditions || []
    };
    fs.writeFileSync(this.statePath, JSON.stringify(state, null, 2), 'utf8');
    return state;
  }

  getState() {
    if (!fs.existsSync(this.statePath)) {
      return this.updateState();
    }
    return JSON.parse(fs.readFileSync(this.statePath, 'utf8'));
  }
}

module.exports = GeneratorVilla;

if (require.main === module) {
  const villa = new GeneratorVilla();
  console.log('Generator-Villa initialized. State:', villa.getState());
}
