---
title: Document a system
description: Go from an idea to a reviewed RUP documentation set with the free edition.
---

# Document a system

## 1. State the objective

One sentence: what the system is for and for whom. The agent restates it before
modelling; correct it there.

## 2. Answer the blocking questions

The agent separates questions that change the model (a rule, an actor, a state)
from details. It asks the first kind and continues with the rest marked
*assumed*. Anything you do not answer stays in `05-quality/open-questions.md`.

## 3. Review the domain model

Open `00-domain-model/README.md`. Check the entity dictionary and the business
rules. A rule marked *assumed* is a question for you, not a decision.

## 4. Review the requirements

`01-requirements/requirements.md` lists functional (`RF-xxx`) and non-functional
(`RNF-xxx`) requirements with their origin and who confirmed them. Each RF should
have at least one use case, and each use case at least one RF.

## 5. Review each use case

Open the card. Check the main flow, alternative flows, preconditions and
postconditions. Open `specification.svg`: the card and the diagram must describe
the same paths; if they diverge, the specification wins.

## 6. Mark what is reviewed

Change `status` in the front matter from `draft` to `reviewed` for the artifacts
you accepted. The agent never promotes an artifact on its own.

## 7. Check

```console
node scripts/rup.mjs check --root .
```

## Where the free edition stops

Design (classes, sequences, data model, deployment), implementation cards,
traceability and audits belong to [rup-flow Pro](../pro/documentation-set.md).
