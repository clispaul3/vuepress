(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{222:function(t,n,a){"use strict";a.r(n);var e=a(0),i=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"面向对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 面向对象")]),t._v(" "),a("h2",{attrs:{id:"面向对象-vs-面向过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象-vs-面向过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 面向对象 VS 面向过程")]),t._v(" "),a("ol",[a("li",[t._v("面向对象适合处理复杂、多协作的业务逻辑")]),t._v(" "),a("li",[t._v("面向过程适合简单，协作较少的业务逻辑")])]),t._v(" "),a("h2",{attrs:{id:"类-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类-对象","aria-hidden":"true"}},[t._v("#")]),t._v(" 类 & 对象")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('public class Student {\n long id;\n String name;\n int age;\n static String city = "china";\n static int count = 0;\n static {\n \tSystem.out.print("static init area");\n \tcount++;\n }\n public static void main(String[] args) {\n \tStudent stu = new Student(18);\n \tstu.say("java\\n");\n \tfn();\n }\n Student(int age){\n \tthis.age = age;\n \tthis.id = System.currentTimeMillis();\n \tSystem.out.print("构造函数\\n");\n \tcount++;\n }\n void say(String name) {\n \tthis.name = name;\n \tSystem.out.print(this.id + "\\n");\n \tcount++;\n }\n static void fn() {\n \tSystem.out.print(count);\n \tcount++;\n \tSystem.out.print(count);\n }\n}\n')])])]),a("ol",[a("li",[t._v("注意事项\n"),a("ul",[a("li",[t._v("静态方法里不能访问成员变量和成员方法")]),t._v(" "),a("li",[t._v("静态方法里只能访问静态变量和静态方法")]),t._v(" "),a("li",[t._v("静态方法里不能访问 this")])])]),t._v(" "),a("li",[t._v("静态初始化块\n"),a("ul",[a("li",[t._v("在实例初始化的时候调用，先于构造器调用")])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('static {\n    System.out.print("init static");\n}\n')])])]),a("h2",{attrs:{id:"值传递"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#值传递","aria-hidden":"true"}},[t._v("#")]),t._v(" 值传递")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('public class Transform {\n\tString name;\n\tint age;\n\tpublic static void main(String[] args) {\n\t\tTransform obj = new Transform("java",20);\n\t\tobj.updateName(obj);\n\t\tSystem.out.print(obj.name);\n\t}\n\tTransform(String name,int age){\n\t\tthis.name = name;\n\t\tthis.age = age;\n\t}\n\tvoid updateName(Transform u) {\n\t\tu.name = "PHP";\n\t}\n\tvoid updateAge() {\n\t\tthis.age = 18;\n\t}\n}\n')])])]),a("h2",{attrs:{id:"包机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 包机制")]),t._v(" "),a("ul",[a("li",[t._v("解决类重名的问题，类似于文件夹的功能")]),t._v(" "),a("li",[t._v("package chat.zyb.study;")]),t._v(" "),a("li",[t._v("每个类开头都要先加包名，功能类似于PHP中的命名空间")]),t._v(" "),a("li",[t._v("同一个包的类不需要导入就可以直接使用")]),t._v(" "),a("li",[t._v("不同包的类需要导入才能使用")]),t._v(" "),a("li",[t._v("导入包中的某个类  import cn.zyb.study.Test;")]),t._v(" "),a("li",[t._v("导入包中的所有类  import cn.zyb.test.*;")]),t._v(" "),a("li",[t._v("包与包之间不能嵌套")]),t._v(" "),a("li",[t._v("包之间存在同名的类 import cn.zyb.study.Test = new cn.zyb.study.Test()")]),t._v(" "),a("li",[t._v("导入静态属性 import java.lang.Math.PI |　import java.lang.Math.*;")])]),t._v(" "),a("h2",{attrs:{id:"面向对象的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向对象的特性","aria-hidden":"true"}},[t._v("#")]),t._v(" 面向对象的特性")]),t._v(" "),a("ul",[a("li",[t._v("封装")]),t._v(" "),a("li",[t._v("继承\n"),a("ol",[a("li",[t._v("extends")]),t._v(" "),a("li",[t._v("子类在实例化的时候会执行父类的静态初始化块的代码和父类构造器方法")]),t._v(" "),a("li",[t._v("java是单继承语言，PHP也是单继承语言，java的接口可以多继承")]),t._v(" "),a("li",[t._v("所有的类如果没有显式的继承某个父类，则默认是继承Oject类")]),t._v(" "),a("li",[t._v("ctrl+T 可以看到类的继承树结构")]),t._v(" "),a("li",[t._v("a instanceof A 检测a是否是A的实例，继承树上的任何类都返回true")]),t._v(" "),a("li",[t._v("如果父类有有参构造方法，子类在继承时必须在构造方法中调用父类构造方法,super(参数    列表)")]),t._v(" "),a("li",[t._v("如果父类的构造方法是无参的，则不需要显式调用")]),t._v(" "),a("li",[t._v("继承实现的过程：先实例化父类再实例化子类")]),t._v(" "),a("li",[t._v("instanceof 不能用于基本数据类型的检测(只能用对应的包装类),只能用于引用数据类型")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('  package cn.zyb.oop;\n  public class TestExtends {\n      public static void main(String[] args) {\n          Student stu = new Student("java");\n          System.out.print(stu.country + "\\n");\n          stu.rest();\n      }\n  }\n  class Test extends Student{\n      Test(){\n          super("php"); // super方法必须在其他代码之前实现\n          this.name = "111";\n      }\n  }\n  class Person{\n      String name = "test_name";\n      int age = 18;\n      String country;\n      static {\n          System.out.print("有子类继承了我，并执行了我的静态初始化块的代码\\n");\n      }\n      Person(){\n          System.out.print("有子类继承了我，并执行了我的构造器方法\\n");\n          this.country = "China";\n      }\n      void rest() {\n          System.out.print("rest");\n      }\n  }\n  class Student extends Person{\n      String major;\n      Student(String major){\n          this.major = major;\n      }\n  }\n')])])])]),t._v(" "),a("li",[t._v("多态")])]),t._v(" "),a("h2",{attrs:{id:"方法的重写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法的重写","aria-hidden":"true"}},[t._v("#")]),t._v(" 方法的重写")]),t._v(" "),a("ul",[a("li",[t._v("子类重写父类的方法")]),t._v(" "),a("li",[t._v("方法名和形参列表保持一致，如果不一致会实现方法的重载")]),t._v(" "),a("li",[t._v("子类返回值要小于等于父类\n"),a("ol",[a("li",[t._v("如果返回实例，注意继承树的父子结构，父类实例>子类实例")]),t._v(" "),a("li",[t._v("如果返回基本数据类型，注意返回值的类型必须相同")])])]),t._v(" "),a("li",[t._v("子类的访问权限要大于等于父类")])]),t._v(" "),a("h2",{attrs:{id:"object类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object类","aria-hidden":"true"}},[t._v("#")]),t._v(" Object类")]),t._v(" "),a("ul",[a("li",[t._v("重写 toString & equals")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' package cn.zyb.oop;\n public class TestObject {\n     public static void main(String[] args) {\n         TestObject obj = new TestObject();\n         System.out.print(obj.toString());\n         boolean res = obj.equals(obj);\n         System.out.print(res);\n     }\n     public String toString() {\n         return "override";\n     }\n     public boolean equals(TestObject obj) {\n         return this==obj;\n     }\n }\n')])])]),a("h2",{attrs:{id:"super关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#super关键字","aria-hidden":"true"}},[t._v("#")]),t._v(" super关键字")]),t._v(" "),a("ul",[a("li",[t._v("子类必须在构造器中调用父类的有参构造器")]),t._v(" "),a("li",[t._v("通过 super可以调用父类实例的属性和方法")]),t._v(" "),a("li",[t._v("在子类中super代表的就是父类的实例")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('package cn.zyb.oop;\npublic class TestSuper {\n    public static void main(String[] args) {\n    \tSon obj = new Son();\n    \tobj.fn();\n    }\n}\nclass Father{\n\tpublic int value = 100;\n\tvoid fn() {\n\t\tSystem.out.print(this.value);\n\t}\n\tFather(String name){\n\t\tSystem.out.print(name);\n\t}\n}\nclass Son extends Father{\n\tpublic int value = 200;\n\tSon(){\n\t\tsuper("son");\n\t\tsuper.fn();\n\t}\n\tvoid fn() {\n\t\tsuper.fn();\n\t\tSystem.out.print(this.value);\n\t\tSystem.out.print(super.value);\n\t}\n}\n')])])]),a("h2",{attrs:{id:"封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装","aria-hidden":"true"}},[t._v("#")]),t._v(" 封装")]),t._v(" "),a("ol",[a("li",[t._v("高内聚、低耦合")]),t._v(" "),a("li",[t._v("访问控制符：限制访问权限")]),t._v(" "),a("li",[t._v("没有用public修饰的类在其他类中不能访问")]),t._v(" "),a("li",[t._v("一个文件只能有一个 public 类\n"),a("img",{attrs:{src:"/img/java-permission.jpg",alt:"访问权限"}}),t._v(" "),a("ul",[a("li",[t._v("public: 所有包中的所有类都可以访问")]),t._v(" "),a("li",[t._v("protected: 同一个包中的类以及其他包中的子类能访问")]),t._v(" "),a("li",[t._v("private: 自己只有类能访问")]),t._v(" "),a("li",[t._v("default: 没有修饰符，只能同一个包的类能访问")])])]),t._v(" "),a("li",[t._v("使用规范\n"),a("ol",[a("li",[t._v("对于类的属性，一般使用 private")]),t._v(" "),a("li",[t._v("对于类属性的修改，提供set方法")]),t._v(" "),a("li",[t._v("对于属性的获取，提供get方法")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('public class Permission{\n  private int id;\n  private String name;\n  private String height;\n  public void setName(String name) {\n      \x3c!-- this.name = name; --\x3e\n      return name;\n  }\n  public void setHeight(String height) {\n      this.height = height;\n  }\n  public String getName(){\n      return this.name;\n  }\n  public static void main(String[] args) {\n      Permission obj = new Permission();\n      obj.setName("java");\n      System.out.print(obj.name + "\\n");\n  }\n} \n')])])])])]),t._v(" "),a("h2",{attrs:{id:"多态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多态","aria-hidden":"true"}},[t._v("#")]),t._v(" 多态")]),t._v(" "),a("ul",[a("li",[t._v("实现多态的三个条件\n"),a("ol",[a("li",[t._v("必须要有继承")]),t._v(" "),a("li",[t._v("方法要重写")]),t._v(" "),a("li",[t._v("父类引用指向子类实例")])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('public class TestPolym {\n    public static void main(String[] args) {\n    \tAnimal a = new Animal();\n    \tanimalCry(a);\n    \tDog d = new Dog();\n    \tanimalCry(d);\n    \tCat c = new Cat();\n    \tanimalCry(c);\n    }\n    static void animalCry(Animal a) {\n    \ta.cry();\n    }\n}\nclass Animal{\n\tpublic void cry() {\n\t\tSystem.out.print("animal\\n");\n\t}\n}\nclass Dog extends Animal{\n\tpublic void cry() {\n\t\tSystem.out.print("dog\\n");\n\t}\n}\nclass Cat extends Animal{\n\tpublic void cry() {\n\t\tSystem.out.print("cat\\n");\n\t}\n}\n')])])]),a("h2",{attrs:{id:"对象的转型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的转型","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象的转型")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('class Animal{\n\tpublic void cry() {\n\t\tSystem.out.print("animal\\n");\n\t}\n}\nclass Dog extends Animal{\n\tpublic void cry() {\n\t\tSystem.out.print("dog\\n");\n\t}\n    public void seeDoor() {\n\t\tSystem.out.print("see door");\n\t}\n}\nAnimal dog = new Dog(); // 自动向下转型\ndog不能调用seeDoor方法\nDog dog2 = (Dog)dog; // 强制转型\ndog2可以调用seeDoor方法\ndog.cry(); => dog // 如果Dog类中没有cry方法则调用Animal中的方法，否则调用Dog中的方法\n')])])]),a("h2",{attrs:{id:"final关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#final关键字","aria-hidden":"true"}},[t._v("#")]),t._v(" final关键字")]),t._v(" "),a("ol",[a("li",[t._v("可以修饰变量、方法、类")]),t._v(" "),a("li",[t._v("final修饰的变量不能被修改")]),t._v(" "),a("li",[t._v("final修饰的方法不能被重写，但可以重载")]),t._v(" "),a("li",[t._v("final修饰的类不能被继承")])]),t._v(" "),a("h2",{attrs:{id:"抽象方法-抽象类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象方法-抽象类","aria-hidden":"true"}},[t._v("#")]),t._v(" 抽象方法 & 抽象类")]),t._v(" "),a("ul",[a("li",[t._v("抽象类存在的意义在于给子类提供统一的模板")])]),t._v(" "),a("ol",[a("li",[t._v("抽象方法没有方法体")]),t._v(" "),a("li",[t._v("包含抽象方法的类必须声明为抽象类")]),t._v(" "),a("li",[t._v("抽象类中可以定义普通方法")]),t._v(" "),a("li",[t._v("如果父类是抽象类，子类必须实现父类的抽象方法，而且必须已重写的规范实现")]),t._v(" "),a("li",[t._v("抽象类不能实例化")]),t._v(" "),a("li",[t._v("抽象类的构造器可以用来被子类实例化的时候调用")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(' public class Person {\n     public static void main(String[] args) {\n         Dog dog = new Dog();\n     }\n }\n abstract class Animal {\n     abstract protected void run();\n     public void say() {\n         System.out.print("fn-say");\n     }\n     Animal(){\n         System.out.print("我是抽象类的构造器");\n     }\n }\n class Dog extends Animal{\n     public void run() {\n         System.out.print("实现父类的抽象方法");\n     }\n }\n')])])]),a("h2",{attrs:{id:"接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口","aria-hidden":"true"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),a("ul",[a("li",[t._v("比抽象类更抽象的类，接口中所有的方法都是抽象方法")]),t._v(" "),a("li",[t._v("更加全面的实现了：规范和具体实现的分离")]),t._v(" "),a("li",[t._v("接口就是规范")]),t._v(" "),a("li",[t._v("接口可以实现多继承")]),t._v(" "),a("li",[t._v("访问修饰符：只能是public或default")]),t._v(" "),a("li",[t._v("常量: 接口中的属性总是 public statci final修饰，不写也是")]),t._v(" "),a("li",[t._v("方法: 接口中的方法只能是：public abstract，省略的话, 也是public abstract")]),t._v(" "),a("li",[t._v("子类通过implements实现接口中的规范")]),t._v(" "),a("li",[t._v("接口不能创建实例")]),t._v(" "),a("li",[t._v("一个类实现了接口，必须实现接口中所有的方法，且这些方法必须是public")]),t._v(" "),a("li",[t._v("子类可以任意使用接口定义的变量")]),t._v(" "),a("li",[t._v("面向接口编程")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" interface TestInterface extends Interface1,Interface2{\n     void run();\n     int number = 1;\n }\n interface Interface1{\n     void run();\n }\n interface Interface2{\n     void say();\n }\n public class TestInterface2 implements TestInterface,Interface1{\n     public void run() {\n         \n     }\n     public void say() {\n         \n     }\n     public static void main(String[] args) {\n         System.out.print(number);\n     }\n }\n")])])]),a("h2",{attrs:{id:"内部类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内部类","aria-hidden":"true"}},[t._v("#")]),t._v(" 内部类")]),t._v(" "),a("ol",[a("li",[t._v("分类\n"),a("ul",[a("li",[t._v("成员内部类\n"),a("ul",[a("li",[t._v("分类\n"),a("ol",[a("li",[t._v("非静态内部类")]),t._v(" "),a("li",[t._v("静态内部类")])])]),t._v(" "),a("li",[t._v("可以用public protected default private修饰")]),t._v(" "),a("li",[t._v("内部类可以直接使用外部类的属性和方法")]),t._v(" "),a("li",[t._v("非静态内部类不能定义静态属性和静态方法")]),t._v(" "),a("li",[t._v("外部类的静态方法、静态代码块不能访问非静态内部类")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("public class TestInnerClass {\n   private int num = 1;\n   public static int count = 100;\n   private TestInner1 test1;\n   private TestInner2 test2;\n   // 非静态内部类\n   protected class TestInner1{\n       // 访问外部类的属性\n       public int num = TestInnerClass.this.count+2;;\n   }\n   // 静态内部类\n   public static class TestInner2{\n       // 访问外部类的属性\n       public int num = TestInnerClass.count+2;\n       public void say() {\n           System.out.print(this.num);\n       }\n   }\n   // 外部类构造器\n   TestInnerClass(){\n       this.test1 = new TestInner1();\n       this.test2 = new TestInner2();\n   }\n   public static void main(String[] args) {\n       // 创建外部类的实例\n       TestInnerClass obj = new TestInnerClass();\n       System.out.print(obj.test2.num);\n       // 创建内部类的实例\n       TestInnerClass.TestInner1 inner1 = new TestInnerClass().new TestInner1();\n       TestInnerClass.TestInner2 inner2 = new TestInnerClass.TestInner2();\n   }\n}\n")])])])]),t._v(" "),a("li",[t._v("匿名内部类\n"),a("ol",[a("li",[t._v("没有访问修饰符")]),t._v(" "),a("li",[t._v("没有构造方法")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("this.addWindowListener(new WindowAdapter() {\n\tpublic void windowClosing(WindowEvent e) {\n\t\tSystem.exit(0);\n\t}\n});\n")])])])]),t._v(" "),a("li",[t._v("局部内部类")])])])])])}],!1,null,null,null);i.options.__file="面向对象.md";n.default=i.exports}}]);