+++
title = "Heap data structure"
tags = ["publish"]
draft = false
+++

Previous: [Data structure]({{< relref "Data structure.md" >}})

This is the most idiomatic way of creating a minimum heap in C++

```cpp
std::priority_queue<int, std::vector<int>, std::greater<int>> min_heap;

// Useful if there are pairs
std::priority_queue<
    std::pair<int,int>,
    std::vector<std::pair<int,int>>,
    std::greater<std::pair<int,int>>
> pq;

// There is also std::make_heap which will create a heap given iterators.
```

The heap is a tree like data structure that satisfies the heap property.

Essentially there are two types of heaps: max and min. The respectively satisfy
the property that the root element is alwasy the maximum or minimum value in the
strucutre

Get the min or max in a min or max heap: O(1) Heapify O(n) Push O(log(n)) Pop
O(log(n))
