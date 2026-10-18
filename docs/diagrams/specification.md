---
title: Use-case specification
description: The statechart that holds the behaviour of a use case, how to draw it and how to read it.
---

# Use-case specification

The specification is the behaviour source of truth of a use case: a statechart
of the conversation between the actor and the system. The card describes the
same paths in words; if they diverge, the specification wins and the card is
corrected.

<div class="rup-diagram" role="region" aria-label="Scrollable UML statechart of the createOrder use case" tabindex="0" markdown>

![Statechart of the createOrder use case: Basket, Checkout, Validating and Placed](../assets/gallery/light/specification.svg#only-light)
![Statechart of the createOrder use case: Basket, Checkout, Validating and Placed](../assets/gallery/dark/specification.svg#only-dark)

</div>

## Source

```text
@startuml
!theme plain
skinparam linetype polyline
hide empty description

state "createOrder" as createOrder {
  state " " as Basket
  state " " as Checkout
  state " " as Validating
  state " " as Placed

  [*] --> Basket
  Basket --> Checkout : Customer checks out
  Checkout --> Validating : Customer confirms
  Validating --> Checkout : System reports a problem
  Validating --> Placed : System creates the order
  Placed --> [*]

  note on link
    Actor: asks to check out
    System: shows lines, totals and the address form
  end note
}

@enduml
```

## Conventions

- A composite state named after the use case; inner states have no visible label.
- Transitions are the events of the conversation.
- Notes on transitions narrate what the actor does and what the system answers.
- Error and cancel paths are explicit transitions.
- `skinparam linetype polyline`.

## Checklist

- The main flow reaches the goal and every step has a system response.
- Every input and every precondition has a failure path.
- The paths match the flows in the card.

!!! pro "In Pro"

    Pro adds the wireframes of the screens of the flow, the analysis
    collaboration and the design sequence for the same use case, each linked from
    the card. See the [catalogue](index.md).
