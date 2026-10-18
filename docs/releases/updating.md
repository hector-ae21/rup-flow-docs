---
title: Update rup-flow
description: Move to a newer rup-flow release without touching your documentation.
---

# Update rup-flow

Your documentation and `rup.config.json` live in your project. The skill lives in
its own folder, so updating it never rewrites your documents.

## Claude Code

```console
claude plugin marketplace update rup-flow
claude plugin update rup-flow@rup-flow
```

## Other clients

Run the installer again from an updated clone. It refuses to overwrite an
existing install unless you pass `--force`, and it keeps a backup:

```console
git pull
node install.mjs --target agents --force
```

## Claude on the web

Upload the new `rup-flow-skill.zip` from the
[latest release](https://github.com/hector-ae21/rup-flow/releases/latest).

## After updating

1. Read the [changelog](changelog.md) for the versions you skipped.
2. Run `check` on a project.
3. Run `index` once; the use-case index is regenerated from the cards.

## Between 0.3 and 0.4

Version 0.4 split the project into a free edition and rup-flow Pro. If you used
themes, Mermaid, the explorer, code scanning, design, implementation or
traceability artifacts with 0.3, those are part of Pro now. Files you already
generated stay in your project; the free `check` keeps working on them. Releases
up to 0.3.3 remain available under the MIT license they were published with.
