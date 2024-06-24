//
//  main.c
//  test
//
//  Created by 王逍遥 on 2019/8/24.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <string.h>
#include <stdlib.h>


int main(int argc, const char * argv[]) {
    int arr[6]={1,2,3,4,5,6};
    int *p = arr;
    
//    -------------------------------------》
    p++;
    *p=100; // 此时的arr数组？

//    p=100; // 野指针
//    *p=100; // 非法操作
    p=&arr[3];
    *p=100; // 此时arr数组？

    p--;
    *p=20; //此时arr数组？

    p = &arr[0];
    *p+=100;//此时arr数组
    
    
    for (int i =0; i<6; i++) {
        printf("%d\n",arr[i]);
    }
    
}
