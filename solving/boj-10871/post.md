---
title: "10871.  X보다 작은 수"
date: "BOJ 10871"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-10871"
---

[문제 바로가기](https://boj.kr/10871)

```c
#include <stdio.h>

int main(){
    int N, X;
    scanf("%d %d", &N, &X);
    
    for(int i = 0; i < N; i++){
        int input;
        scanf("%d", &input);
        
        if(input < X){
            printf("%d ", input);
        }
    }

    return 0;
}
```