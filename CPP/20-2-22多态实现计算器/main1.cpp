
#include <iostream>
using namespace std;


class Calculator{
public:
    void setData_first(int a){
        this->m_a =  a;
    };
    
    void setData_second(int b){
        this->m_b = b;
    }
    

    int operators(string sign){
        if ("+" == sign) {
            return m_a + m_b;
        }else if ("-" == sign){
            return m_a - m_b;
        }
        return 0;
    };
    
private:
    int m_a=0;
    int m_b=0;
};

void test(){
    Calculator c1;
    c1.setData_first(10);
    c1.setData_second(3);
    cout<< c1.operators("+")<<endl;
    cout<< c1.operators("-")<<endl;
}

int main(void){
    test();
    
}
