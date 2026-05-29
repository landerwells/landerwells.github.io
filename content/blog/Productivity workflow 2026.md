+++
title = "Productivity workflow 2026"
publishDate = 2026-03-08T00:00:00-06:00
tags = ["blog"]
draft = false
+++

One of my resolutions for 2026 is to implement a productivity system that can
help me stay on track with my goals. I have been tinkering with what that
productivity system will entail for a few months, and I finally feel what I am
doing is working well enough for me to write about it.

I am currently using Emacs and Org-mode for everything. Obsidian is a great
choice as well since it has much better mobile support. Regardless of the
application, I still feel the following areas are a necessity for my
productivity:


## Todo management {#todo-management}

The entry point to my whole system: I have a single `todo.org` file where quick
captures get sent. Basic things like `* TODO Write blog` are put in there and
marked when done.


## Time management {#time-management}

I have seen people tracking every minute of their day, which I find too
invasive. I only want to track time on things that I care about being
"productive" on. Org-mode provides [clocking commands](https://orgmode.org/manual/Clocking-commands.html) to facilitate this and
generate nice printouts of where I have been spending my time each
day/week/month. I simply clock in when I want to work on a particular subject
and clock out when I am done. At the end of each week I do a review of my
progress and see what I can improve for the next week. Here is an example of a
table that I can generate:

| Tags | Headline                                         | Time     |      |
|------|--------------------------------------------------|----------|------|
|      | **Total time**                                   | **2:46** |      |
|      | Programming                                      | 1:10     |      |
|      | &ensp;&ensp;Leetcode                             |          | 1:10 |
|      | Technical Reading                                | 1:09     |      |
|      | &ensp;&ensp;System Design Interview - Alex Xu    |          | 0:09 |
|      | &ensp;&ensp;Operating Systems: Three Easy Pieces |          | 1:00 |
|      | Anki &amp; Language Learning                     | 0:27     |      |


## Habit management {#habit-management}

I believe habits are the most effective way of building lasting behavior. There
are many [books](https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299) that delve into greater detail than I will here. Org-mode once
again pulls through with the habits module, where I can declare a recurring
habit that will appear wonderfully in my agenda view.

Example:

```org
TODO Morning routine
SCHEDULED: <2026-03-08 Sun .+1d>
:PROPERTIES:
:STYLE:    habit
:LAST_REPEAT: [2026-03-07 Sat 09:52]
:END:
```


## Event managment {#event-managment}

The final type of tasks I distinguish are events. Much like habits, these are
recurring, but generally attached to some sort of external cue. Some examples of
events are holidays, anniversaries, or birthdays. I further break these down
into events that involve specific people, and events that don't.


## Reading/reference managment {#reading-reference-managment}

This is still a bit of an underdeveloped area for me as setting this all up
using Emacs is quite a bit more complicated than using Obsidian. A proper
reading system contains the following pieces:

-   Good source of new inputs (RSS feed, book recommendations, tailored feeds,
    etc.)
    It is important to constantly be exploring new ideas and information.  If you
    dwell in the same area for too long, thoughts will get stagnant and you will
    be limiting your brain's ability to process new information and make
    connections you previously were unable to.
-   Capturing from these inputs
    This can be set up with a web clipper, ideally it automatically creates a new
    note with a link to the source material. After that I take notes as I normally
    would.
-   Finally comes the processing of these reference notes into more bite-sized
    pieces. I take what I was writing about when consuming the reference, and
    strip the context, making a note that stands on its own.

If you are curious to learn more about this process, it is essentially what the
Zettelkasten system is.


## Conclusion {#conclusion}

A productivity system is whatever works for an individual. If you like any of my
ideas here, feel free to steal them and incorporate them into your own system. I
will continue to refine what I talked about here over the coming months and
maybe another blog will get written. Until then, I will continue to improve
myself and my writing. Thanks for reading!
