---
title: "9498.  시험 성적"
date: "BOJ 9498"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-9498"
---

[문제 바로가기](https://boj.kr/9498)

```c
#include <stdio.h>

int main(){
    int a;
    scanf("%d", &a);
    
    if(a >= 90){
        printf("A");
    }else if(a >= 80){
        printf("B");
    }else if(a >= 70){
        printf("C");
    }else if(a >= 60){
        printf("D");
    }else{
        printf("F");
    }

    return 0;
}
```