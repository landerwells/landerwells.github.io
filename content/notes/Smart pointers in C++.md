+++
title = "Smart pointers in C++"
publishDate = 2026-03-19T00:00:00-05:00
tags = ["publish"]
draft = false
+++

Previous: [Resource acquisition is initialization (RAII)]({{< relref "Resource acquisition is initialization (RAII).md" >}})

In C++, smart pointers are RAII wrappers for raw pointers. They eliminate the
need to use raw pointers and manually call `new` / `delete` in order to get
them. The three variations are `std::unique_ptr`, `std::shared_ptr`, and
`std::weak_ptr`.


## `std::unique_ptr` {#std-unique-ptr}

Likely the most common of the three, `std::unique_ptr` will fit in most
occasions where a raw pointer was desired. It is meant to be used when there is
unique ownership of a resource. For example, if a class is meant to manage a
pointer to another class, instead of manually calling `new` in the constructor,
and `delete` in the desturctor, using a unique pointer will automatically
deallocate the owned resource when the primary class is destructed.


## `std::shared_ptr` {#std-shared-ptr}

The shared pointer is used in situations where there can be multiple owners of a
single value, and when there are no owners pointing to that value anymore, the
value will be destructed.

Regardless of a deleter, a `std::shared_ptr` object is two pointers in size.
`std::shared_ptr` object contains a pointer to the reference count for the
object it points to, which is part of a larger data structure, the _control
block_.

Shared pointer contains two pointers, one to the object, another to the
control block, which houses potentially the following information

-   reference count
-   copy of custom deleter
-   copy of custom allocater
-   weak count


## `std::weak_ptr` {#std-weak-ptr}

These are likely the least common of the smart pointers. Weak pointers are used
to break cyclical dependencies when working with smart pointers.
