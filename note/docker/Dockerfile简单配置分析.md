# Dockerfile简单配置分析

约定命令都是采用大写形式

1. FROM

   * `FROM <baseImage>`
     * <baseImage> 为要使用的镜像名
     * 会先从本地查找镜像，若没有找到，将会从公共仓库中拉取。
     * 初始化一个新的构建阶段，并为后续指令设置基本镜像。 
     * 每个阶段需要从FROM开始，直到遇见下一个FROM或者命令结束

2. COPY

   * `COPY <src> <dest> `  	Copy new files and directories to the image's filesystem.
     * `<src> ` 等待被复制的文件或者目录
     * `<dest>` 要接收复制内容的镜像系统的目录

3. WORKDIR 

   * `WORKDIR </the/workdir/path>` 

     * The absolute or relative path to use as the working directory. Will be created if it does not exist.

       使用绝对路径或者相对路径作为工作目录，如果不存在将会被创造。

       Set the working directory for any ADD, COPY, CMD, ENTRYPOINT, or RUN instructions that follow.

       设置的工作目录可以是任何通过`ADD` , `COPY` , `CMD` , `ENTRYPOINT` 或者 `RUN` 生成的目录

4. RUN

   * `RUN <command> <parameter>`
     * `<command>` 要执行的命令，例如`npm`
     * `<parameter>` 需要的参数， 例如`install` ,两个连起来就是 `npm install`

5. EXPOSE

   * `EXPOSE <port>`
     * `<port>` 这个容器在 runtime 时， 默认将要被监听的端口， 可以设置多个，用空格分隔

6. CMD

   * `CMD [ "executable", "parameter", ... ]`

     * Set the default executable and parameters for this executing container.

       设置这个容器默认执行的命令和参数

     * 一个`FROM` 只能包含一个 `CMD` ，如果例举多个，只会执行最后一个

     * **The main purpose of a `CMD` is to provide defaults for an executing container.** 

       CMD的主要目的是为执行容器提供默认值

7. ENV 和 ARG

   * `ENV` 将会在容器整个运行阶段都存在
   * `ARG` 只会在构建是存在

```dockerfile
FROM node:latest		#pull 镜像
ARG number				#声明一个参数
COPY . /charts/			#复制新的内容到容器指定目录
WORKDIR /charts			#容器运行时的工作目录
RUN npm install			#构建时要执行的命令
EXPOSE 3000				#容器向外暴露的端口
CMD ["npm", "start"]	#CMD的主要目的是为执行容器提供默认值
```

## 参考

[1] [Dockerfile reference](https://docs.docker.com/engine/reference/builder/#from)

[2] [如何高效查看 Docker 日志](https://www.cnblogs.com/yangxiayi1987/p/11818184.html)

[3] [docker-compose.yml 配置文件编写详解](https://blog.csdn.net/qq_36148847/article/details/79427878)

[4] [Dockerfile详解超全](https://blog.csdn.net/atlansi/article/details/87892016)



