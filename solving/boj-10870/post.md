---
title: "10870.  피보나치 수 5"
date: "BOJ 10870"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-10870"
---

[문제 바로가기](https://boj.kr/10870)

```c++
#include <bits/stdc++.h>

using namespace std;

int fibonacci(int n){
    if(n <= 1){
        return n;
    }else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    cout << fibonacci(N) << "\n";

    return 0;
}```