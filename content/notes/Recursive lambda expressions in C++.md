+++
title = "Recursive lambda expressions in C++"
publishDate = 2026-02-18T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Lambda expressions in C++]({{< relref "Lambda expressions in C++.md" >}})

Unlike Python, C++ lambdas don't support generic recursion. There are
workarounds, but they all come with meaningful drawbacks. Additionally, I
believe recursion has little place in production code, recursive lambdas even
less so. The options below are fun to know, but should be considered trivia at
best.


## `std::function` {#std-function}

```cpp
#include <functional>
std::function<int(int)> factorial = [&](int n) -> int {
  return n <= 1 ? 1 : n * factorial(n - 1);
};
```

Works from C++11 onward. The main drawback is that you must spell out all
parameter types inside the std::function template, which largely defeats the
brevity that made you want a lambda in the first place. There's also a runtime
overhead cost from type erasure.


## Self-reference via parameter {#self-reference-via-parameter}

```cpp
auto factorial = [](auto self, int n) -> int {
  return n <= 1 ? 1 : n * self(self, n - 1);
};
```

No overhead, but the calling convention is awkward — you have to pass the lambda
into itself: factorial(factorial, 5). This leaks the implementation detail to
every call site.


## Y-combinator {#y-combinator}

```cpp
auto y = [](auto f) {
  return [=](auto... args) {
    return f(f, args...);
  };
};

auto factorial = y([](auto self, int n) -> int {
  return n <= 1 ? 1 : n * self(self, n - 1);
});
```

This is getting into extreme trivia territory. It's a neat functional
programming pattern that produces a clean call site, with the downside of being
incredibly opaque.


## Conclusion {#conclusion}

Please just write a named function
