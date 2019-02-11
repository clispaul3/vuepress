# Tomcat
   [官网](http://tomcat.apache.org)  
   [技术论坛](http://iyunv.com/forum-61-1.html)
   + web应用服务器,类似于Apache、Nginx，但Apache和Nginx不支持java
   + Tomcat是一个免费开源的web应用服务器，是开发和调试JSP程序的首选
   + Tomcat处理静态HTML的能力不如Apache
   + JSP：java server pages，java服务器页面，是一种动态网页技术标准
## 安装
   + 下载

   ![下载](/img/java-tomcat-download.png)
   + 安装
      + 下载压缩包解压即可
      + 必须先配置好环境变量 JAVA_HOME
## 目录
   + bin: 存放启动和关闭Tomcat的可执行文件
      - startup.bat: Windows系统启动文件
      - startup.sh: Linux系统启动文件 
   + conf: 存放Tomcat的配置文件
   + lib: 存放库文件
   + logs: 存放日志文件
   + temp: 存放临时文件
   + webapps: 存放web应用文件，可在此目录建立项目目录,ROOT目录可以省略不写，其他目录要写
   + work: 存放JSP转换后的Servlet文件
## 版本
   + Tomcat7.0支持Servlet3.0，而Tomcat6.0只支持Servlet2.5
## 修改配置
   + 修改端口号：conf->server.xml->
      ```
      <Connector port="8088" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" />
      ```
## javaWeb目录
   ```
   + WEB-INFO
      - lib：存放jar包
      - classes: 存放类文件
      - web.xml：项目配置文件
   + index.html
   注意：WEB-INF不能被客户端访问
   ```
   + eclipse创建javaWeb项目
      1. new -> Dynamic web project
      2. windows -> show views -> servers
      3. add and remove
      4. start
   + 通过配置tomcat为当前项目提供web服务
## 配置虚拟主机
   + 配置任意文件
   ```
    <Host name="localhost"  appBase="webapps"
            unpackWARs="true" autoDeploy="true">
        <Context path="testdir" docBase="C:/test"/>
    </Host>
    访问：http://localhost:8080/testdir/index.html 
    配置任意目录让tomcat提供web服务，但主机名仍然是localhost
   ```
   + 配置虚拟主机
      1. host文件：127.0.0.1 www.javaweb.com
      2. server.xml
      ```
      <Host name="www.javaweb.com"      
           appBase="G:\java-study\JSP\tomcat\apache-tomcat-7.0.92\webapps"
           unpackWARs="true" autoDeploy="true">
      </Host>
      ```