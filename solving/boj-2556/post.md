---
title: "2556.  별 찍기 - 14"
date: "BOJ 2556"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2556"
---

[문제 바로가기](https://boj.kr/2556)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    for(int i = 0; i < N; i++){
        for(int j = 0; j < N; j++){
            cout << "*";
        }

        cout << "\n";
    }

    return 0;
}```