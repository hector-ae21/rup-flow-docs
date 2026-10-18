---
title: Mermaid and PNG previews
description: Draw every rup-flow Pro diagram in Mermaid instead of PlantUML, and add PNG previews.
edition: pro
since: "1.0"
---

# Mermaid and PNG previews

## Mermaid

Choose Mermaid instead of PlantUML as the diagram language of a project. The documents,
the structure and the palettes are the same; only the language of the sources changes
(`.mmd` instead of `.puml`).

```console
RUP init --diagram-language mermaid --theme ocean
```

Or in the configuration:

```json
{ "diagrams": { "language": "mermaid" } }
```

### Equivalents

| Artifact | Mermaid type | Notes |
| --- | --- | --- |
| Domain model, analysis classes, design classes | `classDiagram` with `direction TB` | Levels through `:::level1` to `:::level4` |
| Entity lifecycle, specification | `stateDiagram-v2` | The composite state carries the use-case name; notes narrate Actor and System |
| Collaboration | `flowchart TB` | Numbered edge labels |
| Sequence | `sequenceDiagram` | `alt` and `else` for failure paths |
| Data model | `erDiagram` | |
| Deployment | `flowchart TB` with `subgraph` | |
| Use-case diagram | `flowchart LR` | Mermaid has no use-case diagram, so it is drawn as a flowchart with the same grouping |

Labels with parentheses, colons or line breaks are quoted.

### Rendering

- Mermaid is drawn by the mermaid-cli container, pulled the first time you use it (about
  1 GB). Docker must be running.
- Wireframes stay PlantUML salt layouts, so `server up` is still needed in a Mermaid
  project.
- `render` handles `.puml` and `.mmd` together; do not mix languages for one diagram.

## PNG previews

A raster preview next to each PlantUML diagram, for tools that cannot show SVG:

```console
RUP render --preview-png
```

Each `name.svg` gets a `name.preview.png`. Previews are PlantUML only.

## Outputs

`diagrams.outputs` or `--outputs` accepts any of:

| Output | Produces |
| --- | --- |
| `svg` | The image that Markdown embeds |
| `png` | `.preview.png` next to each PlantUML diagram |
| `html` | The [interactive explorer](explorer.md) |

## Related

[Themes](themes.md) · [Command line](../reference/cli.md)
