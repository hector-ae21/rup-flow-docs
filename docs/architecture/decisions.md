---
title: Quality and decisions
description: The qualities the rup-flow design protects and the decisions behind it, with the reasons and the alternatives that were rejected.
---

# Quality and decisions

## Qualities

| Quality | How it is protected |
| --- | --- |
| Portability | The skill follows the open Agent Skills format; adapters isolate each agent; the CLI needs only Node.js |
| Honesty | Provenance marks, the rule against inventing content, open questions, and a CLI that refuses what the edition lacks |
| Repeatability | Commands skip what exists, derive indexes from the cards, and record the render state |
| Safety | Writes only inside chosen folders; local, sandboxed rendering; no network calls of its own |
| Maintainability | One reason to change per module; a catalogue and validation that stop the editions drifting |
| Compatibility | One CLI and one skill structure for both editions, so a project moves from free to Pro without renaming |

## Decisions

Each decision states the context, the choice and what it costs.

### D-01 A skill plus a CLI, not a skill alone

**Context.** An agent writes good prose and bad boilerplate: it renumbers identifiers,
forgets to refresh an index, draws diagrams it cannot see.
**Decision.** Mechanical work is deterministic code behind a command line; judgement stays
with the agent.
**Cost.** The agent must be able to run a command; an agent that cannot, writes documents
without rendering or checking and must say so.

### D-02 No runtime dependencies

**Context.** The skill is unzipped into any folder on any machine.
**Decision.** The CLI uses only the Node.js standard library.
**Cost.** Small utilities are written in the project instead of imported.

### D-03 PlantUML in a local container, not a hosted service

**Context.** Diagrams describe private systems.
**Decision.** Rendering goes to a container on the loopback interface, with a sandboxed
profile.
**Cost.** Docker is needed to draw; without it the sources are still written and can be
drawn later.

### D-04 One CLI, two editions, selected by a file

**Context.** Forking the code for a paid edition doubles every fix.
**Decision.** The free CLI loads an extension when it finds `scripts/pro/index.mjs`; the Pro
package is the free skill with an overlay.
**Cost.** The free tree must expose clean extension points and stay free of Pro code, which
validation enforces.

### D-05 Refuse, do not degrade

**Context.** A free edition that quietly produces a weaker version of a Pro artifact would
mislead.
**Decision.** Anything outside the edition stops with a message that names Pro, or is
counted and listed; the skill tells the agent not to improvise it.
**Cost.** Some requests end earlier than a user expects, which is the point.

### D-06 Numbered folders that never change

**Context.** Users move from free to Pro.
**Decision.** Both editions use the same discipline folders; Pro fills the rest.
**Cost.** The free tree shows folders that Pro uses and the free edition leaves empty or
absent.

### D-07 Light and dark diagrams are two files

**Context.** One SVG cannot be readable on both a white and a dark page.
**Decision.** Documentation diagrams are drawn twice from one source with two palettes and
the page shows the one that matches its theme.
**Cost.** Twice the files, checked as a pair by the build.

### D-08 Instruction files for agents without skills

**Context.** Many agents read a rules file instead of Agent Skills.
**Decision.** A command writes a small, delimited block into the file each tool reads and
replaces only that block.
**Cost.** The list of targets follows each tool's conventions and needs maintenance.

## Related

[Structure](structure.md) · [Delivery and branches](delivery.md)
