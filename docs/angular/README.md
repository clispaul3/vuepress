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
## 控制器对象
  + 控制器的复用相当于是组件的复用
## 依赖注入
  + 依赖对象以形参的形式注入进来使用，这种方式就是依赖注入
## 依赖对象
  + 完成某个特定的功能需要某个对象才能实现，这个对象就是依赖对象
## 模块对象
```js
  <div ng-app='container'></div>
  const app = angular.module('container')
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
## 服务对象
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