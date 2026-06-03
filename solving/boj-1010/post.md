---
title: "1010.  다리 놓기"
date: "BOJ 1010"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-1010"
---

[문제 바로가기](https://boj.kr/1010)

```c++
#include <bits/stdc++.h>

using namespace std;

int main(void){
    cin.tie(NULL);
    cout.tie(NULL);
	ios_base::sync_with_stdio(false);

    int T;
    cin >> T;
    for(int i = 0; i < T; i++){
        int N, M;
        cin >> N >> M;
        
        long long ans = 1;
        int temp = 1;
        
        for(int j = M; j > M - N; j--){
            ans *= j;
            ans /= temp++;
        }
        
        cout << ans << '\n';
    }

	return 0;
}```