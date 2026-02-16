+++
title = "Disjoint set data structure"
publishDate = 2026-02-13T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Data structure]({{< relref "Data structure.md" >}})

The disjoint set data structure, also called a union-find data structure, is
used in many graph problems to represent a collection of disjoint sets. It
provides two main operations: union for joining sets, and find for determining
which set an element belongs to.

Useful to think of electricity as an example. If there are a lot of nodes,
connecting them will put them in the same circuit, but if two nodes aren't
connected, then they aren't in the same circuit.

Two key optimizations: union by size/rank (attach smaller tree under larger)
and path compression (flatten tree during find). Together these give nearly
constant amortized time: O(α(n)) where α is the inverse Ackermann function.

```cpp
struct Node {
    int parent;
    int size;
};

int find(vector<Node>& set, int x) {
    while (set[x].parent != x) {
        int parent = set[x].parent;
        set[x].parent = set[parent].parent;  // path compression
        x = parent;
    }
    return x;
}

bool unite(vector<Node>& set, int x, int y) {
    x = find(set, x);
    y = find(set, y);
    if (x == y) return false;

    if (set[x].size < set[y].size) swap(x, y);
    set[y].parent = x;
    set[x].size += set[y].size;
    return true;
}
```
