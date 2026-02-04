+++
title = "Forwarding references in C++"
publishDate = 2026-02-03T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [C++]({{< relref "C++.md" >}})

Forwarding references (also known as "universal references") can bind to both
lvalues and rvalues. The syntax is generally the same as rvalue references
`T&&`, but they arise in two specific contexts: function template parameters,
and `auto` declarations. Both cases have to deal with type deduction. Form must
be `T&&` precisely, and type deduction must occur, otherwise `T&&` denotes
an rvalue reference.

Example:

```cpp
void f(Widget&& param);  // rvalue reference

auto&& var2 = var1;  // unversal reference

template<typename T>
void f(T&& param);       // universal reference
```
