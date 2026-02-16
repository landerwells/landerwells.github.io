+++
title = "Merge sort"
publishDate = 2026-01-24T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Sorting]({{< relref "Sorting.md" >}})

Merge sort is a divide-and-conquer algorithm for sorting an array in O(n(log(n)))
time complexity in both best and worst case. The space complexity is O(n) due to
the extra copies needed for the merge routine.

The actual sort algorithm is quite simple: recursively halve the array
until you are down to two single elements, and then merge the two halves.

The merge is a bit trickier to write: allocate two copies of the array, maintain
3 pointers, and compare values from the copies, placing them in the main array
until they are exhausted.
