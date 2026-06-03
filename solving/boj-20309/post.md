---
title: "20309. 트리플 소트"
date: "BOJ 20309"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-20309"
---

[문제 바로가기](https://boj.kr/20309)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    for(int i = 0; i < N; i++){
        int input;
        cin >> input;
        if(i % 2 == input % 2){
            cout << "NO" << "\n";
            return 0;
        }
    }

    cout << "YES" << "\n";

    return 0;
}
```