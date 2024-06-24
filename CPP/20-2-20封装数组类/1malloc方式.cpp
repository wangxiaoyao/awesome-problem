//
//  main.cpp
//  C++test
//
//  Created by 王逍遥 on 2020/2/1.
//  Copyright © 2020 王逍遥. All rights reserved.
//

#include <iostream>
#include <cstring>


using namespace std;


class Myarray{
public:
    Myarray(){
        m_capacity = 100;
        m_size = 0;
        pAddress = (int*)malloc(sizeof(m_capacity));
        cout<<"无参构造"<<endl;
    }
    Myarray(const Myarray &myarray){
        cout<<"拷贝构造"<<endl;
        m_capacity = myarray.m_capacity;
        m_size = myarray.m_size;
        pAddress = new int[myarray.m_capacity];
        for (int i=0; i<myarray.m_capacity; i++) {
            if (myarray.pAddress[i] != NULL) {
                pAddress[i] = myarray.pAddress[i];
            }
        }
    }
    explicit Myarray(int capacity){
        m_capacity = capacity;
        m_size = 0;
        pAddress = (int*)malloc(sizeof(m_capacity));
        cout<<"有参构造"<<endl;
    };
    ~Myarray(){
        if(pAddress!=nullptr){
            free(pAddress);
            pAddress = nullptr;
        }
        m_capacity=0;
        m_size=0;
    };
    
    void setData(int pos,int val){
        m_size++;
        m_capacity = pos+1;
        pAddress = (int*)realloc(pAddress, m_capacity);
        *(pAddress + pos) = val;
    };
    int getData(int pos){
        return *(pAddress+pos);
    };
    void pushBack(int val){
        m_size++;
        m_capacity++;
        pAddress = (int*)realloc(pAddress, m_capacity);
        *(pAddress + m_capacity-1) = val;
    };
    int getLength(){
        return m_size;
    };
    int getM_capacity(){
        return m_capacity;
    }
    int getM_size(){
        return m_size;
    }
    
private:
    int m_capacity;
    int m_size;
    int *pAddress;
    
};

void  test(){
    Myarray *arr1 = new Myarray(30);
    arr1->setData(0, 0);
    arr1->setData(1, 1);
    arr1->setData(4, 4);
    cout<<arr1->getData(4)<<endl;
    cout<<arr1->getLength()<< arr1->getM_size()<<arr1->getM_capacity()<<endl;
    Myarray *arr2= new Myarray(*arr1);
    cout<<arr2->getLength()<< arr2->getM_size()<<arr2->getM_capacity()<<endl;
    cout<<arr2->getData(4)<<endl;
    arr2->setData(5,5);
    cout<<arr2->getData(5)<<endl;
}

int main(void){
    test();
};


