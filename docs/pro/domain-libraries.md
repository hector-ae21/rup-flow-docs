---
title: Domain libraries
description: Ready starting points for common domains in rup-flow Pro, and the lms library in detail.
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

| Library | Domain |
| --- | --- |
| `lms` | Learning platforms: courses, enrolment, activities, grading, completion |

More libraries are announced in the [Pro changelog](versions.md).

## `lms`

The agent offers it when the objective mentions courses, enrolment, learners and
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

[Stack packs](packs.md) · [The complete documentation set](documentation-set.md)
