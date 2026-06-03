---
title: "11022.  A+B - 8"
date: "BOJ 11022"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-11022"
---

[문제 바로가기](https://boj.kr/11022)

```c
#include <stdio.h>

int main(){
    int n;
    scanf("%d", &n);
    
    for(int i = 0; i < n; i++){
        int a, b;

        scanf("%d %d", &a, &b);
        printf("Case #%d: %d + %d = %d\n", i + 1, a, b, a + b);
    }

    return 0;
}
```