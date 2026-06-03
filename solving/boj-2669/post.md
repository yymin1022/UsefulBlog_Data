---
title: "2669. 직사각형 네개의 합집합의 면적 구하기"
date: "BOJ 2669"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2669"
---

[문제 바로가기](https://boj.kr/2669)

```c++
#include <bits/stdc++.h>

using namespace std;

bool board[101][101];

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int ans = 0;
    for(int i = 0; i < 4; i++){
        int x1, y1, x2, y2;
        cin >> x1 >> y1 >> x2 >> y2;

        for(int j = x1; j < x2; j++){
            for(int k = y1; k < y2; k++){
                if(!board[j][k]){
                    ans++;
                    board[j][k] = true;
                }
            }
        }
    }

    cout << ans << "\n";

    return 0;
}
```