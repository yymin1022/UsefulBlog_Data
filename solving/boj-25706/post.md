---
title: "25706. 자전거 묘기"
date: "BOJ 25706"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-25706"
---

[문제 바로가기](https://boj.kr/25706)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    vector<int> arr;
    for(int i = 0; i < N; i++){
        int input;
        cin >> input;
        arr.push_back(input);
    }

    vector<int> ans(N);
    for(int i = N - 1; i >= 0; i--){
        if(i == N - 1){
            ans[i] = 1;
        }else{
            if(arr[i] == 0){
                ans[i] = ans[i + 1] + 1;
            }else if (i + arr[i] + 1 >= N) {
                ans[i] = 1;
            }else{
                ans[i] = ans[i + arr[i] + 1] + 1;
            }
        }
    }

    for(int i = 0; i < N; i++){
        cout << ans[i] << " ";
    }

    return 0;
}

```
