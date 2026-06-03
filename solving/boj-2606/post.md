---
title: "2606.  바이러스"
date: "BOJ 2606"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2606"
---

[문제 바로가기](https://boj.kr/2606)

```c++
#include <bits/stdc++.h>

using namespace std;

bool isVirus[101];
int computer[101][101];
int cnt, N, M;

void dfs(int);

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    cin >> N >> M;

    for(int i = 0; i < M; i++){
        int a, b;
        cin >> a >> b;
        computer[a - 1][b - 1] = 1;
        computer[b - 1][a - 1] = 1;
    }

    isVirus[0] = true;
    dfs(0);

    cout << cnt << "\n";

    return 0;
}

void dfs(int idx){
    if(idx == N){
        return;
    }

    for(int i = 0; i < N; i++){
        if(computer[idx][i] && !isVirus[i]){
            cnt++;
            isVirus[i] = true;
            dfs(i);
        }
    }
}```