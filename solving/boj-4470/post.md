---
title: "4470. 줄번호"
date: "BOJ 4470"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-4470"
---

[문제 바로가기](https://boj.kr/4470)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    string input;
    getline(cin, input);

    for(int i = 1; i <= N; i++){
        getline(cin, input);

        cout << i << ". " << input << "\n";
    }

    return 0;
}
```