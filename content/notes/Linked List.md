+++
title = "Linked List"
publishDate = 2026-02-16T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Data structure]({{< relref "Data structure.md" >}})

One of the big benefits of a linked list over a [Dynamic Array]({{< relref "Dynamic Array.md" >}}) is that modifying
a known element is an O(1) operation. Meaning that modifying the beginning of a
list isn't O(n).

A downside of using them is that you loose O(1) random access. Because arrays
store an address that points to a contiguous block of memory, a little
arithmetic will allow you to directly get to the elemetn at i, but linked lists
are stored on the heap and are not contigious
