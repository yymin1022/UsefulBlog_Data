---
title: "3733. Share"
date: "BOJ 3733"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-3733"
---

[문제 바로가기](https://boj.kr/3733)

```c++
#include  <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N, S;

    while(cin >> N >> S){
        cout << S / (N + 1) << "\n";
    }

    return 0;
}
```