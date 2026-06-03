---
title: "1085.  직사각형에서 탈출"
date: "BOJ 1085"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-1085"
---

[문제 바로가기](https://boj.kr/1085)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int x, y, w, h;
    cin >> x >> y >> w >> h;

    int vertical = min(h - y, y);
    int horizontal = min(w - x, x);

    cout << min(horizontal, vertical);
    
    return 0;
}```