---
title: "31090. 2023은 무엇이 특별할까?"
date: "BOJ 31090"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-31090"
---

[문제 바로가기](https://boj.kr/31090)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int T;
    cin >> T;

    while(T--){
        int N;
        cin >> N;

        cout << ((N + 1) % (N % 100) == 0 ? "Good" : "Bye") << "\n";
    }

    return 0;
}
```
