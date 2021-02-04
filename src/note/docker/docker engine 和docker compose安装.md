# docker engine 和 docker compose安装

## docker engine

1. 卸载旧版本

   ```bash
   sudo apt-get remove docker docker-engine docker.io containerd runc
   ```

   如果显示安装，则接着卸载旧版本`docker engine`

   ```bash
   sudo apt-get purge docker-ce docker-ce-cli containerd.io
   sudo rm -rf /var/lib/docker
   ```

   

2. 安装方法

   * 安装并登录存储库

     * 更新包

       ```bash
       sudo apt-get update
       ```

     * 安装软件包以允许通过https使用存储库

       ```bash
       sudo apt-get install \
           apt-transport-https \
           ca-certificates \
           curl \
           gnupg-agent \
           software-properties-common
       ```

     * 添加官方gpg密钥

       ```bash
       curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
       ```

     * 验证密钥

       ```bash
       sudo apt-key fingerprint 0EBFCD88
       ```

       ```bash
       #输出内容
       pub   rsa4096 2017-02-22 [SCEA]
             9DC8 5822 9FC7 DD38 854A  E2D8 8D81 803C 0EBF CD88
       uid           [ unknown] Docker Release (CE deb) <docker@docker.com>
       sub   rsa4096 2017-02-22 [S]
       ```

     * `x86_64/amd64` 系统安装命令

       ```bash
       sudo add-apt-repository \
          "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
          $(lsb_release -cs) \
          stable"
       ```

   * 安装`docker engine`

     * 更新包

       ```bash
       sudo apt-get update 
       ```

     * 安装最新版本`docker engine` 

       ```bash
       sudo apt-get install docker-ce docker-ce-cli containerd.io
       ```

     * 验证`docker engine`

       ```bash
       sudo docker run hello-world
       ```

       

## docker compose

1. ```bash
   sudo curl -L "https://github.com/docker/compose/releases/download/1.28.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   ```

2. ```bash
   sudo chmod +x /usr/local/bin/docker-compose
   ```

3. ```bash
   docker-compose --version
   #输出版本信息
   docker-compose version 1.27.4, build 1110ad01
   ```

   The end

## 参考

[1] https://docs.docker.com/engine/install/ubuntu/

[2] https://docs.docker.com/compose/install/



