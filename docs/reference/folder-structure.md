---
title: Folder structure
description: The tree each edition generates and the purpose of each folder.
---

# Folder structure

## Free edition

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

A use case is named in camelCase (`createOrder`) and keeps that name as its folder.

## Pro edition <span class="rup-pro-tag">Pro</span>

Pro writes the same tree and fills in the rest. New or fuller entries are marked.

```text
<outDir>/
├── README.md                          index of the six disciplines
├── 00-domain-model/
│   ├── README.md                      levels of importance, dictionary, rules
│   ├── domain-model.puml/.svg         ranked model, attributes, multiplicities   (Pro)
│   ├── domain-model-simple.puml/.svg
│   └── entity-states/                 lifecycle of entities                      (Pro)
├── 01-requirements/
│   ├── README.md                      use-case index and diagrams
│   ├── use-case-overview.puml/.svg    general use-case diagram                   (Pro)
│   ├── use-cases-<actor>.puml/.svg    one per actor when there are several      (Pro)
│   ├── actors.md
│   ├── requirements.md
│   └── use-cases/<name>/
│       ├── README.md
│       ├── specification.puml/.svg
│       └── wireframes.puml/.svg       interface prototype                        (Pro)
├── 02-analysis/
│   ├── README.md
│   ├── class-diagram.puml/.svg
│   └── use-cases/<name>/              analysis card and collaboration            (Pro)
├── 03-design/                                                                    (Pro)
│   ├── README.md
│   ├── class-diagram.puml/.svg
│   ├── project-configuration.md
│   ├── data-model/, components/, deployment/
│   └── use-cases/<name>/              design card and sequence
├── 04-implementation/                                                            (Pro)
│   ├── README.md
│   ├── code-map.md                    model element to code location
│   ├── code-inventory.json            from `scan --write`
│   └── use-cases/<name>/README.md     code and tests of one use case
└── 05-quality/
    ├── project-profile.md             objective, constraints, stack            (Pro)
    ├── traceability.csv               requirement to code and test              (Pro)
    ├── open-questions.md
    ├── audit.md                       findings with evidence                    (Pro)
    └── decisions/DEC-001-*.md         decision records                          (Pro)
```

The numbering is kept in both editions, so a project moves to Pro without renaming
anything. See [The complete documentation set](../pro/documentation-set.md).

## What each folder is for

| Folder | Purpose |
| --- | --- |
| `00-domain-model` | The business concepts, their definitions and the rules that constrain them |
| `01-requirements` | Who uses the system, what it must do, and each use case as a card plus a specification |
| `02-analysis` | The first software structure: boundary, control and entity classes |
| `03-design` <span class="rup-pro-tag">Pro</span> | Design classes, sequences, data model, components, deployment |
| `04-implementation` <span class="rup-pro-tag">Pro</span> | Where each model element lives in code, and its tests |
| `05-quality` | What is unknown (free); profile, traceability, audits and decisions (Pro) |

## Sources and renders

Every diagram is a `.puml` source with its `.svg` next to it. Markdown links to the
SVG with a relative path. `.rup-render-state.json` in the documentation directory
records the last render so unchanged diagrams are skipped.
