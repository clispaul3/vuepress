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
## 生命周期
   1. init()
   2. service()
   3. doGet()
   4. doPost()
   5. destroy()
   ```
   1. service()可以处理post/get请求，如果Servlet中有service方法，会优先调用
   2. doGet()只能处理get请求
   3. doPost()只能处理post请求
   ```
## 常见错误
   1. 404错误：未找到资源
   2. 405错误：请求方法不对
   3. 500错误：未完成请求，服务器遇到意外情况
## HttpServletRequest
   `req对象是由Tomcat服务器创建的`
   1. 请求头(和浏览器相关)
      + 请求方式：String method = req.getMethod();
      + 请求URL：StringBuffer requrl = req.getRequestURL();
      + 获取URI：String uri = req.getRequstURI();
      + 头信息: 
         + String header = req.getHeader(String name);
         + 遍历
         ```
          Enumeration enumeration = req.getHeaderNames();
		  while(enumeration.hasMoreElements()) {
			  String value = req.getHeader((String) enumeration.nextElement());
			  System.out.println(enumeration.nextElement() + "=" + value);
		  }
         ```
      + 获取协议: String scheme = req.getScheme();
   2. 请求参数
      + String username = req.getParamater("username"); => 不能获取复选框的值，会漏值
      + String queryString = req.getQueryString();
      + String[] favs = req.getParameterValues("fav"); => 获取复选框的值
      + 遍历请求参数
      ```
          Enumeration enumeration = req.getPramaterNames();
		  while(enumeration.hasMoreElements()) {
			  String value = req.getParamater((String) enumeration.nextElement());
			  System.out.println(enumeration.nextElement() + "=" + value);
		  }
      ```
## HttpServletResponse
   `resp对象是由Tomcat服务器创建的`
   1. 设置响应头
   2. 设置响应体