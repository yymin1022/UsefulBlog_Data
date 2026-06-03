---
title: "2163. 초콜릿 자르기"
date: "BOJ 2163"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2163"
---

[문제 바로가기](https://boj.kr/2163)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N, M;
    cin >> N >> M;

    cout << N * M - 1 << "\n";

    return 0;
}
```