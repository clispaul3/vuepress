# FlowHYSUI
## 一级目录
```js
|--FlowHYSUI
  |--app
  |--basis
  |--components
  |--containers                页面(login + dashboard)
  |--dist
  |--mobile
  |--node_modules
  |--router
  |--static
  |--test
  |--utils
  |--webpack
  |--.babelrc
  |--.eslintrc
  |--.stylelintrc
  |--.ImportComponents.js
  |--jsconfig.json
  |--karma.conf.js
  |--nginx.txt
  |--package-lock.js
  |--package.json
  |--postcss.config.js
  |--readme.md
  |--webpack.config.js
```
## 二级目录
## container
  + <strong style="color:red;font-size:20px;font-weight:600;">login</strong>
    1. index.js  
      - 1.绑定事件
      - 2.调用登陆方法  

      >>>利用 layui 第三方库做弹窗相关的处理
    2. login.html
    - 登陆页面模板
    3. LoginData.js
    ```js
    构造器 LoginData()
    属性  this.projectName = 'FlowHYS'
            this.orgin = location.protocol + "//"+location.host
            this.BASE_PATH_API =  this.orgin +'/api'
            this.BASE_PATH = this.orgin 
    方法  login  
            1. 调接口登陆验证
            2. 将 tokenId、username 写入cookie
            3. 跳转页面 -> dashboard.html
            encrypt  对用户信息加密
            initProjectInfo   
            初始化项目信息(读取项目的名称并写入页面，但其实在login.html中已经把项目名称写死了)
    ```

  + <strong style="color:red;font-size:20px;font-weight:600;">dashboard</strong>
  1. dashboard.html
    - 登陆页面模板
  2. index.js:定义一些全局变量  
```js
window.SYS_VARIABLE = menuData.SYS_VARIABLE;
window.Cookies = Cookies;
window.projectId = Cookies.get("projectId")
window.menuData = menuData;

window.sysRolePowerSet = require('sysRolePowerSet');
window.userPowerSet = require('userPowerSet')
window.callClientRoleSet = require('callClientRoleSet');
```
  3. menu.js
```js
  构造器 MenuData()
  方法  
    constructor()
      1. 判断客户端类型
      2. 判断URL中是否有 tokenId
    initMenu() 构建菜单
      1. 调用接口拿到主页所有的菜单数据
        单条数据的数据结构以树形方式存储
        {
            children:[]
            createtime:
            iconurl:
            url:
            menu_name:
            pid:
            project_id:
            remoteUlr:
            type:
        }
      2. 调用接口获取服务端的路径，配置全局变量，
      $.get(BASE_PATH + '/FlowHYS/config.json').then((res)=>{
        window.serverPath = res.serverPath
        window.wsPath = serverPath.replace("http://","ws://");
        runningFlow.initsocketnotice()  // 初始化流程
      })
      3. 构建侧边栏的菜单
    activeClickEvent() 绑定标题相关的事件
    logout() 退出
    gotoMagPage() 跳转到后台
    backToMenu() 返回主页
    getParamByNameInUrl() 页面正则过滤
    bindMenuEvent() 对具有 data-url的标签绑定事件
        $('.layui-nav-item').on('click', '.menu_item', (event)=>{
            this.menuClickCall(event)
            return false
        })

        $('#feature-preview').on('click', '.bw_list', (event)=>{
            this.menuClickCall(event)
            return false
        })
    menuClickCall() 触发点击(具有data-url的标签绑定的)事件
        menuClickCall(event) {
            $('#feature-preview').hide();
            $('.layui-content-body').show();
            const url = $(event.target).data('url');
            AngularCompile.compile(url);  // 编译渲染对应的页面
        }
    createMenu() 获取用户信息并显示当前用户名
```
  4. menuRender.js：构建侧边栏菜单,构建内容区域的所有页面
```js
  定义了一个对象：menuRender
  属性
    treeData: [], //菜单树数据
    lastNode: [], //预览菜单数组
    //流程菜单页面数组
    flowMenu: new Map([
        ['template/NewWorkTemplate', 'newwork'],
        ['template/TodoWorkTemplate', 'todowork'],
        ['template/ListWorkTemplate', 'listwork'],
    ])
  方法
    createMenuinit() 构建侧边栏的菜单
    getChildren()  遍历菜单和页面相关的数据
    buildIconHtml()  构建菜单小图标
    showFeaturesPreview()  构建内容区域的所有页面
```
  5. role.js
    - 依赖模块 imports-loader
## utils
### framework
#### angular
#### <strong style="color:red;font-size:20px;font-weight:600;">Compile.js</strong>
  - 点击功能节点之后调用此模块，编译模板
```js
  - 定义了对象 AngularCompile
  const AngularCompile = {
    compileHtml:string,  // 节点模板
      `<div ng-controller="ModelerController"  class="modelerEle relative-height">
          <hy-include src="toModelerPage()"></hy-include>
      </div>`
    renderContainer:element,  // 模板容器
      $(".layui-content-body")
    compile:function,
    _memoryGC:function,  // 如果页面已存在功能节点，则销毁之
    _renderCompileHtml:function,
    _getInjectorArr:function,
    _clearIntervalArr:function,
    initProjectInfo:function
  }
```

#### <strong style="color:red;font-size:20px;font-weight:600;">Directive.js</strong>
```js
  通过自定义指令 hyInclude, 注入 $templateRequest，来调用功能节点需要使用到的模板
```
  