# PSR规范
## PSR-1
   + PHP标签：  
      PHP代码必须放在<?php ?>标签或<?= ?>标签中。  

   + 编码：  
      PHP文件必须使用无BOM的UTF-8编码。

   + 副作用：  
      一个PHP文件可以定义符号（比如类、函数、常量等），或者执行只有唯一副作用的操作（比如输出结果、处理数据等），但是不能同时做这两件事，尽量是一个PHP文件的功能单一。在操作的时候尽量把变量、类、函数的声明分开，通过include或require文件的方式来使用。
   + 命名空间和类：  
      命名空间和类必须遵循PSR-4自动加载器标准。
      ```php
        namespace Vendor\Model;
        class Foo
        {
        }
      ```

   + 类的名称：  
      每个类都有自己的命名空间，且都在顶级命名空间下，类名必须使用大驼峰
   + 类的方法:  
      类的方法必须使用小字母开头的小驼峰命名
   + 常量：  
      常量必须全部是用大写，并且使用下划线（_）分开
      ```php
      <?php
        namespace Vendor\Model;

        class Foo
        {
            const VERSION = '1.0';
            const DATE_APPROVED = '2012-06-01';
        }
      ```
## PSR-2
   + PSR-2是对PSR-1的扩充
   + 文件和代码行:   
     PHP文件必须使用Unix风格的换行符（LF， linefeed），最后要有一个空行，仅包含PHP代码的文件而且不能使用PHP关闭标签`?>`，每行代码不应该超过80个字符，每行末尾不能有空格，每行只能有一条语句，可以在适当的地方添加空行提高代码的阅读性。
    
     >不加上?>关闭标签，可以避免意料之外的输出错误，如果加上关闭标签，且在关闭标签后有空行，那么空行会被当成输出，导致意想不到的错误。
   + 缩进 
     必须以4个空格为缩进，不能使用制表符（Tab键）缩进  
     >必须以4个空格为缩进，不能使用制表符（Tab键）缩进
   + 关键字：  
     PHP的关键字必须使用小写，而且true, false, 和 null也必须小写。

   + 命名空间和use声明：  
     现在，namespace声明之后必须要有一个空行，而且use声明必须放在namespace之后，必须分别使用use引入命名空间，而且use后要有空行
     ```php
     <?php
        namespace Vendor\Package;

        use FooClass;
        use BarClass as Bar;
        use OtherVendor\OtherPackage\BazClass;

        // ... additional PHP code ...
     ```
   + 类的继承和实现:   
     extends和implements关键字必须和类名在同一行，类、接口和Traits定义体的起始括号应该在类名之后新起一行，结束括号也必须新起一行
     ```php
     <?php
        namespace Vendor\Package;

        use FooClass;
        use BarClass as Bar;
        use OtherVendor\OtherPackage\BazClass;

        class ClassName extends ParentClass implements \ArrayAccess, \Countable
        {
            // constants, properties, methods
        }
     ```
     如果implements后面后很多类导致一行很长，可以依次将需要的类另起新行并缩进4个空格
     ```php
     <?php
        namespace Vendor\Package;

        use FooClass;
        use BarClass as Bar;
        use OtherVendor\OtherPackage\BazClass;

        class ClassName extends ParentClass implements
            \ArrayAccess,
            \Countable,
            \Serializable
        {
            // constants, properties, methods
        }
     ```
   + 可见性：  
     类中的每个属性和方法都要声明可见性，有public、private和protected，不能使用var关键词来声明，老版本的PHP会在私有属性前加上_，一行只能声明一个属性，例如
     ```php
     <?php
        namespace Vendor\Package;

        class ClassName
        {
            public $foo = null;
        }
     ```
   + 方法：  
     类中的所有方法也应该定义可见性，方法名后面不能有空格，方法体的括号位置和类定义体的括号位置一样，都要新起一行，结束括号也要新起一行。方法参数的起始圆括号之后没有空格，结束括号之前也没有空格，有多个参数是，每个参数的逗号后面加一个空格
     ```php
     <?php
        namespace Vendor\Package;

        class ClassName
        {
            public function fooBarBaz($arg1, &$arg2, $arg3 = [])
            {
                // method body
            }
        }
     ```
     如果参数比较多，需要换行时，可以如下：
     ```php
     <?php
        namespace Vendor\Package;

        class ClassName
        {
            public function aVeryLongMethodName(
                ClassTypeHint $arg1,
                &$arg2,
                array $arg3 = []
            ) {
                // method body
            }
        }
     ```
     abstract、final和static：
     现在，abstract、final必须在可见性修饰符之前，static声明必须放在可见性修饰符之后，例如：
     ```php
     <?php
        namespace Vendor\Package;

        abstract class ClassName
        {
            protected static $foo;

            abstract protected function zim();

            final public static function bar()
            {
                // method body
            }
        }
     ```
   + 方法和函数的调用：  
     在调用方法和函数时，圆括号必须跟在函数名之后，函数的参数之间有一个空格:
     ```php
     <?php
        bar();
        $foo->bar($arg1);
        Foo::bar($arg2, $arg3);
     ```
     如果参数比较多，一行放不下时，如下处理：
     ```php
     <?php
        $foo->bar(
            $longArgument,
            $longerArgument,
            $muchLongerArgument
        );
     ```
   + 控制结构:  
     PHP的控制结构包括if、else、elseif、switch、case、while、do while、for、foreach、try和catch。如果这些关键词后面有一对原括号，开始括号前必须有一个空格，与方法和类的定义体不同，控制结构关键词后面的起始括号应该和控制结构关键词写在同一行，例如：
     ```php
     <?php
        $gorilla = new \Animals\Gorilla;
        $ibis = new \Animals\StrawNeckedIbis;

        if ($gorilla->isWake() === true) {
            do {
                $gorilla->beatChest();
            } while ($ibis->isAsleep() === true);
            
            $ibis->flyAway();
        }
     ```
   + 闭包函数： 
     闭包函数在声明时，function关键词后必须有一个空格，同时use关键词前后也必须有一个空格。起始大括号不需要另起新行
     ```php
     <?php
        $closureWithArgs = function ($arg1, $arg2) {
            // body
        };

        $closureWithArgsAndVars = function ($arg1, $arg2) use ($var1, $var2) {
            // body
        };
     ``` 
     闭包函数有多个参数时，处理方式和方法的参数一样：
     ```php
     <?php
        $longArgs_noVars = function (
            $longArgument,
            $longerArgument,
            $muchLongerArgument
        ) {
            // body
        };

        $noArgs_longVars = function () use (
            $longVar1,
            $longerVar2,
            $muchLongerVar3
        ) {
            // body
        };

        $longArgs_longVars = function (
            $longArgument,
            $longerArgument,
            $muchLongerArgument
        ) use (
            $longVar1,
            $longerVar2,
            $muchLongerVar3
        ) {
            // body
        };

        $longArgs_shortVars = function (
            $longArgument,
            $longerArgument,
            $muchLongerArgument
        ) use ($var1) {
            // body
        };

        $shortArgs_longVars = function ($arg) use (
            $longVar1,
            $longerVar2,
            $muchLongerVar3
        ) {
            // body
        };
     ```
## PSR-3
   + PSR-3定义了一套通用的日志记录接口
## PSR-4
   + PSR-4定义了一套自动加载器的规范

     