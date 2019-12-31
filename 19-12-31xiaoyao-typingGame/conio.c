//
//  conio.c
//  C-test
//
//  Created by 王逍遥 on 2019/12/30.
//  Copyright © 2019 王逍遥. All rights reserved.
//

#include <stdio.h>
#include <termios.h>
#include <unistd.h>
#include <stdlib.h>
#include <time.h>
#include "conio.h"

enum
{
    BLACK,
    RED,
    GREEN,
    BROWN,
    BLUE,
    MAGENTA,
    CYAN,
    LIGHTGRAY,
    DARKGRAY,
    LIGHTRED,
    LIGHTGREEN,
    YELLOW,
    LIGHTBLUE,
    LIGHTMAGENTA,
    LIGHTCYAN,
    WHITE,
};/*0,1,2,3,4,5,6,7,... pour textbackground*/

#define CLEARELN        printf("\x1B[2K")    // Clear Entire LiNe
#define WHITEBOLD 9
#define ESC 033 /* Escape char */

static struct termios new_settings;
static int peek_character = -1;

struct textinfo
{
    int curx;
    int cury;
};

struct textinfo text={0, 0};

void mode_raw(int activer) {
    static struct termios cooked;
    static int raw_actif = 0;
    if (raw_actif == activer) {return;}
    if (activer) {
        struct termios raw;
        tcgetattr(STDIN_FILENO, &cooked);
        raw = cooked;
        cfmakeraw(&raw);
        tcsetattr(STDIN_FILENO, TCSANOW, &raw);
    }
    else {tcsetattr(STDIN_FILENO, TCSANOW, &cooked);}
    raw_actif = activer;
}

/*efface la ligne entiere et ne bouge pas le curseur*/
void clreol(void) {
    
    CLEARELN;
}

void gotoxy(int x, int y) {
    
    if(x == 1 && y == 1) {
        
        printf("%c[%d;%dH", ESC, 0, 0);
        text.curx = 0;
        text.cury = 0;
        
    }
    
    else {
        
        printf("%c[%d;%dH", ESC, y, x);
        text.curx = x;
        text.cury = y;
        
    }
    
}

void Sleep(int pause) {
    
    usleep(pause*1000); // en milliseconde 1000 -> 1 seconde comme celle de windows
    fflush(stdout); // il faut vider le tampon de sortie
    
}

void Blod(int activer) {
    
    (activer)? printf("\e[1m") : printf("\e[0m");
    
}

void Underline(int activer) {
    
    (activer)? printf("\e[4m") : printf("\e[0m");
    
}

void textcolor(int fg) {
    int x=fg;
    if((fg < 0) || (fg > 7)) x = 0;
    printf("\e[3%dm", x);
}

void textbackground(int color) {
    
    printf ("%c[%dm", ESC, 40+color);
    
}

int wherex(void) {
    return text.curx;
}

int wherey(void) {
    return text.cury;
}

int getche() {
    
    struct termios t;
    int c;
    
    tcgetattr(0,&t);
    t.c_lflag&=~ICANON;
    tcsetattr(0,TCSANOW,&t);
    fflush(stdout);
    c=getchar();
    t.c_lflag|=ICANON;
    tcsetattr(0,TCSANOW,&t);
    return c;
}

/*attention avec celle de ncurses si on utilise ncurses il y aura des conflits de nom*/
int getch(void) {
    
    struct termios oldt, newt;
    int ch;
    tcgetattr(STDIN_FILENO, &oldt);
    newt = oldt;
    newt.c_lflag &= ~(ICANON | ECHO);
    tcsetattr(STDIN_FILENO, TCSANOW, &newt);
    ch = getchar();
    tcsetattr(STDIN_FILENO, TCSANOW, &oldt);
    
    return ch;
}
int kbhit(void) {
    
    unsigned char ch;
    int nread;
    
    if (peek_character != -1) return 1;
    new_settings.c_cc[VMIN]=0;
    tcsetattr(0, TCSANOW, &new_settings);
    nread = read(0,&ch,1);
    new_settings.c_cc[VMIN]=1;
    tcsetattr(0, TCSANOW, &new_settings);
    if(nread == 1)
    {
        peek_character = ch;
        return 1;
    }
    
    return 0;
}

void clrscr(void) {
    /*son comportement n'est pas le même que clrscr de windows il faudrait utiliser
     ncurses avec initscr(); clear(); move(0,0);  endwin(); */
    printf("%c[2J", ESC);
    gotoxy(0, 0);
    
}


char ReadKey(void) {
    char c;
    mode_raw(1);
    c = getchar();
    mode_raw(0);
    return c;
}

int KeyPressed(void) {
    struct timeval tv = { 0, 0 };
    fd_set readfds;
    
    FD_ZERO(&readfds);
    FD_SET(STDIN_FILENO, &readfds);
    
    return select(STDIN_FILENO + 1, &readfds, NULL, NULL, &tv) == 1;
}

void GetPass(char * prompt, char * pass) {
    int cpt=0;
    printf("%s", prompt);
    while((pass[cpt]=ReadKey())!=13 && cpt!=100)
    {
        putchar('*');
        cpt++;
    }
    printf("\n");
    pass[cpt]=0; // normalement c'est pass[cpt]='\0'; mais ça revient au même
}

/*vider le buffer d'entrée stdin mange les caractères et positionne le curseur après le \n*/
void _fflush(void) {
    int Stdin;
    
    while((Stdin=getchar()) != '\n' && Stdin != EOF);
}


//line(longueur,caracterededantdebut,caracterededantfin);
void line(int x, char c1, char c2) {
    int cpt;
    putchar(c1);
    for(cpt=1; cpt<=(x-2); cpt++)  putchar(c2);
    putchar(c1);
    putchar('\n');
}

/*
 //box(longueur,largeur,caracterededantadroite,caracterededantagauche,caracterededantenbasadroite,caracterededantenbasadauche);
 void box(int x, int y, char c1, char c2, char c3, char c4)
 {
 int cpt;
 line(x, c1, c2);
 for(cpt=1; cpt<=(y-2); cpt++) line(x, c3, c4);
 line(x, c1, c2);
 }
 */

//MYclrwin(postion en x,position en y,longueur,largeur)
void MYclrwin(int x, int y,int xx,int yy) {
    int i;
    
    for(i=1; i<=(yy/2)-2; i++) {
        
        gotoxy(x,y); y++; line(xx,' ',' ');
        
    }
    
}
