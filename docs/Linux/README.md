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
      + [镜像下载](http://mirrors.aliyun.com/centos/7/isos/x86_64/)
      + CD/DVD => 使用ISO镜像文件
      + 开启虚拟机
         + 将虚拟磁盘拆分为多个文件
         + skip
         + 是，忽略所有数据
         + 主机名 hadoop1(可自定义)
         + 设置根密码
         + 网络配置 -> 自动连接
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
## 网络管理
   + 网络基础
   + iso/osi七层模型
      - ISO：国际标准化组织
      - OSI：开发系统互联模型
      - IOS：苹果操作系统
      - 七层模型：
         + 应用层
         + 表示层
         + 会话层
         + 传输层
         + 网络层
         + 数据链路层
         + 物理层
   + TCP/IP四层模型
   + IP地址配置
      + 配置临时ip: ifconfig eth0 192.168.254.200 netmask: 255.255.255.0
      + 通过配置文件配置
         1. 打开配置文件：vi /etc/sysconfig/network-scripts/ifcfg-eth0
         ```linux
           DEVICE=eth0               网卡设备名
           BOOTPROTO=none            是否自动获取IP
           HWADDR=00:0C:29:17:C4:09  MAC地址
           NM_CONTROLLED=yes         是否可以有Network Manager图形管理工具托管
           ONBOOT=yes                是否随网络服务启动，eth0生效
           UUID=''                   唯一识别码
           IPADDR=192.168.0.25       IP地址
           NETMASK=255.255.255.0     子网掩码
           GATEWAY=192.168.0.1       网关
           DNS1=202.106.0.20         DNS
           IPV6INIT=noe              IPV6不启用
           USERCTL=no                不允许非root用户控制此网卡
         ```
         2. 配置主机名 vi /etc/sysconfig/network
         ```linux
           NETWORKING=yes
           HOSTNAME=hadoop
         ```
         3. DNS配置文件  vi /etc/resolv.conf
         ```linux
           nameserver  202.106.0.20
           search [主机名]
         ```
   + 网络参数配置
      + UUID冲突解决方案
         1. vi /etc/sysconfig/network-scripts/ifcfg-eth0
            # 删除MAC地址行
         2. rm -f /etc/udev/rules.d/70-persistent-net.rules
            # 删除网卡和MAC地址绑定文件
      + 选择桥接方式
      + 修改桥接网卡
         1. 编辑 => 虚拟网络编辑器
## 安装可视化界面
   + 安装桌面软件
   ```
    yum groupinstall "Desktop"
    yum groupinstall "X Window System"
    yum -y install dejavu-sans-* dejavu-serif-fonts

    开机自启动：/etc/inittab文件, 将id:3:initdefault修改为 id:5:initdefault重启后生效
   ```
   + 安装配置VNC
   ```
   yum install tigervnc-server  
   启动：vncserver
   ```
   + startx: 启动桌面
   + 中文语言
      1. yum groupinstall chinese-support
      2. vi ~/.bashrc
      3. 添加：export LANG="zh_CN.UTF-8"
      4. 重启：shutdown -r now
   + CentOS7安装GUI界面
     1. yum groupinstall "GNOME Desktop" "Graphical Administration Tools"
     2. ln -sf /lib/systemd/system/runlevel5.target /etc/systemd/system/default.target
     3. reboot
     4. 启动桌面  startx
## 安装vmtools
   1. 实现 windows 和 Centos 之间共享
## 设置共享文件夹
   1. vm->虚拟机->设置->选项->共享文件夹
   2. centos -> /mnt/hgfs/
## 文件系统目录结构
   + 在Linux世界里，一切皆文件
   + /: 根目录
   + /dev: 管理设备
   + /bin: 存放指令的命令
   + /etc: 存放配置文件
   + /sbin: 系统管理员使用的程序
   + /home: 存放普通用户的主目录，每个用户都有一个自己的主目录
   + /root: 系统管理员的主目录
   + /lib: 基本共享库
   + /lost+found: 一般是空的，当系统非法关机后，会在这里存放一些文件
   + /usr: 存放用户的应用程序文件，类似windows下的program files目录
   + /boot: 存放Linux启动时的核心文件
   + /proc: 虚拟目录，存放系统相关的信息
   + /srv: service的缩写，存放服务启动之后需要提取的数据
   + /sys: 存放Linux内核相关的文件
   + /tmp: 存放临时文件
   + /media: 挂载设备的目录，如：U盘、光驱等
   + /mnt: 让用户临时挂载别的文件系统，可以将外部的存储设备挂载在/mnt/上
## 远程操作
   + 登录工具: XShell
   + FTP工具：XFtp
   + linux系统开启sshd服务，监听22端口
      - 查看sshd服务：service sshd status
      - 启动sshd服务：service sshd start
      - 停止sshd服务：service sshd stop
   + 远程登录 -> 打开xshell -> 新建会话
   + FTP上传 -> 打开xftp -> 新建会话 -> 选择 SFTP协议
## Apache服务器搭建
   + yum install -y httpd httpd-devel httpd-manual httpd-tools
   + service httpd  start
   + /var/www

## 终端编辑器
   + vi
      + 终端文本编辑器
   + vim
      + vi的升级版，支持语法高亮
      + 常用命令
         :q! 强制退出不保存
         :wq 保存退出
   + 常见模式
      1. 正常模式
         + 在正常模式下可以使用快捷键
      2. 编辑模式
         + 可以编辑内容
      3. 命令行模式
## 常用命令
   + ifconfig 查看网卡配置信息
   + ping www.baidu.com 检查网络是否连接
   + vi test.txt、a、esc、shift+zz
   + history 查看历史命令
   + cd - 切换到上一次目录
   + cd ~ 切换到用户的家目录
   + ls -lh
   + hostname 查看主机名
   + hostname [主机名]  设置主机名
## window-cmd命令
   + 查看端口号占用情况：netstat -ano
   + 查看某个端口号是否被占用：netstat -aon|findstr "3000"
   + 关掉某个端口号占用的进程：taskkill /pid 1696 -t -f

