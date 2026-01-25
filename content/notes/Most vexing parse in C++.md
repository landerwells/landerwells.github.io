+++
title = "Most vexing parse in C++"
tags = ["publish"]
draft = false
+++

Previous: [C++]({{< relref "C++.md" >}})

The _most vexing parse_ phenomenon is a syntactic ambiguity resolution that can
stump unassuming programmers who have not encountered it before (and even those
who have). It says that any statement that fits the criteria to be a function
declaration will be.

For instance:

```cpp
Widget f();
```

This piece of code may look like it is going to call the default constructor
with no arguments, but it is instead declaring `f()` that returns a `Widget`.
Direct initialization (using braces) can help prevent this.
