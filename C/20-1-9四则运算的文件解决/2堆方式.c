#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include<string.h>
#include<stdlib.h>


/*
1、打开文件  判断可用性
2、读取内容 再放堆空间中  关闭文件
3、再次打开文件 读取堆空间内容 写入文件中  关闭文件
//{"2+3=4\n","4*5=9\n",""}
//char * buf[100];  buf[1]
//char ** buf = (char **)malloc(sizeof(char *)*100);
//buf[i] = (char *)malloc(sizeof(char)*20);
*/
int main12()
{
	FILE * fp = fopen("../../c.txt", "r+");
	if (!fp)
		return -1;

	char ** buf = (char **)malloc(sizeof(char *) * 100);

	int a, b;
	char c;
	float value;
	for (int i = 0; i < 100; i++)
	{
		buf[i] = (char *)malloc(sizeof(char) * 20);
		//格式化读取
		fscanf(fp, "%d%c%d=\n", &a, &c, &b);
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
		sprintf(buf[i], "%d%c%d=%.2f\n", a, c, b, value);
		//fgets(buf[i], 20, fp);

	}
	fclose(fp);


	//for (int i = 0; i < 100; i++)
	//{
	//	printf("%s", buf[i]);
	//}

	//将结果重新写入c.txt
	fp = fopen("../../c.txt", "r+");
	if (!fp)
		return -1;

	for (int i = 0; i < 100; i++)
		fputs(buf[i], fp);
	fclose(fp);


	//内存释放
	for (int i = 0; i < 100; i++)
	{
		free(buf[i]);
		buf[i] = NULL;
	}
	free(buf);




	return EXIT_SUCCESS;
}