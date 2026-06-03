---
title: "1300.  K번째 수"
date: "BOJ 1300"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-1300"
---

[문제 바로가기](https://boj.kr/1300)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N, K;
    cin >> N >> K;

    int answer;
    int fromL = 1;
    int fromR = K;
    while(fromL <= fromR){
        long long cnt = 0;
        int midValue = (fromL + fromR) / 2;

        for(int i = 1; i <= N; i++){
            cnt += min(midValue / i, N);
        }

        if(cnt < K){
            fromL = midValue + 1;
        }else{
            answer = midValue;
            fromR = midValue - 1;
        }
    }

    cout << answer << "\n";

    return 0;
}```