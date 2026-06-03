---
title: "17254. 키보드 이벤트"
date: "BOJ 17254"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-17254"
---

[문제 바로가기](https://boj.kr/17254)

```c++
#include <bits/stdc++.h>

using namespace std;

bool cmp(pair<pair<int, int>, char> A, pair<pair<int, int>, char> B){
    if(A.first.second == B.first.second){
        return A.first.first < B.first.first;
    }
    return A.first.second < B.first.second;
}

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N, M;
    cin >> N >> M;

    vector<pair<pair<int, int>, char>> arr;
    for(int i = 0; i < M; i++){
        int A, B;
        char C;
        cin >> A >> B >> C;

        arr.push_back(make_pair(make_pair(A, B), C));
    }

    sort(arr.begin(), arr.end(), cmp);

    for(int i = 0; i < M; i++){
        cout << arr[i].second;
    }

    return 0;
}

```