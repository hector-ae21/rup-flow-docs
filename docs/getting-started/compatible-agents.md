---
title: Compatible agents
description: How rup-flow reaches Claude, Codex, Gemini, Cursor, Copilot, Windsurf, Cline and any other coding agent.
---

# Compatible agents

rup-flow does not depend on one agent. It reaches them in three ways.

<div class="rup-diagram" role="region" aria-label="Scrollable UML diagram of how each kind of agent reaches the CLI" tabindex="0" markdown>

![Agents that read Agent Skills load the skill folder; agents that read an instruction file read a block that points to it; any other agent with a shell uses the portable file](../assets/diagrams/light/agent-compatibility.svg#only-light)
![Agents that read Agent Skills load the skill folder; agents that read an instruction file read a block that points to it; any other agent with a shell uses the portable file](../assets/diagrams/dark/agent-compatibility.svg#only-dark)

</div>

## 1. The agent reads Agent Skills

The skill follows the open [Agent Skills](https://agentskills.io/specification)
format. A client that reads it loads `SKILL.md` and the references on demand. Put
the folder where the client looks for skills ([installation](installation.md)).

## 2. The agent reads an instruction file

Tools that read a rules file get a small block that points them at the skill. The
`instructions` command writes it, replaces it between its markers when you run it
again and never touches the rest of the file:

```console
node scripts/rup.mjs instructions --target cursor,windsurf --root .
```

| Target | File it writes | Agents and editors |
| --- | --- | --- |
| `agents` | `AGENTS.md` | Codex, Cursor, Copilot agent, Gemini CLI, opencode, Zed, Jules and others |
| `claude` | `CLAUDE.md` | Claude Code |
| `gemini` | `GEMINI.md` | Gemini CLI |
| `copilot` | `.github/copilot-instructions.md` | GitHub Copilot |
| `cursor` | `.cursor/rules/rup-flow.mdc` | Cursor |
| `windsurf` | `.windsurf/rules/rup-flow.md` | Windsurf |
| `cline` | `.clinerules/rup-flow.md` | Cline |
| `roo` | `.roo/rules/rup-flow.md` | Roo Code |
| `kilo` | `.kilocode/rules/rup-flow.md` | Kilo Code |
| `continue` | `.continue/rules/rup-flow.md` | Continue |
| `junie` | `.junie/guidelines.md` | JetBrains Junie |
| `amazonq` | `.amazonq/rules/rup-flow.md` | Amazon Q Developer |
| `zed` | `.rules` | Zed |
| `aider` | `CONVENTIONS.md` | Aider, loaded with `--read CONVENTIONS.md` |
| `portable` | `RUP-FLOW.md` | Any other agent |

The locations follow each tool's documented convention at the time of writing. If a
tool changed its folder, write the `portable` file and point the tool at it, or use
`--skill-path` to say where the skill lives.

## 3. Any other agent with a shell

An agent that can read a file and run a command can use rup-flow. Write the
portable file, tell the agent to read it, and it follows the same rules and runs the
same CLI:

```console
node scripts/rup.mjs instructions --target portable --root .
```

```text title="Prompt"
Read RUP-FLOW.md and use rup-flow to document this system in docs/rup.
```

## What every agent must be able to do

| Capability | Why |
| --- | --- |
| Read files and the skill folder | The rules and references are plain Markdown |
| Run `node` | The CLI is a Node.js program |
| Write files | The documents are Markdown and PlantUML |

An agent that cannot run commands can still write the documents by following the
references, but it cannot render or check them; it must say so.
