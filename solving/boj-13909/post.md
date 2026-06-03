---
title: "13909. 창문 닫기"
date: "BOJ 13909"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-13909"
---

[문제 바로가기](https://boj.kr/13909)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    cout << (int)sqrt(N) << "\n";

    return 0;
}
```