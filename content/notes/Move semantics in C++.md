+++
title = "Move semantics in C++"
author = ["Lander Wells"]
tags = ["publish"]
draft = false
+++

[C++]({{< relref "C++.md" >}})

Move semantics were introduced in C++11 as an optimization for efficiently
transferring ownership of resources between objects. Before their introduction,
copying temporary objects would invoke copy semantics, resulting in an
unnecessary deep copy of data, followed by destruction of the temporary.

C++11 clarified the distinction between **lvalues** and **rvalues**, enabling the
implementation of move semantics. With the addition of ****rvalue references****
(\`T&amp;&amp;\`), the language gained the ability to identify temporary (expiring)
objects and **move** their resources instead of copying them.

A move operation typically involves **stealing** the internal resources (e.g.,
pointers to dynamic memory) from one object and transferring them to another,
leaving the source object in a valid but unspecified state.

The presence of any user-defined destructor, copy constructor, or copy
assignment operator suppresses the compiler’s implicit generation of move
constructors and move assignment operators.


## Move Constructor {#move-constructor}

The move constructor is similar to the copy constructor but takes an ****rvalue
reference**** instead of a const lvalue reference. It enables the efficient
transfer of resources from a temporary object to a new one.

```cpp
class Object {
public:
    Object(Object&& other) noexcept {
        // Transfer ownership of resources
        this->data = other.data;
        other.data = nullptr;
    }
};
```

Using \`noexcept\` is recommended for move constructors, as it allows standard
containers and algorithms to use them safely during optimizations (e.g.,
\`std::vector\` reallocation).


## Move Assignment Operator {#move-assignment-operator}

The move assignment operator is declared like the copy assignment operator,
except it accepts an rvalue reference. It transfers ownership of resources from
one existing object to another.

```cpp
class Object {
public:
    Object& operator=(Object&& other) noexcept {
        if (this != &other) {
            // Clean up current resources
            delete this->data;

            // Transfer ownership
            this->data = other.data;
            other.data = nullptr;
        }
        return *this;
    }
};
```

Like the move constructor, it should typically be marked \`noexcept\`.


## see [References in C++]({{< relref "References in C++.md" >}}) {#see-references-in-c-plus-plus--references-in-c-plus-plus-dot-md}
