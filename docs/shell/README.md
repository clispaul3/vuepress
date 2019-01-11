# Shell
   + commit
```
新建commit.sh文件
#!/usr/bin/env/ bash
git add .
git commit -m 'test shell commit'
git push -u shell master

在package.json中增加脚本
script:{
    "commit":"bash ./commit.sh"
}
```
   + 变量
`username='sunwukong'` // 不能有空格
   + 判断前一个命令是否执行成功
```
#!/usr/bin/env bash
echo 'hello world'
node ./docs/shell/scripts/test1.js // setTimeout(()=>console.log('async'),1000)
if [ $? -ne 0 ]; then
    echo "fail"
else
    echo "success"
fi
node ./docs/shell/scripts/test.js // console.log('sync')

-eq　　等于
-ne　　不等于
-gt　　大于
-lt　　小于
ge　　大于等于
le　　小于等于
```
   + 拷贝文件
```
#!/usr/bin/env bash

# 拷贝 main 文件夹
if [ ! -d "./dist/main" ]; then
  mkdir ./dist/main
else 
  rm -rf ./dist/main
  mkdir ./dist/main
fi
cp -r ./src/main/* ./dist/main

# 拷贝 html 文件夹
if [ ! -d "./dist/html" ]; then
  mkdir ./dist/html
else 
  rm -rf ./dist/html
  mkdir ./dist/html
fi
cp -r ./src/html/* ./dist/html
```
   + 修改文件
```
sed -i "s/oldString/newString/g"  `grep oldString -rl /path`
```