#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include<string.h>
#include<stdlib.h>


/*
1�����ļ�  �жϿ�����
2����ȡ���� �ٷŶѿռ���  �ر��ļ�
3���ٴδ��ļ� ��ȡ�ѿռ����� д���ļ���  �ر��ļ�
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
		//��ʽ����ȡ
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

	//���������д��c.txt
	fp = fopen("../../c.txt", "r+");
	if (!fp)
		return -1;

	for (int i = 0; i < 100; i++)
		fputs(buf[i], fp);
	fclose(fp);


	//�ڴ��ͷ�
	for (int i = 0; i < 100; i++)
	{
		free(buf[i]);
		buf[i] = NULL;
	}
	free(buf);




	return EXIT_SUCCESS;
}