+++
title = "Destructors in C++"
author = ["Lander Wells"]
tags = ["publish"]
draft = false
+++

[C++]({{< relref "C++.md" >}})

Destructors in C++ are special member functions that handle cleanup when an
object goes out of scope or is explicitly deleted. They release resources such
as memory, file handles, or network connections and perform necessary teardown
tasks.

If a destructor is not declared, the compiler provides a default one. For simple
classes without resource management, the default is usually sufficient.

A destructor should generally be public and virtual, or protected and
non-virtual. Classes that manage resources often need explicit cleanup before
destruction.


## Destructors and Access Specifiers {#destructors-and-access-specifiers}


### Virtual Destructors {#virtual-destructors}

```cpp
class Base {
public:
    virtual ~Base() { std::cout << "Base destroyed\n"; }
};

class Derived : public Base {
public:
    ~Derived() { std::cout << "Derived destroyed\n"; }
};

Base* ptr = new Derived();
delete ptr; // Calls Derived::~Derived(), then Base::~Base()
```

Without a virtual destructor, only \`Base::~Base()\` would be called, causing
incomplete cleanup.


### Protected Destructors {#protected-destructors}

Use a protected, non-virtual destructor when the class is intended as a base but
not meant for polymorphic deletion. This prevents accidental deletion through
base pointers.

```cpp
class NonPolymorphicBase {
protected:
    ~NonPolymorphicBase() = default;
};

class Derived : public NonPolymorphicBase {
public:
    ~Derived() { std::cout << "Derived destroyed\n"; }
};

Derived d; // OK
NonPolymorphicBase* b = &d;
// delete b; // Error: destructor is protected
```


### Public Destructors {#public-destructors}

Use a public destructor when objects are meant to be created and destroyed
normally and no polymorphism is involved.

```cpp
class Regular {
public:
    ~Regular() { std::cout << "Destroyed\n"; }
};
```

| Scenario                                | Destructor Type             | Rationale                                        |
|-----------------------------------------|-----------------------------|--------------------------------------------------|
| Class used polymorphically              | \`public virtual ~Class()\` | Ensures correct destruction through base pointer |
| Base class not for polymorphic deletion | \`protected ~Class()\`      | Prevents unsafe deletion through base pointer    |
| Concrete, standalone class              | \`public ~Class()\`         | Normal destruction, no polymorphism needed       |


## see [Special member functions in C++]({{< relref "Special member functions in C++.md" >}}) {#see-special-member-functions-in-c-plus-plus--special-member-functions-in-c-plus-plus-dot-md}


## see [Access specifiers in C++]({{< relref "Access specifiers in C++.md" >}}) {#see-access-specifiers-in-c-plus-plus--access-specifiers-in-c-plus-plus-dot-md}
