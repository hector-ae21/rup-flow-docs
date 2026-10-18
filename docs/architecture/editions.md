---
title: Editions and the extension point
description: How one command line serves both the free and the Pro edition, and how the Pro package is assembled from the free skill.
---

# Editions and the extension point

There is one CLI. Which edition you run depends on one file.

## Assembly

<div class="rup-diagram" role="region" aria-label="Scrollable UML diagram of how the Pro package is assembled from the free skill and the Pro overlay" tabindex="0" markdown>

![The main branch holds the free skill, the CLI and the catalogue and becomes the free package; the pro branch adds an overlay with the extension, templates, references, packs, libraries and subagents, which is laid over a copy of the free skill to make the Pro package](../assets/diagrams/light/editions-overlay.svg#only-light)
![The main branch holds the free skill, the CLI and the catalogue and becomes the free package; the pro branch adds an overlay with the extension, templates, references, packs, libraries and subagents, which is laid over a copy of the free skill to make the Pro package](../assets/diagrams/dark/editions-overlay.svg#only-dark)

</div>

The free package is the free skill, zipped. The Pro package is a copy of the free skill with
the Pro overlay laid over it and the folder renamed `rup-flow-pro`. Files in the overlay
replace files of the same path, which is how Pro swaps a short template for its full
version without a second code path. The build also records the Pro version and the free
version it contains.

## Detection

At start, the CLI looks for `scripts/pro/index.mjs` next to itself:

| File present | Edition | Behaviour |
| --- | --- | --- |
| No | Free | Runs on its own. Anything outside the edition stops with a message that names Pro |
| Yes | Pro | The extension adds capabilities and the CLI uses them |

## What the extension adds

The extension is a module that the CLI calls at defined points:

| Point | Free behaviour | With the extension |
| --- | --- | --- |
| Templates | Only the free templates exist; `init` and `new use-case` skip the rest and count them | The remaining templates are present and are written |
| Rendering | Default PlantUML look | Palettes, Mermaid, PNG previews |
| Use-case index | A table | A table and the use-case diagrams |
| Commands | The free commands | Plus `themes`, `explore` and `scan` |
| Configuration | A Mermaid language or a non-`svg` output is rejected | Accepted |
| Instructions | Lists the free commands | Lists all commands |
| Version | Reports the free version | Reports the Pro version and the free version it contains |

## The catalogue

`editions.json` lists every diagram, document, workflow and tool with its tier. `RUP editions`
prints it and marks what the installation includes. The comparison page of this site is
generated from the same list, so the CLI and the documentation cannot disagree.

## Rules for contributors

- A capability that is not in the free edition stops with a message that names Pro and
  exits with code `1`, or appears in the `available in Pro` line. It never fails silently
  and is never reimplemented in the free tree.
- Every new artifact gets an entry in `editions.json`.
- Validation rejects Pro templates inside the free skill.
- Behaviour specific to one edition is selected by the presence of the extension, never by
  a setting a user could flip.

## Related

[Runtime behaviour](behavior.md) · [Delivery and branches](delivery.md) ·
[Free and Pro compared](../pro/compare.md)
