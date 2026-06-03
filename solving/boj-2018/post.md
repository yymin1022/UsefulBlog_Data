---
title: "2018.  수들의 합 5"
date: "BOJ 2018"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2018"
---

[문제 바로가기](https://boj.kr/2018)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    int cnt = 1;
    int left = 0;
    int right = 1;
    while(left < right && right < N){
        int temp = 0;
        for(int i = left; i <= right; i++){
            temp += i;
        }

        if(temp <= N){
            right++;
        }else if(temp > N){
            left++;
        }

        if(temp == N){
            cnt++;
        }
    }

    cout << cnt << "\n";

    return 0;
}
```