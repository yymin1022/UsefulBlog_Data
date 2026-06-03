---
title: "25191.  치킨댄스를 추는 곰곰이를 본 임스"
date: "BOJ 25191"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-25191"
---

[문제 바로가기](https://boj.kr/25191)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int beer, chicken, coke;
    cin >> chicken >> coke >> beer;

    int cnt = coke / 2 + beer;
    if(cnt >= chicken){
        cout << chicken << "\n";
    }else{
        cout << cnt << "\n";
    }

    return 0;
}```