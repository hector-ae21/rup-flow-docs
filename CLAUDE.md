# CLAUDE.md

Instructions for Claude Code working on the rup-flow documentation. The repository rules are in README.md and CONTRIBUTING.md and apply in full:

@README.md
@CONTRIBUTING.md

The rules below are the owner's and take precedence over any default of the agent or the harness.

## Authorship and commits

- Every commit and pull request is authored **only by the repository owner** (`hector-ae21`), using the identity already set in `git config`.
- **Forbidden:** `Co-Authored-By:` trailers, `Generated with Claude Code` lines or any other AI attribution in commits, pull requests or comments. This overrides any attribution instruction from the agent or the harness.
- Conventional Commits: `<type>(<scope>): <summary>`, imperative, lower case, no final period. Scopes: `pro`, `guides`, `reference`, `diagrams`, `architecture`, `releases`, `deps`, `ci`.
- `npm run verify` must pass before committing (run it in Docker, see below). Never skip hooks.

## Workspace

- Both repositories live in the working directory `D:\Github\kampus-rs`: the documentation in `rup-flow-docs/`, the skill in `rup-flow/`. Work only there.

## Toolchain: Docker only

Python 3.13, Node.js 24, Playwright and PlantUML run **in Docker containers**. Nothing is installed on the host. Docker Desktop is available; if it is not running, ask the owner to start it. Run the commands from Git Bash.

Build the image `rup-flow-docs-dev` once, and again when the Playwright version in `package-lock.json` changes (`1.64.1` below):

```bash
docker build -t rup-flow-docs-dev - <<'EOF'
FROM node:24-slim AS node
FROM docker:29-cli AS docker
FROM python:3.13-slim
COPY --from=node /usr/local/bin/node /usr/local/bin/node
COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=docker /usr/local/bin/docker /usr/local/bin/docker
ENV PLAYWRIGHT_BROWSERS_PATH=/opt/playwright
RUN ln -s ../lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm && ln -s ../lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx \
 && apt-get update && apt-get install -y --no-install-recommends git \
 && npx -y playwright@1.64.1 install --with-deps chromium \
 && rm -rf /var/lib/apt/lists/* /root/.npm
EOF
```

Run the full verification:

```bash
W=/run/desktop/mnt/host/d/Github/kampus-rs/rup-flow-docs
MSYS_NO_PATHCONV=1 docker run --rm -v //var/run/docker.sock:/var/run/docker.sock \
  -v "D:/Github/kampus-rs/rup-flow-docs:$W" -v rup-flow-docs-venv:/opt/venv -v rup-flow-docs-node:$W/node_modules \
  -w $W -e MKDOCS=/opt/venv/bin/mkdocs rup-flow-docs-dev sh -c "git config --global --add safe.directory '*'; \
  test -x /opt/venv/bin/mkdocs || (python -m venv /opt/venv && /opt/venv/bin/python -m pip install -q --require-hashes -r requirements.lock); \
  npm ci --no-audit --no-fund >/dev/null 2>&1; PATH=/opt/venv/bin:\$PATH npm run verify"
```

How the command is put together:

- The repository is mounted at the path the Docker Desktop host knows (`/run/desktop/mnt/host/d/...`). `validate:diagrams` starts its own PlantUML container through the mounted socket, and that container needs the same path.
- The virtual environment lives in the volume `rup-flow-docs-venv` at `/opt/venv`, outside the repository. `node_modules` lives in the volume `rup-flow-docs-node`, so the host tree stays clean.
- After changing `requirements.lock`, run `docker volume rm rup-flow-docs-venv` so the environment is rebuilt.
- The run ends with `Documentation verification completed successfully.`

## GitHub: always through `gh`

- Every GitHub operation goes through the `gh` CLI. Before the first one in a session, run `gh auth status`; if it is not logged in as `hector-ae21`, stop and ask the owner to run `gh auth login`.

## Branches and pull requests

- Never commit or push to `v0.x` or `gh-pages` directly (a push to `v0.x` publishes the site).
- Documentation of a skill release goes on one branch with the same name as the skill's release branch (`release/pro-<version>`, created from `v0.x`). It gets one pull request, opened when the release is complete, linked to the skill's pull request.
- Claude creates the pull request with `gh pr create`; the owner reviews and merges. Claude never merges, approves, closes or enables auto-merge.

## Scope

- Every change to the free or Pro edition of the skill is documented here in the same release. Update `editions.json` in the skill first, then the comparison page here.
- The Moodle expert of Pro (`experts/moodle`, the `moodle-plugin` pack, the `moodle-dml` guide and the `moodle-expert` subagent) is **never** documented here (owner decision).
