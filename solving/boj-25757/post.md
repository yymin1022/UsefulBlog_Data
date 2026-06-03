---
title: "25757. 임스와 함께하는 미니게임"
date: "BOJ 25757"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-25757"
---

[문제 바로가기](https://boj.kr/25757)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);
    
    int N;
    string G;
    cin >> N >> G;

    set<string> person;
    for(int i = 0; i < N; i++){
        string name;
        cin >> name;
        person.insert(name);
    }

    int ans = person.size();
    if(G == "F"){
        ans /= 2;
    }else if(G == "O"){
        ans /= 3;
    }

    cout << ans << "\n";

    return 0;
}
```