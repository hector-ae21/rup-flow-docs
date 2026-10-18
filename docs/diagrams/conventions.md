---
title: Diagram conventions
description: How rup-flow diagrams are written so they stay readable.
---

# Diagram conventions

## Header

Every PlantUML source starts the same way:

```text
@startuml
!theme plain
hide empty members
hide circle
skinparam linetype polyline
```

Use `top to bottom direction` by default. Use `left to right direction` only for
short linear flows of four elements or fewer: wide diagrams shrink to unreadable
text when embedded.

## No colors in sources

The free edition renders with the default PlantUML look. Do not write colors or
theme blocks into sources. Palettes are a Pro feature applied when the diagram
is drawn, so the sources stay clean.

## Avoiding collisions

1. Keep each diagram to twelve to fifteen elements. Split into views before
   squeezing.
2. Group related elements in a `package`.
3. Fix the order of elements with hidden links, for example
   `A -[hidden]right-> B`.
4. Hold elements together or apart with `together { … }` and `skinparam nodesep`
   or `ranksep` between 50 and 80.
5. Prefer short relation labels; put long text in notes on elements.
6. Write relations with a direction (`Order *-down- OrderLine`). A plain `--`
   lets both ends land on the same row.
7. Avoid relations from one hub to everything; introduce a package.
8. If lines still cross badly after two adjustments, split the diagram.

## Sandbox

The PlantUML server runs with the `SANDBOX` profile. Diagrams must not use
`!include` of files or addresses.

## Naming

PlantUML identifiers are English, without spaces (use `as`), and equal to the
names in the model. A title inside a diagram is optional; the Markdown heading
names the diagram.
