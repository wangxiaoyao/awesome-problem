  #define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include<string.h>
#include<stdlib.h>


/*
1���������ļ� c.txt e.txt
2���жϿ�����
3��ѭ����ȡ
4����ʽ���ַ���  sscanf()   ������
5���ŵ�e.txt�ļ���
6���ļ��ر�

*/
int main()
{
	FILE * fp1 = fopen("../../c.txt", "r");
	FILE * fp2 = fopen("../../e.txt", "w");

	if (!fp1 || !fp2)
		return -1;

	//ѭ��100��
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
