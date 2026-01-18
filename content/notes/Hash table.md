+++
title = "Hash table"
tags = ["publish"]
draft = false
+++

Previous: [Data structure]({{< relref "Data structure.md" >}})

A hash table is a data structure which utilizes a hash function to speed up
lookups. There are two primary ways of building a hash table structure:

-   Separate chaining
-   Open addressing


## Hash functions {#hash-functions}

-   Modulo (division) method
    hash(k) = k mod(m)
-   Multiplication method
    hash(k) = (a\*k) mod(2^w) &gt;&gt; (w-r)
    where w is the word size of the machine
    and a is a random word, meaning a\*k will be 2 words in length. Should be odd
    and not close to power of 2
    m = 2^r
    in practice works quite well. Theoretically can perform worse
-   Universal hashing
    h(k) = [(ak + b) \* mod(p)] \* mod(m)
    a and b are large primes.


## Perfect hashing {#perfect-hashing}

A perfect hash function h for a set S is a hash function that maps distinct
elements in S to a set of m integers, with no collisions. In mathematical terms
it is an injective function.
