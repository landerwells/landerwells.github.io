+++
title = "Inheritance in C++"
publishDate = 2026-02-22T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Object-oriented programming]({{< relref "Object-oriented programming.md" >}}), [C++]({{< relref "C++.md" >}})

Inheritance allows a derived class to acquire the properties and behaviors of a
base class. It is a core concept of object-oriented programming and a prime
example of subtype polymorphism. The following are not inherited from the base
class: constructors, destructors, overloaded operators, and friend functions.

```cpp
class Animal {
public:
    string name;
    virtual void speak() { cout << "..."; }
};

class Dog : public Animal {
public:
    void speak() override { cout << "Woof!"; }
};
```


## Virtual Inheritance {#virtual-inheritance}

When a member function is marked `virtual`, the compiler generates a vtable
(virtual table) for the class and attaches a vpointer to each instance. At
runtime, function calls are dispatched through the vtable, allowing the correct
overridden method to be called regardless of the pointer type. This is known as
dynamic dispatch.

To override a base class function in a derived class, the base must mark it
`virtual`. The derived class should then use the `override` specifier to make
the intent explicit and catch errors at compile time.

See [Access specifiers in C++]({{< relref "Access specifiers in C++.md" >}}) for details on how `public`, `protected`, and
`private` inheritance affect member visibility in derived classes.
