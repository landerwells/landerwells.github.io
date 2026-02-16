+++
title = "Lambda calculus"
publishDate = 2026-02-15T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Computer science]({{< relref "Computer science.md" >}})

Lambda calculus is a [Formal System]({{< relref "Formal System.md" >}}) in mathematics for expressing computation
based on [function]({{< relref "Function.md" >}}) [abstraction]({{< relref "Abstraction.md" >}}) using variable binding and substitution.
[Functional programming]({{< relref "Functional programming.md" >}}) derives its core concepts from lambda calculus. The LISP
family of languages is directly based on it. In 1937, Alan Turing proved that
lambda calculus and Turing machine are equivalent models of computation.

Features of the language:

-   Single-letter variable names (a-z)
-   Application: `ab` means call function a with parameter b (left associative, so
    `abc` = `(ab)c`)
-   Abstraction: define anonymous functions using λ
-   Parentheses for grouping expressions

Grammar:

```text
Lambda      ::= Variable | Grouping | Abstraction | Application Variable    ::=
<letter> Grouping    ::= "(" Lambda ")" Abstraction ::= λ variable "." Lambda
Application ::= Lambda Lambda
```

Three conversion rules:

-   α-conversion (Alpha): rename bound variables
-   β-reduction (Beta): substitute arguments for parameters
-   η-conversion (Eta): eliminate unused parameters

A variable without a lambda binding is called _free_. A variable with a lambda
binding is called _bound_. A lambda expression with no free variables is called
a _closure_.

Logic encoding:

```text
true  = λx.(λy.x) false = λx.(λy.y)
```
