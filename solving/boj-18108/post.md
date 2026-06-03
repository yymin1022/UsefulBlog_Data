---
title: "18108.  1998년생인 내가 태국에서는 2541년생?!"
date: "BOJ 18108"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-18108"
---

[문제 바로가기](https://boj.kr/18108)

```c++
#include <bits/stdc++.h>

using namespace std;
 
int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(0);

    int year;
    cin >> year;
    
    cout << year - 543;

    return 0;
}```