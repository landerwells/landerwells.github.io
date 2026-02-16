+++
title = "Kruskal's algorithm"
publishDate = 2026-02-08T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Algorithms]({{< relref "Algorithm.md" >}})

Kruskal's algorithm is a method of obtaining a minimum spanning tree of an
undirected, edge-weighted graph. It makes use of a [disjoint set data structure]({{< relref "Disjoint set data structure.md" >}}).

The solution using Kruskal's algorithm requires both the edges and the number of
vertices. If the vertices are not explicitly provided, they can be inferred by
examining all unique endpoints in the edge list. Moving on to the actual
algorithm, sort the edges by weight in ascending order and then begin adding
them to the MST using the disjoint set to detect cycles. An edge is added only
if it connects two different components and doesn't create a cycle. A minimum
spanning tree has been produced when the number of edges added is equal to the
number of vertices minus one.
