---
title: "1008.  A/B"
date: "BOJ 1008"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-1008"
---

[문제 바로가기](https://boj.kr/1008)

```c
#include <stdio.h>
 
int main() {
    int a, b;

    scanf("%d %d", &a, &b);
    printf("%.9f\n", (double)a / b);
    
    return 0;
}
```