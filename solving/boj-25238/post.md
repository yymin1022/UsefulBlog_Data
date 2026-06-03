---
title: "25238.  가희와 방어율 무시"
date: "BOJ 25238"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-25238"
---

[문제 바로가기](https://boj.kr/25238)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    double A, B;
    cin >> A >> B;

    if(A - (A * B / 100) >= 100){
        cout << 0 << "\n";
    }else{
        cout << 1 << "\n";
    }

    return 0;
}```