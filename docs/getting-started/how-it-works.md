---
title: How rup-flow works
description: The parts of rup-flow and what each one is responsible for.
---

# How rup-flow works

<div class="rup-diagram" role="region" aria-label="Scrollable UML diagram of the person, the agent, the skill, the project files and the PlantUML server" tabindex="0" markdown>

![The person asks an agent; the agent reads the skill, runs the CLI and writes the project files; the CLI draws diagrams through a local PlantUML server](../assets/diagrams/light/system-context.svg#only-light)
![The person asks an agent; the agent reads the skill, runs the CLI and writes the project files; the CLI draws diagrams through a local PlantUML server](../assets/diagrams/dark/system-context.svg#only-dark)

</div>

## The skill

`SKILL.md` holds the operating rules and tells the agent which reference to read
for each request. The references (`methodology`, `domain-model`, `use-cases`,
`diagram-conventions`, `structure`) are loaded on demand so the agent spends its
attention on your project, not on boilerplate.

The skill is written once in the open
[Agent Skills](https://agentskills.io/specification) format. Agents that do not read
that format read a small instruction file instead; see
[Compatible agents](compatible-agents.md).

## The CLI

A dependency-free Node.js program does the mechanical work:

| It does | Command |
| --- | --- |
| Creates the structure and the configuration | `init`, `new use-case` |
| Keeps the use-case index in sync with the cards | `index` |
| Draws `.puml` sources into `.svg` | `render` |
| Verifies structure, links and diagrams | `check` |
| Writes the block that agents without skills read | `instructions` |
| Tells what is installed | `version`, `editions` |

## The operating rules

1. Read the configuration first.
2. Mark every statement as confirmed, assumed or open.
3. Never invent permissions, rules, states or attributes.
4. Write where the configuration says.
5. Do not claim a diagram is rendered or checked unless it was.
6. Write documents in your language; keep identifiers in English.
7. Keep one source of truth per artifact.

See [Provenance marks](../reference/provenance.md) and the
[architecture](../architecture/index.md).

## Editions

The same CLI runs both editions. rup-flow Pro adds an extension that the CLI loads
when it is present; without it, the CLI is the free edition and says so when you ask
for something outside it. Read [Editions and the extension point](../architecture/editions.md).
