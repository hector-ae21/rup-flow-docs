---
title: Command line
description: Every command and flag of the free rup-flow CLI.
---

# Command line

Run the CLI from the project root. `RUP` below stands for
`node <skill-dir>/scripts/rup.mjs`, where `<skill-dir>` is the folder that
contains `SKILL.md`.

```console
RUP <command> [arguments] [flags]
```

## Commands

| Command | Effect |
| --- | --- |
| `init` | Create `rup.config.json` and the documentation skeleton. Never overwrites a file. |
| `new use-case <camelName>` | Scaffold the requirements card and the specification diagram of a use case, then refresh the index. |
| `index` | Regenerate the use-case index table from the cards. |
| `render` | Draw every `.puml` source into a `.svg` through the PlantUML server. |
| `check` | Verify structure, links and diagrams. |
| `editions` | Print what the free edition includes and what is part of Pro. |
| `instructions --target <t>` | Add or refresh the rup-flow block in an agent instruction file. |
| `server up` / `server down` | Start or stop the PlantUML container. |
| `health` | Verify that the PlantUML server renders. |
| `config` | Print the resolved configuration. |

Without a command the CLI prints its usage.

## Common flags

| Flag | Meaning |
| --- | --- |
| `--root <dir>` | Project root. Defaults to the current directory. |
| `--out <dir>` | Documentation directory, relative to the root (overrides `outDir`). |
| `--lang <code>` | Language of the documents (overrides `docLanguage`). |
| `--project <name>` | Project name used in titles. |
| `--plantuml-url <url>` | Address of the PlantUML server. |
| `--force` | Redraw diagrams that are up to date. |

## `init`

```console
RUP init --out docs/rup --lang es --project shop
```

Creates the configuration and the free skeleton. Files that exist are skipped.
The report lists what was created and how many artifacts are available in Pro.

## `new use-case`

```console
RUP new use-case createOrder --title "Create order" --actor Customer --package Ordering --goal "Place an order"
```

| Flag | Meaning |
| --- | --- |
| `--title <text>` | Title of the card. Defaults to the name. |
| `--actor <names>` | Actors, comma separated. Defaults to `Actor`. |
| `--package <name>` | Package. Defaults to `General`. |
| `--goal <text>` | The goal in one sentence. |
| `--requirement <id>` | Requirement identifier. Defaults to `RF-001`. |
| `--includes <names>`, `--extends <names>` | Names of related use cases. |
| `--id <UC-xxx>` | Force the identifier instead of the next free one. |

The name must be camelCase made of letters and digits. The command fails otherwise.

## `render`

```console
RUP render --path docs/rup/00-domain-model --force
```

| Flag | Meaning |
| --- | --- |
| `--path <dir>` | Render only this directory. |
| `--force` | Redraw everything. |

Exit code is `1` when any diagram fails.

## `check`

`--strict` makes warnings fail the command. Without it, only errors do.

## `instructions`

```console
RUP instructions --target agents,claude,gemini,copilot,cursor
```

Without `--target` it lists the targets. `--skill-path <dir>` sets where the
block says the skill lives.

## `server`

Needs Docker with Compose. The port comes from `plantuml.url`.

## Exit codes

| Code | Meaning |
| --- | --- |
| `0` | Done. |
| `1` | A check failed, a render failed, or the command stopped (invalid input, missing server, a capability that is part of Pro). |

## Capabilities that are part of Pro

These flags and commands stop with a message that names Pro and its address:
`themes`, `explore`, `scan`, `--theme`, `--font`, `--font-size`, `--color-*`,
`--preview-png`, `--outputs` with `png` or `html`, and `--diagram-language
mermaid`. See [Free and Pro compared](../pro/compare.md).
