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
   + 目录
      + bin: 存放启动和关闭Tomcat的可执行文件
         - startup.bat: Windows系统启动文件
         - startup.sh: Linux系统启动文件 
      + conf: 存放Tomcat的配置文件
      + lib: 存放库文件
      + logs: 存放日志文件
      + temp: 存放临时文件
      + webapps: 存放web应用文件
      + work: 存放JSP转换后的Servlet文件