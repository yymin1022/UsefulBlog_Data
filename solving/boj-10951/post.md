---
title: "10951.  A+B - 4"
date: "BOJ 10951"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-10951"
---

[문제 바로가기](https://boj.kr/10951)

```c
#include <stdio.h>

int main(){
    int a, b;
    
    while(1){
        if(scanf("%d %d", &a, &b) != EOF){
            printf("%d\n", a + b);
        }else{
            break;
        }
    }
}
```