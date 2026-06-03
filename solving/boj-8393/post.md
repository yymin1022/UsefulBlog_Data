---
title: "8393.  합"
date: "BOJ 8393"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-8393"
---

[문제 바로가기](https://boj.kr/8393)

```c
#include <stdio.h>

int main() {
    int input;
    int sum = 0;

    scanf("%d", &input);

    for(int i = 0; i <= input; i++){
        sum += i;
    }

    printf("%d", sum);

    return 0;
}
```