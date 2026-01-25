+++
title = "Lifetimes in Rust"
publishDate = 2026-01-24T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Rust]({{< relref "Rust.md" >}})

Lifetimes in Rust are a type of generic for validating references. Lifetimes are
inextricably linked to references and the concept of borrowing.

Lifetimes are a crucial aspect of Rust’s memory management model that ties into
borrowing. A lifetime specifies the scope for which a reference to a resource is
valid. In Rust, the compiler uses lifetimes to ensure that references do not
outlive the data they refer to, thus preventing dangling references. Lifetimes
help the compiler understand how long a reference should be considered valid,
and they need to be specified when the compiler cannot automatically infer the
duration itself. This makes lifetimes a powerful—though sometimes challenging,
tool for managing memory safely and efficiently.


## The Borrow Checker {#the-borrow-checker}

The Rust compiler has a borrow checker that compares scopes to determine whether
all borrows are valid.

```rust
fn main() {
    let r;                // ---------+-- 'a
    {                     //          |
        let x = 5;        // -+-- 'b  |
        r = &x;           //  |       |
    }                     // -+       |
    println!("r: {r}");   //          |
}                         // ---------+
```

The example above will not compile because the reference to x in r has a shorter
lifetime 'b than the variable r. Therefore the reference is invalid.
