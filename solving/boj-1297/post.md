---
title: "1297.  TV 크기"
date: "BOJ 1297"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-1297"
---

[문제 바로가기](https://boj.kr/1297)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int D, H, W;
    cin >> D >> H >> W;

    double K = D / sqrt(H * H + W * W);
    cout << (int)(H * K) << " " << (int)(W * K) << "\n";
    
    return 0;
}```