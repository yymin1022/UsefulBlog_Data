---
title: "2420.  사파리월드"
date: "BOJ 2420"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2420"
---

[문제 바로가기](https://boj.kr/2420)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    long long N, M;
    cin >> N >> M;

    cout << abs(N - M) << "\n";
    
    return 0;
}```