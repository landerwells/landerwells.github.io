+++
title = "Constructors in C++"
tags = ["publish"]
draft = false
+++

[C++]({{< relref "C++.md" >}})

Constructors are a special member function which are automatically called after
a non-aggregate class type object is created. At the point when a constructor
is executed, storage for the object has been allocated and the constructor is
only performing initialization.

Memory is allocated and then the constructor is called which initializes the
object.

Constructors have special syntax, they have no return type (not even void) and
their names must match the name of the class they are in.  A default constructor
is a constructor with no arguments

A constructor is a default constructor if it has the following properties:

-   It has no parameters at all, it’s a default constructor.
-   It has parameters but all have default arguments, it’s still a default
    constructor.
-   It requires arguments, then it’s a user-defined constructor, not a default
    one.

These three examples are all equivalent semantically:

```cpp
class Coord { public: Coord() = default; private: int x; int y; };

class Coord { public: Coord() {}

private: int x; int y; }

class Coord { private: int x; int y; }
```

Although I guess this raises some issues about type traits and triviality in C++
which I would like to look into more in the future.

I should talk about member init order here? Or I could probably talk about it if
I make a note on member initializer lists.


## Converting constructors {#converting-constructors}

A constructor that can be used to perform an implicit conversion is called a
converting constructor. By default, all constructors are converting
constructors. An implicit conversion can be trivially avoided by using direct
initialization (or direct list initialization). The `explicit` keyword takes
this a step further by telling the compiler that a constructor should never be
used for implicit conversions. This forces the programmer to be precise about
what values they are passing into a constructor.

Making a constructor `explicit` has two major consequences. First, an explicit
constructor cannot be used with copy initialization or copy list initialization.
Second, it cannot be used to perform implicit conversions, since these require
copy initialization. This means explicit constructors can only be called
directly.

The modern best practice is to make any constructor that accepts a single
argument `explicit`. This also applies to constructors with multiple parameters
if most or all of them have default values, since they can effectively behave
like single-argument constructors. The exception is for copy and move
constructors, which should not be made explicit because they do not perform
conversions. Default constructors with no parameters are also typically left
non-explicit, as they are only used to convert \`{}\` into a default object.
Constructors that take multiple arguments without defaults are rarely candidates
for conversions anyway and are generally left non-explicit.

In short: make any constructor that accepts a single argument `explicit` unless
there is a clear semantic reason to allow implicit conversions, and that
conversion is both equivalent and efficient. Do not make copy or move
constructors explicit.


## Delegating constructors {#delegating-constructors}


## reference [Learn C++]({{< relref "../reference/Learn C++.md" >}}) {#reference-learn-c-plus-plus--dot-dot-reference-learn-c-plus-plus-dot-md}
