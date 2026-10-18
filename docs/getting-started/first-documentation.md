---
title: Document your first system
description: Run one prompt, read the documents the free edition writes and check the result.
---

# Document your first system

## The prompt

```text title="Prompt"
Use rup-flow to document this system in docs/rup, in English:
an online shop where customers place orders for products.
Actor: Customer. Requirement RF-001: a customer can place an order for one or
more products. Rules: an order has at least one line; a line quantity cannot
exceed stock.
```

The more you state, the less the agent has to ask. What you do not state is
marked *assumed* or goes to the open questions.

## What happens

1. The agent reads `rup.config.json`, or runs `init` to create it.
2. It lists the gaps. Blocking questions (rules that change the model) are asked;
   the rest are marked.
3. It writes the domain model, actors, requirements, the use case and the
   analysis classes.
4. It renders the diagrams and runs `check`.
5. It reports files created, open questions, checks that were not executed and
   the next step.

## What you get

```text
docs/rup/
├── README.md
├── 00-domain-model/   README.md, domain-model-simple.puml/.svg
├── 01-requirements/   README.md, actors.md, requirements.md, use-cases/createOrder/
├── 02-analysis/       README.md, class-diagram.puml/.svg
└── 05-quality/        open-questions.md
```

Open `docs/rup/README.md` and follow the links. A complete rendered example is
in the repository: [examples/shop](https://github.com/hector-ae21/rup-flow/tree/main/examples/shop).

## Check it yourself

```console
node scripts/rup.mjs check --root .
```

`check` reports broken links, unbalanced diagram sources, missing renders and a
stale use-case index. It does not prove the UML is semantically correct; look at
the rendered images.

<div class="rup-callout" markdown>

**Past the first minute:** when you ask for design, traceability or code, the
agent tells you plainly that it is part of [rup-flow Pro](../pro/index.md) and
does not invent it.

</div>
