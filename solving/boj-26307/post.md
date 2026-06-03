---
title: "26307. Correct"
date: "BOJ 26307"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-26307"
---

[문제 바로가기](https://boj.kr/26307)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);
    
    int H, M;
    cin >> H >> M;

    cout << (H - 9) * 60 + M << "\n";

    return 0;
}
```