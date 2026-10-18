---
title: How rup-flow works
description: The parts of rup-flow and what each one is responsible for.
---

# How rup-flow works

```text
you ──► agent ──► SKILL.md + references ──► documents (Markdown)
                      │
                      └──► CLI (rup.mjs) ──► PlantUML server ──► SVG diagrams
```

## The skill

`SKILL.md` holds the operating rules and tells the agent which reference to read
for each request. The references (`methodology`, `domain-model`, `use-cases`,
`diagram-conventions`, `structure`) are loaded on demand so the agent spends its
attention on your project, not on boilerplate.

The skill is written once in the open
[Agent Skills](https://agentskills.io/specification) format and adapted per
client by small adapters (plugin manifest, installer, instruction files).

## The CLI

A dependency-free Node.js program does the mechanical work:

| It does | Command |
| --- | --- |
| Creates the structure and the configuration | `init`, `new use-case` |
| Keeps the use-case index in sync with the cards | `index` |
| Draws `.puml` sources into `.svg` | `render` |
| Verifies structure, links and diagrams | `check` |
| Writes the block that agents without skills read | `instructions` |

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

The same CLI runs both editions. rup-flow Pro adds an extension that the CLI
loads when it is present; without it, the CLI is the free edition. Read
[Editions and the extension point](../architecture/editions.md).
