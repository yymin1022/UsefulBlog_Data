---
title: "14607. 피자 (Large)"
date: "BOJ 14607"
tag: ["BOJ","C++"]
isPinned: 14607. 피자 (Large)
url: "boj-14607"
---

[문제 바로가기](https://boj.kr/14607)

```c++
#include  <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    long long N;
    cin >> N;

    cout << (N * (N - 1)) / 2 << "\n";

    return 0;
}
```