#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <math.h>

// 给大数据排序，随机的10000个数字， 数字大小在 1-10000之间
int main(void){
   
    unsigned int  startT = time(NULL);
    FILE *fp1 = fopen("/Users/wangxiaoyao/code-xy/7-0C/C-test/testfile/c.txt", "r");
    FILE *fp2 = fopen("/Users/wangxiaoyao/code-xy/7-0C/C-test/testfile/d.txt", "w");
    
    if (!fp1 || !fp2) {
        return -1;
    }
    
    // 2 简便算法： 十万的数，用时1s
    
    int arr[1000] = {0};
    int value;
    for (int i = 0; i< 100000; i++) {
        fscanf(fp1, "%d\n", &value);
        arr[value-1]++;
    }
    for (int i = 0; i<1000; i++) {
        for (int j= 0; j<arr[i]; j++) {
            fprintf(fp2, "%d\n",i+1);
        }
    }
    fclose(fp1);
    fclose(fp2);
    unsigned int endT = time(NULL);
    printf("%d(s)\n", endT - startT);

    return EXIT_SUCCESS;
}


