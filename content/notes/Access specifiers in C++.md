+++
title = "Access specifiers in C++"
publishDate = 2026-02-18T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [C++]({{< relref "C++.md" >}})

In C++, access specifiers control how class, struct, or union members can be
accessed from outside the class or by derived types. The three available
specifiers are public, protected, and private.

Public and private are the most commonly used, while protected is mainly
relevant in inheritance hierarchies. It allows derived classes to access certain
members while still hiding them from outside code.

The following table summarizes the accessibility rules:

| Access Level | Accessible by Class Itself | Accessible by Derived Classes | Accessible by External Code |
|--------------|----------------------------|-------------------------------|-----------------------------|
| Public       | yes                        | yes                           | yes                         |
| Protected    | yes                        | yes                           | no                          |
| Private      | yes                        | no                            | no                          |

The next table shows how access specifiers interact with different forms of
inheritance. The rows represent the access specifiers of members in the base
class, and the columns represent the type of inheritance used by the derived
class.

| Access specifier in base class | Public Inheritance | Protected Inheritance | Private Inheritance |
|--------------------------------|--------------------|-----------------------|---------------------|
| Public                         | Public             | Protected             | Private             |
| Protected                      | Protected          | Protected             | Private             |
| Private                        | Inaccessible       | Inaccessible          | Inaccessible        |
