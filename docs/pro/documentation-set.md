---
title: The complete documentation set
description: Every artifact rup-flow Pro writes, discipline by discipline, and the rules that keep them consistent.
edition: pro
since: "1.0"
---

# The complete documentation set

Pro writes all six disciplines into the same numbered folders the free edition uses,
so a project moves to Pro without renaming anything. Each artifact has a front matter
that records its identifier, status, origin and source of truth; see
[Front matter and identifiers](../reference/front-matter.md).

| Discipline | Free | Pro adds |
| --- | --- | --- |
| `00-domain-model` | Simplified model, dictionary, rules | Ranked model, levels, attributes, multiplicities, entity lifecycles |
| `01-requirements` | Actors, requirements, use-case card, specification | Use-case diagrams, wireframes, navigation between cards |
| `02-analysis` | Analysis classes | Collaboration per use case, analysis card |
| `03-design` | none | Design classes, sequence per use case, data model, components, deployment, project configuration |
| `04-implementation` | none | Code map, implementation and tests card per use case |
| `05-quality` | Open questions | Project profile, traceability, audit, decision records |

## 00 Domain model

The model is organised in four horizontal bands. The higher the band, the more
central the entity is to the project objective written in the project profile.

| Level | Meaning | Test |
| --- | --- | --- |
| 1 Core | The reason the project exists | Without it the objective is not met |
| 2 Structural | Depend directly on level 1 and give it shape | Cannot exist or make sense without a level-1 entity |
| 3 Detail | Qualify, specialise or break down level 2 | Removing it loses precision, not purpose |
| 4 Support | Catalogues, audit, configuration | Replaceable without changing the business meaning |

- The README justifies the levels for the project. The same concept can be level 1 in
  one project and level 4 in another.
- Position is a reading aid: it never implies inheritance or composition.
- At most three to five entities per level; a band that grows is split into a
  sub-model with the simple model kept as the map.
- Only entities whose state changes behaviour get a lifecycle diagram, and each
  transition names the use case that causes it.

See [Domain model diagrams](diagrams-domain.md).

## 01 Requirements

- The use-case diagram groups use cases in packages inside the system boundary, with
  actors outside it; `include` and `extend` come from the cards' front matter. A
  separate diagram is drawn per actor when there are several.
- Every use case has a wireframe for each screen of its flow. Every field shown maps to
  a domain attribute or a parameter of the use case.

See [Requirements diagrams](diagrams-requirements.md) and [Use-case cards](use-case-cards.md).

## 02 Analysis

One collaboration per use case: the actor, the boundary it uses, the control that
coordinates and the entities touched, with numbered messages. Boundaries talk only to
controls, controls talk to entities and other controls, entities never call upward.

## 03 Design

Design classes and their operations, a sequence per use case with its failure path and
transaction boundary, the data model with its mapping from entities, the components with
the interfaces they provide and require, the deployment, and the project configuration
(stack, build, run, environment variables). Each non-obvious choice becomes a decision
record. The use-case design card lists the design elements that realize it, which is
what [RUP to code](rup-to-code.md) reads.

See [Analysis and design diagrams](diagrams-design.md).

## 04 Implementation

The code map lists every model element and its location. Each use case has a card with
the code and the tests that implement it.

## 05 Quality

| Artifact | Holds |
| --- | --- |
| Project profile | Objective, scope, constraints, stack, who confirms what |
| Traceability | Requirement, use case, analysis, design, code and test, one row per use case |
| Open questions | Every unknown, who asked, what it blocks |
| Audit | Findings with evidence, severity, impact and fix, and the checks not executed |
| Decision records | One `DEC-xxx` per decision and its reasons |

## Consistency rules

- The models are the single source of truth for what they describe, unless an artifact
  says `sourceOfTruth: code`.
- A change in one artifact is propagated to the dependent ones, and the traceability
  table is updated in the same change.
- Every requirement has at least one use case; every use case has at least one
  requirement.
- `check` reports gaps: a use case without realization, an empty code or test cell,
  a row missing from the traceability table.

## Example

The Pro package ships a complete example, an online shop, with every artifact above.
