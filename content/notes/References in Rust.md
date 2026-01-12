+++
title = "References in Rust"
tags = ["publish"]
draft = false
+++

Previous: [Rust]({{< relref "Rust.md" >}})

Rules of references in Rust

-   At any given time, you can have either one mutable reference or any number of
    immutable references.
-   References must always be valid.

A reference in Rust never owns the value it points to; it only provides access
to it. This ties references directly into Rust’s ownership system: borrowing
values instead of transferring ownership. The act of creating a reference is
called borrowing.

The borrow checker ensures that multiple immutable references can coexist, but a
mutable reference must always be unique. This enforces Rust’s principle of
immutability by default, consistent with \`let\` (immutable) and \`mut\` (mutable)
bindings.

In terms of C++ comparison, `&mut T` behaves similarly to an lvalue reference
(`T&`), while `&T` is closer to a const lvalue reference (`T const&`). The
critical difference is that Rust enforces aliasing and lifetime guarantees at
compile time, eliminating undefined behavior from dangling or aliased
references.

| Rust Type  | Closest C++ Equivalent | Behavior                                                                   |
|------------|------------------------|----------------------------------------------------------------------------|
| &amp;T     | T const&amp;           | Shared, read-only reference. Freely copied. Lifetime enforced by compiler. |
| &amp;mut T | T&amp;                 | Exclusive mutable reference. Uniqueness enforced by borrow checker.        |
