+++
title = "The rule of three, five, and zero in C++"
publishDate = 2026-02-10T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Copy semantics in C++]({{< relref "Copy semantics in C++.md" >}}), [Move semantics in C++]({{< relref "Move semantics in C++.md" >}})

The rule of three, five, and zero in C++ are guidelines that help determine
which [special member functions]({{< relref "Special member functions in C++.md" >}}) a class should implement. The rule of three
originally stated that if a class implemented a custom destructor, copy
constructor, or copy assignment operator, then it should probably implement the
other two.

This was updated to the rule of five in C++11 due to the addition of move
semantics, adding the move constructor and the move assignemnt operator to the
rule of three.

Finally, the rule of zero is almost the opposite of these, saying classes who
don't manage a resource should implement none of these functions, letting the
compiler implicitly generate them.
