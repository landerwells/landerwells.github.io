+++
title = "Quaternion"
publishDate = 2026-01-31T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Transform]({{< relref "Transform.md" >}})

A quaternion is a mathematical concept that is incredibly useful in [graphics
programming]({{< relref "Graphics programming.md" >}}) and [game development]({{< relref "Game development.md" >}}). Just as complex numbers form a two-dimensional
number system over the reals, quaternions form a four-dimensional number system
over the reals.


## Multiplication {#multiplication}

Comparing quaterions again to complex numbers, multiplication provides a
rotation in three-dimensional space. For instance, `q * v` rotates the vector
`v` by the rotation represented by `q`.
