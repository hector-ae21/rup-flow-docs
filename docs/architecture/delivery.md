---
title: Delivery and branches
description: How rup-flow is released, which branches exist and how this documentation is published.
---

# Delivery and branches

## Repository

| Branch | What it is | Who writes it |
| --- | --- | --- |
| `main` | Source of truth; protected, changes arrive through pull requests with `CI complete` | Pull requests |
| `claude-plugin` | The plugin payload the marketplace and the directory read | The release workflow, on each `vX.Y.Z` tag |
| `docs-assets` | The README screenshot and the PNG icon | The maintainer, when images change |

The plugin tree contains no binary files; images that need one live on
`docs-assets` and are linked by address.

## Release

1. Move the `Unreleased` entries of the changelog to a new version section.
2. Bump the version in `package.json`, the plugin manifest and `SKILL.md`.
3. Merge to `main`, then tag `vX.Y.Z`.
4. The release workflow validates and tests, publishes `rup-flow-skill.zip` on the
   GitHub release and regenerates the `claude-plugin` branch.

## Continuous integration

| Job | Checks |
| --- | --- |
| Validate | Skill format, manifests, links, no binaries, no Pro templates |
| Test | The CLI test suite on Linux and Windows with Node.js 18 and 22 |
| Render | `init`, `new use-case`, `render` and `check` against a real PlantUML server |

## This documentation

The site is built with MkDocs Material and published with Mike. The version
selector uses the free edition's `MAJOR.MINOR`. Each approved publication gets an
immutable tag and a GitHub release. See [Versioning and URLs](../releases/versioning.md).
