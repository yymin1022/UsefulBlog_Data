---
title: "11945. 뜨거운 붕어빵"
date: "BOJ 11945"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-11945"
---

[문제 바로가기](https://boj.kr/11945)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N, M;
    cin >> N >> M;

    for(int i = 0; i < N; i++){
        string input;
        cin >> input;

        reverse(input.begin(), input.end());

        cout << input << "\n";
    }

    return 0;
}
```