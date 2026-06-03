---
title: "15736. 청기 백기"
date: "BOJ 15736"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-15736"
---

[문제 바로가기](https://boj.kr/15736)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    int ans = 1;
    while(ans * ans <= N){
        ans++;
    }

    cout << ans - 1 << "\n";

    return 0;
}
```