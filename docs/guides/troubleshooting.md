---
title: Troubleshooting
description: Messages you can meet in the free edition and what to do about them.
---

# Troubleshooting

## The server is not reachable

`PlantUML server not usable at http://127.0.0.1:8085`. Start Docker, then run
`server up` and `health`. If the port is taken, change `plantuml.url` in
`rup.config.json` (the port in it is the one the container publishes).

## `docker compose failed. Is Docker running?`

Docker Desktop or the Docker daemon is stopped. Start it and retry.

## A diagram fails to render

`PlantUML reported a syntax error in this diagram` names the file in the render
report. Fix the source; do not paste colors or `!include` lines, the server is
sandboxed.

## `... is part of rup-flow Pro`

You asked for something this edition does not include: a theme, Mermaid, PNG
previews, the explorer, `scan` and the Pro documents. The message includes the
address of the Pro page. See [Free and Pro compared](../pro/compare.md).

## Output directory not found

`check` needs the structure first. Run `init`.

## The agent invents things

Remind it of the rules: mark every statement as confirmed, assumed or open, and
send unknown rules to `open-questions.md`. If it improvises past what the free
edition provides, tell it to name what is missing instead.

## Paths with spaces on Windows

Quote them: `--root "C:\My Projects\shop"`.
