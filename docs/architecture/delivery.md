---
title: Delivery and branches
description: How rup-flow is branched, versioned and released, and how this documentation is published.
---

# Delivery and branches

## One repository, two branches

The source lives in one private repository with two long-lived branches. The packages built
from them are what is published; the source is not.

<div class="rup-diagram" role="region" aria-label="Scrollable UML diagram of the branch and release model" tabindex="0" markdown>

![The main branch holds the free edition and is merged into the pro branch; tags on each branch trigger release workflows that build the versioned free and Pro packages; the public documentation site describes both](../assets/diagrams/light/branch-model.svg#only-light)
![The main branch holds the free edition and is merged into the pro branch; tags on each branch trigger release workflows that build the versioned free and Pro packages; the public documentation site describes both](../assets/diagrams/dark/branch-model.svg#only-dark)

</div>

| Branch | Holds | Tag | Package |
| --- | --- | --- | --- |
| `main` | The free edition | `vMAJOR.MINOR.PATCH` | `rup-flow-free-<version>.zip` |
| `pro` | `main` plus the `pro/` folder: overlay, build, tests, license | `pro-vMAJOR.MINOR.PATCH` | `rup-flow-pro-<version>.zip` |

`main` is complete and never contains anything from Pro. After a change lands in `main` it is
merged into `pro`, so the Pro build always contains a known free version, and the Pro package
states it. Both branches only take changes through pull requests with `CI complete`.

## From change to package

<div class="rup-diagram" role="region" aria-label="Scrollable UML diagram of the release pipeline" tabindex="0" markdown>

![A pull request runs CI; once CI is complete it is merged; a tag with the version bumped and the changelog written starts the release workflow, which checks, builds and packages; the GitHub release carries the versioned ZIP, which is uploaded to the marketplace listing](../assets/diagrams/light/release-pipeline.svg#only-light)
![A pull request runs CI; once CI is complete it is merged; a tag with the version bumped and the changelog written starts the release workflow, which checks, builds and packages; the GitHub release carries the versioned ZIP, which is uploaded to the marketplace listing](../assets/diagrams/dark/release-pipeline.svg#only-dark)

</div>

| Job | Checks |
| --- | --- |
| Validate | Skill format, links, no sensitive-looking names, no Pro templates in the free tree |
| Test | The CLI suite on Linux and Windows with Node.js 18 and 22 |
| Render | `init`, `new use-case`, `render` and `check` against a real PlantUML server |
| Pro tests | The built Pro skill: every command, the explorer, the example project and the package |

The release workflow checks that the tag equals the version in the files, runs the tests,
builds the package and attaches it to the GitHub release with the changelog section as its
notes. A release is never overwritten.

## Version identity

A package names its version in three places that must agree: the file name, `SKILL.md`
metadata and the output of `RUP version`. Pro also names the free version it contains. See
[Versioning and URLs](../releases/versioning.md).

## This documentation

The site is built with MkDocs Material and published with Mike, from the public
`rup-flow-docs` repository. The version selector uses the free edition's `MAJOR.MINOR`, and
Pro is documented on the line of the free version it contains. Each approved publication gets
an immutable tag and a GitHub release.

## Related

[Editions and the extension point](editions.md) · [Quality and decisions](decisions.md)
