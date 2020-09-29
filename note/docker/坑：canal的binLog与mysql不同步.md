# canal的binlog.id与mysql的binlog.id不一致的问题

1. 引起问题原因：

   通常，当要修改官网上某些可能会出很大意外的情况下，通常都会先选择备份，然后出意外好回退回去，防止出现巨大损失。而我采用是粗暴方式：备份快照，然后直接回退到某个节点。由于粗暴的原因，导致了mysql的配置意外的被重置了（应该是重置了，之前配置信息没有看到），待重新配置后，就导致了两个binlog.id不一致，数据不能同步，导致新注册用户无法登陆云服务器。

2. 解决方法：
   * 首先进入docker内部 `docker exec -it <container name> bash` 
   * canal的内部日志在explame目录下，可以查看日志信息，判断出错内容
   * 其实只需要删除`path/conf/example` 下面的`meta.dat`  ,重启canal镜像 (meta.dat 应该是记录怎么连接上mysql的信息)

3. 总结


* 进入docker镜像内部: `docker exec -it <container name> bash` , `exit` 退出

* 也可以使用`docker cp <container name>:/home/admin/canal .` 复制到本地

4. 参考文献

* [docker 进入容器内部及退出](https://blog.csdn.net/tiger1334/article/details/93468736)

* [Canal数据库同步组件](https://blog.csdn.net/technology01/article/details/95360966) 以下是截取内容 --- [原文](https://www.iteye.com/blog/shift-alt-ctrl-2399603)

```
 9、Canal如何重置消费的position？

    答：比如当消费者在消费binlog时，数据异常，需要回溯到旧的position重新消费，是这个场景！

    1）我们首先确保，你需要回溯的position所对应的binlog文件仍然存在，可以通过需要回溯的时间点来确定position和binlog文件名，这一点可以通过DBA来确认。

    2）关闭消费者，否则重置位点操作无法生效。（你可以在关闭消费者之前执行unsubscribe，来删除ZK中历史位点的信息）

    3）关闭Canal集群，修改对应的destination下的配置文件中的“canal.instance.master.journal.name = <此position对应的binlog名称>”、“canal.instance.master.position = <此position>”；可以只需要修改一台。

    4）删除zk中此destination的消费者meta信息，“${destination}/1001"此path下所有的子节点，以及“1001”节点。（可以通过消费者执行unsubscribe来实现）

    5）重启2）中的此canal节点，观察日志。

    6）重启消费者。
```

