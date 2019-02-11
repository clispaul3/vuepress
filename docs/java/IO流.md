# IO流
## 基本介绍
   + 流：一连串连续动态的数据集合
   + 数据源：提供原始数据的媒介，如：数据库，文件，程序，内存，网络连接，IO设备等
   + 在java程序中,对于数据的输入/输出以“流”的方式进行
   + 通过不同的"流"类获取不同的数据，"流"类一般位于java.io包中
## 核心类
   + File: 文件类
   + InputStream: 字节输入流
   + OutputStream: 字节输出流
   + Reader: 字符输入流
   + Writer: 字符输出流
   + Closeable: 关闭流接口
   + Flushable: 刷新流接口
   + Serializable: 序列化接口
## 流分类
   + 输入流：数据源到程序(InputStream、Reader)
   + 输出流：程序到目的地(OutputStream、Writer)
## File类
   + File.separator: 目录分隔符"/"
   + File.pathSeparator: 路径分隔符";"
   + 构造器
   ```
   File file = new File("D:/project/test.java");
   File file = new File("D:/project","test.java");
   File file = new File(new File("D:/project"),"test.java");
   ```
   + 实例属性和方法
      1. file.getName(): => 获取文件名
      2. file.getAbsolutePath(): => 获取绝对路径
      3. file.getPath(): => 获取相对路径