---
title: "14246. K보다 큰 구간"
date: "BOJ 14246"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-14246"
---

[문제 바로가기](https://boj.kr/14246)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    long long N, K;
    cin >> N;

    vector<long long> arr;
    arr.push_back(0);
    for(int i = 1; i <= N; i++){
        long long input;
        cin >> input;
        arr.push_back(input);

        arr[i] += arr[i - 1];
    }

    cin >> K;

    long long ans = 0;
    for(int i = 1; i <= N; i++){
        for(int j = 0; j < i; j++){
            if(arr[i] - arr[j] > K){
                ans++;
            }else{
                break;
            }
        }
    }

    cout << ans << "\n";

    return 0;
}
```