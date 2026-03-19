+++
title = "Concurrency is not parallelism"
publishDate = 2026-03-18T00:00:00-05:00
tags = ["publish"]
draft = false
+++

Previous: [Concurrency]({{< relref "Concurrency.md" >}}), [Parallelism]({{< relref "Parallelism.md" >}})

In computer science, the concepts of concurrency and parallelism are related,
but distinct ideas. There is a talk by Rob Pike, the co-author of Golang, of the
same name as this note where he outlines the difference between the two.

I'll start with an analogy used in "The Rust Programming Language" book in the
section for [asynchronous programming]({{< relref "Asynchronous programming.md" >}}). Concurrency is when a single person is
assigned multiple tasks. They can switch between these tasks until each one is
complete, but cannot work on more than one at a time. Concurrency is possible on
a single core CPU while parallelism means that things are getting done at the
exact same time.

Parallelism is when there are multiple team members working on distinct tasks.
This means that work is getting done simultaneously. A single core CPU cannot be
parallel.

Concurrency is the independent execution of "things". Dealing with a lot of
things at once. Structure

Parallelism is the simultaneous execution of multiple "things". Doing a lot of
things at once. Execution.

Parallelism is not the goal of concurrency, the goal of concurrency is to have a
good structure.
