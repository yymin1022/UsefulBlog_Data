---
title: "31668. 특별한 가지"
date: "BOJ 31668"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-31668"
---

[문제 바로가기](https://boj.kr/31668)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N, M, K;
    cin >> N >> M >> K;
    cout << (M / N) * K << "\n";

    return 0;
}
```
