---
title: "1312. 소수"
date: "BOJ 1312"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-1312"
---

[문제 바로가기](https://boj.kr/1312)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int A, B, N, ans;
    cin >> A >> B >> N;

    for(int i = 0; i <= N; i++){
        ans = A / B;
        A = (A % B) * 10;
    }

    cout << ans << "\n";

    return 0;
}
```
