## 思考

按照题意：

- 输入的数组nums，其中同一个元素不能使用两次。 即不会出现`num[0]+num[0]` 的情况
- 任何“输入”必定有且只有一个“输出”。而这特性就决定了第二种方法：哈希表的可行性。

## 方法

### 1 Bruteforce $$o(n^2)$$

暴力解法，利用双循环遍历所有的可能性。

### 2 Hashtable $$O(n)$$

利用哈希表存放key,val

- 1 遍历将 nums[i] 和 i 存放到哈希表（建立哈希表）

- 2 遍历哈希表：找到满足条件的key，返回下标

JS语言：map方法，什么值作为key和value非常重要。从而在两种数据结构（Array，Map）共同作用下产生最佳算法。