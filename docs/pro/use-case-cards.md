---
title: Use-case cards
description: The four cards of a use case in rup-flow Pro and how they link to each other.
edition: pro
since: "1.0"
---

# Use-case cards

In the free edition a use case has one card, the requirements card. In Pro it has one
card per discipline, so the story of a use case can be followed from the requirement to
the test.

| Card | Folder | Holds |
| --- | --- | --- |
| Requirements | `01-requirements/use-cases/<name>` | Actor, goal, flows, rules, specification, wireframes |
| Analysis | `02-analysis/use-cases/<name>` | Participating classes with one responsibility each, collaboration |
| Design | `03-design/use-cases/<name>` | The elements that realize it, sequence, failure path |
| Implementation | `04-implementation/use-cases/<name>` | Code locations, tests table |

`RUP new use-case <name>` creates all four, assigns the next identifier, adds the row to
the traceability table and refreshes the index.

## One navigation table

Every card of a use case starts with the same table, so you move between disciplines
without hunting for files:

```text
| Overview | Requirements | Analysis | Design | Implementation | Tests |
```

The current discipline is bold, the others are links, Overview opens the general
use-case diagram and Tests opens the tests table of the implementation card. The table
is generated; do not retype it.

## The index

The requirements README holds, between `rup-flow:use-cases` markers, a generated table
with the identifier, use case, actors, package, requirement, links to the three
realization cards and the status. Below it are the use-case diagrams: one general
diagram, and one per actor when there are several. `RUP index` regenerates all of it
after a card's front matter changes, and `check` warns when it is stale.

## Front matter that drives the diagrams

| Key | Effect |
| --- | --- |
| `actor` | Comma separated; each actor is drawn outside the system boundary |
| `package` | Groups related use cases inside the boundary |
| `includes`, `extends` | Drawn as `<<include>>` and `<<extend>>` relations |

An actor is linked only to the use cases that no other use case of that actor includes,
as is usual in use-case diagrams.

## Checklist before marking `reviewed`

- The main flow reaches the goal and each step has a system response.
- Failure and alternative paths exist for each input and precondition.
- Entities, attributes and rules referenced exist in the domain model.
- The wireframes cover the fields of the flow.
- The row exists in the traceability table.
