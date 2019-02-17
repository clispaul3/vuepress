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
      + 设置请求编码格式：req.setCharaterEncoding("utf-8");
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
      + resp.setHeader(String key,String value); 同键名会被覆盖
      + resp.addHeader(String key,String value); 同键名不会被覆盖
      + 设置状态码：resp.sendError(int number,String message)
      + 设置响应编码格式：
         + resp.setHeader("Content-type","text/html;chatset-utf-8");
         + resp.setContentType("text/html;chatset-utf-8")
   2. 设置响应体
      + resp.getWriter().writer()
## 网页重定向
   1. resp.sendRedirect("http://www.baidu.com")
   2. 
   ```
      response.setContentType("text/html;charset=UTF-8");
      String site = new String("http://www.runoob.com");
      response.setStatus(response.SC_MOVED_TEMPORARILY);
      response.setHeader("Location", site);   
   ```
## 请求转发
   ```
      // AServlet分发至BServlet处理请求
      req.getRequestDispatch("/BServlet").forward(req,resp);
   ```
## cookie
   1. 解决不同请求之间数据共享的问题
   2. 读取cookie
   ```
    Cookie[] cookies = req.getCookies();
    for(Cookie cookie:cookies) {
		if(cookie.getName()!=null) {
			System.out.println(cookie.getName()); // 获取键名
			System.out.println(cookie.getValue()); // 获取值
		}
		System.err.println(cookie);
	}
   ```
   3. 设置cookie
   ```
    Cookie cookie = new Cookie("username", "java-cookie");
	cookie.setMaxAge(60); // 60s，如果不设置有效期，浏览器关闭之后cookie会失效
	cookie.setPath("/studyweb/AServlet"); // 设置可访问目录，如果不设置，默认是根目录
	resp.addCookie(cookie);
   ```
## session
   1. 介绍
   ```
   在WEB开发中，服务器可以为每个用户浏览器创建一个会话对象（session对象），注意：一个浏览器独占一个session对象(默认情况下)。因此，在需要保存用户数据时，服务器程序可以把用户数据写到用户浏览器独占的session中，当用户使用浏览器访问其它程序时，其它程序可以从用户的session中取出该用户的数据，为用户服务。
   ```
   + 一个客户端对应一个session对象
   + session ID通过cookie携带给服务器
   2. 实现逻辑
   ```
   服务器创建session出来后，会把session的id号，以cookie的形式回写给客户机，这样，只要客户机的浏览器不关，再去访问服务器时，都会带着session的id号去，服务器发现客户机浏览器带session id过来了，就会使用内存中与之对应的session为之服务
   ```
   3. session对象
      + 读取或创建对象：HTTPSession session = req.getSession(); // 有就读取，无就创建
      + 存数据：session.setAttribute(String key,Object value);
      + 读数据：session.getAttribute(String key);
      + 删数据: session.removeAttribute(String key);
      + 获取ID: session.getId();
      + 判断是否是新创建的: session.isNew();
      + 销毁session对象: session.invalidate();
   4. 有效期
      + 默认是30分钟
      + 关闭浏览器即失效
      + 通过web.xml配置
      ```
      // 以分钟为单位
      <session-config>
          <session-timeout>10</session-timeout>
      </session-config>
      ```
## ServletContext对象
   + 介绍
   ```
   ServletContext官方叫servlet上下文。服务器会为每一个工程创建一个对象，这个对象就是ServletContext对象。这个对象全局唯一，而且工程内部的所有servlet都共享这个对象。所以叫全局应用程序共享对象。
   ```
   + 作用
      1. 解决不同用户之间的数据共享问题
      2. 是一个域对象
      3. 可以读取全局配置参数
      4. 可以搜索当前工程目录下的资源文件
      5. 可以获取工程名字
   + 域对象
      + 概念 `域对象是服务器在内存上创建的存储空间，用于在不同动态资源（servlet）之间传递与共享数据`
      + 方法
         + setAttribute(String key,Object value);
         + getAttribute(String key);
         + removeAttribute(String key);
   + 获取servletContext对象
      1. ServletContext obj = this.getServletContext();
      2. ServletContext obj = this.getServletConfig().getServletContext();
      3. ServletContext obj = getServletContext();
   + 读取全局配置参数
      + web.xml配置全局参数  
      ``` 
        <context-param>
          <param-name>key1</param-name>
          <param-value>value1</param-value>
        </context-param>
        <context-param>
          <param-name>key2</param-name>
          <param-value>value2</param-value>
        </context-param>

      ```
      + 读取全局配置参数
         1. getServletContext().getInitParameter(String key); // 获取指定键名的值
         2. getServletContext().getInitParameterNames(); //获取所有键名列表
   + 获取资源的绝对路径  
   `String path = getServletContext().getRealPath("/index.jsp");` // "/"代表webContent目录
## servletConfig对象
   + 介绍: 和当前Servlet相关的配置信息
   + web.xml中配置
   ```
   <servlet>
    <servlet-name>servlet</servlet-name>
    <servlet-class>cn.zyb.servlet.AServlet</servlet-class>
    <init-param>
       <param-name></param-name>
       <param-value></param-value>
    </init-param>
   </servlet>
   ```
   + 获取ServletConfig对象
      + ServletConfig config = this.getServletConfig();
      + ServletConfig config = getServletConfig();
   + 常用方法
      1. getServletName(); // 获得servlet的名字
      2. getInitParameter(String key); // 获得指定键名的值
      3. getInitParameterNames(); // 获得所有键名组成的数组
## web.xml
   + 内容(核心组件)
      1. 全局上下文配置
      2. Servlet配置
      3. 过滤器配置
      4. 监听器配置
   + 加载顺序：ServletContext -> context-param -> listener -> filter -> servlet
       
