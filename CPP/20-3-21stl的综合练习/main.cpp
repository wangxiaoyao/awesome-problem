//
//  main.cpp
//  C++test
//
//  Created by 王逍遥 on 2020/2/1.
//  Copyright © 2020 王逍遥. All rights reserved.
//

#include <iostream>
#include <string>
#include <vector>
#include <array>
#include <deque>
#include <algorithm>
#include <numeric>
#include <iomanip>

using namespace std;

class Person{
public:
    Person(string name,float score[10]):m_name(name){
        for (int i =0; i<10; ++i) {
            this->m_score.push_back(score[i]);
        };
    };
    
    string getName(){
        return m_name;
    }
    deque<float> getScore(){
        return m_score;
    }
    void printScore(){
        for(auto s:m_score){
            cout << s<<endl;
        }
    };
    float resolveAvgScore(){
        sort(m_score.begin(), m_score.end());
        m_score.pop_back();
        m_score.pop_front();
        
        int sum = accumulate(m_score.begin(), m_score.end(),0);
        this->m_avgScore = sum*1.0/8;
        return m_avgScore;
    };
private:
    deque<float>m_score;
    float m_avgScore;
    string m_name;
};

void test1(){
    float score1[10];
    for (int i = 0; i<10; i++) {
        score1[i]=i+1;
    }
    
    Person p1("A",score1);
    Person p2("B",score1);
    Person p3("C",score1);
    Person p4("D",score1);
    Person p5("E",score1);
    
    vector<Person>arrPerson={p1,p2,p3,p4,p5};
    for (int i =0; i<5; ++i) {
        printf("第%d名选手的平均分为:%0.2f\n",i,arrPerson[i].resolveAvgScore());
    }
    printf("1");
};

int main(void){
    test1();
    return EXIT_SUCCESS;
};
