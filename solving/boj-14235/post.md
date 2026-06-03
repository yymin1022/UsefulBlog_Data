---
title: "14235. 크리스마스 선물"
date: "BOJ 14235"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-14235"
---

[문제 바로가기](https://boj.kr/14235)

```c++
#include  <bits/stdc++.h>

using namespace std;

int num[200001];

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    priority_queue<int> gift;
    while(N--){
        int A;
        cin >> A;

        if(A == 0){
            if(gift.empty()){
                cout << -1 << "\n";
            }else{
                cout << gift.top() << "\n";
                gift.pop();
            }
        }

        for(int i = 0; i < A; i++){
            int input;
            cin >> input;
            gift.push(input);
        }
    }

    return 0;
}
```