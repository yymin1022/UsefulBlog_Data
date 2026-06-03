---
title: "3053.  택시 기하학"
date: "BOJ 3053"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-3053"
---

[문제 바로가기](https://boj.kr/3053)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    double R;
    cin >> R;

    cout << fixed;
    cout.precision(6);
    cout << R * R * 3.14159265358979 << "\n";
    cout << R * R * 2 << "\n";

    return 0;
}```