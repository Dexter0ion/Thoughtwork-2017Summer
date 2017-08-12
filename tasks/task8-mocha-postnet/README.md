![](https://github.com/Dexter0ion/Thoughtwork-2017Summer/blob/master/tasks/task8-mocha-postnet/task8photo-tdd-postnet.png?raw=true)
![](https://github.com/Dexter0ion/Thoughtwork-2017Summer/blob/master/tasks/task8-mocha-postnet/testresult.PNG?raw=true)
# 任务卡008 TDD - Postnet

了解《练习题 - Postnet》背景：
-   https://en.wikipedia.org/wiki/POSTNET
-   https://www.cs.drexel.edu/~introcs/Fa12/assignments/HW4/index.html
-   http://www.jiskha.com/


为了快速对信件进行分类，美国联邦邮政局鼓励信件量大的公司用「条码」来代替邮编。
转换表格如下:

>1	:::||
2	::|:|
3	::||:
4	:|::|
5	:|:|:
6	:||::
7	|:::|
8	|::|:
9	|:|::
0	||:::

---


示例：	|	|:|::	:|:|:	|:::|	:::||	::||:	:|:|:	|
条码：	Frame	Digit-1	Digit-2	Digit-3	Digit-4	Digit-5	CD	Frame
95713	Bar	(9)	(5)	(7)	(1)	(3)	(5)	Bar


编码后的条码两边分别有一个竖线。
邮编的每一位数字都被编码成对应的「条码」。
所有数字都被编码后，后边会跟着一位「校验码」，它的计算规则如下：
把邮编中的所有数字相加，然后所得的和加上「校验码」必须是 10 的倍数。

举个例子：
邮编 95713 所有数字求和是 9 + 5 + 7 + 1 + 3 = 25，25 + 5 = 30，30 是 10 的倍数。所以校验码就是 5。

---


# 使用方法

准备环境：

    npm install

执行测试：

    npm test
    
执行index.js
    
    npm run-script index
    
    
## 细节
    
产品代码写在lib文件夹下
    
测试用例1用于测试返回值
    
测试用例2用于测试函数中有输出的情况
    