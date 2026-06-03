---
title: "2739.  구구단"
date: "BOJ 2739"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2739"
---

[문제 바로가기](https://boj.kr/2739)

```c
#include <stdio.h>

int main() {
    int input, i;
    scanf("%d", &input);

    for(i = 1; i <= 9; i++){
        printf("%d * %d = %d\n", input, i, input * i);
    }

    return 0;
}
```