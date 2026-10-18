---
title: Versioning and URLs
description: Match a rup-flow package, free or Pro, to its MAJOR.MINOR documentation line and audit immutable publication revisions.
---

# Versioning and URLs

Four numbers answer four different questions:

- **Free version:** which release of the free skill is installed?
- **Pro version:** which release of rup-flow Pro, and which free version does it contain?
- **Documentation line:** which compatible `MAJOR.MINOR` contract describes it?
- **Publication revision:** which approved snapshot of these pages produced the current
  wording and images?

## Reading your own version

```console
RUP version
rup-flow free 1.0.1

RUP version
rup-flow Pro 1.0.1 (built on rup-flow free 1.0.1)
```

The same number is in the name of the package, `rup-flow-free-1.0.1.zip` or
`rup-flow-pro-1.0.1.zip`, and in the `metadata.version` of `SKILL.md`.

## How the editions map

| Pro | Contains free | Read the docs of line |
| --- | --- | --- |
| 1.0.x | 1.0.x | 1.0 |

A Pro release is documented on the line of the free version it contains. Pro pages carry
the Pro version since which a capability exists, so one site covers both editions.

## MAJOR.MINOR controls the site

The version selector and the canonical address use the free edition's `MAJOR.MINOR`.
Compatible patches update the same line instead of creating a new copy of the site.

```text
Edition line:      1.0.x
Validated version: 1.0.1
Version selector:  1.0
Canonical path:    /rup-flow-docs/1.0/
```

## Aliases

| Alias | Points to |
| --- | --- |
| `latest` | The newest documented line |
| `stable` | The newest documented line that is not a preview |

The site root redirects to `latest`.

## Publication revisions

Each approved publication of these pages gets an immutable tag and a GitHub release. A later
editorial fix is a new revision in the same line; it never rewrites an earlier one.
