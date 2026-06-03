---
title: "2443. 별 찍기 - 6"
date: "BOJ 2443"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2443"
---

[문제 바로가기](https://boj.kr/2443)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    for(int i = 0; i < N; i++){
        for(int j = 0; j < i; j++){
            cout << " ";
        }

        for(int j = 0; j < 2 * (N - i) - 1; j++){
            cout << "*";
        }

        cout << "\n";
    }

    return 0;
}
```