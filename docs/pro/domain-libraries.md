---
title: Domain libraries
description: Thirteen ready starting points for common domains in rup-flow Pro, what each contains, and the lms library in detail.
edition: pro
since: "1.0"
---

# Domain libraries

A domain library is a starting point for a project whose objective matches a known
domain: a ranked domain model, actors, a list of use cases, the entity lifecycles and
the questions to ask before using it. Libraries live in the `domains` folder of the Pro
skill.

Everything in a library is marked *assumed*. The agent adapts it to your objective,
asks you to confirm each rule and moves what is not confirmed to the open questions. It
never presents a library as your requirements.

## Included

| Library | Domain | Lifecycle it draws | Since |
| --- | --- | --- | --- |
| `identity-access` | Users, organisations, memberships, roles and permissions, credentials, sessions, invitations, audit | User account | 1.1 |
| `ecommerce` | Catalogue, cart, orders, payments, shipments, returns | Order | 1.1 |
| `saas-billing` | Plans and prices, subscriptions with trials and seats, metered usage, invoices, dunning | Subscription | 1.1 |
| `booking` | Bookable resources, availability, holds, reservations, cancellations, no-shows | Booking | 1.1 |
| `healthcare-clinic` | Patients, practitioners, appointments, encounters, diagnoses, prescriptions, consent | Appointment | 1.1 |
| `helpdesk` | Tickets, queues, SLA targets, escalation, satisfaction surveys | Ticket | 1.1 |
| `crm` | Leads, accounts, contacts, opportunities through a pipeline, activities, quotes | Opportunity | 1.1 |
| `inventory-warehouse` | Items, warehouses and bins, lots, receipts, picks, transfers, counts | Transfer order | 1.1 |
| `hr-payroll` | Employees, contracts, leave requests and balances, payroll runs, payslips | Leave request | 1.1 |
| `project-management` | Projects, tasks through a workflow, sprints, milestones, dependencies, time logs | Task | 1.1 |
| `banking-wallet` | Customers with KYC, wallet accounts, transfers posted to a double-entry ledger | Transfer | 1.1 |
| `food-delivery` | Restaurants, menus, delivery zones, orders through the kitchen, couriers, tracking | Order | 1.1 |
| `lms` | Learning platforms: courses, enrolment, activities, grading, completion | Enrolment | 1.0 |

`identity-access` is the base of most of the others: offer it alongside any library whose
actors sign in.

## What a library contains

| Part | Content |
| --- | --- |
| `domain-model.puml` | Ranked model with attributes and multiplicities |
| `domain-model-simple.puml` | Entities and relations only |
| `entity-states.puml` | Lifecycle of the main entity; each transition names its use case |
| Entity dictionary | Level, definition and key attributes of each entity |
| Business rules | Testable rules `RN-xxx`, each to be confirmed |
| Actors and use cases | Primary and secondary actors; use cases with their package and the rules they touch, ready for `RUP new use-case` |
| Non-functional concerns | Since 1.1: the regulation, privacy, concurrency and security points of the domain, such as PCI DSS for payments, health data, e-money licences or minors in education, each to be confirmed |
| Questions to ask | What the agent asks before using the library |

The Pro build checks that every library is consistent with its diagrams, and every diagram
renders.

## Example: `lms`

All libraries follow this shape. The agent offers it when the objective mentions courses, enrolment, learners and
teachers, activities, grading or completion.

### Entities

| Entity | Level | Definition |
| --- | --- | --- |
| Enrolment | 1 | A learner's participation in a course |
| Course | 1 | A taught unit with sections and activities |
| Learner | 2 | Person who takes courses |
| Teacher | 2 | Person who runs a course and grades |
| Section | 2 | Ordered block of a course |
| Activity | 3 | Something the learner does |
| Submission | 3 | A learner's attempt at an activity |
| Grade | 3 | Mark given to a submission |
| Category | 4 | Catalogue classification of courses |

### Rules to confirm

- A learner has at most one active enrolment per course.
- A learner can submit only to a course in which the enrolment is active.
- A grade is between zero and the activity's maximum grade.
- A course is completed for a learner when all required activities have an accepted
  grade.
- Only a teacher of the course can grade its submissions.
- A cancelled enrolment keeps its submissions and grades.

### Actors and use cases

Learner, Teacher, Manager and a notification system. The starting use cases are
`enrolInCourse`, `cancelEnrolment`, `submitActivity`, `gradeSubmission`,
`completeCourse`, `publishCourse` and `reviewProgress`, each with its package and the
rules it touches.

### Lifecycle

The enrolment moves from active to cancelled or completed; whether a learner can
re-enrol is a question the library asks.

### Questions it asks before use

1. Can a learner re-enrol after cancelling, or after failing?
2. Is there a pass mark, and is it per activity or per course?
3. Does grading allow several graders or a re-grade, and are previous grades kept?
4. Is enrolment self-service, approved by a teacher or assigned by a manager?
5. Is completion calculated or declared by a teacher?

## Related

[Stack packs and ORM guides](packs.md) · [The complete documentation set](documentation-set.md)
