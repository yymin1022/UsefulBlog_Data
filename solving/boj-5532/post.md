---
title: "5532.  방학 숙제"
date: "BOJ 5532"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-5532"
---

[문제 바로가기](https://boj.kr/5532)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int L, A, B, C, D;
    cin >> L >> A >> B >> C >> D;

    int kor = A / C;
    int math = B / D;

    if(A % C){
        kor++;
    }
    if(B % D){
        math++;
    }

    cout << L - max(kor, math) << "\n";

    return 0;
}
```