CREATE USER 'test'@'%' IDENTIFIED BY 'Welcome1';

GRANT USAGE ON *.* TO 'test'@'%';

GRANT ALL PRIVILEGES ON *.* TO 'test'@'%';

CREATE DATABASE sample DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

USE sample;

CREATE TABLE IF NOT EXISTS `players` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `position` varchar(255) NOT NULL,
  `number` int(11) NOT NULL,
  `user_name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  AUTO_INCREMENT=1;

