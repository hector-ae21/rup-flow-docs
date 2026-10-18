---
title: Folder structure
description: The default tree the free edition generates and the purpose of each folder.
---

# Folder structure

```text
<outDir>/                              default docs/rup
├── README.md                          index
├── 00-domain-model/
│   ├── README.md                      dictionary and rules
│   └── domain-model-simple.puml/.svg  entities and relations only
├── 01-requirements/
│   ├── README.md                      generated use-case index
│   ├── actors.md
│   ├── requirements.md                RF / RNF
│   └── use-cases/<name>/
│       ├── README.md                  card
│       └── specification.puml/.svg    behaviour (source of truth)
├── 02-analysis/
│   ├── README.md
│   └── class-diagram.puml/.svg
└── 05-quality/
    └── open-questions.md
```

A use case is named in camelCase (`createOrder`) and keeps that name as its
folder.

## What each folder is for

| Folder | Purpose |
| --- | --- |
| `00-domain-model` | The business concepts, their definitions and the rules that constrain them |
| `01-requirements` | Who uses the system, what it must do, and each use case as a card plus a specification |
| `02-analysis` | The first software structure: boundary, control and entity classes |
| `05-quality` | What is still unknown |

## Folders created by Pro

`03-design` and `04-implementation` do not exist in the free edition, and
`05-quality` gains the project profile, traceability table, audit and decision
records. The numbering is kept so a project can move to Pro without renaming
anything. See [The complete documentation set](../pro/documentation-set.md).

## Sources and renders

Every diagram is a `.puml` source with its `.svg` next to it. Markdown links to
the SVG with a relative path. `.rup-render-state.json` in the documentation
directory records the last render so unchanged diagrams are skipped.
