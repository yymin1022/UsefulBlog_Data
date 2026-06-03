---
title: "2744.  대소문자 바꾸기"
date: "BOJ 2744"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2744"
---

[문제 바로가기](https://boj.kr/2744)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    string word;
    cin >> word;

    for(int i = 0; i < word.size(); i++){
        if(word[i] < 97){
            cout << (char)(word[i] + 32);
        }else{
            cout << (char)(word[i] - 32);
        }
    }

    return 0;
}```