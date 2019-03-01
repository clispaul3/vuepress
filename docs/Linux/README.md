# Linux
## 基础介绍
   + Linux是一种开源、免费的操作系统
   + 安全、高效、稳定、处理高并发
   + 创始人：林纳斯，吉祥物：Tux(小企鹅)
   + 发行版：Linux内核 + 二次开发，不同的发行版有不同的分支
      1. Redhat:其中有一个分支是 CentOS
      2. Ubantu
      3. Suse
      4. 红旗Linux
   + 操作系统
      - windows
      - android
      - linux
      - IOS
   + 发展历史
      - Unix:Linux是从Unix发展而来
   + 远程连接工具
      - 远程连接Linux服务器
   + 应用场景
      - 个人桌面
      - 服务器应用
      - 嵌入式系统
## 安装系统
   + 开发环境：虚拟机 + 操作系统镜像文件 =>  virtual machine + CentOS
   1. 安装虚拟机
      + 配置虚拟机
   2. 安装Linux系统
      + CD/DVD => 使用ISO镜像文件
      + 开启虚拟机
         + skip
         + 是，忽略所有数据
         + 主机名 hadoop1(可自定义)
         + 设置根密码
         + 创建自定义布局
         + 创建分区 => 标准分区
            1. 挂载点：/boot => 200M
            2. 文件系统类型 swap => 1024M
            3. 根分区：/  => 使用剩余全部空间
         + 格式化
         + 将修改写入磁盘
         + 重新引导
## 虚拟机的网络连接
   + 桥接模式
      - 共用网络环境，容易造成ip冲突
      - 方便系统之间通讯
   + NAT模式：可以访问外网，也不会造成IP冲突，一般选择这种模式
   + 仅主机模式：不能访问外网
## 常用命令
   + ifconfig 查看网卡配置信息
   + ping www.baidu.com 检查网络是否连接
   + vi test.txt、a、esc、shift+zz
   + history 查看历史命令
   + cd - 切换到上一次目录
   + cd ~ 切换到用户的家目录
   + ls -lh
## window-cmd命令
   + 查看端口号占用情况：netstat -ano
   + 查看某个端口号是否被占用：netstat -aon|findstr "3000"
   + 关掉某个端口号占用的进程：taskkill /pid 1696 -t -f