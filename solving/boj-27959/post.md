---
title: "27959. 초코바"
date: "BOJ 27959"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-27959"
---

[문제 바로가기](https://boj.kr/27959)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N, M;
    cin >> N >> M;

    cout << ((N * 100 >= M) ? "Yes" : "No") << "\n";

    return 0;
}
```