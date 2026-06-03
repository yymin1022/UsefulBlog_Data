---
title: "2609.  최대공약수와 최소공배수"
date: "BOJ 2609"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2609"
---

[문제 바로가기](https://boj.kr/2609)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int a, b;
    cin >> a >> b;

    int gcd = a;
    int tempB = b;
    while(tempB != 0){
        int r = gcd % tempB;
        gcd = tempB;
        tempB = r;
    }

    cout << gcd << "\n";
    cout << a * b / gcd << "\n";
    
    return 0;
}```