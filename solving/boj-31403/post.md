---
title: "31403. $A + B - C$"
date: "BOJ 31403"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-31403"
---

[문제 바로가기](https://boj.kr/31403)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    string A, B;
    int C;
    cin >> A >> B >> C;

    cout << stoi(A) + stoi(B) - C << "\n";
    cout << stoi(A + B) - C << "\n";

    return 0;
}
```
