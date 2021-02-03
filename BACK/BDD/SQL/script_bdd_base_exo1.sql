DROP DATABASE IF EXISTS base_exo1;
CREATE DATABASE base_exo1;
USE  base_exo1;

 CREATE TABLE `CLIENT` (
`cli_num` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`cli_nom` VARCHAR(50) NOT NULL,
`cli_adresse` VARCHAR(50) NOT NULL,
`cli_tel` VARCHAR(30)
);

CREATE INDEX `index_exo1` ON `CLIENT`(`cli_nom`);


CREATE TABLE `Commande` (
`com_num` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`cli_num` INT NOT NULL ,
`com_date` DATETIME,
`com_obs` VARCHAR(50),

FOREIGN KEY (`cli_num`) REFERENCES `CLIENT` (`cli_num`)
);

CREATE TABLE `Produit` (
`pro_num` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
`pro_libelle` VARCHAR(50),
`pro_description` VARCHAR(50)
);

CREATE TABLE `est_compose` (
`com_num` INT NOT NULL,
`pro_num` INT NOT NULL,
`est_qte` INT ,
PRIMARY KEY (`com_num`,`pro_num`),
FOREIGN KEY (`com_num`) REFERENCES `Commande` (`com_num`),
FOREIGN KEY (`pro_num`) REFERENCES `Produit` (`pro_num`)
);


 