# MySQL 
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
### SQL语句分类
   + DQL 数据查询语句
      + select
   + DML 数据操作语句
      + update、insert、delete
   + DDL 数据定义语句
      + create、alter
   + DCL 数据控制语句
      + grant、revoke、commit、rollback、savepoint等
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

## sql基本操作
### 库操作
   + create database dbname [库选项];
      + 库选项：用于约束数据库,分为两个选项
         + 字符集设定: charset/character set 字符集(数据存储的编码格式)
            + 常用字符集: utf8 & gbk
         + 校对集设定: collate 校对集(数据比较的规则)
      + show databases;
## 常用命令行  
### 连接数据库
   1. mysql -uzyb -p(连接本地数据库)
   2. mysqp -hwww.baidu.com -P3306 -uzyb -p(连接远程数据库)
   3. 修改密码
      1. 进入mysql的bin目录
      2. 执行: mysqladmin -uzyb -p oldpsd password newpsd
   4. show grants; 查看权限
   5. show grants for 'zyb'@'localhost'; 查看某个用户的权限
### 库操作
   1. create database dbname; 创建数据库
      + create database dbname character set utf8;
      + create database dbname character set utf8 collate utf8_general_ci;
   2. drop database dbname; 删除数据库
      + drop database if exists dbname;
   3. show databases; 查看数据库
   4. use dbname; 使用数据库
   5. select database(); 查看当前在哪个数据库
   6. select version(); 查看数据库的版本
   7. show processlist; 查看当前有多少个进程连接数据库
   8. mysqldump -uzyb -p dbname > D:/mysql/backup/data0122.sql 备份数据库
      + mysqldump -uzyb -p dbname tablename1 tablename2 > 
        D:/mysql/backup/data0122.sql
      + mysqldump -uzyb -p -B dbname1 daname2 > 
      D:/mysql/backup/data0122.sql
   9. 还原数据:
      1. create database dbname character set utf8;
      2. source D:/mysql/backup/data0122.sql;
   10. 数据库修改：字符集 | 校对规则 | 存储引擎
       + alter database dbname character set utf8;
       + alter database dbname charset=utf8;
       + alter database dbname collate utf8_general_ci;
   11. show variables like '%char%'; 查看字符集
       + character_set_client
       + character_set_connection
       + character_set_database
       + character_set_server
   12. show variables like '%collation%'; 查看校对规则
       + collation_client
       + collation_connection
       + collation_server
### 表操作
   1. 基本语法
   ```
   create table tablename (
      id int(10),
      name varchar(20),
      password char(32),
      birthday date
   ) character set utf8 collate utf8_general_ci engine innodb;
   注意：存储引擎为myisam时，数据被保存在三个文件中,myisam不支持事务
      1. .frm => 存储表结构
      2. .MYD => 存储数据
      3. .MYI => 存储索引
   ```
### 其他
   1. select now();查看当前时间 
   2. show character set; 查看所有字符集
   3. show collation; 查看所有校对规则
   4. show create database dbname; 查看创建数据库时的sql语句
