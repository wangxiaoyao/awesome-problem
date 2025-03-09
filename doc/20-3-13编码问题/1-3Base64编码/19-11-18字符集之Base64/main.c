//
//  main.c
//  19-11-18字符集之Base64
//
//  Created by 王逍遥 on 2019/11/18.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "base64.h"

int main(int argc,char **argv)
{
    unsigned char *buf =NULL;
//    if(strcmp(argv[1],"-d") == 0)
//    {
//        buf = base64_decode(argv[2]);
//        printf("%s\n",buf);
//    }
//    else
//    {
//        buf = base64_encode(argv[1]);
//        printf("%s\n",buf);
//    }
    
    buf = base64_encode("A");
    printf("%s\n",buf);
    
//    buf = base64_decode("YTEyMzQ1Ng==");
//    printf("%s\n",buf);
    free(buf);
    return 0;
}
