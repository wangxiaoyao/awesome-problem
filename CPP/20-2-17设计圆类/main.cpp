//
//  main.cpp
//  C++test
//
//  Created by 王逍遥 on 2020/2/1.
//  Copyright © 2020 王逍遥. All rights reserved.
//

#include <iostream>
#define PI 3.14

using namespace std;

class Circle {
public:
    // 成员函数：
    double calculateCircumference(){
        return 2*PI*cir_Radius;
    };
    
    void setRadius(int m){
        cir_Radius = m;
    }
    // 半径：成员属性
    int cir_Radius = 0;
};



int main(void){
    Circle c1;
    c1.setRadius(10);
    printf("c1这个圆的周长为：%0.2f\n", c1.calculateCircumference());
    
};
