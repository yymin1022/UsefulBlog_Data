---
title: "14002. 가장 긴 증가하는 부분 수열 4"
date: "BOJ 14002"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-14002"
---

[문제 바로가기](https://boj.kr/14002)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    vector<int> arr;
    vector<int> trace[N];
    for(int i = 0; i < N; i++){
        int input;
        cin >> input;
        arr.push_back(input);
        trace[i].push_back(input);
    }

    int maxDP = 0;
    int maxIdx = 0;
    vector<int> dp(N, 1);
    for(int i = 0; i < N; i++){
        for(int j = 0; j < i; j++){
            if(arr[j] < arr[i] && dp[i] < dp[j] + 1){
                dp[i] = dp[j] + 1;
                trace[i] = trace[j];
                trace[i].push_back(arr[i]);

                if(maxDP < dp[i]){
                    maxDP = dp[i];
                    maxIdx = i;
                }
            }
        }
    }

    cout << dp[maxIdx] << "\n";

    for(int i = 0; i < trace[maxIdx].size(); i++){
        cout << trace[maxIdx][i] << " ";
    }

    return 0;
}
```