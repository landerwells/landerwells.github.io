+++
title = "Special member functions in C++"
publishDate = 2026-02-10T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [C++]({{< relref "C++.md" >}})

In C++, special member functions are the functions that the compiler can
automatically generate for a class if you don’t declare them yourself. They are
responsible for the core object lifecycle and copying/moving behavior. Here’s
the full list:

Constructors in C++ are a special member function that is automatically called
after a non-aggregate type is created.

Destructors are meant for when an object is being destroyed There is one special
member fucntion that if defined will not prevent the others from being
implicitly defined by the compiler That is the constructor, I would like some
more information about this? what is happening, does defining a copy constructor
prevent there from implicitly defining a move

```cpp
class Example {
    // Default constructor
    Example();
    // Destructor
    ~Example();
    // Copy constructor
    Example(const Example& example);
    // Copy assignment operator
    Example& operator=(const Example& example);
    // Move constructor
    Example(Example&& example);
    // Move assignment operator
    Example& operator=(Example&& example);
};
```
