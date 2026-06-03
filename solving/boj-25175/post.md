---
title: "25175. 두~~부 두부 두부"
date: "BOJ 25175"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-25175"
---

[문제 바로가기](https://boj.kr/25175)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);
    
    int N, M, K;
    cin >> N >> M >> K;

    cout << ((M - 1) + (K - 3) % N + N) % N + 1 << "\n";
    
    return 0;
}
```