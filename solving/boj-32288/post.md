---
title: "32288. 바코드 닉네임"
date: "BOJ 32288"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-32288"
---

[문제 바로가기](https://boj.kr/32288)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N;
    string S;
    cin >> N >> S;

    for(int i = 0; i < N; i++){
        cout << (S[i] == 'l' ? "L" : "i");
    }

    return 0;
}
```
