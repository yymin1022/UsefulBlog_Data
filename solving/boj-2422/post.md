---
title: "2422. 한윤정이 이탈리아에 가서 아이스크림을 사먹는데"
date: "BOJ 2422"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2422"
---

[문제 바로가기](https://boj.kr/2422)

```c++
#include <bits/stdc++.h>

using namespace std;

bool err[201][201];

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N, M;
    cin >> N >> M;

    for(int i = 0; i < M; i++){
        int A, B;
        cin >> A >> B;
        err[A][B] = true;
        err[B][A] = true;
    }

    int ans = 0;
    for(int i  = 1; i <= N; i++){
        for(int j = i + 1; j <= N; j++){
            for(int k = j + 1; k <= N; k++){
                if(!err[i][j] && !err[i][k] && !err[j][k]){
                    ans++;
                }
            }
        }
    }

    cout << ans << "\n";

    return 0;
}
```