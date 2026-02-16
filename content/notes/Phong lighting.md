+++
title = "Phong lighting"
publishDate = 2026-02-14T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Graphics programming]({{< relref "Graphics programming.md" >}})

The Phong lighting model consists of 3 components: ambient, diffuse, and
specular lighting.

Ambient lighting is just the base level of ligthing an object receives, from
"all" light sources, even if there aren't any, an object will still be lit with
the ambient light source. Generally this is accomplished by dimming all objects
by a set value.
