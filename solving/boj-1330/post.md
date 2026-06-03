---
title: "1330.  두 수 비교하기"
date: "BOJ 1330"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-1330"
---

[문제 바로가기](https://boj.kr/1330)

```c
#include <stdio.h>

int main(){
    int a, b;
    
    scanf("%d %d", &a, &b);
    
    if(a > b){
        printf(">");
    }else if(a < b){
        printf("<");
    }else{
        printf("==");
    }

    return 0;
}
```