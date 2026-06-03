---
title: "9657. 돌 게임 3"
date: "BOJ 9657"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-9657"
---

[문제 바로가기](https://boj.kr/9657)

```c++
#include <bits/stdc++.h>

using namespace std;

int dp[10001];

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    dp[1] = 1;
    dp[2] = 0;
    dp[3] = 1;
    dp[4] = 1;
    dp[5] = 1;
    for(int i = 6; i <= N; i++){
        dp[i] = (dp[i - 1] == 0 || dp[i - 3] == 0 || dp[i - 4] == 0) ? 1 : 0;
    }

    cout << (dp[N] == 1 ? "SK" : "CY") << "\n";

    return 0;
}
```