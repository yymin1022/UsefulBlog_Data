---
title: "22938. 백발백준하는 명사수"
date: "BOJ 22938"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-22938"
---

[문제 바로가기](https://boj.kr/22938)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    long long x1, y1, r1, x2, y2, r2;
    cin >> x1 >> y1 >> r1 >> x2 >> y2 >> r2;

    long long dist = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);

    if(dist < (r2 + r1) * (r2 + r1)){
        cout << "YES" << "\n";
    }else{
        cout << "NO" << "\n";
    }

    return 0;
}
```