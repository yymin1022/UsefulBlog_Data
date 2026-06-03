---
title: "24417. 알고리즘 수업 - 피보나치 수 2"
date: "BOJ 24417"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-24417"
---

[문제 바로가기](https://boj.kr/24417)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    int A = 1, B = 1;
    for (int i = 2; i < N; i++) {
        int tmp = B;
        B = (A + B) % 1000000007;
        A = tmp;
    }

    cout << B << " ";
    cout << N - 2 << "\n";

    return 0;
}
```