---
title: The complete documentation set
description: The artifacts rup-flow Pro adds to the free edition, discipline by discipline.
---

# The complete documentation set

Pro writes all six disciplines into the same numbered folders the free edition
uses, so a project moves to Pro without renaming anything.

| Discipline | Free | Pro adds |
| --- | --- | --- |
| `00-domain-model` | Simplified model, dictionary, rules | The model ranked by importance with attributes and multiplicities, and the lifecycle of entities whose state changes behaviour |
| `01-requirements` | Actors, requirements, use-case card, specification | Use-case diagrams, general and per actor, with packages, include and extend; wireframes for every screen |
| `02-analysis` | Analysis classes | One collaboration per use case and its analysis card |
| `03-design` | — | Design classes, sequence per use case, data model, components, deployment, project configuration |
| `04-implementation` | — | Code map and one implementation and tests card per use case |
| `05-quality` | Open questions | Project profile, traceability table, audit report and decision records |

## One card per discipline

Every use case has a card in requirements, analysis, design and implementation.
All four start with the same navigation table, so you move between disciplines
without hunting for files.

## Traceability

Each requirement, use case, analysis, design, code location and test sits in one
table. Empty cells are gaps that `check` reports.

## Consistency

Pro treats the models as the single source of truth for what they describe. A
change in one artifact is propagated to the dependent ones, and the table is
updated in the same change.

## Example

The repository ships a complete example project, an online shop, with every
artifact above. See [Free and Pro compared](compare.md) for the full catalogue.
