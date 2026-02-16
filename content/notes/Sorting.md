+++
title = "Sorting"
publishDate = 2026-02-08T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Algorithm]({{< relref "Algorithm.md" >}})

Most common types of sorts

-   Quicksort
-   Mergesort
-   Radix sort


## Stability {#stability}

Stable sorting algorithms sort equal elements in the same order that they appear
in the input. Relative order of equal value elements will be preserved in a
stable sort. Stability is a non-issue on sets where all elements are distinct,
or when elements are indistinguishable, like primitive values.

Stability is useful when stacking sorts, like sorting a deck of cards initially
by the rank, and then followed by the suit. This will produce ordered sections
of suits, whereas an unstable sort would not preserve this order.

Stable sorts (by nature):

-   Bubble sort
-   Insertion sort
-   Merge sort
-   Count sort

Unstable sorts (can be made stable):

-   Quick sort
-   Selection sort
-   Heap sort
