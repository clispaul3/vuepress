# SELECT

## 基础查询
  - select * from user;
  - select name from user;
  - select name,birthday from user;

## 取别名
  - select name as username from user;
  - select name 姓名 from user;
  - select name as "user name" from user;
  - 取别名：select name as 姓名,birthday 生日 from user;

## 基础函数
  - 查看版本：select version();
  - 查看当前数据库：select database();
  - 查看当前时间: select date();
  - 表达式：select 100*80;
  - md5: select md5(100);

## 去重
  - select distinct course from student;

## +号
  - 在mysql中+号只有计算的功能，计算数值的和
  - 字符串存在隐士转换，如果转换不成功，则将字符串转为0
    - select name+age from user; ==> age
  - 只要有一个为null，则计算结果为null

## concat()
  - select concat(firstname,lastname) as fullname from user;