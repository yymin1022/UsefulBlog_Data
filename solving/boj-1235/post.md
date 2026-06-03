---
title: "1235. 학생 번호"
date: "BOJ 1235"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-1235"
---

[문제 바로가기](https://boj.kr/1235)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int N;
    cin >> N;

    vector <string> student_num;
    for(int i = 0; i < N; i++){
        string input;
        cin >> input;

        reverse(input.begin(), input.end());
        student_num.push_back(input);
    }

    int ans = 1;
    while(true){
        set<string> s;
        for(int i = 0; i < N; i++){
            s.insert(student_num[i].substr(0, ans));
        }

        if(s.size() == N){
            break;
        }

        ans++;
    }

    cout << ans << "\n";

    return 0;
}
```