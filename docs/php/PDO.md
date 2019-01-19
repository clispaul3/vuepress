# PDO
   + 数据库类型：mysql、sqlserver、oracle、db2
   + 使用PDO可以连接不同的数据库，只需装载相应的数据库驱动即可
   + 三大类 PDO PDOStatement PDOException
## 事务
   + 多条sql语句组成的操作称为一个事务
   + 如果有一条sql语句执行失败，整个事务就会失败，并且会回滚到初始状态
   + 表存储引擎 myisam(不支持事务) innodb(支持事务)
