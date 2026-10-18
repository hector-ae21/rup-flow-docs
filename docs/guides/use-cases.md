---
title: Add and change use cases
description: Scaffold use-case cards, keep the index generated, and keep cards and specifications consistent.
---

# Add and change use cases

## Add one

Ask the agent: "Add the use case cancelOrder for the Customer", or run:

```console
node scripts/rup.mjs new use-case cancelOrder --title "Cancel order" --actor Customer --package Ordering --goal "Cancel an order that has not shipped" --root .
```

The command creates the card and the specification diagram, assigns the next
`UC-xxx` identifier and refreshes the index. Names are camelCase: verb plus
object.

| Flag | Meaning |
| --- | --- |
| `--title` | Human title of the card |
| `--actor` | One or several actors, comma separated |
| `--package` | Group of related use cases |
| `--goal` | The user goal in one sentence |
| `--requirement` | Requirement identifier, `RF-001` by default |
| `--includes`, `--extends` | Names of related use cases |

## Keep the index fresh

The requirements `README.md` holds a generated table between the markers
`rup-flow:use-cases`. After editing the front matter of a card, run:

```console
node scripts/rup.mjs index --root .
```

Never edit the block by hand: `check` warns when it is stale.

## Write a good card

- One user goal per use case, achievable in one sitting by one primary actor.
- Flows are tables with Actor and System columns; one step is one interaction.
- Every alternative flow names the step where it starts, its condition and where
  it ends.
- Postconditions are split into success and failure.
- Anything you did not state goes to **Pending** with the question.

## Keep card and specification together

The specification is a statechart of the Actor/System conversation. Error and
cancel paths are explicit transitions. See
[Use-case specification](../diagrams/specification.md).
