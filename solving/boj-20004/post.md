---
title: "20004. 베스킨라빈스 31"
date: "BOJ 20004"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-20004"
---

[문제 바로가기](https://boj.kr/20004)

```c++
#include  <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int A;
    cin >> A;

    for(int i = 1; i <= A; i++){
        if(31 % (i + 1) == 1){
            cout << i << "\n";
        }
    }

    return 0;
}
```
