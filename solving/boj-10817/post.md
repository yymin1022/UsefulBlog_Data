---
title: "10817.  세 수"
date: "BOJ 10817"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-10817"
---

[문제 바로가기](https://boj.kr/10817)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(){
    vector<int> nums(3);
    for(int i = 0; i < 3; i++){
        cin >> nums[i];
    }

    sort(nums.begin(), nums.end());

    cout << nums[1] << "\n";

    return 0;
}
```