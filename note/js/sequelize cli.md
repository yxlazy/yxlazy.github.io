# Sequelize CLI

## 初始化

* 初始化： `npx sequelize-cli init`

* 设计表： `npx sequelize-cli migration:generate --name migration-skeleton` 

```js
//migrations 文件夹
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
      name: Sequelize.DataTypes.STRING,
      isBetaMember: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
};
```

* 创建数据库：`npx sequelize-cli db:create` 

## 表操作

* 创建表： `npx sequelize-cli db:migrate` 

* 删除表： `npx sequelize-cli db:migrate:undo`
* 一次性删除所有表：`npx sequelize-cli db:migrate:undo:all`
* 删除数据库： `npx sequelize-cli db:drop`

## 数据操作

* 添加数据：`npx sequelize-cli seed:generate --name demo-user`

  ```js
  module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
    }
  };
  ```

  

* 创建数据：`npx sequelize-cli db:seed:all` 

* 删除数据：`npx sequelize-cli db:seed:undo` 

* 删除特定操作：`npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data`
* 删除所有数据：`npx sequelize-cli db:seed:undo:all`

