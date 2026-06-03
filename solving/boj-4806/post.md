---
title: "4806. 줄 세기"
date: "BOJ 4806"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-4806"
---

[문제 바로가기](https://boj.kr/4806)

```c++
#include  <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int i = 0;
    string S;

    while(getline(cin, S)){
        i++;
    }

    cout << i << "\n";

    return 0;
}
```