---
title: Use another agent
description: Use rup-flow with Codex, Gemini CLI, Cursor, GitHub Copilot and other clients.
---

# Use another agent

## Clients that read Agent Skills

Codex, Gemini CLI and other clients that read `.agents/skills` use the skill as
it is:

```console
git clone https://github.com/hector-ae21/rup-flow
cd rup-flow
node install.mjs --target agents
```

Use `--project <dir>` to install into one project, `--force` to replace an
existing install (a backup is kept) and `--list` to see the targets.

## Clients that read instruction files

Cursor and GitHub Copilot read instruction files. The `instructions` command
adds or refreshes a delimited block in the file each client loads, without
touching the rest of it:

```console
node scripts/rup.mjs instructions --target agents,claude,gemini,copilot,cursor --root .
```

| Target | File |
| --- | --- |
| `agents` | `AGENTS.md` (Codex, Cursor, Copilot agent, Gemini CLI, Zed, Jules and others) |
| `claude` | `CLAUDE.md` |
| `gemini` | `GEMINI.md` |
| `copilot` | `.github/copilot-instructions.md` |
| `cursor` | `.cursor/rules/rup-flow.mdc` |

Running it again replaces the block between its markers and never duplicates it.
Use `--skill-path <dir>` when the skill is installed somewhere else.

## Tested clients

Claude Code, Claude on the web, Codex and Gemini CLI are tested. Cursor and
Copilot are supported through instruction files.
