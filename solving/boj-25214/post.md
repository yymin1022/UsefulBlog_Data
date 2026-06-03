---
title: "25214. 크림 파스타"
date: "BOJ 25214"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-25214"
---

[문제 바로가기](https://boj.kr/25214)

```c++
#include  <bits/stdc++.h>

using namespace std;

int dp[200001];

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    vector<int> arr;
    for(int i = 0; i < N; i++){
        int input;
        cin >> input;
        arr.push_back(input);
    }

    int minNum = arr[0];
    for(int i = 0; i < N; i++){
        if(i > 0){
            dp[i] = max(arr[i] - minNum, dp[i - 1]);
            minNum = min(arr[i], minNum);
        }

        cout << dp[i] << " ";
    }

    return 0;
}

```
