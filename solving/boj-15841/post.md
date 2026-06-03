---
title: "15841. Virus Outbreak"
date: "BOJ 15841"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-15841"
---

[문제 바로가기](https://boj.kr/15841)

```python
dp = [0, 1, 1]
for i in range(3, 491):
    dp.append(dp[i - 1] + dp[i - 2])

while True:
    N = int(input())

    if N < 0:
        break

    print(f"Hour {N}: {dp[N]} cow(s) affected")
```