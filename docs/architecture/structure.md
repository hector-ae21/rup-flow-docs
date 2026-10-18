---
title: Structure
description: The runtime containers of rup-flow and the components inside its command line.
---

# Structure

## What runs where

Everything runs on your machine. There are three runtime pieces and two stores.

<div class="rup-diagram" role="region" aria-label="Scrollable UML diagram of the runtime containers" tabindex="0" markdown>

![The agent process reads the skill folder and runs a Node.js process for each command; the Node.js process reads and writes the project folder and sends diagram sources to a Docker container that answers with SVG](../assets/diagrams/light/containers.svg#only-light)
![The agent process reads the skill folder and runs a Node.js process for each command; the Node.js process reads and writes the project folder and sends diagram sources to a Docker container that answers with SVG](../assets/diagrams/dark/containers.svg#only-dark)

</div>

| Element | Responsibility |
| --- | --- |
| Agent process | Reads `SKILL.md` and the references, decides what to write, runs the CLI and writes the documents |
| Node.js process | One short-lived run per CLI command: structure, index, render, check, instructions |
| Skill folder | Rules, references, templates, the catalogue and the CLI itself; read-only at run time |
| Project folder | `rup.config.json` and the documentation directory; the only place the tool writes |
| PlantUML container | Turns diagram sources into SVG; published on `127.0.0.1` only and run with the `SANDBOX` security profile |

The CLI is started fresh for every command and keeps no state between runs, except one
small file in the documentation directory that records the last render so unchanged
diagrams are skipped.

## What is inside the skill folder

| Path | Role |
| --- | --- |
| `SKILL.md` | The operating rules and the map from a request to the reference to read |
| `references/` | Methodology, loaded on demand |
| `templates/` | Starting content of each artifact, with `{{placeholders}}` |
| `scripts/rup.mjs` | The CLI |
| `scripts/lib/` | Small modules used by the CLI |
| `editions.json` | The catalogue of artifacts and capabilities, free or Pro |
| `runtime/compose.yaml` | The definition of the PlantUML container |

## Inside the CLI

<div class="rup-diagram" role="region" aria-label="Scrollable UML diagram of the components of the CLI" tabindex="0" markdown>

![The argument parser feeds the configuration loader, which feeds the commands; the commands use the edition loader, the use-case module, the PlantUML client and the instruction writer; the edition loader loads the Pro extension when it exists](../assets/diagrams/light/cli-components.svg#only-light)
![The argument parser feeds the configuration loader, which feeds the commands; the commands use the edition loader, the use-case module, the PlantUML client and the instruction writer; the edition loader loads the Pro extension when it exists](../assets/diagrams/dark/cli-components.svg#only-dark)

</div>

| Component | Responsibility | Reason it is separate |
| --- | --- | --- |
| Argument parser | Splits a command line into the command, its arguments and flags | The only place that knows the shape of the command line |
| Configuration loader | Merges defaults, `rup.config.json` and flags, in that order of precedence, and rejects values the edition does not support | Every command sees one resolved configuration |
| Commands | One function per command | A command can change without touching the others |
| `edition.mjs` | Detects the edition, loads the extension, prints Pro notices | The single point where the two editions differ |
| `usecases.mjs` | Reads the use-case cards and builds the index and the navigation | Shared by `new use-case`, `index` and `check` |
| `plantuml.mjs` | Sends a source to the server and checks that an SVG came back | The only code that speaks HTTP |
| `instructions.mjs` | Writes the block that agents without skills read | Isolates the list of agent targets |
| `scripts/pro` | Themes, Mermaid, explorer, use-case diagrams and code scan | Exists only in the Pro package |

## Dependencies

The CLI has no runtime dependencies. It uses the Node.js standard library, the global
`fetch` for the PlantUML server and, only when asked, the `docker` command. Keeping the
dependency list empty is a requirement, not an accident: it is what lets the skill be
unzipped into any folder and run.

## Related

[Runtime behaviour](behavior.md) · [Editions and the extension point](editions.md)
