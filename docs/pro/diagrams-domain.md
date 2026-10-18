---
title: Domain model diagrams
description: The ranked domain model and the entity lifecycles of rup-flow Pro.
edition: pro
since: "1.0"
---

# Domain model diagrams

The free edition draws entities and relations. Pro draws the same model **ranked by importance**, with the attributes that matter and the multiplicity of every relation, and adds the lifecycle of the entities whose state changes behaviour.

## Ranked domain model

<div class="rup-diagram" role="region" aria-label="Scrollable diagram: The domain model of the online shop in four levels: Order at the core, Customer and OrderLine below, Product and Address as detail" tabindex="0" markdown>

![The domain model of the online shop in four levels: Order at the core, Customer and OrderLine below, Product and Address as detail](../assets/gallery/light/domain-model.svg#only-light){ loading=lazy }
![The domain model of the online shop in four levels: Order at the core, Customer and OrderLine below, Product and Address as detail](../assets/gallery/dark/domain-model.svg#only-dark){ loading=lazy }

</div>

- One package per level, level 1 on top, tagged so the palette colors the bands.
- Relations point downwards where the meaning allows; a relation that points upwards is legitimate but is a signal to re-check the levels.
- Multiplicities on every relation, and composition only when the part cannot live without the whole.
- Attributes that carry business meaning or that a use case needs. Trivial ones are omitted and the README says so in an "omitted attributes and why" column.
- Hidden links hold the order of the bands and of the entities inside one band, so the diagram reads the same after every change.

## Entity lifecycles

<div class="rup-diagram" role="region" aria-label="Scrollable diagram: The lifecycle of an entity: Draft, Active and Archived" tabindex="0" markdown>

![The lifecycle of an entity: Draft, Active and Archived](../assets/gallery/light/entity-states.svg#only-light){ loading=lazy }
![The lifecycle of an entity: Draft, Active and Archived](../assets/gallery/dark/entity-states.svg#only-dark){ loading=lazy }

</div>

Only entities whose state changes behaviour get one. Each transition names the use case that causes it, so the lifecycle and the use cases cannot drift apart.

## Related

[The complete documentation set](documentation-set.md) · [Themes](themes.md) · [Diagram conventions](../diagrams/conventions.md)
