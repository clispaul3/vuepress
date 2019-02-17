# Socket
   + Socket也叫套接字
   + 用于描述IP地址和端口，是一个通信链的句柄，在Internet上的主机一般运行了多个服务软件，
     同时提供几种服务，每种服务都打开一个Socket，并绑定到一个端口号，不同的端口号对应于不同的服务，一个Socket由一个IP地址和一个端口号唯一确定
   + Socket就是为网络编程提供的一种机制；通信的两端都有Socket；网络通信其实就是Socket间   的通信；数据在两个Socket间通过IO传输
## 三要素
   1. IP地址
      - 网络中设备的标识
   2. 端口号
      - 用于标识进程的逻辑地址，不同进程的标识
   3. 传输协议
      - UDP协议
         + 将数据源和目的封装成数据包中，不需要建立连接；每个数据包的大小限制在64k；
           因为无连接，是不可靠协议，传输速度快
      - TCP协议
         + 建立连接，形成传输数据的通道；在连接中进行大数据量传输；通过三次握手完成连接，
           是可靠协议，效率会稍低
## InetAddress