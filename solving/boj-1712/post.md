---
title: "1712.  손익분기점"
date: "BOJ 1712"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-1712"
---

[문제 바로가기](https://boj.kr/1712)

```c++
#include <bits/stdc++.h>

using namespace std;
 
int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(0);

    int A, B, C;
    cin >> A >> B >> C;

    if(B >= C){
        cout << -1 << "\n";
    }else{
        cout << A / (C - B) + 1 << "\n";
    }
}```