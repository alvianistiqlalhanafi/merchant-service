CREATE DATABASE merchant_service;

USE merchant_service;

CREATE TABLE Merchant
(
    Merchant_ID CHAR(16)    NOT NULL PRIMARY KEY,
    Password    VARCHAR(16) NOT NULL,
    Name        VARCHAR(50) NOT NULL,
    Address     VARCHAR(50) NOT NULL,
    Join_Date   DATETIME DEFAULT NOW(),
    Phone_Number Numeric(12) NOT NULL
);

CREATE TABLE Product
(
    Product_ID  INT(10) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    Name        VARCHAR(50) NOT NULL,
    Quantity    INT(10)     NOT NULL,
    Price       INT(10)     NOT NULL
);

SELECT * FROM Merchant;
SELECT * FROM Product;

# Dummy Data Merchants
INSERT INTO Merchant (Merchant_ID, Password, Name, Address, Join_Date, Phone_Number)
VALUES ("1", "q1w2e3", "Alvian", "Jogja", "2023-03-31", 8123456789),
("2", "a1s2d3", "Hanafi", "Jakarta", "2023-04-01", 81235678314);

# Dummy Data Products
INSERT INTO Product (Product_ID, Name, Quantity, Price)
values("1","Jacket", 3, 150000),
("2", "T-shirt", 10, 99000);