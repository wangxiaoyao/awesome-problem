//
//  conio.h
//  C-test
//
//  Created by 王逍遥 on 2019/12/30.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#ifndef conio_h
#define conio_h

#include <stdio.h>
void mode_raw(int);
void clreol(void);
void gotoxy(int,int);
void clrscr(void);
void _fflush(void); /*fflush(stdin) sous windows*/
void Sleep(int);
void Blod(int);
void Underline(int);
char ReadKey(void);
int KeyPressed(void);
void GetPass(char *, char *);
//int getche();
int getch(void);
int wherex(void);
int wherey(void);
int kbhit(void);
//void clr(void);
void textcolor(int);
void textbackground(int);
void line(int,char,char);
void MYclrwin(int,int,int,int);

#endif /* conio_h */
