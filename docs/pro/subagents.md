---
title: Subagents
description: The five subagents of rup-flow Pro, which model each one uses, and what to do in agents that have no subagents.
edition: pro
since: "1.0"
---

# Subagents

For clients that support subagents, Pro includes five definitions in the `agents` folder
of the skill. They split the work so that the review is not written by the one who wrote
the documents or the code, and so that each one reads only what its job needs.

| Subagent | Does | Writes | Model |
| --- | --- | --- | --- |
| `rup-scanner` | Inventory of an existing code base with `path:line` evidence, before documenting it | No | `haiku` (cheap and fast) |
| `rup-architect` | Generates and updates the models and diagrams, in any direction | Documentation | Inherited |
| `rup-coder` | Generates code and tests from reviewed models with the stack pack and ORM guide | Code | Inherited |
| `rup-reviewer` | Read-only audit of the documentation and its alignment with the code | No | Inherited |
| `rup-security-reviewer` | Read-only security review of the code against the secure coding rules | No | Inherited |

`rup-scanner`, `rup-coder` and `rup-security-reviewer` arrived in Pro 1.1, when code
generation moved from `rup-architect` to `rup-coder`.

## `rup-scanner`

It runs `scan` and completes the inventory with searches, reading excerpts and not whole
files: modules, entities, routes, validations that look like rules, enumerations that look
like states, and tests. Every item carries `path:line`, and it marks nothing as a
requirement. It runs on a cheaper model because collecting evidence needs no design
judgement.

## `rup-architect`

It loads the Pro skill, reads the configuration, follows the workflow that matches the
request, starts code-to-RUP work from the scanner's inventory, offers a matching domain
library, marks every statement as confirmed, observed, assumed or open, writes only inside
the documentation folder, renders and checks before finishing, and ends with the files
changed, the open questions, the checks it did not execute and the next step.

## `rup-coder`

It reads the configuration, then `CATALOG.md`, then only the pack and guide that match the
stack. It reads only the cards and diagrams of the requested use cases, applies the
[modular design and secure coding](secure-coding.md) rules, shows its plan before touching
more than five files, runs the pack's checks, and updates the code map and the traceability
table. A decision the models do not contain becomes an open question.

## `rup-reviewer`

It applies the audit and sync guides. It returns a table of findings with identifier,
severity, evidence, impact and fix, separating format defects, consistency defects,
missing information, drift with the code and unexecuted checks.

## `rup-security-reviewer`

For each use case in scope it checks the actors allowed against the authorisation in code,
ownership checks, input validation, raw queries and mass assignment, what responses and
errors expose, credentials in source, module boundaries and the negative tests. Each finding
has a severity, an OWASP category and evidence with `path:line`. It cannot run commands, so
dependency audits and tests are reported as not verified.

## Installing them

Copy the files of the skill's `agents` folder to the agents folder of your client, for
Claude Code `~/.claude/agents` or `.claude/agents` in a project. The definitions use the
common frontmatter of name, description, tools and model.

## Without subagents

An agent that has no subagents runs the same steps in order, and does each review as a
separate read-only pass after generating. Nothing else changes.

## Related

[Sync and audit](sync-and-audit.md) · [RUP to code](rup-to-code.md) ·
[Stack packs and ORM guides](packs.md)
