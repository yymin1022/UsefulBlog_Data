---
title: "1789.  수들의 합"
date: "BOJ 1789"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-1789"
---

[문제 바로가기](https://boj.kr/1789)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    long long S;
    cin >> S;

    int i = 1;
    long long tempS = 0;
    while(1){
        if(tempS > S){
            cout << i - 2 << "\n";
            break;
        }

        tempS += i;
        i++;
    }

    return 0;
}```