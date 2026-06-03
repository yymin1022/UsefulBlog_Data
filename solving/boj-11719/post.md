---
title: "11719.  그대로 출력하기 2"
date: "BOJ 11719"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-11719"
---

[문제 바로가기](https://boj.kr/11719)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(void) {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    string input;
    while(getline(cin, input)){
        cout << input << "\n";
    }

    return 0;
}```