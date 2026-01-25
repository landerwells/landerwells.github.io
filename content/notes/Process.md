+++
title = "Process"
publishDate = 2026-01-24T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Operating system]({{< relref "Operating system.md" >}})

A process is possibly the most fundamental abstraction provided by the operating
system. At its most basic level a process is simply a program that is being
executed by CPU. Each process is given its own [virtual address space]({{< relref "Virtual address space.md" >}}) which is
its own abstraction for memory.


## Process states {#process-states}

A process can be in one of three primary states:

-   Running: Actively having instructions executed by the CPU
-   Ready: Waiting for the CPU
-   Blocked: The process has initiated some operation which prevents it from being
    able to execute further instructions.

A [scheduler]({{< relref "Scheduling.md" >}}) can move a process between the running and ready states.
