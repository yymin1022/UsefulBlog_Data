---
title: "2942. 퍼거슨과 사과"
date: "BOJ 2942"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2942"
---

[문제 바로가기](https://boj.kr/2942)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int R, G;
    cin >> R >> G;

    int i = 1;
    for(; i * i < R; i++){
        if(R % i == 0 && G % i == 0){
            cout << i << " ";
            cout << R / i << " ";
            cout << G / i << "\n";
        }

        if(R % (R / i) == 0 && G % (R / i) == 0){
            cout << R / i << " ";
            cout << R / (R / i) << " ";
            cout << G / (R / i) << "\n";
        }
    }

    if(i * i == R && G % i == 0){
        cout << i << " ";
        cout << R / i << " ";
        cout << G / i << "\n";
    }

    return 0;
}
```