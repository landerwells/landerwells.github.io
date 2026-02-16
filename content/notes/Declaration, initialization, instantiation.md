+++
title = "Declaration, initialization, instantiation"
publishDate = 2026-02-16T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Variable assignment and initialization in C++]({{< relref "Variable assignment and initialization in C++.md" >}})

Declaration: Telling the compiler that a variable or object exists, specifying
its type. No memory for the actual value is necessarily allocated (depends on
context). Example:

-   int x;
-   Foo\* p;

Initialization: Assigning an initial value to a variable or object. Happens
after declaration or at the same time. Example:

-   int x = 5;
-   Foo obj(10);

Instantiation: Creating an instance of a class (an actual object). Involves
memory allocation for the object. Example:

-   Foo obj;        (stack allocation)
-   Foo\* p = new Foo();  (heap allocation)
