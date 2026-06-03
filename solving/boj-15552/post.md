---
title: "15552.  빠른 A+B"
date: "BOJ 15552"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-15552"
---

[문제 바로가기](https://boj.kr/15552)

```c
#include <stdio.h>

int main(){
    int n;
    scanf("%d", &n);
    
    for(int i = 0; i < n; i++){
        int a, b;
        scanf("%d %d", &a, &b);
        printf("%d\n", a + b);
    }

    return 0;
}
```