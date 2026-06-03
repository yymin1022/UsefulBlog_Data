---
title: "15439.  Vera and Outfits"
date: "BOJ 15439"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-15439"
---

[문제 바로가기](https://boj.kr/15439)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    cout << N * (N - 1) << "\n";
    
    return 0;
}```