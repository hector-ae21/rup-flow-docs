# Contributing

Thank you for improving the rup-flow documentation. Contributions should make a
procedure easier to follow, a statement more precise or a page easier to find.

## Before you start

- Open an issue with the documentation template for anything larger than a
  correction.
- Work on a branch from `v0.x` and open a pull request. Do not push to `v0.x`.
- Use [Conventional Commits](https://www.conventionalcommits.org/):
  `docs(guides): explain the strict check`.

## What to write

- Describe released behaviour of the free edition. Roadmap items are labelled as
  such.
- Procedures state prerequisites, the result and how to recover.
- Describe rup-flow Pro at feature level only. A reader must not be able to
  recreate a Pro capability from this site: no Pro commands, flags,
  configuration keys, templates or step-by-step procedures.
- Examples contain no credentials or private data.

## Verify locally

```bash
npm run verify
```

It runs the Markdown lint, the spelling check, the release tests, the PlantUML
check, a strict MkDocs build, the HTML, link and privacy validation, and the
accessibility check. CI runs the same command on every pull request.

## Versions

`rupFlow.version` in `package.json` is the documented free version; its
`MAJOR.MINOR` must match the release line declared in `docs/releases/index.md`.
Documentation publications are tagged automatically after merge.

## Style

- American English, plain words, short sentences.
- One idea per heading; headings describe the content.
- Tables for comparisons, numbered lists for sequences, admonitions sparingly.
- Link text says where the link goes.

## Conduct and security

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) and [SECURITY.md](SECURITY.md).
