---
title: Get Pro
description: Where to get rup-flow Pro and what you receive.
---

# Get Pro

## What you receive

- The `rup-flow-pro` skill, as a ZIP and ready for the clients that read Agent
  Skills.
- Every update published while your license is active.
- The stack packs, domain libraries and subagents of the release.

## Where

rup-flow Pro is listed on [Agensi](https://www.agensi.io), the marketplace for
agent skills. Search for `rup-flow-pro` and follow the listing, which shows the
current price and the latest version.

## Install it

The package installs like any skill:

=== "Claude Code"

    Unzip `rup-flow-pro` into `~/.claude/skills/` (or `.claude/skills/` in a
    project) and copy the files in its `agents/` folder to `~/.claude/agents/`.
    Then say "Use rup-flow-pro to ...".

=== "Claude on the web"

    Upload `rup-flow-pro-skill.zip` in **Customize → Skills**.

=== "Codex, Gemini CLI and others"

    Unzip `rup-flow-pro` into `~/.agents/skills/`.

Install either the free skill or Pro in a given place, not both: they are the
same skill and the Pro one replaces the free one.

## Verify

```console
node scripts/rup.mjs editions
```

The first line says `this installation: Pro`, and no item is marked as missing.

## Updating

Install the new package over the old one. Your documentation and your
configuration are not touched. Read the changelog first.
