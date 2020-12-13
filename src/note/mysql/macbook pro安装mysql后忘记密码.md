# MacBook Pro 安装MySQL忘记密码解决方案

## 前言：

由于从官网下载安装包安装后，系统生成的密码没有保存，导致无法登陆到`mysql`(备注：5.7版) ,就尝试了百度别人遇到这个坑的时候怎么填上的，现在总结一下自己搜索后并成功解决的方案。([官网说这种方式适用于任何平台，但是不安全](https://dev.mysql.com/doc/refman/5.7/en/resetting-permissions.html))

## 步骤

注：以下全部在终端中进行

1. ```bash
   cd /usr/local/mysql/bin/
   ```

2. 如有必要，请停止`mysql`服务。然后使用命令

   ```bash
   
   ./mysqld_safe --skip-grant-tables
   ```

   注：可能在这之前需要超级用户权限

   ```bash
   sudo su
   ```

   

3. 连接到`mysql`服务器（不需要密码），因为服务器使用`--skip-grant-tables`启动

   ```bash
   ./mysql
   ```

4. 告诉服务器重新加载授权表

   ```mysql
   FLUSH PRIVILEGES;
   ```

5. 更改`'root'@localhost`账户密码

   ```mysql
   ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass';
   ```

6. 现在就能通过`root`登录到`mysql`服务器。停止服务器并重新正常启动它

   ```bash
   ./mysql -u root -p
   ```

   

## 参考

[1] [5.7版官方手册](https://dev.mysql.com/doc/refman/5.7/en/resetting-permissions.html) 

[2] [Mac之Mysql的初始化密码或忘记密码](https://blog.csdn.net/qq_17235727/article/details/55509341) 

