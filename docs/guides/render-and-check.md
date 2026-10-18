---
title: Render and check diagrams
description: Start the PlantUML server, render the diagrams and read the check output.
---

# Render and check diagrams

## Start the server

Diagrams are PlantUML sources. A local Docker container draws them:

```console
node scripts/rup.mjs server up --root .
node scripts/rup.mjs health --root .
```

`health` renders a test diagram and prints `OK` when the server is usable. Stop
the server with `server down`.

The container publishes its port on `127.0.0.1` only and runs with the `SANDBOX`
security profile, which blocks file and URL access from diagrams.

## Render

```console
node scripts/rup.mjs render --root .
```

Each `name.puml` becomes `name.svg` next to it. Up-to-date diagrams are skipped;
use `--force` to redraw everything, or `--path <dir>` to render one folder. A
file with several `@start…/@end…` blocks produces `name-01.svg`, `name-02.svg`.

## Check

```console
node scripts/rup.mjs check --root .
```

| Message | Meaning | Fix |
| --- | --- | --- |
| `broken link` | A Markdown link points to a file that does not exist | Fix the link or create the file |
| `unbalanced @start/@end` | A diagram source is cut off | Complete the source |
| `no rendered SVG` | A source has no image yet | Run `render` |
| `use-case index is stale` | A card changed since the index was generated | Run `index` |
| `unresolved template placeholder` | A `{{name}}` is still in a document | Fill it in |

`check --strict` turns warnings into a failing exit code, which suits CI.

## What `check` does not do

It validates structure and links. It does not prove that UML is semantically
correct or that lines do not cross. Look at the rendered images.
