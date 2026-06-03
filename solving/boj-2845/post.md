---
title: "2845.  파티가 끝나고 난 뒤"
date: "BOJ 2845"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2845"
---

[문제 바로가기](https://boj.kr/2845)

```c++
#include <bits/stdc++.h>

using namespace std;
 
int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(0);
    
    int L, P;
    cin >> L >> P;
    
    for(int i = 0; i < 5; i++){
        int compare;
        cin >> compare;

        cout << compare - L * P << " ";
    }

    return 0;
}```