//
//  main.c
//  配置文件读写
//
//  Created by 王逍遥 on 2020/2/2.
//  Copyright © 2020 王逍遥. All rights reserved.
//
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "ConfigFile.h"

int main(int argc, const char * argv[]) {
    const char *filePath = "/Users/wangxiaoyao/code-xy/7-0C/git-project/20-2-1配置文件读写/config.ini";
    char **fileData = NULL;
    int lines = 0;
    struct ConfigInfo *info = NULL;
    
    loadFile_ConfigFile(filePath,&fileData,&lines);
    parseFile_ConfigFile(fileData,lines,&info);
    printf("%s\n",getInfo_ConfigFile("ip",info,lines));
    destroyInfo_ConfigFile(info);
    return 0;
}
