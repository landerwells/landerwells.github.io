+++
title = "Euclidean algorithm"
publishDate = 2026-02-16T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Algorithm]({{< relref "Algorithm.md" >}})

The Euclidean algorithm or Euclid's algorithm is for efficiently finding the
greatest common divisor of two numbers. The idea of the algorithm is based on
the observation that, if r is the remainder when a is divided by b, then the
common divisors of a and b are precisely the same as the common divisors of b
and r. This we can use the equation: GCD(a,b) == GCD(b,r).
