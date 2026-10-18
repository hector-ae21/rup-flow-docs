---
title: Command line
description: Every command and flag of the rup-flow CLI, free and Pro.
---

# Command line

Run the CLI from the project root. `RUP` below stands for
`node <skill-dir>/scripts/rup.mjs`, where `<skill-dir>` is the folder that contains
`SKILL.md`.

```console
RUP <command> [arguments] [flags]
```

Commands and flags marked <span class="rup-pro-tag">Pro</span> exist only in the Pro
edition. In the free edition they stop with a message that names Pro and exit with
code `1`.

## Commands

| Command | Edition | Effect |
| --- | --- | --- |
| `init` | <span class="rup-free-tag">Free</span> | Create `rup.config.json` and the documentation skeleton. Never overwrites a file. |
| `new use-case <camelName>` | <span class="rup-free-tag">Free</span> | Scaffold the cards of a use case, then refresh the index. Free: requirements card and specification. <span class="rup-pro-tag">Pro</span>: also analysis, design and implementation cards, wireframes, collaboration and sequence. |
| `index` | <span class="rup-free-tag">Free</span> | Regenerate the use-case index from the cards. <span class="rup-pro-tag">Pro</span>: also the use-case diagrams. |
| `render` | <span class="rup-free-tag">Free</span> | Draw every `.puml` source into a `.svg` through the PlantUML server. <span class="rup-pro-tag">Pro</span>: themed, plus Mermaid and PNG. |
| `check` | <span class="rup-free-tag">Free</span> | Verify structure, links and diagrams. <span class="rup-pro-tag">Pro</span>: also traceability and realization checks. |
| `editions` | <span class="rup-free-tag">Free</span> | Print the catalogue and what the installation includes. |
| `version` | <span class="rup-free-tag">Free</span> | Print the edition and version, `--json` for machines. |
| `instructions --target <t>` | <span class="rup-free-tag">Free</span> | Add or refresh the rup-flow block in an agent instruction file. |
| `server up` / `server down` | <span class="rup-free-tag">Free</span> | Start or stop the PlantUML container. |
| `health` | <span class="rup-free-tag">Free</span> | Verify that the PlantUML server renders. |
| `config` | <span class="rup-free-tag">Free</span> | Print the resolved configuration. |
| `explore` | <span class="rup-pro-tag">Pro</span> | Build `explorer.html`, the interactive viewer of every diagram. |
| `themes` | <span class="rup-pro-tag">Pro</span> | List the palettes, `--json` for machines. |
| `scan` | <span class="rup-pro-tag">Pro</span> | Inventory of the code base, the input of code to RUP. |

Without a command the CLI prints its usage.

## Common flags

| Flag | Meaning |
| --- | --- |
| `--root <dir>` | Project root. Defaults to the current directory. |
| `--out <dir>` | Documentation directory, relative to the root (overrides `outDir`). |
| `--lang <code>` | Language of the documents (overrides `docLanguage`). |
| `--project <name>` | Project name used in titles. |
| `--code-root <dir>` | Where the code lives (overrides `codeRoot`). |
| `--plantuml-url <url>` | Address of the PlantUML server. |
| `--force` | Redraw diagrams that are up to date. |

## Pro flags <span class="rup-pro-tag">Pro</span>

| Flag | Meaning |
| --- | --- |
| `--theme <preset>` | Palette: `default`, `ocean`, `forest`, `sunset`, `grape`, `mono`, `dark` or `high-contrast`. |
| `--color-<name> "#RRGGBB"` | Override one color: `background`, `text`, `line`, `border`, `primary`, `secondary`, `accent` or `note`. |
| `--font <name>`, `--font-size <n>` | Font family and size of the diagrams. |
| `--diagram-language plantuml\|mermaid` | Language of the diagram sources. |
| `--outputs svg,png,html` | What `render` produces: SVG, PNG previews, the explorer. |
| `--preview-png` | Add PNG previews to the outputs. |

## `init`

```console
RUP init --out docs/rup --lang es --project shop
```

Creates the configuration and the skeleton. Files that exist are skipped. The report
lists what was created; in the free edition it also says how many artifacts are
available in Pro.

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
| `--discipline <list>` <span class="rup-pro-tag">Pro</span> | Which cards to create: `requirements,analysis,design,implementation`. |

The name must be camelCase made of letters and digits. The command fails otherwise.
<span class="rup-pro-tag">Pro</span> also adds the row of the use case to the
traceability table.

## `render`

```console
RUP render --path docs/rup/00-domain-model --force
```

| Flag | Meaning |
| --- | --- |
| `--path <dir>` | Render only this directory. |
| `--force` | Redraw everything. |

A change of palette redraws everything automatically. The exit code is `1` when any
diagram fails.

## `check`

`--strict` makes warnings fail the command. Without it, only errors do. What it
reports is listed in [Render and check diagrams](../guides/render-and-check.md).

## `explore` <span class="rup-pro-tag">Pro</span>

Writes `explorer.html` in the documentation directory: one file, no server, no
network. Use `--outputs svg,html` to build it after every `render`. The features are
in [The interactive explorer](../pro/explorer.md).

## `scan` <span class="rup-pro-tag">Pro</span>

```console
RUP scan --code-root src --write
```

Prints, or with `--write` saves as `04-implementation/code-inventory.json`, the
extensions, manifests and the candidate entities, entry points, services,
persistence, tests and contracts of the code. `--limit <n>` caps each sample (60 by
default). The agent reads it to start [code to RUP](../pro/code-to-rup.md).

## `instructions`

```console
RUP instructions --target agents,claude,gemini
```

Without `--target` it lists the targets. `--skill-path <dir>` sets where the block
says the skill lives. All targets are in [Compatible agents](../getting-started/compatible-agents.md).

## `version` and `editions`

```console
RUP version
RUP editions --json
```

`version` prints `rup-flow free 1.0.1`, or for Pro `rup-flow Pro 1.0.1 (built on
rup-flow free 1.0.1)`. With `--json` it prints the edition and versions as JSON.
`editions` prints the catalogue as a checklist of what the installation includes.

## `server`

Needs Docker with Compose. The port comes from `plantuml.url`.

## Exit codes

| Code | Meaning |
| --- | --- |
| `0` | Done. |
| `1` | A check failed, a render failed, or the command stopped (invalid input, missing server, a capability that is part of Pro). |
