---
title: "11478.  서로 다른 부분 문자열의 개수"
date: "BOJ 11478"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-11478"
---

[문제 바로가기](https://boj.kr/11478)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    string S;
    cin >> S;

    set<string> words;
    string temp = "";
    for(int i = 0; i < S.size(); i++){
        temp = "";

        for(int j = i; j < S.size(); j++){
            temp += S[j];
            words.insert(temp);
        }
    }

    cout << words.size() << "\n";

    return 0;
}```