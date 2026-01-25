+++
title = "Homomorphism"
publishDate = 2026-01-24T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Category theory]({{< relref "Category theory.md" >}})

A homomorphism is not an [Isomorphism]({{< relref "Isomorphism.md" >}}) when it is not bijective, meaning it
either:

1.  Fails to be injective (one-to-one): This happens when different elements in
    the domain are mapped to the same element in the codomain. For example, the
    kernel of the homomorphism (the set of elements that map to the identity
    element in the codomain) is not trivial, indicating that the homomorphism is
    not injective.
2.  Fails to be surjective (onto): This occurs when not every element in the
    codomain has a preimage in the domain. In this case, some elements of the
    codomain are not "reached" by the homomorphism.
