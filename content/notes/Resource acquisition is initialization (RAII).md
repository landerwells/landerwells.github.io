+++
title = "Resource acquisition is initialization (RAII)"
publishDate = 2026-03-19T00:00:00-05:00
tags = ["publish"]
draft = false
+++

Previous: [Ownership in programming]({{< relref "Ownership in programming.md" >}})

Resource acquisition is initialization (RAII) is a programming idiom, or design
pattern, used for managing resources such as memory, file handles, mutexes, and
more. The key idea is that resources are tied to the lifetime of objects. When
an object goes out of scope, its destructor is automatically called to release
any associated resources.


### Why RAII Matters {#why-raii-matters}

Manually managing memory (e.g., calling \`delete\` or \`free\` after every heap
allocation) is error-prone and can lead to memory leaks, double frees, or
resource exhaustion. The same principle applies to other resources like locks;
forgetting to release a mutex can cause deadlocks.

RAII solves this by making resource management automatic and exception-safe:

-   Resources are acquired when an object is initialized.
-   Resources are released automatically when the object goes out of scope.


### Origin and Use in Rust {#origin-and-use-in-rust}

RAII originated in C++, where it became the idiomatic way to manage memory and
system resources using destructors. Rust is not object-oriented in the
traditional sense, but it embraces RAII as a foundational model for resource
management. Every value in Rust has a clearly defined owner and a deterministic
lifetime. When it goes out of scope, the \`Drop\` trait (if implemented) is
invoked to clean up the value. This system, combined with Rust's ownership and
borrowing model, enables memory safety without garbage collection.


### Example in Rust {#example-in-rust}

```rust
use std::fs::File;

fn main() {
    let file = File::open("example.txt").unwrap();
    // File is automatically closed here when it goes out of scope
}
```


### Example in C++ {#example-in-c-plus-plus}

```cpp
#include <fstream>

int main() {
    std::ifstream file("example.txt");
    // File is automatically closed here when it goes out of scope
}
```


## see {#see}

-   [Constructors in C++]({{< relref "Constructors in C++.md" >}})
-   [Destructors in C++]({{< relref "Destructors in C++.md" >}})
-   [Dynamic allocation in C++]({{< relref "Dynamic allocation in C++.md" >}})
