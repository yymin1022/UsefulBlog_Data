---
title: "24039. 2021은 무엇이 특별할까?"
date: "BOJ 24039"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-24039"
---

[문제 바로가기](https://boj.kr/24039)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    vector<int> prime;
    for(int i = 2; i < 104; i++){
        bool flag = true;
        for(int j = 2; j < i; j++){
            if(i % j == 0) {
                flag = false;
                break;
            }
        }

        if(flag){
            prime.push_back(i);
        }
    }

    int N;
    cin >> N;

    int ans = 0;
    for(int i = 0; ans <= N; i++){
        ans = prime[i] * prime[i + 1];
    }

    cout << ans << "\n";

    return 0;
}
```