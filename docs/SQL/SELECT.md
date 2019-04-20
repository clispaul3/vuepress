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
  - 查看当前时间: select now();
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
  `有任何一列的结果为null，结果就是null`
  - select concat(firstname,lastname) as fullname from user;
#### 带分隔符
  - select concat('$',firstname,lastname) as 'full_name' from user;
  - select concat(firstname,'&',lastname) as 'full_name' from user;

## 条件查询
#### 条件运算符
  - `>  <  =  >=  <=  !=`
  - select * from user where age>18;
#### 逻辑运算符
  - `and or not`  `&& || !`
  - and &&: 两个条件都为true，则为true
  - or ||: 两个条件都为false，则为false
  - not !: 取反
    - select name,id from student where not(id!=1 && id!=2);
#### 模糊查询
  - `like` 
  - %: 任意个数任意字符,但是不包含null
  - _: 单个任意字符
  - select name from user where name like '张%';
  >转义下划线
  - `select name from user where name like '_\_%';`
  >自定义转义字符
  - `select name from user where name like '_&_%' escape '&';`

  > `between condition1 and condition2` 包含condition1和condition2的记录
  - select name from user where id between 1 and 4;

  >`in`
  - select name from user where id in(1,3,4);

  >`is null`  `is` `not null`
  - select name from user where email is null;

  >`<=>`
  - select name from use where email <=> null;
  