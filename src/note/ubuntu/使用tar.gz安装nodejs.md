## 使用tar.gz包安装nodejs

* 下载tar.gz包

  ```bash
  $ curl -o node14.tar.gz -L https://nodejs.org/dist/v14.15.4/node-v14.15.4-darwin-x64.tar.gz
  ```

* 解压包

  ```bash
  $ tar -xvzf node14.tar.gz
  ```

* 进入解压目录

  ```bash
  $ cd cd node-v14.9.0-linux-x64/
  ```

  

* 执行node命令 查看版本

  ```bash
  $ ./bin/node --version
  ```

* 查看解压包路径

  ```bash
  $ pwd  
  /home/xxx/node-v14.9.0-linux-x64
  ```

  

* 使用`ln` 设置软连接

  ```bash
  $ sudo ln -s /home/xxx/node-v14.9.0-linux-x64/bin/node /usr/bin/ 
  $ sudo ln -s /home/xxx/node-v14.9.0-linux-x64/bin/npm /usr/bin/
  ```

* 查看版本

  ```bash
  $ node --version
  ```

  









