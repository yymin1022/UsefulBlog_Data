---
title: "15700. 타일 채우기 4"
date: "BOJ 15700"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-15700"
---

[문제 바로가기](https://boj.kr/15700)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    long long N, M;
    cin >> N >> M;

    cout << (N * M) / 2 << "\n";

    return 0;
}
```