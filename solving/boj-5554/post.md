---
title: "5554.  심부름 가는 길"
date: "BOJ 5554"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-5554"
---

[문제 바로가기](https://boj.kr/5554)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int time = 0;
    for(int i = 0; i < 4; i++){
        int input;
        cin >> input;
        time += input;
    }

    cout << time / 60 << "\n" << time % 60 << "\n";

    return 0;
}```