---
title: "2839.  설탕 배달"
date: "BOJ 2839"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2839"
---

[문제 바로가기](https://boj.kr/2839)

```python
weight = int(input())
count = 0

if weight % 5 == 0:
    print(int(weight / 5))
else:
    while(True):
        count += 1
        weight -= 3

        if weight < 0:
            print(-1)
            break

        if weight == 0:
            print(count)
            break

        if weight % 5 == 0:
            print(count + int(weight / 5))
            break
```