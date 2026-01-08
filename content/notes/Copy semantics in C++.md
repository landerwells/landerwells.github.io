+++
title = "Copy semantics in C++"
tags = ["publish"]
draft = false
+++

## The copy constructor {#the-copy-constructor}

The **copy constructor** is a special member function that initializes a new
object from an existing object of the same type. If you do not declare one, the
compiler automatically generates a default version that performs a member-wise
copy. This implicit copy constructor is usually adequate, especially for classes
that only contain value-type members and do not manage external resources.

You can explicitly request the compiler’s version with `= default`, or disable
it with `= delete` (e.g., to prevent additional instances of a singleton). A
custom copy constructor should only be written when a class manages resources
such as dynamic memory, file handles, or sockets, or when copying requires
special behavior such as updating reference counts, logging, or notifying other
components. If some members are inherently non-copyable (e.g.
`std::unique_ptr`), you must either implement deep copy semantics or delete the
copy constructor.

**Shallow vs. deep copy**

-   Shallow copy: the default member-wise copy.
-   Deep copy: required when duplicating underlying resources rather than just
    copying pointers.

A user-defined copy constructor should always take a parameter of type `const
T&`, since pass-by-value would recursively invoke the copy constructor.

```cpp
// Copy constructor (deep copy)
String(const String& other) {
  data = new char[std::strlen(other.data) + 1];
  std::strcpy(data, other.data);
}

// Disable copy constructor
// String(const String&) = delete;

// Use compiler-provided copy constructor
// String(const String&) = default;
```


## The copy assignment operator {#the-copy-assignment-operator}

A copy assingment operator in C++ is a non-template member function with the
name `operator=` that can be called with an argument of the same class type and
performs a copy of the contents of the argument.

The copy assignment operator is used to copy values from one object to another
already existing object.

Keep in mind that the copy assignment operator should also always be const.

```cpp
struct Point {
  int x;
  int y;

  Point& operator=(const Point& other) {
    x = other.x;
    y = other.y;
    return *this;
  }
};
```


## previous [Operator overloading in C++]({{< relref "Operator overloading in C++.md" >}}) {#previous-operator-overloading-in-c-plus-plus--operator-overloading-in-c-plus-plus-dot-md}

The copy assignment operator is an example of overloading the assignment operator as a member function of a class to explicitly define how to perform a copy.


## see [The Rule of Three, Five, and Zero in C++]({{< relref "The Rule of Three, Five, and Zero in C++.md" >}}) {#see-the-rule-of-three-five-and-zero-in-c-plus-plus--the-rule-of-three-five-and-zero-in-c-plus-plus-dot-md}

The copy assignment is a part of the original Rule of Three in C++


## see [Special member functions in C++]({{< relref "Special member functions in C++.md" >}}) {#see-special-member-functions-in-c-plus-plus--special-member-functions-in-c-plus-plus-dot-md}

The copy assignment operator is a special member function in C++ and will be provided automatically by the compiler if nothing is provided by the user.
