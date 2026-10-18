---
title: Packs, libraries and subagents
description: Stack packs, domain libraries and the architect and reviewer subagents included in rup-flow Pro.
---

# Packs, libraries and subagents

## Stack packs

A stack pack fixes how reviewed models become code for one stack: folder layout,
naming, error handling, persistence mapping and test patterns. The agent reads
the pack that matches your configuration before generating code, and it takes
precedence over the generic mapping.

| Pack | Stack |
| --- | --- |
| `nestjs-prisma` | TypeScript, NestJS, Prisma and Jest |

More packs follow in later releases; they are listed in the changelog.

## Domain libraries

A domain library is a starting point: a ranked domain model, actors, a list of
use cases, entity lifecycles and the questions to ask before using it. Everything
in a library is marked *assumed*; the agent adapts it to your objective and never
presents it as your requirements.

| Library | Domain |
| --- | --- |
| `lms` | Learning platforms: courses, enrolment, activities, grading, completion |

## Subagents

For clients that support subagents (Claude Code does), Pro includes two:

| Subagent | Does |
| --- | --- |
| `rup-architect` | Generates and updates the models and generates code from reviewed models |
| `rup-reviewer` | Read-only auditor of the documentation and its alignment with the code |

They run independently, so the review is not written by the one who wrote the
documents. Without subagents, the review runs as a separate pass.
