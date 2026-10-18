---
title: Code in both directions
description: What rup-flow Pro does with code - reverse engineering, generation, drift detection and audits.
---

# Code in both directions

## Code to RUP

Point the agent at a code base and ask for its documentation. Pro inventories the
code, reads the parts that matter and writes the same documentation set, with each
claim marked *observed* and cited as `path:line`. Business rules it cannot read in
the code become questions, not invented requirements.

## RUP to code

From reviewed models, Pro generates code and tests that follow the conventions of
your code base, with a trace link from each class or handler to the requirement
and use case it implements. Open questions that affect a use case stop its
generation, and nothing outside the requested use cases is written.

The agent runs the build, the tests and the linters of your project and reports
the result as it is. Whatever it could not run is reported as unverified.

## Drift detection

When code and documentation both exist and may disagree, Pro produces a table of
differences:

| Kind | Meaning |
| --- | --- |
| Model ahead | The documentation describes something the code does not do yet |
| Code ahead | The code does something the documentation does not mention |
| Conflict | Both exist and disagree |
| Dead | An element that nothing refers to |

## Audit

A read-only review of the documentation and its alignment with the code, with
findings that carry evidence, severity, impact and a proposed fix. The review
states which checks it could not execute.

## Honest limits

Generated code is only as good as the reviewed models and your tests. The audit
validates structure, links and traceability gaps; it does not prove that UML is
semantically correct.
