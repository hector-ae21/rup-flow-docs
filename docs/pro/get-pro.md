---
title: Get Pro
description: Where to get rup-flow Pro, what you receive and how to install and update it.
edition: pro
since: "1.0"
---

# Get Pro

## What you receive

- The `rup-flow-pro-<version>.zip` package: the Pro skill, ready for the agents that read
  Agent Skills and for the ones that read an instruction file.
- Every update published while your license is active.
- The stack packs, domain libraries and subagent definitions of the release.
- The complete example project.

## Where

rup-flow Pro is listed on [Agensi](https://www.agensi.io), the marketplace for agent
skills. Search for `rup-flow` and open the Pro listing, which shows the current price and
the latest version.

## Install it

Unzip so that the `rup-flow-pro` folder lands in the skills folder of your agent, the same
way as the free edition ([installation](../getting-started/installation.md)):

=== "Claude Code"

    ```console
    unzip rup-flow-pro-1.0.0.zip -d ~/.claude/skills
    ```

    Copy the files of `rup-flow-pro/agents` to `~/.claude/agents` to enable the
    [subagents](subagents.md). Then say "Use rup-flow-pro to ...".

=== "Claude on the web"

    Upload the ZIP in **Customize → Skills**.

=== "Codex, Gemini CLI and others"

    ```console
    unzip rup-flow-pro-1.0.0.zip -d ~/.agents/skills
    ```

=== "Instruction-file agents"

    Unzip the skill into the project, then write the file your agent reads:

    ```console
    node .agents/skills/rup-flow-pro/scripts/rup.mjs instructions --target cursor
    ```

Install the free skill or Pro in a given place, not both: Pro replaces the free skill,
and contains it.

## Verify

```console
node <skills folder>/rup-flow-pro/scripts/rup.mjs version
node <skills folder>/rup-flow-pro/scripts/rup.mjs editions
```

`version` prints the Pro version and the free version it contains. `editions` says
`this installation: Pro` and marks nothing as missing.

## Update

Unzip the new package over the old folder. Your documentation and configuration are not
touched. Read the [Pro changelog](versions.md) first.
