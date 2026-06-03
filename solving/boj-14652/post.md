---
title: "14652.  나는 행복합니다~"
date: "BOJ 14652"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-14652"
---

[문제 바로가기](https://boj.kr/14652)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N, M, K;
    cin >> N >> M >> K;

    cout << K / M << " " << K % M << "\n";
    
    return 0;
}```