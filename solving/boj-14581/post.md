---
title: "14581. 팬들에게 둘러싸인 홍준"
date: "BOJ 14581"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-14581"
---

[문제 바로가기](https://boj.kr/14581)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    string id;
    cin >> id;

    cout << ":fan::fan::fan:" << "\n";
    cout << ":fan::" << id << "::fan:" << "\n";
    cout << ":fan::fan::fan:" << "\n";

    return 0;
}
```