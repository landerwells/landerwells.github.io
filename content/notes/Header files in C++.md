+++
title = "Header files in C++"
tags = ["publish"]
draft = false
+++

Previous: [C++]({{< relref "C++.md" >}})

Header files in C++ are files that should contain all forward declarations of a
source file. They are used to structure and create programs that span multiple
files.

A clean header file implementation is subjective, but it should have at least
the following to get started:

-   Header guard
-   Include additional headers and files that the header needs
-   Documentation about what the file does, and what each function can do.
-   Class and function declarations

Header files are not technically compiled, they are included via the
preprocessor in the earlier stages of compilation.


## Header Guards {#header-guards}

Header guards are preprocessor directives used to prevent multiple or recursive
inclusion of the same header file.  Without them, including a header more than
once (directly or indirectly) can cause redefinition errors.

The typical pattern looks like this:

```cpp
#ifndef HELLO_H
#define HELLO_H

// Header contents

#endif // HELLO_H
```

When the file is first included, \`HELLO_H\` is not defined, so the header’s
contents are processed and the macro is defined.  On subsequent includes, the
macro is already defined, so the preprocessor skips the file.

An alternative to traditional header guards is the compiler-specific \`#pragma
once\` directive:

```cpp
#pragma once
```

This directive achieves the same goal—preventing multiple inclusion—but is
simpler and less error-prone.  Most modern compilers (GCC, Clang, MSVC) support
it, though it is technically ****non-standard****.  Unlike macro-based guards,
\`#pragma once\` does not depend on unique macro names and is less susceptible to
naming collisions.

In modern C++ codebases, \`#pragma once\` is generally preferred for its brevity
and reliability, unless strict portability to very old compilers is required.
