# Docker

## 安装
  - CenOS安装
::: tip  yum安装
  - 移除旧版本
  sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
  - 安装必要工具：sudo yum install -y yum-utils device-mapper-persistent-data lvm2
  - 添加软件信息：sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
  - 更新yum缓存：sudo yum makecache fast
  - 安装 Docker-ce：yum install docker-ce
:::

## 启动关闭
  - service docker start
  - servcie docker stop
  - docker ps: 查看 docker 进程

## Hello World
  - docker run ubuntu:15.10 /bin/echo "Hello World"
::: tip
  - ubuntu:15.10指定要运行的镜像，Docker首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。
  - /bin/echo "Hello world": 在启动的容器里执行的命令
:::

## 交互式
  - docker run -i -t ubuntu:15.10 /bin/bash
  - 各个参数解析：
    - -t:在新容器内指定一个伪终端或终端
    - -i:允许你对容器内的标准输入 (STDIN) 进行交互
```
此时我们已进入一个 ubuntu15.10系统的容器
我们尝试在容器中运行命令 cat /proc/version和ls分别查看当前系统的版本信息和当前目录下的文件列表
可以通过运行exit命令或者使用CTRL+D来退出容器
```

## 常用命令
  - docker ps
  - docker images
  - docker rmi -f Hello-World  删除某个应用容器
  - docker stop Hello-World
  - docker search httpd
## 镜像
  - Docker Hub 网址为： https://hub.docker.com/