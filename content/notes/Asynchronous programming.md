+++
title = "Asynchronous programming"
publishDate = 2026-03-18T00:00:00-05:00
tags = ["publish"]
draft = false
+++

Previous: [Concurrency]({{< relref "Concurrency.md" >}})

Asynchronous programming is a form of programming where the programs execution
is non-linear.

This is achieved by implementing "futures" or "promises", which will return a
value at some point, but not immediately. It breaks the flow of execution that
is typically expected from reading source code.

In Rust, this is achieved by the `async` and `await` keywords.

Async is typically a better option if the program is I/O bound instead of CPU
bound.
