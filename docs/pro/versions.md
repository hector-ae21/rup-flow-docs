---
title: Pro versions and compatibility
description: The Pro changelog, which free version each Pro release contains and how pages here say since which Pro version they apply.
edition: pro
since: "1.0"
---

# Pro versions and compatibility

rup-flow Pro has its own version. Every Pro package contains a complete copy of the free
skill and states which one:

```console
RUP version
rup-flow Pro 1.0.1 (built on rup-flow free 1.0.1)
```

## Compatibility

| Pro | Contains free | Documentation line |
| --- | --- | --- |
| 1.0.1 | 1.0.1 | 1.0 |
| 1.0.0 | 1.0.0 | 1.0 |

The documentation line is the free edition's `MAJOR.MINOR`; a Pro release is documented
on the line of the free version it contains. Pages and rows marked
<span class="rup-pro-tag">Pro</span> carry a `since` version when a capability arrived
after Pro 1.0.

## Pro changelog

### 1.0.1

Built on rup-flow free 1.0.1.

- `init` creates the project root when it does not exist instead of failing with a stack trace.

### 1.0.0

First release of rup-flow Pro, built on rup-flow free 1.0.0.

- The complete documentation set: ranked domain model, entity lifecycles, use-case
  diagrams (general and per actor), wireframes, analysis collaborations, design classes,
  sequences, data model, components, deployment, implementation cards, code map, project
  profile, traceability, audit and decision records.
- Code to RUP with `scan`, RUP to code with trace links, drift detection and the audit.
- Eight palettes, custom colors and fonts, Mermaid, PNG previews and the interactive
  explorer with its overview, relation tracing and exports.
- The `rup-architect` and `rup-reviewer` subagents.
- The stack pack `nestjs-prisma` and the domain library `lms`.
- A complete example project.
- The `version` command, which reports the Pro version and the free version it contains.

## How releases are identified

| Edition | Tag | Package |
| --- | --- | --- |
| Free | `vMAJOR.MINOR.PATCH` | `rup-flow-free-<version>.zip` |
| Pro | `pro-vMAJOR.MINOR.PATCH` | `rup-flow-pro-<version>.zip` |

The version in the file name is the version `RUP version` prints, and the one in
`SKILL.md` metadata.

## Related

[Versioning and URLs](../releases/versioning.md) · [Update rup-flow](../releases/updating.md)
