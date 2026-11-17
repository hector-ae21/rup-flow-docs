---
title: Modular design and secure coding
description: The rules rup-flow Pro applies to every use case it generates, so the code is modular, secure by default and reviewable.
edition: pro
since: "1.1"
---

# Modular design and secure coding

Pro applies two references to every run of [RUP to code](rup-to-code.md), whatever the
stack: `modular-design.md` and `secure-coding.md`. Each [stack pack](packs.md) says how
its framework meets them, in its `Modules` and `Security` sections. They are not options:
generated code that breaks them is a defect for the
[security reviewer](subagents.md).

## Modular design

The models decide the modules:

| Model | Module decision |
| --- | --- |
| Use-case package | One module (feature, crate, package, app) per package |
| Level-1 entity and what it composes | Owned and written by one module only |
| Relation between entities of two modules | Reference by id, never a shared object |
| Use case that includes another package's use case | Calls that module's public use cases, never its internals |

Rules:

1. **One owner per table.** Other modules read through the owner's public use cases.
2. **Explicit public surface.** Everything not exported is private and may change.
3. **Dependencies point one way**, following the domain ranking. Shared code depends on no
   module.
4. **No cycles.** A cycle is broken by moving the concept, by an event, or by merging the
   modules, and is recorded as a decision.
5. **Configuration at the edge.** Modules receive their collaborators; they never read the
   environment or open connections themselves.
6. **No abstraction without a second use**: the store interface exists because tests use a
   fake.

The components diagram is the reference: a dependency in the code that the diagram does
not show is drift.

## Secure coding

The baseline is the OWASP Top 10 and ASVS level 2. Each element of the model maps to a
control:

| Model | Control |
| --- | --- |
| Actor of a use case | Authenticated identity with a role; each use case states which actors may run it |
| Precondition | Server-side validation; reject, never repair silently |
| Rule about who may act | Authorisation check in the use case, with a test |
| Entity loaded by id | Ownership or tenancy check |
| Wireframe field | Allow-list in the request contract: type, length, range, format |
| Security or privacy requirement | A control and a test, or an open question |

The fifteen rules cover authentication by default, input validation, injection, mass
assignment, explicit responses, errors that do not leak, credentials and keys, sessions and
tokens, transport and headers, rate limits and idempotency, concurrency on shared
quantities, files, logging and audit, personal data, and the supply chain (lockfiles and
the stack's dependency audit).

Missing information never grants access: who may run a use case, or how long personal data
is kept, becomes an open question.

## How it shows in the generated code

- Every route needs authentication unless the card declares it public.
- The owner of a record is the authenticated user, never a field of the body.
- A request with a field the contract does not list is rejected.
- Another actor's record answers 404, not 403, so its existence is not revealed.
- Unique conflicts answer 409 without the constraint, the SQL or the values.
- Each authorisation rule has a test for the allowed actor, another actor and an anonymous
  caller.
- The "before reporting done" step runs the stack's dependency audit, for example
  `npm audit`, `cargo audit`, `pip-audit`, `govulncheck` or `composer audit`.

## Related

[Stack packs and ORM guides](packs.md) · [Subagents](subagents.md) ·
[RUP to code](rup-to-code.md)
