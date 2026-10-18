---
title: Versioning and URLs
description: Match a rup-flow skill to its MAJOR.MINOR documentation line and audit immutable publication revisions.
---

# Versioning and URLs

Skill versions, documentation lines and publication revisions answer different
questions:

- **Skill version:** which exact release of the skill is installed?
- **Documentation line:** which compatible `MAJOR.MINOR` contract describes it?
- **Publication revision:** which approved snapshot of these pages produced the
  current wording and images?

## MAJOR.MINOR controls the site

The version selector and the canonical address use the skill's `MAJOR.MINOR`.
Compatible patches update the same line instead of creating a new copy of the
site.

```text
Skill line:        0.4.x
Validated skill:   0.4.0
Version selector:  0.4
Canonical path:    /rup-flow-docs/0.4/
```

## Aliases

| Alias | Points to |
| --- | --- |
| `latest` | The newest documented line |
| `stable` | The newest documented line that is not a preview |

The site root redirects to `latest`.

## Publication revisions

Each approved publication of these pages gets an immutable tag and a GitHub
release. A later editorial fix is a new revision in the same line; it never
rewrites an earlier one.

## Which version do I have?

```console
node scripts/rup.mjs config
```

does not print the version; read `metadata.version` in `SKILL.md`, or the
`version` of the plugin manifest.
