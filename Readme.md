# Express Backend for Ionic Angular Project

This Express backend integrates with MySQL, offering a powerful database solution, and is neatly containerized using Docker, 
ensuring consistent environments across development and production. This project is designed to complement the Ionic Angular project,
which can be found here: [AngularIonic-store](https://github.com/dornescum/angularIonic-store).

Leveraging TypeScript, the project offers strong typing and modern JavaScript features, leading to more maintainable and error-resistant code. 


## Key Features

- **Express (v4.18.2)**: A minimal and flexible Node.js web application framework, providing a robust set of features for building web and mobile applications.
- **MySQL Integration (v3.7.0)**: Utilizes MySQL, one of the most popular open-source relational database management systems, for efficient data storage and retrieval.
- **Docker Integration**: Ensures easy deployment and environment consistency via containerization.
- **Sequelize (v6.35.2)**: Employs Sequelize, a promise-based Node.js ORM, for MySQL. It supports robust transaction handling, associations, eager and lazy loading, read replication, and more.
- **Sequelize CLI (v6.6.2)**: Streamlines database migrations, making database schema updates a breeze.
- **TypeScript (v5.2.2)**: Enhances code quality and developer productivity with static typing.
- **Nodemon (v3.0.1)** and **ts-node (v10.9.1)**: Simplifies development by automatically restarting the node application when file changes in the directory are detected.


## Development Tools

- **TypeDoc (v0.25.1)**: Generates documentation from TypeScript source code.
- **ESLint (v8.56.0)**: Enforces coding standards and identifies problematic patterns in TypeScript code.


## Docker Commands

**Build Docker Compose:**
docker-compose build
docker-compose up
docker-compose up --build
docker-compose build --no-cache

**docker-compose build**
> docker-compose up

> docker-compose up --build
> docker-compose build --no-cache

**SQL**
> SELECT User, Host FROM mysql.user; # toti useri

>SELECT User, Host FROM mysql.db WHERE Db = 'ionic_node';
>CREATE USER 'user_name'@'localhost' IDENTIFIED BY 'your_password';
>GRANT ALL PRIVILEGES ON ionic_node.* TO 'user_name'@'localhost';
>FLUSH PRIVILEGES;

> create user
 
> CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
> GRANT ALL PRIVILEGES ON `ionic_node`.* TO 'miki'@'localhost';
> FLUSH PRIVILEGES;

> DROP USER:
> DROP USER 'user'@'%';
> DROP USER 'user'@'localhost';
> FLUSH PRIVILEGES;

# Testing MySQL Docker

### sequelize

**sequelize init**
**sequelize migration:generate --name name_of_migration**
**sequelize db:migrate**


**updating table users**:

`sequelize migration:generate --name add-age-to-users

`
code:

`'use strict';

module.exports = {

    up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Users', 

        [{

        name: 'John Doe',

        age: 30,

        createdAt: new Date(),

        updatedAt: new Date()

        }, {

        name: 'Jane Doe',

        age: 25,

        createdAt: new Date(),

        updatedAt: new Date()

        }], {});

    },


    down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Users', null, {});

    }

};`



**create users with seeder:**

_sequelize seed:generate --name demo-users_


**sequelize db:seed:all**

**sequelize db:seed --seed name-of-seed-file**



_data dump mysql:_

**mysqldump -u [username] -p[password] [database_name] > [filename].sql**

**mysqldump -u root -pPassword123 ionic_node > ionic_node_dump.sql**


> **docker exec [container_name] /usr/bin/mysqldump -u [username] -p[password] [database_name] > [filename].sql**

> **docker exec ionicnode-db-1 /usr/bin/mysqldump -u root -pPassword123 ionic_node > ionic_node_dump.sql**

> **_No Space Between -p and the Password: There should be no space between -p and your password in the mysqldump command._**# ionicNodeExpress
