---
title: "17256.  달달함이 넘쳐흘러"
date: "BOJ 17256"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-17256"
---

[문제 바로가기](https://boj.kr/17256)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int Ax, Ay, Az, Cx, Cy, Cz;
    cin >> Ax >> Ay >> Az >> Cx >> Cy >> Cz;

    cout << Cx - Az << " " << Cy / Ay << " " << Cz - Ax << "\n";

    return 0;
}```