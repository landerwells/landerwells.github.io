+++
title = "Depth-first search"
publishDate = 2026-02-22T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Algorithm]({{< relref "Algorithm.md" >}})

Depth-first search (DFS) is a graph traversal algorithm that fully explores one
path before going back to explore others. This is in contrast to [breadth-first
search]({{< relref "Breadth-first search.md" >}}) which explores all nodes on a layer or level before moving on to another.
At its core, DFS uses a stack data structure to implement this behavior. Since a
stack can be replicated via recursion, it is often easier to implement DFS
recursively instead of iteratively.

```cpp
// Recursive (most common)
void dfs(int node, vector<vector<int>>& graph, unordered_set<int>& visited) {
    visited.insert(node);
    for (int neighbor : graph[node]) {
        if (!visited.count(neighbor))
            dfs(neighbor, graph, visited);
    }
}

// Iterative (explicit stack)
void dfs(int start, vector<vector<int>>& graph) {
    unordered_set<int> visited;
    stack<int> stk;
    stk.push(start);
    while (!stk.empty()) {
        int node = stk.top(); stk.pop();
        if (visited.count(node)) continue;
        visited.insert(node);
        for (int neighbor : graph[node])
            stk.push(neighbor);
    }
}
```
