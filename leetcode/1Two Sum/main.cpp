//
//  main.cpp
//  C++test
//
//  Created by 王逍遥 on 2020/2/1.
//  Copyright © 2020 王逍遥. All rights reserved.
//

#include <iostream>
#include <string>
#include <ctime>
#include <vector>
#include <unordered_map>
#include <string>

using namespace std;

class Solution1 {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        for (int i = 0; i < nums.size(); i++) {
            for (int j = i + 1; j < nums.size(); j++) {
                if (nums[i] + nums[j] == target) {
                    return {i,j};
                }
            }
        }
        return {};
    };
};

class Solution2 {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> maps;
        for (int i = 0; i < nums.size(); i++) {
            maps[nums[i]]=i;
        }
        for (int i = 0; i < nums.size(); i++) {
            int left = target  - nums[i];
            if (maps.count(left) && maps[left]!=i) {
                return { maps[left],i};
            };
        }
        return {};
    };
};


int main(void){
    return 0;
}
