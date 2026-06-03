---
title: "11021.  A+B - 7"
date: "BOJ 11021"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-11021"
---

[문제 바로가기](https://boj.kr/11021)

```c
#include <stdio.h>

int main(){
    int n;
    scanf("%d", &n);
    
    for(int i = 0; i < n; i++){
        int a, b;

        scanf("%d %d", &a, &b);
        printf("Case #%d: %d\n", i + 1, a + b);
    }

    return 0;
}
```