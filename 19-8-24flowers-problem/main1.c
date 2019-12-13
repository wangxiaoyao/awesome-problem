#include <stdio.h>

int main()
{
    int flowNum=100;
    for (;flowNum<1000; flowNum++) {
        int a = floor(flowNum/100);
        int b = floor((flowNum-a*100)/10);
        int c = flowNum - 100*a -10*b;
//      printf("%d,%d,%d\n",a,b,c);
        if (flowNum == pow(c,3)+pow(b,3)+pow(a,3)) {
            printf("%d\n",flowNum);
        }
    }
    return 0;
}
