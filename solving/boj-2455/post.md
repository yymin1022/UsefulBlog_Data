---
title: "2455.  지능형 기차"
date: "BOJ 2455"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2455"
---

[문제 바로가기](https://boj.kr/2455)

```c++
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

int main(){
    ios_base :: sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int max = 0;
    int num = 0;

    for(int i = 0; i < 4; i++){
        int in, out;
        cin >> out >> in;

        num -= out;
        num += in;

        if(max < num){
            max = num;
        }
    }

    cout << max;
}```