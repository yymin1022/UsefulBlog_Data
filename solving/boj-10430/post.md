---
title: "10430.  나머지"
date: "BOJ 10430"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-10430"
---

[문제 바로가기](https://boj.kr/10430)

```c
#include <stdio.h>

int main(){
    int a, b, c;

    scanf("%d %d %d", &a, &b, &c);  
    printf("%d\n%d\n%d\n%d", (a + b) % c, ((a % c) + (b % c)) % c, (a * b) % c, ((a % c) * (b % c)) % c);

    return 0;
}
```