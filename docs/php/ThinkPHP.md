
# ThinkPHP
## 安装配置
   1. 安装
   2. 配置虚拟主机
      + C:\Windows\System32\drivers\etc\hosts
      + httd.conf => Include conf/extra/httpd-vhosts.conf
      + httpd-vhosts.conf
   3. 配置分布式部署文件
      + .htaccess 文件 => 放在相应的目录
      ```
      Deny from all
      ```
      + httpd-vhosts.conf
      `Allowoverride all`
## 架构
   + 入口文件
   + 应用
   + 模块
   + 控制器
   + 操作
   + 模型
   + 视图
   + 驱动
   + 行为
   + 命名空间
## 生命周期
   1. 入口文件
   2. 引导文件
   3. 注册自动加载
   4. 注册错误和异常机制
   5. 应用初始化
   6. URL访问检测
   7. 路由检测
   8. 分发请求
   9. 响应输出
   10. 应用结束
## 请求
+ 获取请求对象
```php
      use think\Request;
      $request = Request::instance();
      $request = request();
```
+ 获取URL信息
   - domain()
   - baseFile()
   - url()
   - url(true)
   - baseUrl()
   - root()
   - root(true)
   - pathInfo()
   - path()
+ 设置|读取 模块/控制器/操作
   + 读取
      ```php
      $request->module();
      $request->controller();
      $request->action();
      ```
   + 设置
      ```
      $request->module(String moduleName);
      $request->controller(String conName);
      $request->action(String actionName);
      ```
+ 获取请求参数
   - 请求方法：method()
   - 资源类型：type()
   - ip地址：ip()
   - 是否是ajax请求：var_export($request->isAjax(),true)
   - 所有请求参数：param()
   - 指定请求参数：only([String ke1, String key1])
   - 排除请求参数：except([String key1, String key2])
+ 获取路由和调度信息
## 输入变量
   + 检测变量是否设置
   ```php
    $request->has(String key, String method);
    $request->has('username','get');
    input('?'.String method.'.'.String key);
    input('?get.username');
   ```
   + 获取变量
      - PARAM变量
         1. param(String key)
         2. param()
         3. param(false)
         4. param(true)
         5. input('param.name')
         6. input('param.')
         7. input('name')
         8. input('')
      - GET变量
         1. get(String key)
         2. get()
         3. get(false)
         4. input('get.id')
         5. input('get.)
      - POST变量
      - PUT变量
      - REQUEST变量
      - SERVER变量
      - session变量
      - cookie变量
   + 变量过滤
## 请求类型
   + isGet()
   + isPost()
   + isDelete()
   + isPut()
   + isPatch()
   + isHead()
   + isOptions()
   + isAjax()
   + isPjax()
   + isMobile()
   + isCgi()
   + isCli()
## 请求头信息
   + header()
   + header(String key)
## 伪静态
   + url伪静态是为了满足更好的SEO，可以通过设置url_html_suffix进行配置
   ```php
   // 支持单个伪静态
   'url_html_suffix' => 'html'
   // 支持多个伪静态
   'url_html_suffix' => 'html|pdf|jsp'
   // 关闭伪静态
   'url_html_suffix' => false
   ```
## 方法/属性注入
   + 在Request中注入自定义方法
   ```php
    Request::hook('user','getUserInfo');
    function getUserInfo(){};
    Request()::instance()->user();
   ```
   + 在Request中注入自定义属性
   ```php
    // 注入属性
    Request::instance()->bind('user','thinkphp');
    Request::instance()->user = 'thinkphp';

    // 获取属性
    request()->user;
    Request::instance()->user;
   ```
## 参数绑定
   + 定义：把URL中的变量作为操作方法的参数直接传入
   + 顺序：
      + 按照变量名进行参数绑定的参数必须和URL中的变量名保持一致，参数顺序可以不一致
      + 如果设置了 'url_param_type' => 1，顺序必须保持一致
   + 默认值：始终给方法的参数定义默认值避免报错
   + 例子
   ```php
    name app\index\Controller;
    class Blog
    {
        public function show($name = 'default')
        {
            echo 'show()...' . $name;
        }
        public function display($id,$username)
        {
            echo 'display()...' . 'id:'.$id.'<br/>username:'.$username;
        }
    }
    // url访问
    http://servername/index.php/index/Blog/show/name/php  => 调用show()
    http://servername/index.php/index/Blog/display/id/10086/username/zyb  => 调用display()
    http://servername/index.php/index/Blog/display/username/zyb/id/10086  => 调用display()
   ```
## 依赖注入
   + 定义：依赖注入也称之为控制反转，是指在控制器的构造函数或操作方法中声明依赖，这些依赖会自动解析并注入到控制器实例或方法中
   + 注入请求对象
      1. 构造器注入
      2. 操作方法注入
      3. 继承注入: extends Controller
   ```php
    namespace app\index\controller;
    use think\Request;

    class Index
    {
        protected $request;
        // 构造器注入
        function __construct(Request $request)
        {
            $this->request = $request;
        }
        // 操作方法注入
        public function show(Request $request)
        {
            echo $request->method();
        }
    }

   ```
   + 注入其他对象
      1. 构造器注入
      2. 操作方法注入
   ```php

   ```
## 数据库
### 连接数据库
### 基本使用
   + 查询操作：query(String sql)
    ```php
     $sql = 'select * from user';
     $res = Db::query($sql);
     dump($res);
    ```
   + 写入操作：execute(String sql)
   ```php
    $sql = 'insert into user values("php",md5(123123),3';
    $res = Db::execute($sql);
    dump($res);
   ```
   




          