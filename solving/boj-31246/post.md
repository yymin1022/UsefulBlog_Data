---
title: "31246. 모바일 광고 입찰"
date: "BOJ 31246"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-31246"
---

[문제 바로가기](https://boj.kr/31246)

```c++
#include  <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N, K;
    cin >> N >> K;

    vector<int> arr;
    for(int i = 0; i < N; i++){
        int A, B;
        cin >> A >> B;
        arr.push_back(A - B);
    }

    sort(arr.begin(), arr.end(), greater<>());

    if(arr[K - 1] > 0){
        cout << 0 << "\n";
    }else{
        cout << arr[K - 1] * -1 << "\n";
    }

    return 0;
}
```
