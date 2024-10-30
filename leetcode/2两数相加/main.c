//
//  main.c
//  C-test
//
//  Created by 王逍遥 on 2020/2/15.
//  Copyright © 2020 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <stdlib.h>

struct ListNode {
     int val;
     struct ListNode *next;
};

struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2){
    struct ListNode* head = (struct ListNode*)malloc(sizeof(struct ListNode));
    head->next = NULL;
    struct ListNode* tail = head;
    int sum = 0;
    while (l1 || l2 || sum) {
        sum+= (l1 ? l1->val : 0) + (l2 ? l2->val : 0);
        l1 = l1 ? l1->next : 0;
        l2 = l2 ? l2->next : 0;
        struct ListNode* newNode = (struct ListNode*)malloc(sizeof(struct ListNode));
        newNode->val = sum%10;
        newNode->next = NULL;
        tail->next = newNode;
        tail = tail->next;
        sum/=10;
    }
    return head->next;
}

int main(void){
};

