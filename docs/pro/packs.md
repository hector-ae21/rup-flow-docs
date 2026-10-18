---
title: Stack packs
description: What a stack pack is, how the agent uses it and what the nestjs-prisma pack covers in rup-flow Pro.
edition: pro
since: "1.0"
---

# Stack packs

A stack pack fixes how reviewed models become code for one stack: the folder layout,
the naming, the error handling, the persistence mapping and the test patterns. The
agent reads the pack that matches `targetStack` before it plans code, and the pack takes
precedence over the generic mapping of [RUP to code](rup-to-code.md).

Packs live in the `packs` folder of the Pro skill: a `PACK.md` and, where useful,
fill-in skeletons.

## Included

| Pack | Stack |
| --- | --- |
| `nestjs-prisma` | TypeScript, NestJS, Prisma on PostgreSQL and Jest |

More packs are announced in the [Pro changelog](versions.md).

## `nestjs-prisma`

### Architecture

- Organised by **feature package**, one per concept of the domain model, with concrete
  classes. No layers of ports and abstract factories that the models do not ask for.
- One class per file, the file named after the class; one reason to change per class.
- A use case is one service; a controller only translates HTTP into a service call.
- Dependencies are injected collaborators such as the Prisma service and the config
  service, never singletons.
- Business rules live in entity methods or in the use-case service, never in the
  controller.

### What it generates per feature

| File | Comes from |
| --- | --- |
| Module and controller | The boundary classes of the analysis |
| Request and response objects | The wireframe fields and the use-case card, validated with decorators |
| One service per use case | The design sequence, step by step |
| Mapper | Only where the response differs from the entity |
| Unit test | One test per flow and per rule |

### From the data model to Prisma

| Model | Prisma |
| --- | --- |
| Entity | A `model` mapped to the table name of the data model |
| Primary key | A UUID unless the data model fixes another type |
| Relation with multiplicity | Relation fields on both sides, foreign key on the many side, cascade when the part cannot outlive the whole |
| Unique rule | `@unique` or `@@unique` |
| Entity lifecycle | An `enum`, with transitions guarded in the service |
| Timestamps | Created and updated columns |

One migration per feature; an applied migration is never edited.

### Services, errors and tests

- A service validates the request, loads what the sequence loads in its order, applies
  the rules, throws a typed exception per failure path, persists inside one transaction
  when the sequence marks a boundary and returns the response.
- Exceptions are mapped to HTTP in one filter.
- Unit tests mock the persistence service; one test per main flow, alternative flow and
  rule, named with the identifier. End-to-end tests send one request per main flow.
- Trace links are TSDoc tags (`@rup UC-001 RF-001`); no narrative comments elsewhere.

### Before it reports done

It validates the Prisma schema, type-checks, runs the linter and the tests, and reports
each result as it is. Anything it did not run is reported as unverified.

## Related

[Domain libraries](domain-libraries.md) · [RUP to code](rup-to-code.md)
