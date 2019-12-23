#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void printArr(char **arr,int len){
    for (int i=0; i<len; i++) {
        printf("%s\n",arr[i]);
    }
}
void sortXiao(char **arr,int len){
    char *temp;
    for (int i =0; i<len; i++) {
        int min = i;
        for (int j=i+1;j<len; j++) {
            if (strcmp(arr[j], arr[min]) < 0 ) {
                 min = j;
            }
        }
        if (min != i) {
            temp = arr[i];
            arr[i]=arr[min];
            arr[min]=temp;
        }
    }
}

int main(int argc, const char * argv[]) {
    char *pArr[]= {"asd","csf","as","qwf"};
    int len = sizeof(pArr)/sizeof(char *);
    sortXiao(pArr,len);
    printArr(pArr,len);
    return 0;
}
