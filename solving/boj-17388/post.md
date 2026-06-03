---
title: "17388. 와글와글 숭고한"
date: "BOJ 17388"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-17388"
---

[문제 바로가기](https://boj.kr/17388)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);
    
    int S, K, H;
    cin >> S >> K >> H;

    if(S + K + H >= 100){
        cout << "OK" << "\n";
    }else{
        if(S < K){
            if(S < H){
                cout << "Soongsil" << "\n";
            }else{
                cout << "Hanyang" << "\n";
            }
        }else{
            if(K < H){
                cout << "Korea" << "\n";
            }else{
                cout << "Hanyang" << "\n";
            }
        }
    }

    return 0;
}
```