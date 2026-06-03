---
title: "23802. 골뱅이 찍기 - 뒤집힌 ㄱ"
date: "BOJ 23802"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-23802"
---

[문제 바로가기](https://boj.kr/23802)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    for(int i = 0; i < N; i++){
        for(int j = 0; j < N; j++){
            cout << "@@@@@";
        }
        cout << "\n";
    }

    for(int i = 0; i < N * 4; i++){
        for(int j = 0; j < N; j++){
            cout << "@";
        }
        cout << "\n";
    }

    return 0;
}
```