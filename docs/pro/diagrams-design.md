---
title: Analysis and design diagrams
description: The collaboration, design classes, sequence, data model, components and deployment diagrams of rup-flow Pro.
edition: pro
since: "1.0"
---

# Analysis and design diagrams

## Analysis collaboration

<div class="rup-diagram" role="region" aria-label="Scrollable diagram: Collaboration of the createOrder use case between the actor, a boundary, a control and two entities" tabindex="0" markdown>

![Collaboration of the createOrder use case between the actor, a boundary, a control and two entities](../assets/gallery/light/collaboration.svg#only-light){ loading=lazy }
![Collaboration of the createOrder use case between the actor, a boundary, a control and two entities](../assets/gallery/dark/collaboration.svg#only-dark){ loading=lazy }

</div>

One per use case: the actor, the boundary used, the control that coordinates and the entities touched, with numbered messages. Boundaries talk only to controls; entities never call upward.

## Design classes

<div class="rup-diagram" role="region" aria-label="Scrollable diagram: Design classes grouped in the api, application, domain and persistence packages" tabindex="0" markdown>

![Design classes grouped in the api, application, domain and persistence packages](../assets/gallery/light/design-classes.svg#only-light){ loading=lazy }
![Design classes grouped in the api, application, domain and persistence packages](../assets/gallery/dark/design-classes.svg#only-dark){ loading=lazy }

</div>

Packages by layer or feature, as recorded in a decision, with the operations each class exposes. Interfaces appear where a dependency must be inverted.

## Design sequence

<div class="rup-diagram" role="region" aria-label="Scrollable diagram: Sequence of createOrder with the failure path for insufficient stock and the transaction boundary" tabindex="0" markdown>

![Sequence of createOrder with the failure path for insufficient stock and the transaction boundary](../assets/gallery/light/sequence.svg#only-light){ loading=lazy }
![Sequence of createOrder with the failure path for insufficient stock and the transaction boundary](../assets/gallery/dark/sequence.svg#only-dark){ loading=lazy }

</div>

Messages between concrete design elements, including the failure path as an alt block and the transaction boundary as a note. It must follow the same paths as the specification.

## Data model

<div class="rup-diagram" role="region" aria-label="Scrollable diagram: Data model with the order, order_line and product tables, their keys and foreign keys" tabindex="0" markdown>

![Data model with the order, order_line and product tables, their keys and foreign keys](../assets/gallery/light/data-model.svg#only-light){ loading=lazy }
![Data model with the order, order_line and product tables, their keys and foreign keys](../assets/gallery/dark/data-model.svg#only-dark){ loading=lazy }

</div>

Tables or collections with keys, relations and constraints, mapped from the entities and listed with that mapping. Lines are drawn for foreign keys only.

## Components

<div class="rup-diagram" role="region" aria-label="Scrollable diagram: Components grouped by layer with the interfaces they provide and require" tabindex="0" markdown>

![Components grouped by layer with the interfaces they provide and require](../assets/gallery/light/components.svg#only-light){ loading=lazy }
![Components grouped by layer with the interfaces they provide and require](../assets/gallery/dark/components.svg#only-dark){ loading=lazy }

</div>

Components grouped by layer, the interfaces they provide and require, and which component implements each interface. Dependencies point at interfaces, not at implementations.

## Deployment

<div class="rup-diagram" role="region" aria-label="Scrollable diagram: Deployment of the application node and the database" tabindex="0" markdown>

![Deployment of the application node and the database](../assets/gallery/light/deployment.svg#only-light){ loading=lazy }
![Deployment of the application node and the database](../assets/gallery/dark/deployment.svg#only-dark){ loading=lazy }

</div>

Nodes, containers, external systems and the protocols on the links.

## Related

[The complete documentation set](documentation-set.md) · [RUP to code](rup-to-code.md)
