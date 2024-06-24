
#include <iostream>
using namespace std;


class Calculator{
    friend class Plus_operators;
public:
    void setData_first(int a){
        this->m_a =  a;
    };
    int getData_first(){
        return m_a;
    }
    
    void setData_second(int b){
        this->m_b = b;
    }
    int getData_second(){
        return m_b;
    }

    virtual int operators(){
        return 0;
    };
    
private:
    int m_a=0;
    int m_b=0;
};

class Plus_operators:public Calculator{
public:
    virtual int operators(){
//        return this->getData_first()+this->getData_second();
        return this->m_a+this->m_b;
    };
};
class Sub_operators:public Calculator{
public:
    virtual int operators(){
        return this->getData_first()-this->getData_second();
    };
};

void test(){
    // 多态加法
    Calculator *c1 = new Plus_operators;
    c1->setData_first(10);
    c1->setData_second(3);
    cout << c1->operators()<<endl;
    
    // 多态减法
    Calculator *c2 = new Sub_operators;
    c2->setData_first(10);
    c2->setData_second(3);
    cout << c2->operators()<<endl;
    
    delete c1;
    delete c2;
}

int main(void){
    test();
    
}
