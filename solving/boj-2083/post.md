---
title: "2083. ��비 클럽"
date: "BOJ 2083"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-2083"
---

[문제 바로가기](https://boj.kr/2083)

```c++
#include <bits/stdc++.h>

using namespace std;

int main() {
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    while(true){
        string name;
        int age, weight;
        cin >> name >> age >> weight;

        if(name == "#"){
            break;
        }

        cout << name << " ";

        if(age > 17 || weight >= 80){
            cout << "Senior" << "\n";
        }else{
            cout << "Junior" << "\n";
        }
    }

    return 0;
}
```