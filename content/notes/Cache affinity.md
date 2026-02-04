+++
title = "Cache affinity"
publishDate = 2026-02-04T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Operating system]({{< relref "Operating system.md" >}})

Cache affinity, also called processor affinity or CPU pinning, is the concept
that a process when run on a particular CPU, builds up a fair bit of state in
the caches (and TLBs) of the CPU. When the process is switched out and back in,
it would be adventageous for it to run on the same CPU.
