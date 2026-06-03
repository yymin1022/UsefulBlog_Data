---
title: "10407. 2 타워"
date: "BOJ 10407"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-10407"
---

[문제 바로가기](https://boj.kr/10407)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    string S;
    cin >> S;

    cout << (S == "1" ? 2 : 1) << "\n";

    return 0;
}
```