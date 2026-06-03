---
title: "27110. 특식 배부"
date: "BOJ 27110"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-27110"
---

[문제 바로가기](https://boj.kr/27110)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    int ans = 0;
    for(int i = 0; i < 3; i++){
        int input;
        cin >> input;

        if(input <= N){
            ans += input;
        }else{
            ans += N;
        }
    }

    cout << ans << "\n";

    return 0;
}
```