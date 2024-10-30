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

 struct ListNode {
     int val;
     ListNode *next;
     ListNode(int x): val(x), next(NULL) {}
};
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummy = new ListNode(0);
        ListNode* tail = dummy;
        int sum = 0;
        while (l1 || l2 || sum) {
            sum +=  (l1 ? l1->val : 0) + (l2 ? l2->val : 0);
            l1 = l1 ? l1->next : nullptr;
            l2 = l2 ? l2->next : nullptr;
            tail->next =  new ListNode(sum%10);
            tail = tail->next;
            sum/=10;
        }
        return dummy->next;
    };
};


int main(void){
    return 0;
}
