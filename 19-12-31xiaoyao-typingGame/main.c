#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "conio.h"
#include <string.h>
void input_ch(char *arr){
    unsigned int start_time = 0;
    unsigned int end_time = 0;
    int val=0;
    for (int i=0; i<10; i++) {
        char inputChar = getch();
        if (i==0) {
            start_time = time(NULL);
        }
        if (inputChar == arr[i]) {
            printf("%c",inputChar);
            val++;
        }else{
            printf("*");
        }
    }
    end_time = time(NULL);
    printf("使用时间为：%d(秒)\n", end_time - start_time);
    printf("正确率为：%0.2f %%\n", val*1.0 / 10 *100);
}

void rand_ch(char * arr){
    srand((unsigned int)time(NULL));
    for (int i = 0; i<10; i++) {
        arr[i] = rand()%26+'a';
    }
}
void startGame(){
    printf("--------开始逍遥的小游戏----------\n");
    printf("-------- 按ESC退出游戏 ----------\n");
    printf("-------- 请按任意键开始 ----------\n");
    
    int keyValue = getch();
    if (keyValue == 27) {
        exit(0);
    }
}


int main(void)
{
 
    // 字库
    char randsChar[10];
    memset(randsChar,0,10);
    
    // 循环直到退出游戏
    while (1) {
        // 开始游戏
        startGame();
        
        // 随机字符
        rand_ch(randsChar);
        printf("%s\n",randsChar);
        
        // 输入字符
        input_ch(randsChar);
    }

    printf("hello");
    return 0;
}
