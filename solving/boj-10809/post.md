---
title: "10809.  알파벳 찾기"
date: "BOJ 10809"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-10809"
---

[문제 바로가기](https://boj.kr/10809)

```c
#include <stdio.h>

int main() {
    char input[100];
    scanf("%s", input);
    
    for(int i = 97; i < 123; i++){
        for(int j = 0; j < 101; j++){
            if(input[j] == '\0'){
                printf("-1");
                break;
            }
            if((int)input[j] == i){
                printf("%d", j);
                break;
            }
        }
    }
    
    return 0;
}
```