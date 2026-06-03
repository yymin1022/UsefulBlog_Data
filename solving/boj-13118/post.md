---
title: "13118. 뉴턴과 사과"
date: "BOJ 13118"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-13118"
---

[문제 바로가기](https://boj.kr/13118)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);
    
    vector<int> p(4);
    for(int i = 0; i < 4; i++){
        cin >> p[i];
    }

    int x, y, r;
    cin >> x >> y >> r;

    int ans = 0;
    for(int i = 0; i < 4; i++){
        if(p[i] == x){
            ans = i + 1;
            break;
        }
    }

    cout << ans << "\n";

    return 0;
}
```