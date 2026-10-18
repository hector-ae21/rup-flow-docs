---
title: Code to RUP
description: How rup-flow Pro documents an existing code base, with every claim backed by a location in the code.
edition: pro
since: "1.0"
---

# Code to RUP

Point the agent at a code base and ask for its documentation. Pro writes the same
documentation set as for a new system, but every statement describes what the code
**does**, marked *observed* and cited as `path:line`. The artifacts carry
`origin: code` and `sourceOfTruth: code`.

```text title="Prompt"
Use rup-flow-pro to reverse engineer src/ into docs/rup, in English.
```

## The procedure

1. **Inventory.** `RUP scan --code-root <dir> --write` lists the manifests, entry points,
   entities, services, persistence, contracts and tests, so the agent starts from facts.
2. **Stack and architecture.** Identified from manifests and folder layout and recorded in
   the project configuration document.
3. **Domain model.** Persistence first (schema, migrations, ORM models), then entity
   classes. One entity per business concept, not per table: join and technical tables are
   support entities or omitted with a note.
4. **Levels.** The agent asks for the project objective, or infers it from the README and
   the entry points and marks it *assumed*, then assigns the levels.
5. **Use cases.** Derived from the entry points: each route, command handler, job, message
   consumer or CLI command that achieves a user goal. Technical endpoints that serve one
   goal become one use case.
6. **Specification.** The agent follows the code path of each use case: validation,
   branching, errors, side effects. The statechart shows only behaviour found in code. A
   branch that cannot be understood is an open question, not a guess.
7. **Analysis and design.** Classes, sequences, data model and deployment are drawn from
   the real call graph, the configuration and the deployment files (Dockerfile, compose,
   CI, infrastructure as code).
8. **Code map and traceability.** Every model element gets its location; the `code`
   column of the traceability table is filled.
9. **Tests.** Existing tests fill the `test` column; use cases without tests are gaps.
10. **Render, check, review.**

## Rules the agent follows

- It writes behaviour, not intent. Intent that the code does not reveal, such as why a
  rule exists, is a question.
- Dead code, TODOs and inconsistent behaviour are findings in the audit, not silent fixes
  in the model.
- It cites `path:line` instead of pasting code.
- It reads files fully before describing them; it never describes from names alone.
- On large code bases it works module by module and keeps a coverage list of what was and
  was not read.

## What you get at the end

The files created, the entities and use cases found, the parts not covered and the open
questions. Statements it could not support are never presented as facts.

## Related

[Sync and audit](sync-and-audit.md) · [RUP to code](rup-to-code.md) ·
[Provenance marks](../reference/provenance.md)
