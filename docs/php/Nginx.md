# Nginx
## 环境搭建
   1. 下载安装包
      + xftp上传
      + wget下载
   2. 解压
      + tar [包文件]
   3. 安装依赖库
      + yum install pcre
      + yum install pcre-devel
      + yum install zlib
      + yum install zlib-devel
   4. configure配置：cd nginx-1.9.11 && ./configure --prefix=/usr/local/nginx
   5. 编译安装: make && make install
   6. 启动Nginx
      + cd /usr/local/nginx
      + 启动命令：/usr/local/nginx/sbin/nginx 
         - 关闭命令：/usr/local/nginx/sbin/nginx -s stop
         - 重启命令：/usr/local/nginx/sbin/nginx -s reload
   7. 检测是否启动成功：http://localhost:80