+++
title = "Transform"
publishDate = 2026-01-31T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Bevy]({{< relref "Bevy.md" >}})

A tranform is a primitive component in game programming for representing an
object's position. They are used in most game engines and are a good abstraction
for handling the behvavior of an object.

Tranforms generally contain three pieces: position, rotation, and scale.
Position and scale are represeted with vectors, and rotation is represented with
a quaternion.

```cpp
class Transform
{
  glm::vec3 position;
  glm::quat rotation;
  glm::vec3 scale;
}
```
