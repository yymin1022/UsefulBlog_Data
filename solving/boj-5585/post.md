---
title: "5585. 거스름돈"
date: "BOJ 5585"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-5585"
---

[문제 바로가기](https://boj.kr/5585)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int N;
    cin >> N;

    N = 1000 - N;

    int ans = 0;
    int coin[6] = {500, 100, 50, 10, 5, 1};
    for(int i = 0; i < 6; i++){
        ans += N / coin[i];
        N %= coin[i];
    }

    cout << ans << "\n";

    return 0;
}
```