#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <math.h>

// 给大数据排序，随机的10000个数字， 数字大小在 1-10000之间
int main(void){
   
    unsigned int  startT = time(NULL);
    FILE *fp1 = fopen("XXX/a.txt", "w");
    
    if (!fp1) {
        return -1;
    }
    
    
    // 随机生成100000个数字。 数字的范围是 1-1000
    
    srand((unsigned)time(NULL));
    int i = 0;
    int num = 0;
    while (i<100000) {
        num = rand()%1000+1;
        fprintf(fp1, "%d\n",num);
        i++;
    }
    fclose(fp1);

    return EXIT_SUCCESS;
}


