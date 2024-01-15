**docker-compose build**
docker-compose up

docker-compose up --build
docker-compose build --no-cache

SQL
SELECT User, Host FROM mysql.user; # toti useri

SELECT User, Host FROM mysql.db WHERE Db = 'ionic_node';
CREATE USER 'user_name'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON ionic_node.* TO 'user_name'@'localhost';
FLUSH PRIVILEGES;

> create user
 
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON `ionic_node`.* TO 'miki'@'localhost';
FLUSH PRIVILEGES;

DROP USER:
DROP USER 'user'@'%';
DROP USER 'user'@'localhost';
FLUSH PRIVILEGES;





testing mysql docker:
CREATE TABLE testing (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO testing (name) VALUES ('First Entry');
INSERT INTO testing (name) VALUES ('Second Entry');
INSERT INTO testing (name) VALUES ('Third Entry');


sequelize init
sequelize migration:generate --name name_of_migration
create_users_table

sequelize db:migrate

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


create users with seeder:
sequelize seed:generate --name demo-users

sequelize db:seed:all
sequelize db:seed --seed name-of-seed-file


data dump mysql:
mysqldump -u [username] -p[password] [database_name] > [filename].sql
mysqldump -u root -pPassword123 ionic_node > ionic_node_dump.sql

docker exec [container_name] /usr/bin/mysqldump -u [username] -p[password] [database_name] > [filename].sql
docker exec ionicnode-db-1 /usr/bin/mysqldump -u root -pPassword123 ionic_node > ionic_node_dump.sql
**_No Space Between -p and the Password: There should be no space between -p and your password in the mysqldump command._**# ionicNodeExpress
