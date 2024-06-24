#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <math.h>

int main(void){
    
    FILE *fp1= fopen("/Users/wangxiaoyao/code-xy/7-0C/C-test/testfile/a.txt", "r");
    FILE *fp2= fopen("/Users/wangxiaoyao/code-xy/7-0C/C-test/testfile/b.txt", "w");
    
    if (!fp1 || !fp2) {
        return -1;
    }
    int a=0;
    int b=0;
    char c;
    float d=0.0;
    
    for (int i =0; i<100; i++) {
        // 值得注意的是这里的格式必须和a.txt一模一样！包括空格。
        fscanf(fp1, "%d %c %d =",&a,&c,&b);
        switch (c) {
            case '+':
                d = a + b;
                break;
            case '-':
                d = a - b;
                break;
            case '*':
                d = a*1.0 * b;
                break;
            case '/':
                d = a*1.0 / b;
                break;
            default:
                break;
        }
        fprintf(fp2, "%d %c %d = %0.2f\n",a,c,b,d);
    }
    
    fclose(fp1);
    fclose(fp2);
    
    return EXIT_SUCCESS;
}


