---
title: "10953.  A+B - 6"
date: "BOJ 10953"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-10953"
---

[문제 바로가기](https://boj.kr/10953)

```python
num = int(input())

for i in range(num):
    inputStr = input()
    a = int(inputStr.split(",")[0])
    b = int(inputStr.split(",")[1])
    
    print(a + b)
```