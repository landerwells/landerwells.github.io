+++
title = "Variable assignment and initialization in C++"
publishDate = 2026-02-16T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [C++]({{< relref "C++.md" >}})

```cpp
int a;         // default-initialization (no initializer)

// Traditional initialization forms:
int b = 5;     // copy-initialization (initial value after equals sign)
int c ( 6 );   // direct-initialization (initial value in parenthesis)

// Modern initialization forms (preferred):
int d { 7 };   // direct-list-initialization (initial value in braces)
int e {};      // value-initialization (empty braces)
```

By default assignment copies values. Copy initialization is used whenever values
are implicitly copied: passing arguments, by value, returning by value.

List initialization is probably the best and easiest to recommend for modern C++
programming.
