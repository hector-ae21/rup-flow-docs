---
title: Configuration
description: The rup.config.json keys, free and Pro, and how flags override them.
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

| Key | Default | Edition | Meaning |
| --- | --- | --- | --- |
| `project` | folder name | <span class="rup-free-tag">Free</span> | Name used in titles |
| `outDir` | `docs/rup` | <span class="rup-free-tag">Free</span> | Root of the documentation, relative to the project root |
| `docLanguage` | `en` | <span class="rup-free-tag">Free</span> | Language of the documents. File names, IDs, front-matter keys and PlantUML identifiers stay in English |
| `codeRoot` | `.` | <span class="rup-pro-tag">Pro</span> | Where the code lives; read by `scan` and by code generation |
| `paths.*` | numbered folders | <span class="rup-free-tag">Free</span> | Folder name of each discipline under `outDir` |
| `useCaseDir` | `use-cases` | <span class="rup-free-tag">Free</span> | Subfolder that holds one folder per use case |
| `plantuml.url` | `http://127.0.0.1:8085` | <span class="rup-free-tag">Free</span> | Address of the PlantUML server |
| `plantuml.timeoutMs` | `30000` | <span class="rup-free-tag">Free</span> | Time allowed for one render request |
| `diagrams.language` | `plantuml` | <span class="rup-free-tag">Free</span> | `plantuml`. <span class="rup-pro-tag">Pro</span>: also `mermaid` |
| `diagrams.outputs` | `["svg"]` | <span class="rup-free-tag">Free</span> | `svg`. <span class="rup-pro-tag">Pro</span>: also `png` and `html` |
| `ids.*` | `RF`, `RNF`, `UC`, `RN`, `DEC`, `TC` | <span class="rup-free-tag">Free</span> | Prefixes of the stable identifiers |
| `targetStack` | empty | <span class="rup-pro-tag">Pro</span> | Language, framework, persistence and testing of the code to generate |
| `traceTag` | `@rup` | <span class="rup-pro-tag">Pro</span> | Doc-comment tag that links code to a model element |
| `theme.preset` | `default` | <span class="rup-pro-tag">Pro</span> | Palette name |
| `theme.colors.*` | none | <span class="rup-pro-tag">Pro</span> | Color overrides; `levels` takes exactly four colors |
| `theme.font` | system font stack | <span class="rup-pro-tag">Pro</span> | Font family of the diagrams |
| `theme.fontSize` | `14` | <span class="rup-pro-tag">Pro</span> | Font size in points |
| `theme.roundCorner` | `6` | <span class="rup-pro-tag">Pro</span> | Corner radius of boxes |
| `mermaid.image` | pinned image | <span class="rup-pro-tag">Pro</span> | Container image that draws Mermaid |
| `mermaid.timeoutMs` | `180000` | <span class="rup-pro-tag">Pro</span> | Time allowed for a Mermaid batch |

## Precedence

Flags override the file, and the file overrides the defaults:

```text
flags  >  rup.config.json  >  defaults
```

`config` prints the resolved result.

## Changing paths on an existing project

Changing `paths` or `outDir` after documents exist means moving the folders and
fixing the links. Do it as one explicit step and run `check` afterwards.

## Pro settings in the free edition

The free edition does not ignore a Pro setting silently. A Mermaid language or a
non-`svg` output in the file, or any `--theme`, `--font`, `--color-*` or
`--preview-png` flag, stops the command with a message that names Pro. `theme` and
`mermaid` keys are only read by Pro.
