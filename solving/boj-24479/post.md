---
title: "24479. 알고리즘 수업 - 깊이 우선 탐색 1"
date: "BOJ 24479"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-24479"
---

[문제 바로가기](https://boj.kr/24479)

```c++
#include  <bits/stdc++.h>

using namespace std;

bool isVisit[100001];
vector<int> ans(100001, 0);
vector<int> arr[100001];

int cnt;
void dfs(int cur){
    if(isVisit[cur]){
        return;
    }

    cnt++;
    ans[cur] = cnt;
    isVisit[cur] = true;

    sort(arr[cur].begin(), arr[cur].end());
    for(int i = 0; i < arr[cur].size(); i++){
        dfs(arr[cur][i]);
    }
}

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N, M, R;
    cin >> N >> M >> R;

    for(int i = 0; i < M; i++){
        int A, B;
        cin >> A >> B;
        arr[A].push_back(B);
        arr[B].push_back(A);
    }

    dfs(R);

    for(int i = 1; i <= N; i++){
        cout << ans[i] << "\n";
    }

    return 0;
}
```