---
title: "9414. 프로그래밍 대회 전용 부지"
date: "BOJ 9414"
tag: ["BOJ","C++"]
isPinned: true
url: "boj-9414"
---

[문제 바로가기](https://boj.kr/9414)

```c++
#include  <bits/stdc++.h>

using namespace std;

int main(){
    cin.tie(NULL);
    cout.tie(NULL);
    ios_base::sync_with_stdio(false);

    int T;
    cin >> T;

    while(T--){
        vector<long long> arr;
        while(true){
            long long input;
            cin >> input;
            if(input == 0){
                break;
            }
            arr.push_back(input);
        }

        sort(arr.begin(), arr.end(), greater<long long>());

        long long cost = 0;
        for(int i = 0; i < arr.size(); i++){
            cost += 2 * pow(arr[i], i + 1);
        }

        if(cost <= 5000000){
            cout << cost << "\n";
        }else{
            cout << "Too expensive" << "\n";
        }
    }

    return 0;
}

```