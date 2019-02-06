# JDBC
## 架构
   ![架构](/img/java-jdbc.jpg)
## 连接步骤
   1. 注册驱动(注册一次)
      + [mysql驱动](https://repo.maven.apache.org/maven2/mysql/mysql-connector-java/)
      + Properties => Java Build Path => Add External JARS...
      ```
        package cn.zyb.jdbc;
        import java.sql.Connection;
        import java.sql.DriverManager;
        import java.sql.ResultSet;
        import java.sql.SQLException;
        import java.sql.Statement;
        public class ConnectMysql {
            private static final String URL = "jdbc:mysql://localhost:3306/ecshop";
            private static final String USER = "zyb";
            private static final String PASSWORD = "13265987092";
            public static void main(String[] args) {
                try {
                    // 注册驱动
                    Class.forName("com.mysql.jdbc.Driver");
                    // 建立连接
                    long start = System.currentTimeMillis();
                    Connection $link = DriverManager.getConnection(URL, USER, PASSWORD);
                    long end = System.currentTimeMillis();
                    System.out.println(end-start);
                    // 创建Sql语句
                    Statement sql = $link.createStatement();
                    // 执行sql语句
                    ResultSet res = sql.executeQuery("select goods_name from ecs_goods");
                    // 处理结果集
                    while(res.next()) {
                        System.out.println(res.getObject(1));
                    }
                } catch (ClassNotFoundException e) {
                    e.printStackTrace();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
      ```
   2. 建立连接(Connection)
      + 建立连接比较耗时
   3. 创建sql语句(Statement)
   4. 执行sql语句
   5. 处理结果集(ResultSet)
   6. 释放资源
## Statement接口
   + 用于执行静态SQL语句并返回它所生成结果的对象
   + 三种Statement类
      - Statement:
         + 由createStatement创建，用于发送简单的SQL语句(不带参数的)
         + PrepareStatement:
            - 继承自Statement接口,由prepareStatement创建，用于发送一个或多个
              带输入参数的sql语句。PrepareStatement对象比Statement对象的效率更高，
              并且可以防止sql注入，一般都用PrepareStatement
   + 常用的Statement方法：
      - excute(): 运行语句，返回是否有结果集 // 返回结果是 true/false
      - executeQuery(): 运行select语句，返回ResultSet结果集
      - executeUpdate(): 运行insert/delete/update操作，返回更新的行数
## ResultSet接口
   + 常用方法
      - rs.next()：返回值true/false
      - rs.getObject(idx): 获取字段值，idx: 第几列的值(从1开始)