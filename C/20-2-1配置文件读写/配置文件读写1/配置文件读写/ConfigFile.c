//
//  ConfigFile.c
//  配置文件读写
//
//  Created by 王逍遥 on 2020/2/2.
//  Copyright © 2020 王逍遥. All rights reserved.
//

#include "ConfigFile.h"
// 获取文件有效行数
int getLines_ConfigFile(FILE *file){
    if (NULL == file) {
        return 0;
    }
    int lines = 0;
    char buf[1024];
    memset(buf, 0, 1024);
    while (  fgets(buf, 1024, file) != NULL) {
        if (isValid_ConfigFile(buf)) {
            memset(buf, 0, 1024);
            lines++;
        }
    }
    rewind(file);
    return lines;
};
// 判断是否有效行
int isValid_ConfigFile(const char*buf){
    if ( buf[0]!='#' && buf[0]!='\n' && strchr(buf, ':' )) {
        return 1;
    }
    return 0;
};
// 加载配置文件
void loadFile_ConfigFile(const char *filePath, char ***fileData, int *lines){
    FILE *file = fopen(filePath, "r");
    int line =  getLines_ConfigFile(file);
    
    char **temp = malloc(sizeof(char *)*line);
    if (file==NULL) {
        return;
    }
    char buf[1024];
    int index = 0;
    while ( fgets(buf, 1024, file) != NULL  ) {
        if (isValid_ConfigFile(buf)) {
            // 当时忘记给每一行分配内存空间，导致报错
            temp[index] = malloc(strlen(buf)+1);
            strcpy( temp[index], buf);
            ++index;
            memset(buf, 0, 1024);
        }
    }
    fclose(file);   
    *lines = line;
    *fileData = temp;
    free(temp);
    temp = NULL;
};
// 解析
void parseFile_ConfigFile(char **fileData,int lines,struct ConfigInfo **info){
    struct ConfigInfo *temp = malloc(sizeof(struct ConfigInfo)*lines);
    memset(temp, 0, sizeof(struct ConfigInfo)*lines);
    for (int i = 0; i<lines; i++) {
        char *pos = strchr(fileData[i],':');
        // 利用指针求得步长，而此时的步长恰好是个数
        strncpy(temp[i].key, fileData[i], pos-fileData[i]);
        strncpy(temp[i].val, pos+1,strlen(pos+1)-1);
//        printf("%s和%s\n",temp[i].key,temp[i].val);
    }
    *info = temp;
    free(temp);
    temp = NULL;
};
// 获得配置信息
char * getInfo_ConfigFile(const char *key, struct ConfigInfo *info,int lines){
    for (int i = 0; i<lines; i++) {
        if (strcmp(key, info[i].key) == 0) {
            return info[i].val;
        }
    }
    return NULL;
};

// 释放内存: 由于是间接赋值， info, fileData等都不需要释放内存。因为他们并没有分配空间
void destroyInfo_ConfigFile(struct ConfigInfo *info){
    if (NULL == info) {
        return;
    };
//    free(info);
//    info = NULL;
}
