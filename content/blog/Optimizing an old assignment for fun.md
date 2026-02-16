+++
title = "Optimizing an old assignment for fun"
publishDate = 2026-02-13T00:00:00-06:00
tags = ["blog"]
draft = false
+++

## Introduction {#introduction}

Whats that? You wanted to hear me talk about C++ for fun? Okay, well if you
insist...

I wrote the following program in my first C++ course at university. Since then I
have graduated and been working as a C++ developer for almost two years. I want
to use my experience to refactor it, make it _much_ faster, and teach a little
about C++ on the way. I took the liberty of removing comments and formatting it,
but left everything else intact:

```cpp
#include "long_square_root.h"
#include <iostream>
#include <string>

void trim(string& a);
string add(string a, string b);
int main(int argc, char** argv);
string subtract(string a, string b);
string multiply(string a, string b);
int compare(string a, string b);

using namespace std;

int main(int argc, char** argv)
{
  string n, ans = "0";
  int decimal;
  cout << "Enter the number you wish to take the square root of:  ";
  getline(cin, n);
  cout << "Enter the number of decimal places you would like in your answer:  ";
  cin >> decimal;
  string zeros(decimal, '0');
  n += zeros + zeros;
  trim(n);
  string* fours = new string[n.length() * 2];
  fours[0] = "0";
  int j = 0;
  if (compare(fours[0], n) != 0)
  {
    fours[0] = "1", j = 0;
    while (compare(multiply(fours[j], "4"), n) < 0)
    {
      fours[j + 1] = multiply(fours[j], "4");
      j++;
    }
    while (j >= 0)
    {
      string num = multiply(fours[j], add("1", multiply("4", ans)));
      if (compare(num, n) < 1)
        n = subtract(n, num), ans = add(multiply(ans, "2"), "1");
      else
        ans = multiply(ans, "2");
      j--;
    }
  }
  if (compare(ans, "0") == 0)
    cout << n << "." << zeros << endl;
  else
    cout << ans.substr(0, ans.length() - decimal) << "." << ans.substr(ans.length() - decimal)
         << endl;
  delete[] fours;
  return 0;
}

string add(string a, string b)
{
  trim(a);
  trim(b);
  int i = a.length() - 1, j = b.length() - 1;
  string ans = "";
  int carry = 0;
  while (i >= 0 || j >= 0 || carry > 0)
  {
    int sum = 0;
    if (i >= 0)
      sum += (a[i] - '0');
    i--;
    if (j >= 0)
      sum += (b[j] - '0');
    j--;
    sum += carry;
    carry = sum / 10;
    ans = (char)(sum % 10 + '0') + ans;
  }
  return ans;
}

string subtract(string a, string b)
{
  trim(a);
  trim(b);
  while (a.length() < b.length())
    a = "0" + a;
  while (b.length() < a.length())
    b = "0" + b;
  for (int i = 0; i < b.length(); i++)
    b[i] = (char)('9' - b[i] + '0');
  string diff = add(add(a, b), "1").substr(1);
  trim(diff);
  return diff;
}

void trim(string& a)
{
  while (a.length() > 1 && a[0] == '0')
    a = a.substr(1);
}

string multiply(string a, string b)
{
  trim(a);
  trim(b);
  if (a == "0" || b == "0")
    return "0";
  string prod(a.length() + b.length(), '0');
  for (int i = a.length() - 1; i >= 0; i--)
  {
    for (int j = b.length() - 1; j >= 0; j--)
    {
      int temp = (prod[i + j + 1] - '0') + (a[i] - '0') * (b[j] - '0');
      prod[i + j + 1] = (char)(temp % 10 + '0');
      prod[i + j] += temp / 10;
    }
  }
  trim(prod);
  return prod;
}

int compare(string a, string b)
{
  if (a.length() > b.length())
    return 1;
  if (b.length() > a.length())
    return -1;
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}
```


## Refactoring {#refactoring}

Upon initial inspection, the program finds the square root of a number to a
given amount of precision. Strings are inexplicably used to facilitate
arbitrarily long integer operations, and there is a concerning lack of
pass-by-reference. Otherwise, the algorithm appears to be a ["digit-by-digit"](https://en.wikipedia.org/wiki/Square_root_algorithms#Digit-by-digit_calculation)
calculation, and verifiably works up to at least 100 digits of precision. In the
spirit of sticking with the assignment, I will retain this basic algorithm,
despite knowing there are more efficient ways of computing square roots.

Lets begin with some abstraction. Its a powerful tool, and one that C++ readily
hands the developer. As I said before, we are using strings to represent
numbers, but that isn't very intuitive right? Lets fix that by defining the
interface we want our new type to have:

```cpp
class long_int
{
  public:
  long_int();
  long_int(int);
  long_int(const std::string& str);

  long_int operator+(const long_int&) const;
  long_int operator-(const long_int&) const;
  long_int operator*(const long_int&) const;
  std::strong_ordering operator<=>(const long_int& other) const;
  bool operator==(const long_int& other) const = default;

  std::vector<int> digits();

  private:
  std::vector<int> data{};
};
```

This class does manage a resource, but the [big five]({{< relref "The rule of three, five, and zero in C++.md" >}}) are not needed as
`std::vector` does all the heavy lifting. Next up come the operator overloads;
implementing these allows us to use our class with operators like `*`, `+`, `-`,
and the equality operations. Unless you are a Lisp programmer, I highly doubt
that `multiply(x, y)` is that intuitive, especially when it comes as part of a
more complicated expression. I much prefer `x * y`.

And that is really all there is to this class. With all of those operations
implemented, lets go back and take a look at `main()`. I could improve a few
things, like providing the `*=` and `-=` operators, but realistically those
copies are going to get optimized out by the compiler anyway.

```cpp
int main(int argc, char** argv)
{
  std::string radicand_string;
  long_int square_root = 0;

  int decimal;

  std::cout << "Enter the number you wish to take the square root of:  ";
  getline(std::cin, radicand_string);
  std::cout << "Enter the number of decimal places you would like in your answer:  ";
  std::cin >> decimal;

  std::string zeros(decimal, '0');
  radicand_string += zeros + zeros;

  std::vector<long_int> fours(radicand_string.size() * 2, 0);
  long_int radicand{radicand_string};

  int j = 0;

  if (radicand != 0)
  {
    fours[0] = 1;

    while ((fours[j] * 4) < radicand)
    {
      fours[j + 1] = fours[j] * 4;
      j++;
    }

    while (j >= 0)
    {
      long_int num = fours[j] * ((square_root * 4) + 1);

      if (num <= radicand)
      {
        radicand = radicand - num;
        square_root = (square_root * 2) + 1;
      }
      else
      {
        square_root = square_root * 2;
      }
      j--;
    }
  }

  for (const auto& n : square_root.digits()) std::cout << n;

  std::cout << '\n';
}
```


## Performance {#performance}

With a much more modern approach to tackling this problem, lets see if any of
our effort so far has given a noticable increase in performance. Keep in mind
that some of this might have come from slightly better operations, due to the
way I chose to rewrite some pieces. But I really don't think this will matter as
I plan to optimize the program much further. And here are the results:
otherwise

| Implementation | Time (seconds) | Speedup   | Improvement (%) |
|----------------|----------------|-----------|-----------------|
| Original       | 29.806         |           |                 |
| New            | 21.702         | 1.3734218 | 27.189157       |

This was a very impercise way to benchmark the general speed of our program. And
it tells us very little about what actually is going on inside. For that we will
need to move on to the next step of our performance journey.


### Profiling {#profiling}

Using the perf tool this is what I get from running the program above.
and wow, would you look at that. All of our time is being spent multiplying. Now
from what you might be thinking, yes, I could go back and implement Karatsuba's
multiplication algorithm for all of the large numbers we need to multiply, but
there is actually something more important that we have to realize about our
problem space, and which is "What are we even multiplying?".

We are implementing a completely generalized O(N^2) multiplication algorithm,
while needing to multiply by 2s and 4s........

2s and 4s.....

Oh...

We do not need a multiplication algorithm.

Multiplying by 2, (and by extension 4 because 4 is just a power of 2), is an
incredibly well optimized operation for binary numbers.

```nil
Overhead  Command  Shared Object         Symbol
  99.59%  a.out    a.out                 [.] long_int::operator*(long_int const&) const
   0.27%  a.out    a.out                 [.] long_int::operator+(long_int const&) const
   0.03%  a.out    [unknown]             [k] 0xffffffff9c201934
   0.03%  a.out    libc.so.6             [.] __memmove_avx_unaligned_erms_rtm
   0.02%  a.out    libc.so.6             [.] _int_malloc
   0.01%  a.out    libc.so.6             [.] __memset_avx2_unaligned_erms_rtm
   0.01%  a.out    libc.so.6             [.] malloc
   0.01%  a.out    libc.so.6             [.] _int_free_create_chunk
   0.00%  a.out    libc.so.6             [.] __memcmp_avx2_movbe_rtm
   0.00%  a.out    a.out                 [.] operator delete(void*, unsigned long)@plt
   0.00%  a.out    libc.so.6             [.] cfree@GLIBC_2.2.5
   0.00%  a.out    libc.so.6             [.] _int_free_merge_chunk
   0.00%  a.out    libstdc++.so.6.0.34   [.] operator delete(void*)@plt
   0.00%  a.out    libc.so.6             [.] unlink_chunk.isra.0
   0.00%  a.out    ld-linux-x86-64.so.2  [.] do_lookup_x
   0.00%  a.out    a.out                 [.] main
   0.00%  a.out    a.out                 [.] operator new(unsigned long)@plt
   0.00%  a.out    libstdc++.so.6.0.34   [.] malloc@plt
   0.00%  a.out    libc.so.6             [.] _int_free_chunk
   0.00%  a.out    a.out                 [.] long_int::long_int(int)
   0.00%  a.out    a.out                 [.] long_int::operator-(long_int const&) const
   0.00%  a.out    libc.so.6             [.] __brk
   0.00%  a.out    libc.so.6             [.] malloc_consolidate
   0.00%  a.out    libc.so.6             [.] _IO_fflush
   0.00%  a.out    ld-linux-x86-64.so.2  [.] _dl_lookup_symbol_x
   0.00%  a.out    ld-linux-x86-64.so.2  [.] check_match
   0.00%  a.out    libstdc++.so.6.0.34   [.] operator new(unsigned long)

```
