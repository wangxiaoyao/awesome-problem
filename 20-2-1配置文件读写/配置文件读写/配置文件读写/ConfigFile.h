//
//  ConfigFile.h
//  配置文件读写
//
//  Created by 王逍遥 on 2020/2/2.
//  Copyright © 2020 王逍遥. All rights reserved.
//

#ifndef ConfigFile_h
#define ConfigFile_h
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct ConfigInfo{
    char key[128];
    char val[128];
};

// 获取文件有效行数
int getLines_ConfigFile(FILE *file);
// 判断是否有效行
int isValid_ConfigFile(const char*buf);
// 加载配置文件
void loadFile_ConfigFile(const char *filePath, char ***fileData, int *lines);
// 解析配置文件
void parseFile_ConfigFile(char **fileData,int lines,struct ConfigInfo **info);
// 获得指定配置信息
char *getInfo_ConfigFile(const char *key, struct ConfigInfo *info,int lines);
// 内存释放
void destroyInfo_ConfigFile(struct ConfigInfo *info);

#endif /* ConfigFile_h */
