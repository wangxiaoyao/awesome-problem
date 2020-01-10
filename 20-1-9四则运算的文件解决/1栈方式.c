  #define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include<string.h>
#include<stdlib.h>


/*
1、打开两个文件 c.txt e.txt
2、判断可用性
3、循环读取
4、格式化字符串  sscanf()   计算结果
5、放到e.txt文件中
6、文件关闭

*/
int main()
{
	FILE * fp1 = fopen("../../c.txt", "r");
	FILE * fp2 = fopen("../../e.txt", "w");

	if (!fp1 || !fp2)
		return -1;

	//循环100次
	int a, b;
	float value = 0;
	char c;

	char buf[20];
	for(int i = 0; i < 100; i++)
	{
		memset(buf, 0, 20);
		fgets(buf, 20, fp1);//2+3=\n
		sscanf(buf, "%d%c%d=\n", &a, &c, &b);

		switch (c)
		{
		case '+':
			value = a + b;
			break;
		case '-':
			value = a - b;
			break;
		case '*':
			value = a * b;
			break;
		case '/':
			value = a * 1.0 / b;
			break;
		}
		memset(buf, 0, 20);
		sprintf(buf, "%d%c%d=%.2f\n", a, c, b, value);
		fputs(buf, fp2);
	}


	fclose(fp1);
	fclose(fp2);

	system("pause");
	return EXIT_SUCCESS;
}
