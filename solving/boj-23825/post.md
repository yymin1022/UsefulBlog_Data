---
title: "23825. SASA 모형을 만들어보자"
date: "BOJ 23825"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-23825"
---

[문제 바로가기](https://boj.kr/23825)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N, M;
    cin >> N >> M;

    cout << min(N / 2, M / 2) << "\n";

    return 0;
}
```