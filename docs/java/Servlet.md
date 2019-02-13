# Servlet
## 基本介绍
   ```
    Servlet是JavaWeb的三大组件之一，属于动态资源。Servlet的作用是处理请求，服务器会把接
    收到的请求交给Servlet处理，在Servlet中通常需要：
      1. 接收请求数据
      2. 处理请求
      3. 相应请求
    Servlet需要自己编写，每个Servlet必须实现java.servlet.Servlet接口
    
   ```
   + 特性
      1. 单例：一个类只有一个对象，可以存在多个Servlet类
      2. Servlet类由我们编写，但对象由服务器创建，并且由服务器来调用相应的方法
## 实现Servlet
### 三种实现方式
   1. 实现javax.servlet.Servlet接口
   ```
   package cn.zyb.servlet;

    import java.io.IOException;

    import javax.servlet.Servlet;
    import javax.servlet.ServletConfig;
    import javax.servlet.ServletException;
    import javax.servlet.ServletRequest;
    import javax.servlet.ServletResponse;

    public class AServlet implements Servlet {
        /*
        * 生命周期
        * 每次修改代码重新编译后调用一次
        */
        @Override
        public void destroy() {
            System.out.println("destroy()...");
        }

        @Override
        public ServletConfig getServletConfig() {
            System.out.println("getServletconfig()...");
            return null;
        }

        @Override
        public String getServletInfo() {
            System.out.println("getServletInfo()...");
            return null;
        }
        /*
        * 生命周期
        * 调用一次，创建Servlet对象之后调用
        */
        @Override
        public void init(ServletConfig arg0) throws ServletException {
            System.out.println("init()...");

        }
        /*
        * 生命周期
        * 每次访问调用一次
        */
        @Override
        public void service(ServletRequest arg0, ServletResponse arg1) throws ServletException, IOException {
            System.out.println("service()...");

        }

    }

   ```
   2. 继承javax.servlet.GenericServlet类
   3. 继承javax.servlet.httpServlet类
## 浏览器访问Servlet
   ![访问流程](/img/java-servlet.jpg)
   1. 给Servlet指定一个Servlet路径
      + 在web.xml中配置Servlet路径
      ```
        <servlet>
            <servlet-name>servlet</servlet-name>  // 名字可以任意
            <servlet-class>cn.zyb.servlet.AServlet</servlet-class> // 类路径
        </servlet>
        <servlet-mapping>
            <servlet-name>servlet</servlet-name>  // 名字与上面相同
            <url-pattern>/AServlet</url-pattern>  // 必须以'/'开头
        </servlet-mapping>
      ```
   2. 浏览器访问Servlet路径