---
title: "2742.  기찍 N"
date: "BOJ 2742"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2742"
---

[문제 바로가기](https://boj.kr/2742)

```c
#include <stdio.h>

int main() {
    int input;
    scanf("%d", &input);

    for(int i = input; i > 0; i--){
        printf("%d\n", i);
    }

    return 0;
}
```