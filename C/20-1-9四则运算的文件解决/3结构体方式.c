#define _CRT_SECURE_NO_WARNINGS
#include<stdio.h>
#include<string.h>
#include<stdlib.h>

struct opter
{
	int a;//4
	int b;//4
	char c;//1
	float value;//4
};
typedef struct opter opt;

int main()
{
	opt * p = (opt *)malloc(sizeof(opt) * 100);
	FILE * fp = fopen("../../c.txt", "r+");
	if (!fp)
		return -1;
	for (int i = 0; i < 100; i++)
	{
		fscanf(fp, "%d%c%d=\n", &(p + i)->a, &p[i].c, &p[i].b);
		//printf("%d   %d\n", &(p+i).a, p[i].b);
		switch (p[i].c)
		{
		case '+':
			p[i].value = p[i].a + p[i].b;
			break;
		case '-':
			p[i].value = p[i].a - p[i].b;
			break;
		case '*':
			p[i].value = p[i].a * p[i].b;
			break;
		case '/':
			p[i].value = p[i].a* 1.0 / p[i].b;
			break;
		}
	}

	fclose(fp);


	fp = fopen("../../c.txt", "r+");
	if (!fp)
		return -1;

	for (int i = 0; i < 100; i++)
		fprintf(fp, "%d%c%d=%.2f\n", p[i].a, p[i].c, p[i].b, p[i].value);
	fclose(fp);

	free(p);




	system("pause");
	return EXIT_SUCCESS;
}