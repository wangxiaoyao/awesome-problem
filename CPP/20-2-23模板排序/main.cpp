#include <iostream>
using namespace std;

template <class T>
void mySwap(T &max, T &min){
    T temp = max;
    max = min;
    min = temp;
}

template <class T>
void bubbleSort(T arr[],int len){
    for (int i = 0; i<len; ++i) {
        int max = i;
        for (int j = i+1; j<len; ++j) {
            if (arr[max]<arr[j] ) {
                max = j;
            };
        }
        if (max != i) {
            mySwap(arr[max],arr[i]);
        }
    }
//    printf("1");
}
template <class T>
void printArr(T arr[],int len){
    for (int i =0; i<len;++i) {
        cout <<arr[i] << endl;
    }
}

int main(void){
    int arr[] = {5,2,6,9,2};
    int len = sizeof(arr)/sizeof(arr[0]);
    bubbleSort(arr,len);
    printArr(arr,len);

    
    printf("=================>\n");
    char arr1[] = {'k','e','w','z','q'};
    int len1 = sizeof(arr1)/sizeof(arr1[0]);
    bubbleSort(arr1,len1);
    printArr(arr1,len1);
    
}
