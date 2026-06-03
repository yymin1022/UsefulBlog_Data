---
title: "23814. 아 저는 볶음밥이요"
date: "BOJ 23814"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-23814"
---

[문제 바로가기](https://boj.kr/23814)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    long long D, N, M, K;
    cin >> D >> N >> M >> K;

    long long ans = 0;
    long long maxSum = (N + M + K) / D;
    long long rice;
    long long sum;
    long long tmpN = D - N % D;
    long long tmpM = D- M % D;

    rice = K;
    sum = N / D + M / D + rice / D;
    if(rice > ans && sum == maxSum){
        ans = rice;
    }

    rice = K - tmpN;
    sum = (N + tmpN) / D + M / D + rice / D;
    if(rice > ans && sum == maxSum){
        ans = rice;
    }

    rice = K - tmpM;
    sum = N / D + (M + tmpM) / D + rice / D;
    if(rice > ans && sum == maxSum){
        ans = rice;
    }

    rice = K - tmpN - tmpM;
    sum = (N + tmpN) / D + (M + tmpM) / D + rice / D;
    if(rice > ans && sum == maxSum){
        ans = rice;
    }

    cout << ans << "\n";

    return 0;
}
```