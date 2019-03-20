# AngularJS
## AngularJS实例
```js
 <div ng-app='container'>
    <div ng-controller='testController'>
        {{ username }}
    </div>
 </div>
 ng-app = 'container'
 const app = angular.module('container',[])
 app.controller('testController',function($scope,$rootScope){
    
    $scope.username = 'angularJS'
 })
```
## 指令
  + ng-app: 指定根元素
  + ng-init: 初始化当前作用域的数据
  + ng-controller
    1. 通过 ng-controller 指定组件的模板
    2. 通过 ng-controller 定义组件的数据($scope)
    3. 实例化过程
    ```js
    // 注册控制的时候会自动 new TestController
    const app = angular.module('container',[])
    class TestController(){
        constructor($scope,$element,$rootScope){

        }
    }
    // 支持链式调用
    app.controller('TestController',TestController)
       .controller('TestController2',TestController2)
    ```
  + ng-bind
## 作用域对象
  + 根作用域对象：$rootScope
  + 作用域对象：$scope 
    - $scope.$watch
    - $scope.$apply:使用原生的语法使得数据和视图同步(在异步的情况下)
    - 异步的数据响应，需要使用$timeout
  ```js
  setTimeout(()=>{
    $scope.$apply(function(){
      $scope.username = '$scope.$apply'
    })
  })
  $timeout(()=>{
    $scope.username = '$timeout'
  })
  ```
## 控制器对象
  + 控制器的复用相当于是组件的复用
  + 控制器之间通信
    1. 父子通信
    ```js
    // 父控制器
    $scope.data = {
      name:'parent'
    }
    // 子控制器中
    $scope.$parent.data = {
      name:'parent'
    }
    ```
    2. 在模块中注入服务的方式实现共享
    3. 基于事件 $emit $on $broadcast
    4. 通过 $rootScope
## 依赖注入
  + 依赖对象以形参的形式注入进来使用，这种方式就是依赖注入
## 依赖对象
  + 完成某个特定的功能需要某个对象才能实现，这个对象就是依赖对象
## 模块对象
```js
  <div ng-app='container'></div>
  // 传递参数不止一个,代表新建模块;空数组代表该模块不依赖其他模块
  // 只有一个参数(模块名),代表获取模块
  const app = angular.module('container',[])
  const getApp = angular.module('container')
  console.log(app == getApp)  // true

```
  - controller: 用于注册控制器
  - run: 用于初始化全局的数据
```js
  const app = angular('app',[])
  app.run(['$rootScope]',function($rootScope){
    $rootScope.name = 'angular-run()...'
  }])
```
## 服务
  + 服务是一个函数或对象
  + 内置服务: $http $location $timeout等
  + 自定义服务
    1. service
    2. factory
    3. provider
  + 在控制器的回调中可以使用服务
  + 服务的本质就是依赖对象
  ```js
  app.service('myService',function(){
    this.name = 'myService'
  })
  app.controller('myController',function($scope,myService){
    console.log(myService.name)
  })
  ```
## 容器对象
  + $element
## 事件源对象
  + $event
  ```js
   <button ng-click="ajaxData($event)"></button>
   $scope.ajaxData = function(ev){
       console.log(ev)  // ev 就是事件源对象
   }
  ```
## 注入器
## 工具方法
  1. angular.bind
    - 修改 this 指向
  ```js
  function show(){
    console.log(this==document)
  }
  angular.bind(document,show)()
  ```
  2. angular.copy
    - 拷贝对象(浅拷贝)
  ```js
    let a = { age:18 }
    let b = angular.copy(a)

  ```
  3. angular.extend

## 自定义指令
```js
  // tem.html
  <div>
     {{ name }}
     <p ng-init="username='laoxie'"></p>  // ng-init的作用域访问比scope更小，通过scope:true设置指令间单独作用域
  </div>


  const app = angular.module('app',[])
  app.directive('hyInclude',function(){
    return {
      restrict:'ECAM', // E=>Element, A=>Attribute, C=>className, M=>注释, 区分大小写，可组合使用
      replace:true,  // 模板替换外层壳
      template:'<div>hello haoyun</div>',
      templateUlr:'tem.html',  // 指定外部模板，可使用相对/绝对路径
      scope:true,  // 独立作用域
      scope:{},  // 隔离作用域，不受外部控制器作用域的影响
      link:function(scope,element,attr){  // 依赖注入
        scope.name = 'angular-directive'
      },
      controller:['$scope',function($scope){
        
      }]
    }
  })
  <hy-include><hy-include>
  <p hyInculde></p>
  <p class='hyInclude'></p>
```
## 例子
```js
<div ng-app='container'>
    <p>{{name}}</p>
    <div ng-controller='testController'>
        {{ username }}
    </div>
    <button ng-click="ajaxData($event)"></div>
 </div>
const app = angular.module('container',[])
// 注册控制器是异步的
app.controller('testController',($scope,$rootScope)=>{
    $rootScope.name = 'init'
    $scope.username = 'angualrJS'
    let count = 0 
    $scope.ajaxData = function(ev){
        console.log(ev)
        this.username = 'click-' + (++count)
    }
})
```