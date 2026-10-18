---
title: Runtime behaviour
description: What happens, step by step, when the agent adds a use case, renders diagrams and starts the CLI.
---

# Runtime behaviour

Three scenarios show how the pieces cooperate. Each one is a rule you can rely on.

## Adding a use case

<div class="rup-diagram" role="region" aria-label="Scrollable UML sequence of adding a use case" tabindex="0" markdown>

![Sequence: the person asks for a use case, the agent runs new use-case, the CLI picks the next identifier, writes the missing files and refreshes the index, the agent fills the card and runs check, and reports what it did](../assets/diagrams/light/new-use-case.svg#only-light)
![Sequence: the person asks for a use case, the agent runs new use-case, the CLI picks the next identifier, writes the missing files and refreshes the index, the agent fills the card and runs check, and reports what it did](../assets/diagrams/dark/new-use-case.svg#only-dark)

</div>

1. The person states the use case in plain language.
2. The agent runs `new use-case` with what it knows: actor, package, goal.
3. The CLI chooses the next free identifier by reading the existing cards, writes only the
   files that do not exist yet, and regenerates the index from the cards.
4. The agent fills the card from what the person said. Whatever the person did not say
   becomes an open question.
5. The agent runs `check` and reports the files, the open questions and what was not
   checked.

Two properties follow. Running the command twice never overwrites work, because existing
files are skipped. And the index is always derived from the cards, never edited by hand.

## Rendering diagrams

<div class="rup-diagram" role="region" aria-label="Scrollable UML sequence of rendering diagrams" tabindex="0" markdown>

![Sequence: the CLI finds every source, sends each one that is not up to date to the PlantUML server, writes the SVG next to the source on success and lists the diagram as failed on error, then records the render state and exits with code 1 if anything failed](../assets/diagrams/light/render.svg#only-light)
![Sequence: the CLI finds every source, sends each one that is not up to date to the PlantUML server, writes the SVG next to the source on success and lists the diagram as failed on error, then records the render state and exits with code 1 if anything failed](../assets/diagrams/dark/render.svg#only-dark)

</div>

- A diagram is up to date when its SVG is newer than its source; `--force` redraws
  everything, and a change of palette does so automatically.
- A failure of one diagram never stops the others. The report lists what was drawn,
  what was skipped and what failed, and the exit code is `1` when anything failed.
- The SVG is written to a temporary file and moved into place, so an interrupted run
  never leaves half an image.

## Starting the CLI

<div class="rup-diagram" role="region" aria-label="Scrollable UML activity of how the CLI chooses its edition" tabindex="0" markdown>

![Activity: the CLI starts and checks whether the Pro entry exists; if so it loads the Pro extension; if not it is the free edition and stops with a Pro notice when the command or flag needs Pro; either way it writes the report](../assets/diagrams/light/edition-loading.svg#only-light)
![Activity: the CLI starts and checks whether the Pro entry exists; if so it loads the Pro extension; if not it is the free edition and stops with a Pro notice when the command or flag needs Pro; either way it writes the report](../assets/diagrams/dark/edition-loading.svg#only-dark)

</div>

The edition is decided once, at start, by one file. A command that needs Pro never
half-runs in the free edition: it stops before doing any work and says which part is
missing.

## The report

Every command ends with a report: a title, then labelled values and lists. The same shape
is used by all commands so an agent can read any of them the same way.

## Related

[Structure](structure.md) · [Editions and the extension point](editions.md)
