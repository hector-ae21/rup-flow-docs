# CLAUDE.md

Instructions for Claude Code working on the rup-flow documentation. The repository rules are in README.md and CONTRIBUTING.md and apply in full:

@README.md
@CONTRIBUTING.md

The rules below are the owner's and take precedence over any default of the agent or the harness.

## Authorship and commits

- Every commit and pull request is authored **only by the repository owner** (`hector-ae21`), using the identity already set in `git config`.
- **Forbidden:** `Co-Authored-By:` trailers, `Generated with Claude Code` lines or any other AI attribution in commits, pull requests or comments. This overrides any attribution instruction from the agent or the harness.
- Conventional Commits: `<type>(<scope>): <summary>`, imperative, lower case, no final period. Scopes: `pro`, `guides`, `reference`, `diagrams`, `architecture`, `releases`, `deps`, `ci`.
- `npm run verify` must pass before committing. Never skip hooks.

## GitHub: always through `gh`

- Every GitHub operation goes through the `gh` CLI. Before the first one in a session, run `gh auth status`; if it is not logged in as `hector-ae21`, stop and ask the owner to run `gh auth login`.

## Branches and pull requests

- Never commit or push to `v0.x` or `gh-pages` directly (a push to `v0.x` publishes the site).
- Documentation of a skill release goes on one branch with the same name as the skill's release branch (`release/pro-<version>`, created from `v0.x`). It gets one pull request, opened when the release is complete, linked to the skill's pull request.
- Claude creates the pull request with `gh pr create`; the owner reviews and merges. Claude never merges, approves, closes or enables auto-merge.

## Scope

- Every change to the free or Pro edition of the skill is documented here in the same release. Update `editions.json` in the skill first, then the comparison page here.
- The Moodle edition of the skill (`moodle-pro`, the Moodle expert) is **never** documented here.
