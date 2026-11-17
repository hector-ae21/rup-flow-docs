---
title: Stack packs and ORM guides
description: How rup-flow Pro turns reviewed models into code for ten frameworks in seven languages, with thirteen ORM guides, and how each pack is proven.
edition: pro
since: "1.0"
---

# Stack packs and ORM guides

A stack fixes how reviewed models become code: folder layout, modules, naming, security,
error handling, persistence mapping and test patterns. Since Pro 1.1 a stack is two
pieces that combine freely:

- a **framework pack** (`packs/<framework>/PACK.md`), for the HTTP framework and the
  structure of the application;
- an **ORM guide** (`orms/<orm>/ORM.md`), for the data-model mapping, migrations,
  transactions and safe queries.

The agent reads `CATALOG.md`, a table generated with the Pro build, picks the pack whose
`matches` contains `targetStack.framework` and the guide that matches
`targetStack.persistence`, and opens only those two files. They take precedence over the
generic mapping of [RUP to code](rup-to-code.md); conventions already present in your code
base win over both, and the difference is recorded as a decision.

```json title="rup.config.json"
"targetStack": { "language": "typescript", "framework": "nestjs", "persistence": "prisma", "testing": "jest" }
```

## Included

### Framework packs

| Pack | Language | ORM guides it works with | Proven with |
| --- | --- | --- | --- |
| `nestjs` | TypeScript | `prisma`, `typeorm`, `sequelize`, `drizzle` | NestJS 12, TypeScript 6 |
| `express` | TypeScript | `prisma`, `typeorm`, `sequelize`, `drizzle` | Express 5 |
| `fastify` | TypeScript | `prisma`, `typeorm`, `sequelize`, `drizzle` | Fastify 5 with the zod type provider |
| `axum` | Rust | `sqlx`, `seaorm`, `diesel` | Axum 0.8 |
| `fastapi` | Python | `sqlalchemy` | FastAPI 0.163, Pydantic 2 |
| `django` | Python | `django-orm` | Django 6.1, Django REST framework 3.18 |
| `spring-boot` | Java | `jpa-hibernate` | Spring Boot 4.1, Java 25 |
| `aspnet-core` | C# | `ef-core` | .NET 10 LTS minimal APIs |
| `gin` | Go | `sqlc` | Go 1.27, Gin 1.12 |
| `laravel` | PHP | `eloquent` | Laravel 13, PHP 8.4 |

### ORM and data-access guides

| Guide | Language | Migrations and drift check |
| --- | --- | --- |
| `prisma` | TypeScript | Prisma 7 migrate, `migrate diff` against the database |
| `typeorm` | TypeScript | TypeORM 1.x migrations generated from entities, `--check` |
| `sequelize` | TypeScript | sequelize-cli migrations, undo and redo |
| `drizzle` | TypeScript | drizzle-kit generate and migrate, `check` |
| `sqlx` | Rust | sqlx migrations, `sqlx prepare --check` |
| `seaorm` | Rust | sea-orm-migration, up, down and up |
| `diesel` | Rust | Diesel 2.4 migrations, `redo`, `print-schema` |
| `sqlalchemy` | Python | Alembic autogenerate, `alembic check`, downgrade and upgrade |
| `django-orm` | Python | `makemigrations --check`, migrate to zero and back |
| `jpa-hibernate` | Java | Flyway, Hibernate `ddl-auto=validate` at start-up |
| `ef-core` | C# | `dotnet ef migrations has-pending-model-changes`, update to 0 and back |
| `sqlc` | Go | goose migrations; sqlc `vet`, `generate` and `diff` |
| `eloquent` | PHP | Laravel migrations, rollback and migrate |

The former `nestjs-prisma` pack is kept as an alias of `nestjs` plus `prisma`.

## What every generated use case has

Whatever the stack, the packs generate the same shape, so a reviewer finds the same things
in every language:

- **Use cases free of the framework**: plain functions or classes that work against a small
  *store* interface with exactly the operations they need. The ORM guide's repository
  implements it; unit tests use an in-memory fake.
- **Strict contracts**: request fields validated with limits from the wireframes, and
  **unknown fields rejected**. Several frameworks ignore them by default (DRF, Gin,
  Laravel, Spring); the packs switch that off.
- **Authentication by default**: every route needs a verified credential unless the
  use-case card declares it public. The owner of a record comes from the credential, never
  from the request body.
- **Ownership checks**: a record of another actor answers 404.
- **One place that maps errors to HTTP**: contract violations answer 400, business rules
  `RN-xxx` answer 422 with the rule id, conflicts with a unique rule answer 409, and
  unexpected errors are logged and answered 500 without internal details.
- **Tests per use case**: unit tests per main flow, alternative flow and rule, plus
  end-to-end tests for 201, the rule (422), an unknown field (400), malformed JSON (400),
  an anonymous caller (401), another actor's record (404) and a unique conflict (409).
- **Trace links** in the doc comment of each use case (`@rup UC-001 RF-001`).

The rules behind these points are in [Modular design and secure coding](secure-coding.md).

## What a pack contains

| Section | Content |
| --- | --- |
| Architecture | Where use cases, contracts, boundaries and persistence live |
| Modules | Public surface of a module, allowed dependencies, how cycles are avoided |
| Layout | The files generated per module |
| Persistence | How the store is injected and where transactions open |
| Errors | The error type and the single mapping to HTTP |
| Security | The framework's controls: validation, authentication, headers, limits, audits |
| Tests | Unit and end-to-end patterns |
| Trace links | The doc-comment syntax |
| Templates | Fill-in skeletons for every generated file |
| Before reporting done | The commands the agent runs and reports, for example formatter, linter, type checker, tests and dependency audit |

An ORM guide has the mapping, relations, migrations, transactions, queries, security and
tests of its ORM, plus the integration with the packs it serves. The Pro build refuses a
pack or guide with a missing section.

## How the packs are proven

Every pack and guide was proven before release, not only reviewed: its templates were
filled with a small sample module, built and tested in Docker against PostgreSQL 17 with
the versions in the tables above. Each run checked the migrations both ways, the
drift check, the formatter, the linter with warnings as errors, and the unit and
end-to-end tests. Running them found defects that reading the templates would not have
found, and each guide now states them, for example:

- Prisma 7 moved the connection URL out of the schema;
- Alembic does not drop PostgreSQL enum types on downgrade;
- DRF answers 403 instead of 401 unless the authentication class sets a challenge header;
- EF Core must be pinned to one version across the provider and its tools.

## Related

[RUP to code](rup-to-code.md) · [Modular design and secure coding](secure-coding.md) ·
[Domain libraries](domain-libraries.md)
