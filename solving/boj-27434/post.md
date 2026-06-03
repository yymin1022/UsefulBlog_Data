---
title: "27434. 팩토리얼 3"
date: "BOJ 27434"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-27434"
---

[문제 바로가기](https://boj.kr/27434)

```python
N = int(input())
ans = 1
for i in range(N):
    ans = ans * N
    N -= 1
print(ans)
```