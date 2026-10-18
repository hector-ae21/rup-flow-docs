---
title: Sync and audit
description: Drift detection between documentation and code, and the read-only audit of the documentation in rup-flow Pro.
edition: pro
since: "1.0"
---

# Sync and audit

## Drift detection

Use it when documentation and code both exist and either may have moved. For every row
of the traceability table and the code map, the agent checks:

1. The cited code location exists.
2. The entity attributes, relations and constraints in code match the dictionary and the
   data model.
3. The handler of the use case follows the branches of the specification and the order of
   the sequence.
4. The business rules are present, and tested.
5. There is no code behaviour (endpoints, jobs, events) without a use case.

Each difference is classified:

| Kind | Meaning | Default resolution |
| --- | --- | --- |
| Model ahead | The model says something the code lacks | Implement it, when the model is the source of truth |
| Code ahead | The code does something the model lacks | Document it, when the code is the source of truth, otherwise ask |
| Conflict | Both exist and disagree | Ask which is right and record a decision |
| Dead | Code or a model element nobody uses | Report it; nothing is deleted without approval |

`sourceOfTruth` decides the default direction and a conflict is never resolved silently.
After resolving, both sides and the traceability row change in the same change, and each
resolved conflict becomes a decision record. The output of a run is a table of
differences with evidence and then the chosen action, never a rewrite of everything.

## Audit

A review of the documentation and its alignment with the code. It is read-only unless you
ask for fixes.

| Dimension | Looks for |
| --- | --- |
| Completeness | Requirements without a use case, use cases without a requirement, realization, wireframes or specification |
| Consistency | Names, attributes and rules that differ between domain, use cases, analysis, design and data model |
| Domain hierarchy | Levels without justification, everything at level 1, relations that contradict the levels |
| Behaviour | Flows without failure paths, preconditions not checked, unreachable states |
| Traceability | Empty cells, reused identifiers, code-map locations that do not exist |
| Non-functional | Requirements without a measure, missing security or permission rules |
| Diagrams | Missing SVG, syntax errors, crossing lines, unreadable labels, too many elements |
| Provenance | Assumptions written as facts, rules without a source |
| Drift | Differences with the code |

### Findings

```text
| ID | Severity | Finding | Evidence | Impact | Fix | Status |
```

Severity is **blocker** (the artifact cannot be trusted or built), **major** (wrong or
missing content) or **minor** (style, clarity). Evidence is a file path and the quoted
element; there is no finding without evidence.

### What the audit never claims

It never states that the project is "complete RUP", that the UML is semantically
correct or that a diagram is clean unless it was inspected. It states what was checked
and how, and lists the checks that were not executed, for example the visual inspection
of the rendered images.

## Related

[Subagents](subagents.md) · [Code to RUP](code-to-rup.md) ·
[Decision records](documentation-set.md)
