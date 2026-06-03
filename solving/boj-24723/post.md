---
title: "24723. 녹색거탑"
date: "BOJ 24723"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-24723"
---

[문제 바로가기](https://boj.kr/24723)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    cout << pow(2, N) << "\n";

    return 0;
}
```