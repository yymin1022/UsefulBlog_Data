---
title: "3049. 다각형의 대각선"
date: "BOJ 3049"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-3049"
---

[문제 바로가기](https://boj.kr/3049)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;
    
    cout << N * (N - 1) * (N - 2) * (N - 3) / 24 << "\n";

    return 0;
}
```