---
title: "27889. 특별한 학교 이름"
date: "BOJ 27889"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-27889"
---

[문제 바로가기](https://boj.kr/27889)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    string S;
    cin >> S;

    if(S == "NLCS"){
        cout << "North London Collegiate School" << "\n";
    }else if(S == "BHA"){
        cout << "Branksome Hall Asia" << "\n";
    }else if(S == "KIS"){
        cout << "Korea International School" << "\n";
    }else{
        cout << "St. Johnsbury Academy" << "\n";
    }

    return 0;
}
```