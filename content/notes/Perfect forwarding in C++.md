+++
title = "Perfect forwarding in C++"
publishDate = 2026-02-03T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Forwarding references in C++]({{< relref "Forwarding references in C++.md" >}})

Perfect forwarding is a technique where a forwarding reference is passed to
another function using `std::forward`. This action preserves the value category
of the original argument allowing for proper semantics to be invoked and
compiler optimization.
