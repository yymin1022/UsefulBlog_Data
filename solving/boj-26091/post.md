---
title: "26091. 현대모비스 소프트웨어 아카데미"
date: "BOJ 26091"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-26091"
---

[문제 바로가기](https://boj.kr/26091)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N, M;
    cin >> N >> M;

    vector<int> arr;
    for(int i = 0; i < N; i++){
        int input;
        cin >> input;
        arr.push_back(input);
    }

    sort(arr.begin(), arr.end());

    int cnt = 0;
    int fromL = 0;
    int fromR = N - 1;
    while(fromL < fromR){
        int sum = arr[fromL] + arr[fromR];

        if(sum >= M){
            cnt++;
            arr[fromL] = 0;
            arr[fromR] = 0;
            fromR--;
        }
        fromL++;
    }

    cout << cnt << "\n";

    return 0;
}
```