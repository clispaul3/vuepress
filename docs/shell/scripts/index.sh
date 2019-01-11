#!/usr/bin/env bash
echo 'hello world'
node ./docs/shell/scripts/test1.js
result=false
if [ $? -ne 0 ]; then
    echo 'fail'
else
    result=true
    echo "success"
fi
echo $result
if $result
then
    echo 'zhi xing cheng gong'
fi
node ./docs/shell/scripts/test.js
# touch ./docs/shell/scripts/test2.js
# rm ./docs/shell/scripts/test2.js
# mv ./docs/shell/scripts/test2.js ./docs/shell
# mkdir ./docs/shell/test 
if [ ! -d "./docs/shell/scripts/test" ]; then
  mkdir ./docs/shell/scripts/test
else 
  rm -rf ./docs/shell/scripts/test
  mkdir ./docs/shell/scripts/test
fi
if [ $? -ne 0 ]; then
    echo '文件夹新建失败'
else
    echo "文件夹新建成功"
fi
cp -r ./docs/shell/test/* ./docs/shell/scripts/test
if [ $? -ne 0 ]; then
    echo '复制失败'
else
    result=true
    echo "复制成功"
fi
