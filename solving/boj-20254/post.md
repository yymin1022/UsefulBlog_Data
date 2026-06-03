---
title: "20254.  Site Score"
date: "BOJ 20254"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-20254"
---

[문제 바로가기](https://boj.kr/20254)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int Ur, Tr, Uo, To;
    cin >> Ur >> Tr >> Uo >> To;

    cout << Ur * 56 + Tr * 24 + Uo * 14 + To * 6 << "\n";

    return 0;
}```