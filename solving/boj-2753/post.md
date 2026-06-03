---
title: "2753.  윤년"
date: "BOJ 2753"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2753"
---

[문제 바로가기](https://boj.kr/2753)

```c
#include <stdio.h>

int main(){
    int a;
    scanf("%d", &a);
    
    if(a % 4 == 0 && a % 100 != 0){
        printf("1");
    }else if(a % 400 == 0){
        printf("1");
    }else{
        printf("0");
    }

    return 0;
}
```