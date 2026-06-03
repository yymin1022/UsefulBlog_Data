---
title: "16162. 가희와 3단 고음"
date: "BOJ 16162"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-16162"
---

[문제 바로가기](https://boj.kr/16162)

```c++
#include  <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N, A, D;
    cin >> N >> A >> D;

    vector<int> arr;
    for(int i = 0; i < N; i++){
        int input;
        cin >> input;
        arr.push_back(input);
    }

    int ans = 0;
    for(int i = 0; i < N; i++){
        if(arr[i] == A + (D * ans)){
            ans++;
        }
    }

    cout << ans << "\n";

    return 0;
}
```