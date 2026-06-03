---
title: "11365. !밀비 급일"
date: "BOJ 11365"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-11365"
---

[문제 바로가기](https://boj.kr/11365)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    while(true){
        string secret;
        getline(cin, secret);

        if(secret == "END"){
            break;
        }

        reverse(secret.begin(), secret.end());
        cout << secret << "\n";
    }

    return 0;
}
```