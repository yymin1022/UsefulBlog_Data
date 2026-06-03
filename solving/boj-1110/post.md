---
title: "1110.  더하기 사이클"
date: "BOJ 1110"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-1110"
---

[문제 바로가기](https://boj.kr/1110)

```c
#include <stdio.h>

int main(){
    int count, num, num2;
    count = 0;

    scanf("%d", &num);
    num2 = num;
    
    while(1){
        count++;
        int n = num2 / 10 + num2 % 10;
        
        if((num2 % 10) * 10 + n % 10 == num){
            printf("%d", count);
            break;
        }else{
            num2 = (num2 % 10) * 10 + n % 10;
        }
    }
}
```