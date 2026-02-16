+++
title = "Memory segmentation"
publishDate = 2026-02-13T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Virtual memory]({{< relref "Virtual memory.md" >}})

Memory segmentation is a form of virtual memory management that preceded [Memory
paging]({{< relref "Memory paging.md" >}}). It divides memory into variable-sized segments (code, stack, heap,
etc.) rather than fixed-size pages. Originally implemented with a base-and-bounds
technique where each segment has a base address (starting location in physical
memory) and a bounds/limit (size of the segment).

Address translation is simple: take the virtual address (offset within segment),
add the base register, check against bounds. Each segment can be placed anywhere
in physical memory. The MMU tracks segment growth direction (positive for heap,
negative for stack).

While segmentation is fast and memory-efficient for the MMU (only needs base and
bounds per segment), its main problem is [external fragmentation]({{< relref "Fragmentation.md" >}}). Which is
overall much worse for a system than internal fragmentation.
