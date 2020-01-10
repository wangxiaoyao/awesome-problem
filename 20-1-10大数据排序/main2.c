#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <math.h>

// 给大数据排序，随机的10000个数字， 数字大小在 1-10000之间
int main(void){
   
    unsigned int  startT = time(NULL);
    FILE *fp1 = fopen("XXX/a.txt", "r");
    FILE *fp2 = fopen("XXX/b.txt", "w");
    
    if (!fp1 || !fp2) {
        return -1;
    }
    
    // 1 冒泡排序  十万的数 用时23秒
    int *p = (int *)malloc(sizeof(int)*100000);
    for (int i = 0; i< 100000; i++) {
        fscanf(fp1, "%d\n", &p[i]);
    }
    int temp = 0;
    for (int i = 0; i<100000; i++) {
        for (int j= i+1; j<100000; j++) {
            if (p[i]>p[j]) {
                temp = p[i];
                p[i] = p[j];
                p[j] = temp;
            }
        }
    }
    
    for (int i = 0; i <100000; i++) {
        fprintf(fp2, "%d\n", p[i]);
    }
    
    free(p);
    fclose(fp1);
    fclose(fp2);
    unsigned int endT = time(NULL);
    printf("%d(s)\n", endT - startT);

    return EXIT_SUCCESS;
}


