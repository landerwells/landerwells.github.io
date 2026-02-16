+++
title = "References in C++"
publishDate = 2026-02-16T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [C++]({{< relref "C++.md" >}})

Added in C++11 was the distinction between lvalue and rvalue references, which
enabled the possibility of many new features mainly [move semantics]({{< relref "Move semantics in C++.md" >}}). References
are not objects, they are typically implemented as pointers underneath, and
their primary purpose is to serve as an alias for another value. They are
supplied with more safety constraints and better syntax than raw pointers. That
said, they do also suffer from issues like dangling that pointers do.
