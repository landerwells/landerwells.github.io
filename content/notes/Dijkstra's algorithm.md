+++
title = "Dijkstra's algorithm"
tags = ["publish"]
draft = false
+++

Previous: [Algorithm]({{< relref "Algorithm.md" >}})

Dijkstra's algorithm can be seen as a variation of [Breadth-first search]({{< relref "Breadth-first search.md" >}})
made to work on graphs with weighted edges. The only real modification to the
algorithm is to set up a [priority queue]({{< relref "Heap data structure.md" >}}) instead of a regular queue so at each
node, it will look for the next shortest path.
