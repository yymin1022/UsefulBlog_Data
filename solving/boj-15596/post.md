---
title: "15596.  정수 N개의 합"
date: "BOJ 15596"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-15596"
---

[문제 바로가기](https://boj.kr/15596)

```c++
#include <vector>

long long sum(std::vector<int> &a) {
	long long ans = 0;
    
    for(int i = 0; i < a.size(); i++){
        ans += a[i];
    }
    
	return ans;
}```