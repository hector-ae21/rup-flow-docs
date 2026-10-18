---
title: Subagents
description: The rup-architect and rup-reviewer subagents of rup-flow Pro, and what to do in agents that have no subagents.
edition: pro
since: "1.0"
---

# Subagents

For clients that support subagents, Pro includes two definitions in the `agents` folder
of the skill. They split the work so that the review is not written by the one who wrote
the documents.

| Subagent | Does | Tools |
| --- | --- | --- |
| `rup-architect` | Generates and updates the models, in any direction, and generates code from reviewed models | Read, write, edit, search and shell |
| `rup-reviewer` | Read-only audit of the documentation and its alignment with the code | Read and search only |

## `rup-architect`

It loads the Pro skill, reads the configuration, follows the workflow that matches the
request (requirements to RUP, code to RUP, RUP to code or sync), marks every statement
as confirmed, observed, assumed or open, writes only inside the documentation folder and
the code folder, renders and checks before finishing, and ends with the files changed,
the open questions, the checks it did not execute and the next step.

## `rup-reviewer`

It applies the audit and sync guides. It cannot write files or run commands, so it states
which checks it could not execute. It returns a table of findings with identifier,
severity, evidence, impact and fix, and separates format defects, consistency defects,
missing information, drift with the code and unexecuted checks. It does not rewrite
artifacts.

## Installing them

Copy the files of the skill's `agents` folder to the agents folder of your client, for
Claude Code `~/.claude/agents` or `.claude/agents` in a project. The definitions use the
common frontmatter of name, description and tools.

## Without subagents

An agent that has no subagents does the review as a separate pass after generating, following the audit guide, and
keeps that pass read-only. Nothing else changes.

## Related

[Sync and audit](sync-and-audit.md) · [RUP to code](rup-to-code.md)
