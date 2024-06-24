## 设计一个数组类

1 问题描述：设计一个数组类，提供以下方法：

```
void setData(int pos,int val){    };
int getData(int pos){  };
void pushBack(int val){};
int getLength(){};
```

2 解题思路：

- 1 开辟的数组对象：我们需要掌控这个对象从生到死的过程。
- 2 指向数组的指针：pArray，需要开辟空间。依据不同的方式：一种是c的malloc的方式开辟。 另外一种是new的方式
- 3 m_capacity 是容量，被我用作标尺，它等于数组最后一个值。因为setData的方式，使数组未必是连贯的。有值的下标可能是1，3，4。 那么0 ，2 就没有对应的值

所以我在拷贝中，进行判断是否为NULL。

- 4 运算符重载：

```
int & MyArray::operator[](int index){
    return this->pAddress[index];
}
```