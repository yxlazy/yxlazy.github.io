# 打包到仓库（Docker Hub)

1. 登录`docker` ：`docker login --username=<your docker username> --password=<your docker password>` 

   ```bash
   $ sudo docker login --username=<your docker username> --password=<your docker password>
   
   WARNING! Using --password via the CLI is insecure. Use --password-stdin.
   WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
   Configure a credential helper to remove this warning. See
   https://docs.docker.com/engine/reference/commandline/login/#credentials-store
   
   Login Succeeded
   ```

   

2. 构建: `docker build -t <your docker username>/<your project name> .` 

   `<your docker username>/<your project name>` : 将会决定`image` 名，后面的`<your project name>` 可以随便写一个希望的名字，当然，规范最重要

   ```bash
   $ sudo docker build -t isrookie/charts . #注意最后的"."
   
   Sending build context to Docker daemon  789.5kB
   Step 1/6 : FROM node:latest
    ---> 5377c9a2fb1f
   Step 2/6 : COPY . /charts
   .....
   ```

   

3. 推送到 `docker hub` : `docker push <your docker username>/<your project name>` 

   ```bash
   $ sudo docker push isrookie/charts
   
   The push refers to repository [docker.io/isrookie/charts]
   24a17a00f04b: Pushed 
   84881e66b2b3: Pushed 
   58f2725fb7a2: Mounted from library/node 
   28ec43ff7499: Mounted from library/node 
   ....
   ```

   