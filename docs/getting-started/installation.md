---
title: Install rup-flow
description: Install the rup-flow skill, free or Pro, for Claude, Codex, Gemini and any other agent.
---

# Install rup-flow

Both editions are one folder, `rup-flow` (free) or `rup-flow-pro` (Pro), that you
place where your agent looks for skills. They are the same skill: install one of
them in a given place, not both.

## Check the runtime

```console
node --version
```

The skill needs Node.js 18 or newer. Docker is only needed to draw diagrams (see
[Render and check diagrams](../guides/render-and-check.md)).

## Get the package

| Edition | File | Where it comes from |
| --- | --- | --- |
| <span class="rup-free-tag">Free</span> | `rup-flow-free-<version>.zip` | The marketplace listing of rup-flow (free) |
| <span class="rup-pro-tag">Pro</span> | `rup-flow-pro-<version>.zip` | The marketplace listing of rup-flow Pro, see [Get Pro](../pro/get-pro.md) |

The version is part of the file name. After installing, `rup.mjs version` prints
it.

## Put it where your agent looks

Unzip so that the folder lands inside the skills folder of your agent.

=== "Claude Code"

    ```console
    unzip rup-flow-free-1.0.1.zip -d ~/.claude/skills
    ```

    Use `.claude/skills` inside a project to install it for that project only. Then
    say "Use rup-flow to ..." or run `/rup-flow`.

=== "Claude on the web"

    In **Customize → Skills**, upload the ZIP. The web sandbox cannot reach a
    PlantUML server on your machine, so diagrams stay as `.puml` sources there;
    render them locally later.

=== "Codex, Gemini CLI and others"

    ```console
    unzip rup-flow-free-1.0.1.zip -d ~/.agents/skills
    ```

    Clients that read `.agents/skills` pick it up. Say "Use rup-flow to ...".

=== "Any other folder"

    Every client lists its own skills folder in its documentation. Unzip there:

    ```console
    unzip rup-flow-free-1.0.1.zip -d <skills folder of your client>
    ```

On Windows, use the file manager or `Expand-Archive`:

```console
Expand-Archive rup-flow-free-1.0.1.zip -DestinationPath $HOME\.claude\skills
```

## Agents that read an instruction file

Cursor, GitHub Copilot, Windsurf, Cline and many others do not load skills; they
read an instruction file. After unzipping the skill somewhere in the project, write
the file the agent reads:

```console
node .agents/skills/rup-flow/scripts/rup.mjs instructions --target cursor
```

See [Compatible agents](compatible-agents.md) for every target.

## Verify the installation

```console
node <skills folder>/rup-flow/scripts/rup.mjs version
node <skills folder>/rup-flow/scripts/rup.mjs editions
```

`version` prints `rup-flow free 1.0.1` or `rup-flow Pro 1.0.1 (built on rup-flow
free 1.0.1)`. `editions` lists what the installation includes; the first line says
`free` or `Pro`.

## Update

Unzip the new package over the old folder, or replace the folder. Your
documentation and `rup.config.json` live in your project and are not touched. See
[Update rup-flow](../releases/updating.md).
