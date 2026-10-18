---
title: Configuration
description: The rup.config.json keys of the free edition and how flags override them.
---

# Configuration

`rup.config.json` sits in the project root. `init` creates it; every key is
optional because the defaults below apply.

```json title="rup.config.json"
{
  "project": "my-project",
  "outDir": "docs/rup",
  "docLanguage": "en",
  "codeRoot": "src",
  "paths": {
    "domain": "00-domain-model",
    "requirements": "01-requirements",
    "analysis": "02-analysis",
    "design": "03-design",
    "implementation": "04-implementation",
    "quality": "05-quality"
  },
  "useCaseDir": "use-cases",
  "plantuml": { "url": "http://127.0.0.1:8085", "timeoutMs": 30000 },
  "diagrams": { "language": "plantuml", "outputs": ["svg"] },
  "ids": { "requirement": "RF", "nonFunctional": "RNF", "useCase": "UC", "rule": "RN", "decision": "DEC", "test": "TC" },
  "targetStack": { "language": "", "framework": "", "persistence": "", "testing": "" }
}
```

## Keys

| Key | Default | Meaning |
| --- | --- | --- |
| `project` | folder name | Name used in titles |
| `outDir` | `docs/rup` | Root of the documentation, relative to the project root |
| `docLanguage` | `en` | Language of the documents. File names, IDs, front-matter keys and PlantUML identifiers stay in English |
| `codeRoot` | `.` | Where the code lives; used by editions that read or generate code |
| `paths.*` | numbered folders | Folder name of each discipline under `outDir` |
| `useCaseDir` | `use-cases` | Subfolder that holds one folder per use case |
| `plantuml.url` | `http://127.0.0.1:8085` | Address of the PlantUML server |
| `plantuml.timeoutMs` | `30000` | Time allowed for one render request |
| `diagrams.language` | `plantuml` | Diagram language. The free edition supports `plantuml` |
| `diagrams.outputs` | `["svg"]` | Render outputs. The free edition supports `svg` |
| `ids.*` | `RF`, `RNF`, `UC`, `RN`, `DEC`, `TC` | Prefixes of the stable identifiers |
| `targetStack` | empty | Target stack, read by editions that generate code |

## Precedence

Flags override the file, and the file overrides the defaults:

```text
flags  >  rup.config.json  >  defaults
```

`config` prints the resolved result.

## Changing paths on an existing project

Changing `paths` or `outDir` after documents exist means moving the folders and
fixing the links. Do it as one explicit step and run `check` afterwards.

## Settings that belong to Pro

The free edition rejects a configuration that asks for a Mermaid diagram
language or a non-`svg` output, and ignores nothing silently: it stops with a
message that names Pro. Theme settings are only read by Pro.
