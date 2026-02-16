+++
title = "Structure and Interpretation of Computer Programs - Harold Abelson, Gerald Sussman, Julie Sussman"
publishDate = 2026-02-14T00:00:00-06:00
tags = ["publish"]
draft = false
+++

<div class="ox-hugo-toc toc">

<div class="heading">Table of Contents</div>

- [Building Abstractions with Procedures](#building-abstractions-with-procedures)
    - [The Elements of Programming](#the-elements-of-programming)
- [Building Abstractions with Data](#building-abstractions-with-data)
- [Modularity, Objects, and State](#modularity-objects-and-state)
- [Metalinguistic Abstraction](#metalinguistic-abstraction)
- [Computing with Register Machines](#computing-with-register-machines)

</div>
<!--endtoc-->

Not much in a Zettelkasten is meant for publishing. I publish a small subset of
my atomic notes, and none of my reference notes which are taken directly from a
specific source. I wanted to make an exception for this note as I am starting
with the intent to make it professional and well structured. Here are some of my
goals:

-   Good typesetting
-   Practice literate programming


## Building Abstractions with Procedures {#building-abstractions-with-procedures}

[Processes]({{< relref "Process.md" >}}) are an abstraction provided by the operating system. They act on data,
and are directed by a pattern of rules called a program.

Programs are required to be expressed in some form of language. In this book
the language used is a dialect of Lisp known as Scheme. Lisp is a
[functional programming]({{< relref "Functional programming.md" >}}) language developed at MIT.


### The Elements of Programming {#the-elements-of-programming}

Every powerful language has three mechanisms for organizing ideas about
processes:

-   primitive expressions
-   means of combination
-   means of abstraction


#### Expressions {#expressions}

Expressions are the smallest chunk of a program that can be evaluated. In Lisp
expressions can be as simple as `5` or `21`.

Combinations are an application of a procedure over a list of expressions. The
would look something like this:

```scheme
(+ 137 349)
```

Lisp follows prefix notation, instead of infix notation that would typically be
used with an operator like `+`.


#### Naming and the Environment {#naming-and-the-environment}

In Scheme, we name things with `define`. This is the most basic means of
[abstraction]({{< relref "Abstraction.md" >}}), allowing the use of simple names to refer to more complex
combinations. The environment is what keeps track of these names and their
values.


#### Evaluating Combinations {#evaluating-combinations}

Evaluation of combinations is recursive in nature because in order to evaluate a
top level expression, all nested expressions must be evaluated first.
Combinations can easily be represented as a treelike structure, where values
percolate upwards in a process known as "tree accumulation".


#### Compound Procedures {#compound-procedures}

Procedure definition are a much more powerful abstraction, where a compound
operation can be given a name. This is the equivalent of creating a function.

```scheme
(define (square x) (* x x))
```


#### The Substitution Model for Procedure Application {#the-substitution-model-for-procedure-application}

The substitution model is similar to solving expressions in [lambda calculus]({{< relref "Lambda calculus.md" >}})
where you must first apply to bound variables.  In both the substitution model
and lambda calculus, we evaluate expressions by replacing formal parameters
(bound variables) with their corresponding argument values.

The substitution model provides an initial mental framework for understanding
procedure application, though it will later be refined into the environment
model which more accurately reflects how interpreters manage variable bindings.
If the substitution model were to actually be used, interpreters would be more
like the preprocessor from C and C++ where pure textual substitution is taking
place.


#### Conditional Expressions and Predicates {#conditional-expressions-and-predicates}

Conditional expressions allow procedures to perform different computations based
on testing conditions. The primary construct is `cond` (conditional), which
evaluates predicates in sequence until one is true.  Basic syntax:

```scheme
(cond (<p1> <e1>)
      (<p2> <e2>)
      ...
      (else <en>))
```

Each clause consists of a predicate (a test expression) followed by a consequent
expression. The interpreter evaluates predicates in order; when it finds the
first true predicate, it evaluates and returns the corresponding consequent
expression. The `else` clause is optional and acts as a catch-all.  For simple
two-way conditionals, use `if`:

```scheme
(if <predicate> <consequent> <alternative>)
```

Predicates are expressions that evaluate to true or false. Common predicates include:

Comparison operators: `<`, `>`, `=`
Logical operators: `and`, `or`, `not`

Example:

```scheme
(define (abs x)
  (cond ((> x 0) x)
        ((= x 0) 0)
        ((< x 0) (- x))))
;; Equivalent using if:
(define (abs x)
  (if (< x 0) (- x) x))
```


## Building Abstractions with Data {#building-abstractions-with-data}


## Modularity, Objects, and State {#modularity-objects-and-state}


## Metalinguistic Abstraction {#metalinguistic-abstraction}


## Computing with Register Machines {#computing-with-register-machines}
