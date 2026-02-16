+++
title = "Org-mode syntax export test"
publishDate = 2026-02-15T00:00:00-06:00
tags = ["publish"]
draft = false
+++

<div class="ox-hugo-toc toc">

<div class="heading">Table of Contents</div>

- [Headings](#headings)
- [First Level Heading](#first-level-heading)
    - [Second Level Heading](#second-level-heading)
- [Text Formatting](#text-formatting)
- [Lists](#lists)
    - [Unordered Lists](#unordered-lists)
    - [Ordered Lists](#ordered-lists)
    - [Description Lists](#description-lists)
    - [Checklists](#checklists)
- [Tables](#tables)
    - [Simple Table](#simple-table)
    - [Table with Formulas](#table-with-formulas)
    - [Table with Alignment](#table-with-alignment)
- [Source Code Blocks](#source-code-blocks)
    - [Inline Code](#inline-code)
    - [Code Blocks with Syntax Highlighting](#code-blocks-with-syntax-highlighting)
    - [Example Blocks](#example-blocks)
    - [Export/Verbatim Blocks](#export-verbatim-blocks)
- [Quotes and Verses](#quotes-and-verses)
    - [Block Quotes](#block-quotes)
    - [Verse Blocks](#verse-blocks)
- [Horizontal Rules](#horizontal-rules)
- [<span class="org-todo todo TODO">TODO</span> Items and States](#items-and-states)
    - [<span class="org-todo todo TODO">TODO</span> A task that needs to be done](#a-task-that-needs-to-be-done)
    - [<span class="org-todo done DONE">DONE</span> A completed task](#a-completed-task)
    - [<span class="org-todo todo TODO">TODO</span> High priority task](#high-priority-task)
    - [<span class="org-todo todo TODO">TODO</span> Medium priority task](#medium-priority-task)
    - [<span class="org-todo todo TODO">TODO</span> Low priority task](#low-priority-task)
- [Tags](#tags):tag:
    - [Heading with Single Tag](#heading-with-single-tag):work:
    - [Heading with Multiple Tags](#heading-with-multiple-tags):work:important:
    - [Heading with Inherited Tags](#heading-with-inherited-tags):project:development:
- [Timestamps and Scheduling](#timestamps-and-scheduling)
    - [Active Timestamp](#active-timestamp)
    - [Inactive Timestamp](#inactive-timestamp)
    - [Timestamp Range](#timestamp-range)
    - [<span class="org-todo todo TODO">TODO</span> Task with Deadline](#task-with-deadline)
    - [<span class="org-todo todo TODO">TODO</span> Task with Schedule](#task-with-schedule)
- [Properties and Drawers](#properties-and-drawers)
    - [Heading with Properties](#heading-with-properties)
    - [Heading with Logbook](#heading-with-logbook)
- [Mathematical Expressions (LaTeX)](#mathematical-expressions--latex)
    - [Inline Math](#inline-math)
    - [Display Math](#display-math)
- [Special Symbols and Entities](#special-symbols-and-entities)
- [Macros](#macros)
- [Comments](#comments)
- [Special Blocks](#special-blocks)
    - [Note Block](#note-block)
    - [Warning Block](#warning-block)
- [Org Babel Features](#org-babel-features)
    - [Executable Code](#executable-code)
    - [Table Generation from Code](#table-generation-from-code)
    - [Code with Variables](#code-with-variables)
- [Miscellaneous](#miscellaneous)
    - [Line Breaks](#line-breaks)
    - [Subscripts and Superscripts](#subscripts-and-superscripts)
    - [Special Strings](#special-strings)
    - [Emphasis in Headlines](#emphasis-in-headlines)
- [Conclusion](#conclusion)

</div>
<!--endtoc-->

This document demonstrates the full range of Org mode syntax features.


## Headings {#headings}

Org mode supports multiple levels of headings using asterisks:


## First Level Heading {#first-level-heading}


### Second Level Heading {#second-level-heading}


#### Third Level Heading {#third-level-heading}

<!--list-separator-->

-  Fourth Level Heading

    <!--list-separator-->

    -  Fifth Level Heading

        <!--list-separator-->

        -  Sixth Level Heading


## Text Formatting {#text-formatting}

Org mode offers several ways to format text:

**Bold text** is wrapped in asterisks.

_Italic text_ uses forward slashes.

<span class="underline">Underlined text</span> uses underscores.

~~Strikethrough text~~ uses plus signs.

`Verbatim text` (inline code) uses equal signs.

`Code text` uses tildes.

You can also combine them: **_bold and italic_**, <span class="underline">_underlined and italic_</span>, etc.


## Lists {#lists}


### Unordered Lists {#unordered-lists}

Simple bullet lists use hyphens, plus signs, or asterisks:

-   First item
-   Second item
-   Third item
    -   Nested item 1
    -   Nested item 2
        -   Deeper nesting
-   Fourth item


### Ordered Lists {#ordered-lists}

Numbered lists use numbers followed by periods or parentheses:

1.  First item
2.  Second item
3.  Third item
    1.  Nested numbered item
    2.  Another nested item
4.  Fourth item


### Description Lists {#description-lists}

Description lists pair terms with definitions:

Term 1
: Definition of the first term

Term 2
: Definition of the second term

Longer Term
: A longer definition that can span multiple lines
    and continue here


### Checklists {#checklists}

Tasks with checkboxes:

-   [ ] Unchecked item
-   [-] Partially completed (some children done)
-   [X] Completed item
    -   [X] Subtask 1
    -   [X] Subtask 2


## Tables {#tables}


### Simple Table {#simple-table}

| Name    | Age | City          |
|---------|-----|---------------|
| Alice   | 30  | New York      |
| Bob     | 25  | San Francisco |
| Charlie | 35  | Boston        |


### Table with Formulas {#table-with-formulas}

| Item    | Quantity | Price | Total |
|---------|----------|-------|-------|
| Apples  | 5        | 0.50  | 2.50  |
| Oranges | 3        | 0.75  | 2.25  |
| Bananas | 10       | 0.30  | 3.00  |
| Total   | 18       |       | 7.75  |


### Table with Alignment {#table-with-alignment}

| Right | Center | Left |
|------:|:------:|:-----|
| 1     | 2      | 3    |
| 100   | 200    | 300  |


## Source Code Blocks {#source-code-blocks}


### Inline Code {#inline-code}

Use `code` or `code` for inline code snippets.


### Code Blocks with Syntax Highlighting {#code-blocks-with-syntax-highlighting}

```python
def fibonacci(n):
    """Calculate the nth Fibonacci number."""
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Example usage
print(fibonacci(10))
```

```emacs-lisp
(defun greet (name)
  "Greet NAME with a friendly message."
  (message "Hello, %s!" name))

(greet "World")
```

```c++
#include <iostream>
#include <vector>

int main() {
  std::vector<int> numbers = {1, 2, 3, 4, 5};
  for (const auto& num : numbers) {
    std::cout << num << std::endl;
  }
  return 0;
}
```


### Example Blocks {#example-blocks}

For pre-formatted text without syntax highlighting:

```text
This is an example block.
It preserves spacing and formatting.
  Indentation is maintained.
No syntax highlighting is applied.
```


### Export/Verbatim Blocks {#export-verbatim-blocks}

<div class="custom-html">
  <p>This HTML will be exported directly.</p>
</div>


## Quotes and Verses {#quotes-and-verses}


### Block Quotes {#block-quotes}

> The best way to predict the future is to invent it.
> — Alan Kay


### Verse Blocks {#verse-blocks}

For poetry or formatted text where line breaks matter:

<div class="verse">

Roses are red,<br />
Violets are blue,<br />
Org mode is great,<br />
And so are you.<br />

</div>


## Horizontal Rules {#horizontal-rules}

Separate sections with horizontal rules using five or more dashes:

---

Content after the rule.


## <span class="org-todo todo TODO">TODO</span> Items and States {#items-and-states}


### <span class="org-todo todo TODO">TODO</span> A task that needs to be done {#a-task-that-needs-to-be-done}


### <span class="org-todo done DONE">DONE</span> A completed task {#a-completed-task}


### <span class="org-todo todo TODO">TODO</span> High priority task {#high-priority-task}


### <span class="org-todo todo TODO">TODO</span> Medium priority task {#medium-priority-task}


### <span class="org-todo todo TODO">TODO</span> Low priority task {#low-priority-task}


## Tags <span class="tag"><span class="tag">tag</span></span> {#tags}


### Heading with Single Tag <span class="tag"><span class="work">work</span></span> {#heading-with-single-tag}


### Heading with Multiple Tags <span class="tag"><span class="work">work</span><span class="important">important</span></span> {#heading-with-multiple-tags}


### Heading with Inherited Tags <span class="tag"><span class="project">project</span><span class="development">development</span></span> {#heading-with-inherited-tags}


## Timestamps and Scheduling {#timestamps-and-scheduling}


### Active Timestamp {#active-timestamp}

<span class="timestamp-wrapper"><span class="timestamp">&lt;2026-02-15 Sun&gt;</span></span>


### Inactive Timestamp {#inactive-timestamp}

<span class="timestamp-wrapper"><span class="timestamp">[2026-02-15 Sun]</span></span>


### Timestamp Range {#timestamp-range}

<span class="timestamp-wrapper"><span class="timestamp">&lt;2026-02-15 Sun&gt;&#x2013;&lt;2026-02-20 Fri&gt;</span></span>


### <span class="org-todo todo TODO">TODO</span> Task with Deadline {#task-with-deadline}


### <span class="org-todo todo TODO">TODO</span> Task with Schedule {#task-with-schedule}


## Properties and Drawers {#properties-and-drawers}


### Heading with Properties {#heading-with-properties}


### Heading with Logbook {#heading-with-logbook}


## Mathematical Expressions (LaTeX) {#mathematical-expressions--latex}


### Inline Math {#inline-math}

The quadratic formula is \\(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}\\).

Einstein's famous equation: \\(E = mc^2\\).


### Display Math {#display-math}

\\[
\int\_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
\\]

\begin{equation}
\sum\_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}
\end{equation}


## Special Symbols and Entities {#special-symbols-and-entities}

Greek letters: &alpha;, &beta;, &gamma;, &Delta;, &Omega;

Arrows: &rarr;, &larr;, &rArr;

Math: &times;, &divide;, &plusmn;, &le;, &ge;, &ne;

Other: &copy;, &reg;, &trade;


## Macros {#macros}

Welcome, Lander! This is version 1.0.


## Comments {#comments}


## Special Blocks {#special-blocks}


### Note Block {#note-block}

<div class="NOTE">

This is a custom note block that can be styled differently on export.

</div>


### Warning Block {#warning-block}

<div class="WARNING">

This is a warning to pay attention to something important.

</div>


## Org Babel Features {#org-babel-features}


### Executable Code {#executable-code}

```python
for i in range(5):
    print(f"Number: {i}")
```


### Table Generation from Code {#table-generation-from-code}

```python
data = [
    ["Language", "Year"],
    ["Python", 1991],
    ["JavaScript", 1995],
    ["Go", 2009]
]
return data
```


### Code with Variables {#code-with-variables}

<a id="table--input-data"></a>

| x | y |
|---|---|
| 1 | 2 |
| 3 | 4 |
| 5 | 6 |

```python
return sum([x + y for x, y in data])
```


## Miscellaneous {#miscellaneous}


### Line Breaks {#line-breaks}

Force a line break with <br />
This text appears on a new line.


### Subscripts and Superscripts {#subscripts-and-superscripts}

Use underscores for subscripts: H_2O

Use carets for superscripts: E=mc^2


### Special Strings {#special-strings}

Org mode automatically converts certain strings:

-   Three dots: ...
-   Arrows: -&gt; and &lt;-
-   Dashes: en-dash -- and em-dash ---


### Emphasis in Headlines {#emphasis-in-headlines}

Headlines can contain **bold**, _italic_, and other formatting.


## Conclusion {#conclusion}

This document covers most of the common Org mode syntax features. Org mode is a powerful markup language with many more advanced features for task management, time tracking, literate programming, and publishing.

For more information, visit the official documentation at <https://orgmode.org>.

[^fn:1]: This is the footnote definition for the first reference.
[^fn:2]: This is the second footnote with a named reference.
[^fn:3]: This is the inline definition.
