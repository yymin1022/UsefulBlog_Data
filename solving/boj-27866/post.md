---
title: "27866. 문자와 문자열"
date: "BOJ 27866"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-27866"
---

[문제 바로가기](https://boj.kr/27866)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    string S;
    int i;
    cin >> S >> i;
    cout << S[i - 1] << "\n";

    return 0;
}
```