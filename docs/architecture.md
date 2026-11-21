# Architektur: Autonome Generator-Villa (VillaForge)

## 1. Systemkomponenten
- Tool-Generator: CLI-Modul zur Automatisierung von Build-Skripten.
- Test-und-Refactor-Agent: Überwacht npm test, führt Syntax-Bereinigungen durch.
- Monitoring-Agent: Schreibt Systemzustand in state.json.

## 2. Datenmodell (state.json)
{
  "status": "string",
  "last_run": "timestamp",
  "health_score": "number",
  "active_tasks": ["string"]
}

## 3. Architektur-Diagramm
[User] -> [CLI-Tool-Generator] -> [Repo-Build]
[Monitoring-Agent] -> (state.json) <- [Test-Agent]

## 4. Deployment
- GitHub-Integration via Token.
- Validierung: npm test (Exit 0) vor jedem Commit.