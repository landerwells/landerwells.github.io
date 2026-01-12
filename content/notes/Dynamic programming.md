+++
title = "Dynamic programming"
tags = ["publish"]
draft = false
+++

Previous: [Algorithm]({{< relref "Algorithm.md" >}})

Dynamic programming is an mathematical optimization technique that solves
complex problems by solving smaller subproblems once and reusing their solutions
instead of recomputing.

There are two core properties that dynamic programming problems need to have:

1.  Optimal Substructure: The answers to subproblems can be used to construct the
    final answer
2.  Overlapping Subproblems: Same problem is solved multiple times (re-computing)

Solutions that can be found by breaking down into non-overlapping sub-problems
are not considered dynamic programming but are instead divide and conquer.

This particular problem and most of others can be approached using the following
sequence:

1.  Find recurrence relation
2.  Recursive (top-down): Convert recurrence relation into code
3.  Recursive + memo (top-down)
4.  Iterative + memo (bottom-up)
5.  Iterative + N variables (bottom-up)

The two approaches to dynamic programming problems:

1.  Top-Down (Memoization): The direct solution can be found via recursion while
    caching subproblem answers

<!--listend-->

```python
cache = {}
def fibonacci(n):
    if n < 2: return n

    if n not in cache:
        cache[n] = fibonacci(n-1) + fibonacci(n-2)

    return cache[n]

print(fibonacci(5))
```

1.  Bottom-Up (Tabulation): This is when we already have the answers to smaller
    sub-problems and build the answer of the bigger question using them. For one
    dimensional dynamic problems, this will typically use an array, while for two
    dimensional problems it will use a grid.

<!--listend-->

```python
def fib(self, n: int) -> int:
    if n <= 1:
        return n
    tab = [0] * (n+1)
    tab[1] = 1

    for i in range(2, n+1):
        tab[i] = tab[i-1] + tab[i-2]

    return tab[n]
```

One particular optimization for fibonacci numbers uses only two variables:

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```
