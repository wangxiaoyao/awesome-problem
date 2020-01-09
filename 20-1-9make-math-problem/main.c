#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <math.h>

int main(void){

    srand((unsigned)time(NULL));
    
    FILE *fp = fopen("/Users/wangxiaoyao/code-xy/7-0C/C-test/testfile/a.txt", "w");
    
    if (!fp) {
        return -1;
    }
    
    printf("打开\n");
    
    int a,b;
    char c;
    
    for (int i = 0; i<100; i++) {
        switch (rand()%4+1) {
            case 1:
                c = '-';
                break;
            case 2:
                c = '+';
                break;
            case 3:
                c = '*';
                break;
            case 4:
                c = '/';
                break;
            default:
                break;
        }
        
        a = rand()%100;
        b = rand()%100;
        
        fprintf(fp, "%d %c %d = \n", a,c,b);
    }
    
    fclose(fp);

    return EXIT_SUCCESS;
}

