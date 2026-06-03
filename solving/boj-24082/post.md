---
title: "24082.  立方体 (Cube)"
date: "BOJ 24082"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-24082"
---

[문제 바로가기](https://boj.kr/24082)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int X;
    cin >> X;

    cout << (long long)pow(X, 3) << "\n";

    return 0;
}```