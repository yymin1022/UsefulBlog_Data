---
title: "16969. 차량 번호판 2"
date: "BOJ 16969"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-16969"
---

[문제 바로가기](https://boj.kr/16969)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    string S;
    cin >> S;

    char prev = 'a';
    long long ans = 1;
    for(int i = 0; i < S.size(); i++){
        if(S[i] == 'c'){
            ans *= (prev == 'c') ? 25 : 26;
            prev = 'c';
        }else if(S[i] == 'd'){
            ans *= (prev == 'd') ? 9 : 10;
            prev = 'd';
        }

        ans %= 1000000009;
    }

    cout << ans;

    return 0;
}
```