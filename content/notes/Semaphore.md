+++
title = "Semaphore"
publishDate = 2026-03-08T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Concurrency]({{< relref "Concurrency.md" >}})

A semaphore is a synchronization primitive similar to [locks]({{< relref "Lock (Mutex).md" >}}) and [condition
variables]({{< relref "Condition variable.md" >}}). It provides two operations, `signal()` and `wait()`, and keeps
track of a count (an integer).

-   `wait`: Decrements the semaphore's count. If the new value is less than zero,
    it blocks the calling thread.
-   `signal`: Increments the semaphore's count. If the count was negative before
    the increment, it wakes one waiting thread and moves it to the ready queue.
