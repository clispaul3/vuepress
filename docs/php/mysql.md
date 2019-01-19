# mysql 
## 相关概念
   + DB
   + DBMS
   + SQL
   + 关系型数据库 SQL
   + 结构性数据库 Nosql
### 常用的数据库管理系统
   + MySQL、Oracle、DB2、SqlServer、Sqlite等
### docs->mysql 常用命令
   1. 登录: mysql -h localhost -P 3306 -u zyb -p 
   2. 退出: exit & quit
   3. show databases;
   4. use test;
   5. show tables;
   6. select database(); 查看当前所在数据库
   7. create table test(id int,name varchar(20)); 建表
   8. desc test; 查看表结构
   9. select * from test;
   10. insert into test (id,name) values(1,'html');
   11. delete from test where id=1;
   12. select version(); 查看版本
   13. show variables like 'character_set%'; 查看字符集关系
   14. ALTER DATABASE zyb CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
   15. alter table test convert to character set utf8mb4 collate utf8mb4_bin;
### SQL语法规范 
   + 不区分大小写
   + 每条命令已分号结尾
   + 注释
      + 单行注释：#注释文字
      + 单行注释：-- 注释文字
      + 多行注释：/* 注释文字 */
### SQL语言
   + DQL 数据库查询(查)
   + DML 数据库操作(增，删，改)
   + DDL 库、表的操作
   + TCL 事物控制
### 字符集
   + 字符是各种文字和符号的总称，包括各国家文字、标点符号、图形文字、数字等
   + 在计算机中所看到的任何内容都是字符构成的
   + 字符编码是计算机针对各种符号，在计算机中的一种二进制存储代号
   + 字符集是多个字符的集合，字符集种类较多，每个字符集包含的字符个数不同
   + 常见字符集 ASCII、GB2312、BIG5、GB18030、Unicode
## 数据类型
   [文档](https://www.cnblogs.com/Caveolae/p/7058890.html '数据类型')  
### 整数类型
   !['数据类型'](/img/mysql-int.png 'init类型')
### 字符串类型
   + 字符串类型指CHAR、VARCHAR、BINARY、VARBINARY、BLOB、TEXT、ENUM和SET。
#### CHAR & VARCHAR

## sql语句
   
