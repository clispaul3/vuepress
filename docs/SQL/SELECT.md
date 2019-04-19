# SELECT

## 基础查询
  - select * from user;
  - select name from user;
  - select name,birthday from user;
  - select name as username from user;
  - 取别名：select name as 姓名,birthday 生日 from user;
  - 查看版本：select version();
  - 查看当前数据库：select database();
  - 查看当前时间: select date();
  - 表达式：select 100*80;
  - md5: select md5(100);