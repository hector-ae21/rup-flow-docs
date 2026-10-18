---
title: Trust and data flow
description: What rup-flow reads and writes, what it sends over the network and what it never does.
---

# Trust and data flow

rup-flow has no account, no analytics and no remote service of its own.

## On your machine

| It does | Where |
| --- | --- |
| Reads and writes files | Inside the folders you point it at: the documentation directory and `rup.config.json` |
| Sends diagram sources | To the PlantUML server you run locally, `http://127.0.0.1:8085` by default |
| Pulls a container image | The PlantUML image from its public registry, the first time you start the server |

Nothing else is sent anywhere.

## The agent

The AI agent you use with the skill (Claude, Codex, Gemini or another) processes
your prompts and files under that provider's terms and privacy policy, not
rup-flow's.

## The PlantUML container

The bundled compose file publishes the container on `127.0.0.1` only and runs it
with `PLANTUML_SECURITY_PROFILE=SANDBOX`, which blocks file and address access
from diagrams. Do not expose that port to a network without adding
authentication.

## Generated documentation

It contains whatever you or the code contain. Review it before publishing it,
especially output derived from code (paths, configuration, table names).

## Reporting a vulnerability

Use GitHub private vulnerability reporting on the
[rup-flow repository](https://github.com/hector-ae21/rup-flow/security): do not
open a public issue.
