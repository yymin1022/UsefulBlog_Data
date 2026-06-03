---
title: "5555. 반지"
date: "BOJ 5555"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-5555"
---

[문제 바로가기](https://boj.kr/5555)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    string word;
    cin >> word >> N;

    int cnt = 0;
    for(int i = 0; i < N; i++){
        string ring;
        cin >> ring;

        ring += ring;

        if(ring.find(word.c_str()) != string::npos){
            cnt++;
        }
    }

    cout << cnt << "\n";

    return 0;
}
```