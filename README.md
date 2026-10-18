# rup-flow documentation

[![Documentation CI](https://img.shields.io/github/actions/workflow/status/hector-ae21/rup-flow-docs/pull-request.yml?branch=v0.x&logo=github&label=documentation%20CI)](https://github.com/hector-ae21/rup-flow-docs/actions/workflows/pull-request.yml)

Versioned documentation for rup-flow,
the skill that turns requirements into RUP documentation with any AI coding
agent. It documents the free edition and rup-flow Pro, and marks every page, row and step
that belongs to Pro.

Read it at <https://hector-ae21.github.io/rup-flow-docs/>. The site is versioned
by the free edition's `MAJOR.MINOR`; each approved publication also gets an
immutable `vMAJOR.MINOR.PATCH` tag and a GitHub release.

## What is here

| Path | Content |
| --- | --- |
| `docs/` | The pages: getting started, guides, reference, diagrams, architecture, Pro, releases |
| `mkdocs.yml` | Site structure and theme |
| `overrides/`, `docs/assets/` | Templates, styles, brand and images |
| `scripts/` | Build, release resolution, deployment and quality validation |
| `test/` | Tests of the release and deployment logic |

## Work on the documentation

You need Python 3.13 and Node.js 24.8 or newer.

```bash
python -m venv .venv
.venv/bin/python -m pip install --require-hashes -r requirements.lock
npm ci
npm run verify
```

On Windows the interpreter is `.venv\Scripts\python.exe`. `npm run verify` runs
the Markdown and spelling checks, the release tests, a strict MkDocs build, HTML
and link validation, the privacy scan and the accessibility checks. Serve the
site with `.venv/bin/mkdocs serve`.

## Rules

- Document released behaviour of both editions, in detail.
- Mark everything that belongs to Pro: `edition: pro` and `since` in the front matter of a
  page, and the Pro tag in tables and steps. Pages without the mark describe the free edition.
- Never document behaviour that does not exist.
- Diagrams are PlantUML sources drawn in a light and a dark look; edit the source, not the SVG.
- The catalogue on the comparison page comes from `editions.json` of the skill (private
  repository). Update it there first, then here.
- Examples contain no real credentials or private data.

## Versions

`package.json` declares the documented free version in `rupFlow.version`. The
documentation line is its `MAJOR.MINOR`, and the `docs/releases/index.md` front
matter must agree. The publish workflow runs on pushes to `v0.x`, creates the
immutable tag, deploys with Mike to `gh-pages` and verifies the published pages.

## Security

Report vulnerabilities as described in [SECURITY.md](SECURITY.md). Contributing:
[CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) for the documentation sources and tooling. rup-flow Pro, which
this site describes, is a separate product under its own license.
