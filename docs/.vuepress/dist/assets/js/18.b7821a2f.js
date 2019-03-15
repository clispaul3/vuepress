(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{226:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[a("a",{attrs:{href:"http://tomcat.apache.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"http://iyunv.com/forum-61-1.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("技术论坛"),a("OutboundLink")],1)]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"tomcat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tomcat","aria-hidden":"true"}},[this._v("#")]),this._v(" Tomcat")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("web应用服务器,类似于Apache、Nginx，但Apache和Nginx不支持java")]),this._v(" "),e("li",[this._v("Tomcat是一个免费开源的web应用服务器，是开发和调试JSP程序的首选")]),this._v(" "),e("li",[this._v("Tomcat处理静态HTML的能力不如Apache")]),this._v(" "),e("li",[this._v("JSP：java server pages，java服务器页面，是一种动态网页技术标准")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("下载")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"/img/java-tomcat-download.png",alt:"下载"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("安装\n"),e("ul",[e("li",[this._v("下载压缩包解压即可")]),this._v(" "),e("li",[this._v("必须先配置好环境变量 JAVA_HOME")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目录","aria-hidden":"true"}},[this._v("#")]),this._v(" 目录")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("bin: 存放启动和关闭Tomcat的可执行文件\n"),a("ul",[a("li",[t._v("startup.bat: Windows系统启动文件")]),t._v(" "),a("li",[t._v("startup.sh: Linux系统启动文件")])])]),t._v(" "),a("li",[t._v("conf: 存放Tomcat的配置文件")]),t._v(" "),a("li",[t._v("lib: 存放库文件")]),t._v(" "),a("li",[t._v("logs: 存放日志文件")]),t._v(" "),a("li",[t._v("temp: 存放临时文件")]),t._v(" "),a("li",[t._v("webapps: 存放web应用文件，可在此目录建立项目目录,ROOT目录可以省略不写，其他目录要写")]),t._v(" "),a("li",[t._v("work: 存放JSP转换后的Servlet文件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本","aria-hidden":"true"}},[this._v("#")]),this._v(" 版本")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Tomcat7.0支持Servlet3.0，而Tomcat6.0只支持Servlet2.5")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"修改配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改配置","aria-hidden":"true"}},[this._v("#")]),this._v(" 修改配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("修改端口号：conf->server.xml->"),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<Connector port="8088" protocol="HTTP/1.1"\n         connectionTimeout="20000"\n         redirectPort="8443" />\n')])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"javaweb目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javaweb目录","aria-hidden":"true"}},[this._v("#")]),this._v(" javaWeb目录")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("+ WEB-INFO\n   - lib：存放jar包\n   - classes: 存放类文件\n   - web.xml：项目配置文件\n+ index.html\n注意：WEB-INF不能被客户端访问\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("eclipse创建javaWeb项目\n"),a("ol",[a("li",[t._v("new -> Dynamic web project")]),t._v(" "),a("li",[t._v("windows -> show views -> servers")]),t._v(" "),a("li",[t._v("add and remove")]),t._v(" "),a("li",[t._v("start")])])]),t._v(" "),a("li",[t._v("通过配置tomcat为当前项目提供web服务")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"配置虚拟主机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置虚拟主机","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置虚拟主机")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("配置任意文件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v(' <Host name="localhost"  appBase="webapps"\n         unpackWARs="true" autoDeploy="true">\n     <Context path="testdir" docBase="C:/test"/>\n </Host>\n 访问：http://localhost:8080/testdir/index.html \n 配置任意目录让tomcat提供web服务，但主机名仍然是localhost\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("配置虚拟主机\n"),e("ol",[e("li",[this._v("host文件：127.0.0.1 www.javaweb.com")]),this._v(" "),e("li",[this._v("server.xml")])]),this._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<Host name="www.javaweb.com"      \n     appBase="G:\\java-study\\JSP\\tomcat\\apache-tomcat-7.0.92\\webapps"\n     unpackWARs="true" autoDeploy="true">\n</Host>\n')])])])])])}],!1,null,null,null);r.options.__file="Tomcat.md";e.default=r.exports}}]);