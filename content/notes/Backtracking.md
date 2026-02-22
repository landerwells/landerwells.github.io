+++
title = "Backtracking"
publishDate = 2026-02-22T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Algorithm]({{< relref "Algorithm.md" >}}), [Depth-first search]({{< relref "Depth-first search.md" >}})

Backtracking is an algorithmic paradigm that incrementally builds solutions
while discarding invalid states.

1.  Base case
2.  Choices
3.  Constraints
4.  Backtrack

<!--listend-->

```python
def backtrack(params):
    if base_case_condition:
        save_result
        return

    for choice in choices:
        if violates_constraints:
            continue

        make_choice
        backtrack(updated_params)
        undo_choice  # Backtracking Step
```
