# bash

## 运行模式
  1. login shell
  2. non-login shell
  3. interactive shell: 交互式shell
    - 交互式模式就是shell等待你的输入，并且执行你提交的命令。这种模式被称作交互式是因为shell与用户进行交互。这种模式也是大多数用户非常熟悉的：登录、执行一些命令、签退。当你签退后，shell也终止了
  4. non-interactive shell: 非交互式shell
    - 非交互式模式。在这种模式下，shell不与你进行交互，而是读取存放在文件中的命令,并且执行它们。当它读到文件的结尾，shell也就终止了。

## 登录方式
  >Linux有一些系统环境配置文件是在登陆Linux主机时便读取的, 他们可以弄好bash的操作环境, 比如/etc/profile, ~/.bashrc等等
  1. login shell
  2. non-login shell
  - 不同的登录方式，读取的配置文件是不一样的,从而导致环境不一样

## login shell
  - login shell方式登陆的时候，那么首先会读取和执行/etc/profiles(这个是整体配置文件)，接着它会去你的home里寻找有没有~/.bash_profile，~/.bash_login或者~/.profile。这些属于个人的系统配置文件(注意不同的发行版这些系统配置文件可能有可能没有！)，那么如果他们同时存在的话按照哪一个来呢？注意他们的优先级是由大至小，举个例子，如果同时存在~/.bash_profile和~/.bash_login，那一切按照~/.bash_profile为准，即优先级是~/.bash_profile>~/.bash_login>~/.profile，你可以去里面看一下都是一些设置环境变量还有读取其他配置文件之类的东西。当你以login shell退出时，bash会读取~/.bash_logout和/etc/bash.bash_logout，当然前提是他们存在...

## non-login shell
  - 如果bash是non-login shell登陆的那么系统不会读取以上所说的配置文件，而是直接读取~/.bashrc，当然前提是这个文件存在

## su -
  - 使用"su -"切换到指定用户时，获得此用户的login shell。如果不使用"-"，则获得non-login shell。