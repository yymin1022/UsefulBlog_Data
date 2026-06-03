---
title: "1100. 하얀 칸"
date: "BOJ 1100"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-1100"
---

[문제 바로가기](https://boj.kr/1100)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int ans = 0;
    for(int i = 0; i < 8; i++){
        string input;
        cin >> input;

        for(int j = 0; j < 8; j++){
            if((i + j) % 2 == 0 && input[j] == 'F'){
                ans++;
            }
        }
    }

    cout << ans << "\n";

    return 0;
}
```