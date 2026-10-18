---
title: RUP to code
description: How rup-flow Pro generates code and tests from reviewed models, with trace links to the requirements.
edition: pro
since: "1.0"
---

# RUP to code

From reviewed models, Pro generates code and tests that follow the conventions of your
code base, with a link from each class or handler to the requirement and use case it
implements.

```text title="Prompt"
Use rup-flow-pro to implement UC-001 from the design.
```

## Preconditions

- The use cases to implement are at least `reviewed`. Drafts are listed and the agent
  asks before generating from them.
- `targetStack` is set in the configuration. If it is empty the agent asks for the
  language, framework, persistence and testing, and saves the answers.
- The output goes to `codeRoot` unless you pass another path; nothing is written outside
  the project.
- Blocking items in the open questions that affect a use case stop the generation of that
  use case.

## How a model becomes code

| Model element | Code element |
| --- | --- |
| Domain entity or design class | Type or class with the same name; attributes from the dictionary |
| Relation with multiplicity | Typed reference or collection; foreign key in persistence |
| Business rule `RN-xxx` | Validation or domain method, with one test per rule |
| Use case `UC-xxx` | One application service or handler named after the use case |
| `<<boundary>>` | Controller, route or screen |
| `<<control>>` and sequence | Application service orchestrating the steps in the sequence order |
| Repository interface | Interface in the domain or application, implementation in persistence |
| Data model table | Migration plus mapping |
| Specification states | Branches and error results of the handler |
| Wireframe fields | Request and response contract and form fields |
| Deployment | Dockerfile, compose or manifests |

A [stack pack](packs.md) that matches your configuration refines this mapping for that
stack.

## The run

1. The agent lists the files it will create or change per use case and shows the plan
   before writing when there are more than about five files.
2. It creates the types and the persistence from the design data model.
3. It implements each use case following its sequence step by step, including the
   failure paths of the specification.
4. It generates tests: one per main flow, per alternative flow and per business rule.
   Test names cite the flow or rule identifier.
5. It adds the trace link in the doc comment of each class or handler:

    ```text
    /** Creates an order. @rup UC-001 RF-001 */
    ```

    The tag is `traceTag` in the configuration, `@rup` by default.
6. It runs the build, the tests and the linters of your project and reports the results
   as they are.
7. It updates the code map and the `code` and `test` columns of the traceability table.
   An artifact that was deliberately changed in code is set to `sourceOfTruth: code`, or
   the model is fixed; they are never left divergent.

## Rules the agent follows

- The conventions already present in the code base win over generic ones.
- A decision the model does not contain stops the generation: the agent records a
  question and proposes options.
- Nothing is generated beyond the requested use cases.
- Code that could not be built or tested in the environment is reported as unverified.

## Related

[Code to RUP](code-to-rup.md) · [Sync and audit](sync-and-audit.md) ·
[Subagents](subagents.md)
