+++
title = "Auto keyword in C++"
publishDate = 2026-02-18T00:00:00-06:00
tags = ["publish"]
draft = false
+++

The `auto` keyword has existed since the earliest versions of C++, but its
modern meaning was introduced in C++11. Originally, auto specified automatic
storage duration, which was the default for local variables and rarely used. In
C++11 and later, `auto` allows the compiler to deduce the type of a variable
from its initializer.

The use of `auto` defers type deduction to the compiler, allowing you to avoid
explicitly writing out the type of the data being assigned. This is useful for
simplifying code, especially when dealing with complex types such as iterators
or lambda expressions.

Auto type deduction generally follows the same rules as template type deduction.
One key difference is that when auto is used with a braced initializer list, the
deduced type is std::initializer_list&lt;T&gt;. Template type deduction does not treat
braced initializer lists the same way and cannot deduce a type from them.
