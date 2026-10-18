---
title: Update rup-flow
description: Move to a newer rup-flow release, free or Pro, without touching your documentation.
---

# Update rup-flow

Your documentation and `rup.config.json` live in your project. The skill lives in its own
folder, so updating it never rewrites your documents.

## Steps

1. Read the changelog for the versions you skipped: [free](changelog.md) and, for Pro,
   [Pro](../pro/versions.md).
2. Download the new package, `rup-flow-free-<version>.zip` or `rup-flow-pro-<version>.zip`.
3. Unzip it over the old skill folder, or replace the folder. Keep the same skills folder
   your agent already reads.
4. Run `RUP version` to confirm the version and `RUP check` on a project.
5. Run `RUP index` once; the use-case index is regenerated from the cards.

On Claude on the web, upload the new ZIP in **Customize → Skills**.

## Agents that read an instruction file

Run `instructions` again for each target. It replaces only the delimited block, so the
rest of the file stays as you wrote it:

```console
RUP instructions --target cursor,windsurf
```

## From the 0.x releases

Earlier releases of rup-flow were distributed differently and included features that are
now part of rup-flow Pro: themes, Mermaid, the explorer, code scanning, design,
implementation and traceability artifacts. Version 1.0 starts a clean line with two
editions. Files you generated before stay in your project and the free `check` keeps
working on them; to keep producing those artifacts, use rup-flow Pro.
