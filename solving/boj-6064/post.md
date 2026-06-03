---
title: "6064.  카잉 달력"
date: "BOJ 6064"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-6064"
---

[문제 바로가기](https://boj.kr/6064)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    int T;
    cin >> T;

    for(int i = 0; i < T; i++){
        int M, N, X, Y;
        cin >> M >> N >> X >> Y;

        X--;
        Y--;
        
        bool isRight = false;
        for(int j = X; j < M * N; j += M){
            if(j % N == Y){
                cout << j + 1 << "\n";
                isRight = true;
                break;
            }
        }

        if(!isRight){
            cout << -1 << "\n";
        }
    }

    return 0;
}```