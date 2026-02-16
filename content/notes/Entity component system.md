+++
title = "Entity component system"
publishDate = 2026-01-31T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Bevy]({{< relref "Bevy.md" >}})

Entity component sysetm (ECS) is a design pattern that involves breaking a
program up into entities, components, and systems. Entities are unique things
which are assigned components, and then processed using systems.

An entity is an ID. A component is a stuct of data. A system is the logic that
operates on the components.
