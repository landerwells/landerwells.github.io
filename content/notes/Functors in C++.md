+++
title = "Functors in C++"
publishDate = 2026-02-22T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [C++]({{< relref "C++.md" >}}), [Lambda expressions in C++]({{< relref "Lambda expressions in C++.md" >}})

Functors in C++ are classes or structs that overload `operator()`, allowing
instances to be called like regular functions. Because they are objects, they
can carry state between calls, which is something a plain function cannot do.
Under the hood, lambda expressions are simply compiler-generated functors.
