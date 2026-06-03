---
title: "7662.  이중 우선순위 큐"
date: "BOJ 7662"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-7662"
---

[문제 바로가기](https://boj.kr/7662)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int T;
    cin >> T;

    for(int i = 0; i < T; i++){
        int k;
        cin >> k;

        multiset<int> nums;
        for(int j = 0; j < k; j++){
            char cmd;
            int n;
            cin >> cmd >> n;

            if(cmd == 'I'){
                nums.insert(n);
            }else{
                if(!nums.empty()){
                    if(n > 0){
                        nums.erase(prev(nums.end()));
                    }else{
                        nums.erase(nums.begin());
                    }
                }
            }
        }

        if(nums.empty()){
            cout << "EMPTY" << "\n";
        }else{
            cout << *prev(nums.end()) << " " << *nums.begin() << "\n";
        }
    }

    return 0;
}```