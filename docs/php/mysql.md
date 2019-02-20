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
### 数值类型 
   1. 整数类型 

      !['数据类型'](/img/mysql-int.png 'init类型')
      + 是否有符号可以修改，是否有符号会改变值的范围,默认是有符号的
         + create table tablename(id tinyint unsigned); 无符号(0,255)
         + create table tablename(id tinint signed); 有符号(-128,127)
         + create table tablename(id tinyint unsigned not null default 0);
   2. 小数类型
      + float(M,D)
         + M表示显示长度，D表示小数位数
         + float(4,2) 表示的范围：-99.99~99.99
         + float(4,2) unsigned 表示的范围：0~99.99
         + 插入时遵循四舍五入原则,超出范围会报错
         + 精确度在小数点7位，单精度类型
      + decimal(M,D)
         + 用法和float一样
         + 区别：
            1. decimal的精度高于float,float存在一定误差
            2. decimal以字符串的形式存储
   3. zerofill

     create table tablename(
         num1 int auto_increment,
         num2 int(4) zerofill, comment '不足4位，前面自动以0填充,超过则不填充'
         num3 int(6) unsigned zerofill '不足6位，前面自动以0填充,超过则不填充',
         primary key(num1),
     );
     注意事项：1. zerofill只能和unsigned配合使用
              2. 如果指定了 zerofill，则默认是unsigned
              3. 如果不使用zerofill关键字，则int(11)没有任何意义
    4. primary key
       + alter table tablename add primary key(id); 添加主键
       + alter table tablename drop primary key; 删除主键
    5. BIT使用
    6. ASCII码
### 字符串类型
   1. char
      + 固定长度字符串，最大255字符
      + 一个英文字符和一个中文字符的长度都是一个字符
      + char(n) 是定长，即使插入n-2个字符，也会分配n个字符
      + char在存放空格时会丢失，'aaa ' => 'aaa'
   2. varchar
      + varchar(2) 等同于 char(2)
      + 最大长度可以存放65535个字节，其中1-3个字节用于记录数据大小
      + varchar(n) n的最大值和字符编码有关系,utf8中一个汉字占3个字节，
        gbk中一个汉字占2个字节
        varchar(65532/3) utf8编码，最大存放字符数 65532/3
        varchar(65532/2) gbk编码，最大存放字符数 65532/2
      + varchar(n) 是变长，只保存实际需要的字符数，另加一个字节记录长度，
        如果列声明的长度超过255，则使用两个字节记录长度
      + varchar不会丢失空格 'aaa ' => 'aaa '
   3. text
      + 用法和varchar一样
      + text 不能指定默认值
### 日期类型
   1. date
   2. datetime
   3. timestamp: 会自动联动insert、update的时间戳
   ```
   create table tbname (n1 date,n2 datetime,n3 timestamp);
   insert into tbname(n1,n2) values('2019-01-01','2019-01-01 00:12:12')
   ```
### Enum & SET
   + Enum(enumeration) & SET 不能有默认值
   + 复选框，单选框适用于 enum和 set数据类型
   + 实际存储的是索引值，所以insert时可以用1,2,3替代
   ```
   create table votes(
       username varchar(20) not null default '',
       hobby set('篮球','足球','排球') not null,
       sex enum('男','女') not null
   );
   insert into votes values('zhangsan','篮球，足球','女');
   注意事项：1. set的值必须在可选范围内
            2. enum只能支持单选
    select * from votes where find_in_set('nba',hobby);
   ```


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
   1. 创建表
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
   2. show tables; 查看所有表
   3. desc tablename; 查看表结构
   4. drop table tablename; 删除表
   5. alter table tablename add filedname tinyint(6) zerofill; 添加字段
   6. alter table tablename add primary key(id); 添加主键
   7. alter table tablename drop primary key; 删除主键
   8. 修改表名
      + rename table tbname1 to tbname2;
      + alter table tbname1 rename to tbname2;

#### 修改表
   1. 添加字段
      + alter table tbname add filedname varchar(20) after fdname;
   2. 修改字段
      + 修改字段名属性一定要带上列类型
      + alter table tbname modify fdname varchar(40); 修改属性
      + alter table tbname change fdname fd_name varchar(40) not null default ''; 
      修改字段名
   3. 删除字段
      + alter table tbname drop fdname;
   4.  修改表名
      + rename table tbname1 to tbname2;
      + alter table tbname1 rename to tbname2;
   5. 修改表字符集
      + alter table tbname charset=utf8;
   6. 修改存储引擎
      + alter table tbname engine=innodb;
   7. create table tbname1 select * from tbname2;
#### insert语句
   1. insert into tbname(fd1,fd2) values(val1,val2);
   2. insert into tbname values(val1,val2,...);
   3. insert into tbname values('2019-01-23','abc',11,...);
   4. insert into tbname (val1,val2),(val1,val2),...;
#### update语句
   1. update tbname set fdname=val where id=1;
   2. update tbname set fnname=val;
   3. update tbname set salary=salary+500;
   4. update tbname set salary=salary+500,name='php' where name = 'js';
#### delete语句
   1. delete from tbname where fdname='php';删除一条记录
   2. delete from tbname;删除整个表的记录，但表结构还在
   3. truncade table tbname;删除整个表的记录
      + truncate 效率更快，不能带where条件，返回值为0
      + delete可以带where条件，返回删除的记录数
#### select语句
   1. select * from tbname; 尽量少使用*,需要哪个字段就查哪个字段
   2. select fdname1,fdname2 from tbname;
   3. select distinct fdname1,fdname2 from tbname;去重
   4. select fdname as newfdname from tbname;
   5. select fdname from tbname order by fdname;
   6. select round(fdname,2) as new fdname2 from tbname;保留两位小数
   7. select fdname from tbname where fdname like '%s%';模糊查找
   8. select * from tbname where fdname1>val and fdname2 like 'css%';
   9. select * from tbname where not(fdname=val);
   10. select * from tbname where fdname between val1 and val2;
   11. select * from tbname order by fdname asc|desc;asc升序 desc绛序，支持别名排序
   12. 统计 sum & count & avg & max & min
      + select count(*) from tbname where fdname=val;统计行数
      + select count(fdname) from tbname where fdname=val;
      + count(fdname)不会统计值为null的情况
      + select sum(fdname) from tbname;自动求和
      + select sum(fdname) from tbname where condition;
      + select sum(fdname1+fdname2) from tbname;
      + select sum(fdname1),sum(fdname2) from tbname;
      + select sum(fdname)/count(fdname) from tbname;
      + sum只对数值类型有用
      + select avg(fdname) from tbname; 求平均数
      + select avg(fdname1),avg(fdname2) from tbname; 
   13. having vs where
      + select fdname from tbname having fdname>val;
      + select fdname as newfdname from tbname having newfdname>val;
   14. group by
      + select sum(math),fdname from tbname group by fdname;
      + select count(*),fdname1,fdname2 from tbname group by fdname1,fdname2;
   15. 日期函数
 ### 其他
   1. select now();查看当前时间 
   2. show character set; 查看所有字符集
   3. show collation; 查看所有校对规则
   4. show create database dbname; 查看创建数据库时的sql语句
## brew
   1. 安装：brew install mysql
   2. 启动：mysql.server start
   3. 登陆：mysql -uroot -p
   4. 退出：exit
   5. 关闭：mysql.server stop
