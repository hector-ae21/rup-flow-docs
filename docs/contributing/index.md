---
title: Contributing
description: How to improve the rup-flow documentation and report problems in the skill.
---

# Contributing

## The documentation

This site lives in [rup-flow-docs](https://github.com/hector-ae21/rup-flow-docs), the only
public repository of the project. Work on a branch, run `npm run verify` and open a pull
request.

Rules that keep the site honest:

- Document released behaviour. The free edition and rup-flow Pro are both documented; mark
  every page, table row or step that belongs to Pro with `edition: pro` in the front matter
  or the Pro tag.
- Never document behaviour that does not exist, and never promise a roadmap item as if it
  shipped.
- Examples contain no credentials or private data.
- Diagrams are PlantUML sources in `docs/assets/diagrams/sources`, drawn in a light and a
  dark look; edit the source, never the SVG.

## The skill

The skill source is private; it is distributed as the free and Pro packages. Report a problem
in the skill, or a client that ignores the instruction files, in the documentation
repository's issues with the documentation template and say which edition and version
(`RUP version`) you use.

## Reporting a problem

Open an issue with the documentation template. Report vulnerabilities privately as described
in the security policy.
