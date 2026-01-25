+++
title = "Embarassingly parallel"
publishDate = 2026-01-24T00:00:00-06:00
tags = ["publish"]
draft = false
+++

Previous: [Multithreading]({{< relref "Multithreading.md" >}})

Embarassingly parallel is a term used when a problem or workload where little or
no effort is needed to split the problem into a number of parallel tasks.

[Computer graphics]({{< relref "Graphics programming.md" >}}) rendering is one such example of this since each individual
pixel does not need to know anything about its surrounding ones. All of this
parallelism is achieved on the GPU, which is tailored perfectly for the task.
