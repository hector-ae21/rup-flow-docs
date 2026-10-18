---
title: Provenance marks
description: How rup-flow marks where each statement of a document comes from.
---

# Provenance marks

Every statement in a document carries one provenance. This is what keeps the
documentation honest.

| Mark | Meaning | Who sets it |
| --- | --- | --- |
| **confirmed** | You said it | The agent, only for what you stated |
| **observed** | Found in the code, cited as `path:line` | The agent, when it reads code (Pro) |
| **assumed** | Proposed by the agent | The agent |
| **open** | A question | The agent, in `open-questions.md` |

## Rules

1. An assumption is never presented as confirmed.
2. An unknown business rule goes to `open-questions.md`, not into the model.
3. The agent never invents permissions, rules, states or attributes to make a
   document look complete.
4. An *assumed* item stays assumed until you confirm it.

## In practice

The entity dictionary and the business-rule table have a **Source** column. A
rule without a source is *assumed*. Open questions record who asked, when and
what they block.

<div class="rup-callout" markdown>

**Observed** claims need code, which is the job of the code-to-RUP workflow in
[rup-flow Pro](../pro/code-to-rup.md). In the free edition, statements are confirmed,
assumed or open.

</div>
