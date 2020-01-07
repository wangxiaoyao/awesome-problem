#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <math.h>

char * longestPalindrome(char * s){
    unsigned long slen = strlen(s);
    unsigned long tlen = slen * 2 + 1;
    char t[tlen];
    
    for (int i = 0; i < slen; i++) {
        t[2 * i] = '|';
        t[2 * i + 1] = s[i];
    }
    t[tlen - 1] = '|';
    int lps_len[tlen];
    
    int c = 0, r = 0, max = 0;
    lps_len[0] = 0;
    for (int i = 1; i < tlen; i++) {
        if (i < r && i + lps_len[2 * c - i] < r) {
            lps_len[i] = lps_len[2 * c - i];
        } else {
            int j = r + 1;
            while (j < tlen && 2 * i - j > -1 && t[j] == t[2 * i - j]) {
                j++;
            }
            lps_len[i] = j - i - 1;
            c = i;
            r = j - 1;
            if (lps_len[i] > lps_len[max]) {
                max = i;
            }
        }
    }
    
    int max_len = lps_len[max];
    int max_index = (max - max_len) / 2;
    char *buf = (char *) malloc(sizeof(char) * (max_len + 1));
    for (int i = 0; i < max_len; i++) {
        buf[i] = s[i + max_index];
    }
    buf[max_len] = '\0';
    return buf;
};

int main(void){
    char arr[] = "babad";
    char * result = longestPalindrome(arr);
    printf("%s\n",result);
}

