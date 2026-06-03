---
title: "2869.  달팽이는 올라가고 싶다"
date: "BOJ 2869"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2869"
---

[문제 바로가기](https://boj.kr/2869)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(0);

    int A, B, V;
    cin >> A >> B >> V;

    int day = (V - A) / (A - B) + 1;

    if((V - A) % (A - B) != 0){
        day++;
    }

    cout << day;
}```