//
//  main.c
//  test
//
//  Created by 王逍遥 on 2019/8/24.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <string.h>

int main(int argc, const char * argv[]) {
    int a[] = {1,43,23,12,56,78,45};
    int len = sizeof(a)/sizeof(int);
    int *p = a;
    int index = 0;
    while (index<len) {
        for (int i=index+1; i<len; i++) {
            if (*(p+index)>*(p+i)) {
                int temp;
                temp = *(p+index);
                *(p+index) = *(p+i);
                *(p+i)=temp;
            }
        }
        index++;
    }
    
    for (int k=0; k<len; k++) {
        printf("%d\n",a[k]);
    }
}
