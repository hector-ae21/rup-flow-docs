---
title: Get started
description: Install rup-flow, document a first system and understand how the skill, the CLI and your agent work together.
---

# Get started

rup-flow is a skill: a folder of instructions and a small command line that your
AI coding agent loads on demand. You talk to the agent; the agent follows the
skill and runs the CLI.

<div class="rup-callout" markdown>

**What you need:** Node.js 18 or newer and an agent that reads the Agent Skills
format. Docker is optional and only draws the diagrams.

</div>

## Journey

<div class="rup-grid rup-grid--journey" markdown>

<div class="rup-card rup-card--linked rup-step" markdown>

<span class="rup-step-number">01 · Install</span>

### Install rup-flow

Claude Code, Claude on the web, or any client that reads `.agents/skills`.

[Choose your client](installation.md)

</div>

<div class="rup-card rup-card--linked rup-step" markdown>

<span class="rup-step-number">02 · Document</span>

### Document your first system

One prompt, a folder of documents and diagrams, and a check.

[Run the first prompt](first-documentation.md)

</div>

<div class="rup-card rup-card--linked rup-step" markdown>

<span class="rup-step-number">03 · Understand</span>

### See how it works

The skill, the CLI, the PlantUML server and what each one is responsible for.

[Read how it works](how-it-works.md)

</div>

</div>

## What the free edition produces

| Discipline | Folder | You get |
| --- | --- | --- |
| Domain model | `00-domain-model` | Simplified diagram, entity dictionary, business rules |
| Requirements | `01-requirements` | Actors, requirements catalogue, use-case cards with a specification statechart |
| Analysis | `02-analysis` | Analysis classes (boundary, control, entity) |
| Quality | `05-quality` | Open questions |

Design, implementation, traceability, audits and code are part of
[rup-flow Pro](../pro/index.md).
