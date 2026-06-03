---
title: "1748. 수 이어 쓰기 1"
date: "BOJ 1748"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-1748"
---

[문제 바로가기](https://boj.kr/1748)

```c++
#include  <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    int ans = 0;
    for(int i = 1; i <= N; i *= 10){
        ans += N - i + 1;
    }

    cout << ans << "\n";

    return 0;
}
```