---
title: "10826. 피보나치 수 4"
date: "BOJ 10826"
tag: ["BOJ","Python"]
isPinned: true
url: "boj-10826"
---

[문제 바로가기](https://boj.kr/10826)

```python
arr = [0, 1]
N = int(input())

for i in range(2, N + 1):
    arr.append(arr[i - 1] + arr[i - 2])

print(arr[N])
```