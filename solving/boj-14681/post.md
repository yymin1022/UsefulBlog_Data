---
title: "14681.  사분면 고르기"
date: "BOJ 14681"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-14681"
---

[문제 바로가기](https://boj.kr/14681)

```c
#include <stdio.h>

int main(){
    int x, y;
    scanf("%d", &x);
    scanf("%d", &y);
    
    if(x > 0){
        if(y > 0){
            printf("1");
        }else{
            printf("4");
        }
    }else{
        if(y > 0){
            printf("2");
        }else{
            printf("3");
        }
    }

    return 0;
}
```