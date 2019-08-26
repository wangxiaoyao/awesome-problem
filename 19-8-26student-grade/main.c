//
//  main.c
//  test
//
//  Created by 王逍遥 on 2019/8/24.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(int argc, const char * argv[]) {
    int arrayOri[4][3]={1,43,34,2,23,34,3,27,89,4,24,67};
    int sum1 =0;
    int sum2 =0;
    int sum3 =0;
    int sum4 =0;
    
    for (int i=0; i<4; i++) {
        for (int j=0; j<3; j++) {
            switch (i) {
                case 0:
                    sum1 +=arrayOri[0][j];
                    break;
                case 1:
                    sum2 +=arrayOri[1][j];
                    break;
                case 2:
                    sum3 +=arrayOri[2][j];
                    break;
                case 3:
                    sum4 +=arrayOri[3][j];
                    break;
            }
     }
    };
    printf("第一名学生的总成绩：%d\n",sum1);
}
