---
title: "10989.  수 정렬하기 3"
date: "BOJ 10989"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-10989"
---

[문제 바로가기](https://boj.kr/10989)

```c++
#include <bits/stdc++.h>

using namespace std;

int nums[10001];

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    for(int i = 0; i < N; i++){
        int input;
        cin >> input;

        nums[input]++;
    }

    for(int i = 1; i <= 10000; i++){
        for(int j = 0; j < nums[i]; j++){
            cout << i << "\n";
        }
    }

    return 0;
}```