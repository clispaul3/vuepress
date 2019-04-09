# XML
## 基本介绍
   1. XML被用于传输和存储数据，重点是数据的内容
   2. HTML被用于显示数据，重点是数据的外观
   3. XML：可扩展标记语言,是独立于软件和硬件的信息传输工具。
   4. XML没有预定义标签，需要自行定义，HTML有预定义标签
   5. XML不会替代HTML,XML 用于传输数据，而 HTML 用于格式化并显示数据
   ```java
   <note>
    <to>Tove</to>
    <from>Jani</from>
    <heading>Reminder</heading>
    <body>Don't forget me this weekend!</body>
   </note>
   ```
## JSON 对比 XML
   [JSON 对比 XML](https://www.cnblogs.com/SanMaoSpace/p/3139186.html)
   - xml示例
```java
   <?xml version="1.0" encoding="utf-8" ?>
<country>
  <name>中国</name>
  <province>
    <name>黑龙江</name>
    <citys>
      <city>哈尔滨</city>
      <city>大庆</city>
    </citys>  　　
  </province>
  <province>
    <name>广东</name>
    <citys>
      <city>广州</city>
      <city>深圳</city>
      <city>珠海</city>
    </citys> 　　
  </province>
  <province>
    <name>台湾</name>
    <citys>
      　<city>台北</city>
      　<city>高雄</city>
    </citys>　
  </province>
  <province>
    <name>新疆</name>
    <citys>
      <city>乌鲁木齐</city>
    </citys>
  </province>
</country>
```
  - JSON示例
  ```js
    var country =
        {
            name: "中国",
            provinces: [
            { name: "黑龙江", citys: { city: ["哈尔滨", "大庆"]} },
            { name: "广东", citys: { city: ["广州", "深圳", "珠海"]} },
            { name: "台湾", citys: { city: ["台北", "高雄"]} },
            { name: "新疆", citys: { city: ["乌鲁木齐"]} }
            ]
        }
  ```

