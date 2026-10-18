---
title: Contributing
description: How to improve the rup-flow documentation and the free skill.
---

# Contributing

## The documentation

This site lives in [rup-flow-docs](https://github.com/hector-ae21/rup-flow-docs).
Work on a branch, run `npm run verify` and open a pull request.

Rules that keep the site honest:

- Document released behaviour of the free edition completely.
- Describe Pro at feature level only. A reader must not be able to recreate a Pro
  capability from this site.
- Examples contain no credentials or private data.

## The free skill

The skill lives in [rup-flow](https://github.com/hector-ae21/rup-flow). Pull
requests improve the free workflow; capabilities listed as Pro in
`editions.json` are developed elsewhere and are not accepted there.

| Check | Command |
| --- | --- |
| Validation and tests | `npm run check` |
| Package the web ZIP | `node tools/package-web.mjs` |

Conventional Commits, a branch per change and the `CI complete` check apply to
both repositories. Every behaviour change needs a test and a changelog entry
under `Unreleased`.

## Reporting a problem

Open an issue with the documentation template for this site, or a bug report in
the skill repository. Report vulnerabilities privately as described in the
repository security policies.
