---
title: Front matter and identifiers
description: The front-matter keys of every document and the stable identifiers rup-flow assigns.
---

# Front matter and identifiers

## Front matter

Every Markdown artifact except the index READMEs starts with a block like this:

```yaml
---
id: UC-001
name: createOrder
title: Create order
actor: Customer
package: Ordering
status: draft
origin: requirements
sourceOfTruth: model
requirement: RF-001
includes: validateStock
extends:
---
```

| Key | Values | Meaning |
| --- | --- | --- |
| `id` | `UC-001` and so on | Stable identifier |
| `name` | camelCase | Use-case folder name |
| `title` | text | Human title |
| `actor` | names, comma separated | Primary actors |
| `package` | text | Group of related use cases |
| `status` | `draft`, `reviewed`, `approved` | Review state; never promoted by the agent |
| `origin` | `requirements` | Where the content came from |
| `sourceOfTruth` | `model` | The model leads; code, if any, must follow it |
| `requirement` | `RF-001` | Requirement the use case serves |
| `includes`, `extends` | use-case names | Relations drawn in use-case diagrams |

The use-case index and `check` read `id`, `title`, `actor`, `package`, `status`,
`requirement`, `includes` and `extends`.

## Identifiers

| Prefix | Meaning |
| --- | --- |
| `RF-001` | Functional requirement |
| `RNF-001` | Non-functional requirement |
| `UC-001` | Use case |
| `RN-001` | Business rule |
| `Q-001` | Open question |

Never reuse or renumber an identifier. Mark a withdrawn one `retired`. The
prefixes come from `ids` in the [configuration](../configuration/index.md).
