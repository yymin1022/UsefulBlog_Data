---
title: "5355. 화성 수학"
date: "BOJ 5355"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-5355"
---

[문제 바로가기](https://boj.kr/5355)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    cout << fixed;
    cout.precision(2);

    int T;
    cin >> T;

    while(T--){
        double input;
        cin >> input;

        string S;
        getline(cin, S);

        for(int i = 1; i < S.size(); i += 2){
            if(S[i] == '@'){
                input *= 3;
            }else if(S[i] == '%'){
                input += 5;
            }else{
                input -= 7;
            }
        }

        cout << input << "\n";
    }

    return 0;
}
```