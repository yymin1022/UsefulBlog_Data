---
title: "10815.  숫자 카드"
date: "BOJ 10815"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-10815"
---

[문제 바로가기](https://boj.kr/10815)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(void) {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    vector<int> cards;
    for(int i = 0; i < N; i++){
        int input;
        cin >> input;
        cards.push_back(input);
    }

    sort(cards.begin(), cards.end());

    int M;
    cin >> M;
    for(int i = 0; i < M; i++){
        int input;
        cin >> input;

        cout << binary_search(cards.begin(), cards.end(), input) << " ";
    }

    return 0;
}```