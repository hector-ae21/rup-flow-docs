---
title: Changelog
description: Changes of the free rup-flow skill, release by release. The Pro changelog is in the Pro section.
---

# Changelog

Changes of the free skill. The format follows [Keep a Changelog](https://keepachangelog.com/) and the project uses [Semantic Versioning](https://semver.org/). Pro releases are in the [Pro changelog](../pro/versions.md).

## Unreleased

## 1.0.0

First release of the free edition from a clean history. It turns requirements into a basic RUP documentation set with PlantUML diagrams for any coding agent.

### Added

- The simplified domain model, actors, requirements, the use-case requirements card with its specification statechart, the analysis classes and the open-questions list.
- The CLI: `init`, `new use-case`, `index`, `render`, `check`, `instructions`, `server`, `health`, `config`, `editions` and `version`.
- `editions.json`: a catalogue of every diagram, document, workflow and tool, marked free or Pro. The CLI loads `scripts/pro/index.mjs` when it exists next to it and stops with a message that names Pro for anything outside the edition.
- Instruction targets for fifteen kinds of agent: AGENTS.md, Claude, Gemini, Copilot, Cursor, Windsurf, Cline, Roo Code, Kilo Code, Continue, JetBrains Junie, Amazon Q Developer, Zed, Aider and a portable file for any agent with a shell.
- `install.mjs --dir <folder>` installs the skill into the skills folder of any client.
- Versioned release packages: `rup-flow-free-<version>.zip`.
