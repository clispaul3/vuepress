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
## VM安装
   + 开发环境：虚拟机 + 操作系统镜像文件 =>  virtual machine + CentOS
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