---
title: "25494. 단순한 문제 (Small)"
date: "BOJ 25494"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-25494"
---

[문제 바로가기](https://boj.kr/25494)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int T;
    cin >> T;

    while(T--){
        int a, b, c;
        cin >> a >> b >> c;

        cout << min(min(a, b), c) << "\n";
    }

    return 0;
}
```