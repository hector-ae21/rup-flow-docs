---
title: Install rup-flow
description: Install the free rup-flow skill in Claude Code, Claude on the web, or any agent that reads Agent Skills.
---

# Install rup-flow

Pick the client you use. All of them install the same skill.

## Check the runtime

```console
node --version
```

The skill needs Node.js 18 or newer. Docker is only needed to draw diagrams
(see [Render and check diagrams](../guides/render-and-check.md)).

## Choose your client

=== "Claude Code"

    Add the marketplace and install the plugin:

    ```console
    claude plugin marketplace add hector-ae21/rup-flow
    claude plugin install rup-flow@rup-flow
    ```

    Then say "Use rup-flow to ..." or run `/rup-flow:rup-flow`.

=== "Claude on the web"

    1. Download `rup-flow-skill.zip` from the
       [latest release](https://github.com/hector-ae21/rup-flow/releases/latest).
    2. In **Customize → Skills**, upload the ZIP.

    The web sandbox cannot reach a PlantUML server on your machine, so diagrams
    stay as `.puml` sources there; render them locally later.

=== "Codex, Gemini CLI and others"

    ```console
    git clone https://github.com/hector-ae21/rup-flow
    cd rup-flow
    node install.mjs --target agents
    ```

    The skill lands in `.agents/skills/rup-flow` under your home folder. Use
    `--project <dir>` to install it for one project only.

## Verify the installation

Ask the agent to run the CLI, or run it yourself from the skill folder:

```console
node scripts/rup.mjs editions
```

The first line says `this installation: free`. The list below it shows what
the free edition includes and what is part of Pro.

## Other agents

Cursor and GitHub Copilot read instruction files instead of skills. The
`instructions` command writes the block they need; see
[Use another agent](../guides/other-agents.md).
