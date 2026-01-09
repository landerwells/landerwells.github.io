+++
title = "Shader"
tags = ["publish"]
draft = false
+++

Previous: [Graphics programming]({{< relref "Graphics programming.md" >}})

A shader is a small program that is specifically meant to be run on the GPU to
take advantage of its massive parallel compute. There are many different kinds
of shaders but the most important two for game development are the vertex and
fragment shader.

These two both play massive parts in the rendering pipeline. The vertex shader
runs upon the GPU receiving information such as vertex data from the application
running on the CPU. The fragment shader runs later in the rendering pipeline and
is purely responsible for coloring each of the pixels on the screen.
