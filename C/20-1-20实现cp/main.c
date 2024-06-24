#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <math.h>

// 实现 cp 拷贝命令:  mycp  XXX(原文件) XXX(复制的新文件)
int main(int argc, char *argv[]){
    
    unsigned int start_time = time(NULL);
    
    if (argc<3) {
        printf("缺少参数");
        return -1;
    }
    
    FILE *fp1 = fopen(argv[1], "r");
    FILE *fp2 = fopen(argv[2], "w");
    
    if (!fp1 || !fp2) {
        printf("操作文件失败");
        return -2;
    }
    
    // 这里每次读取 1KB 的ch。 为了更快的拷贝： 我们可以将ch换更大的值。参见二：写法
    char ch[1024];
    while (!feof(fp1)) {
        memset(ch, 0, 1024);
        // 每一次都会读入1024个字节，不满1024也会写入空格。 所以为了避免这种情况，可以考虑下列写法
        /*
        fread(ch, 1, 1024, fp1);
        fwrite(ch, 1024,1, fp2);
        */
        
        int len = fread(ch, 1, 1024, fp1);
        fwrite(ch, len,1, fp2);
    }
    fclose(fp1);
    fclose(fp2);
    
    unsigned int end_time = time(NULL);

    printf("花费的时间为：%d(秒)", end_time-start_time);
    return EXIT_SUCCESS;
}


