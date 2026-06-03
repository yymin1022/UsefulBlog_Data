---
title: "5052. ��화번호 목록"
date: "BOJ 5052"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-5052"
---

[문제 바로가기](https://boj.kr/5052)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(0);
    cout.tie(0);
    ios_base::sync_with_stdio(false);

    int T;
    cin >> T;

    while(T--){
        int N;
        cin >> N;

        vector<string> nums;
        for(int i = 0; i < N; i++){
            string input;
            cin >> input;
            nums.push_back(input);
        }

        sort(nums.begin(), nums.end());

        bool isErr = false;
        for(int i = 1; i < N; i++){
            if(nums[i - 1] == nums[i].substr(0, nums[i - 1].size())){
                isErr = true;
                break;
            }
        }
        if(!isErr){
            cout << "YES" << "\n";
        }else{
            cout << "NO" << "\n";
        }
    }

    return 0;
}
```