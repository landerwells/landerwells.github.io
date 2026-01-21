+++
title = "Fragmentation"
tags = ["publish"]
draft = false
+++

Previous: [Virtual memory]({{< relref "Virtual memory.md" >}})

Fragmentation is a concept in computer sciece that involves the distribution of
data within a finite space. Memory needs to be structured in some way so that
processes are unable to directly access memory from a different process.

There are two types of fragmentation:

-   External: Occurs when using [segmentation]({{< relref "Memory segmentation.md" >}}). Space between segments becomes
    wasted. Can be solved by compaction, but this is expensive.
-   Internal: Occurs when using [paging]({{< relref "Memory paging.md" >}}), because fixed size pages that aren't full
    will inevitably waste spaces. Solved by having smaller pages, but that makes
    tradeoffs with the page table being larger.
