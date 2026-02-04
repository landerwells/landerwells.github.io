+++
title = "Virtual address space"
publishDate = 2026-01-25T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Process]({{< relref "Process.md" >}}), [Virtual memory]({{< relref "Virtual memory.md" >}})

A virtual address space is what is provided by the operating system to each
process to provide the illusion of a large, uninterrupted physical address space
that the process can use. This virtual space is broken up into multiple
different sections which have different rules and uses to a process.

Starting from the very bottom, there will usually be a virtual address of 0,
which is used for null pointers. The CPU cannot translate address 0, which
results in a page fault being triggered, and the OS terminating the process.

Next up is the code segment, which lives directly above address 0, and houses
read only information about the program being run. This is where all literals
are stored, and is why strings in C need to be a `const char*`, because nothing
in this section is modifyable.

The next two segments are both for static and global resources, which will
survive for the duration of the program, and have global linkage.

Finally comes the stack and the heap, which both deserve their own notes, but
for now:

-   The stack controls the execution of the running program, when a program is
    run, the main function is the first stack frame to be pushed onto the stack,
    and all of the accompanying information is pushed as well. While the program
    continues executing, new functions will push onto the stack, and functions
    returning will pop off, pointing back to the function that called them
    originally.

-   The heap is where all dynamically allocated memory in the program is stored.
    There is a data structure called the free list which will keep track of
    remaining free blocks of memory, and get updated on any call to allocate more.

In modern OSes (Linux/macOS/Windows): almost nothing is physically contiguous.
The OS gives every process a virtual address space that looks contiguous, but
it’s made of many separate mapped regions.

```nil
+----------------------+  High Address
|      Stack           |  grows down
+----------------------+
|                      |
|      Heap            |  grows up
|  (malloc, free)      |
+----------------------+
|      BSS             |  uninitialized globals/static
+----------------------+
|      Data Segment    |  initialized globals/static
+----------------------+
|      Text Segment    |  program code (read-only) and constants
+----------------------+  Low Address
```
