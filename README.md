# Merchant-Service
Merchant service app is a service that handles the catalog of products owned by merchants. The user of this service is merchant. In this app a merchant could register itself/create an account and remove its data/delete its account in the merchant service. A merchant could add, delete, and update products in the merchant service. Also can get the list of products in the merchant service.
RESTful API for Merchant Service are made by:

[![N|Solid](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://nodesource.com/products/nsolid) [![N|Solid](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodesource.com/products/nsolid) [![N|Solid](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://nodesource.com/products/nsolid) [![N|Solid](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)](https://nodesource.com/products/nsolid) [![N|Solid](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://nodesource.com/products/nsolid) [![N|Solid](https://img.shields.io/badge/POSTMAN-FF5722?style=for-the-badge&logo=Postman&logoColor=white)](https://nodesource.com/products/nsolid)
## Entity Relationship Diagram
![image.png](/images/ERD.png)
## Architecture Diagram Merchant Service
![image.png](/images/Architectur_Diagram.png)
## Technologies
Project is created with:

- node : 14.16.1
- express : 4.18.2
- mysql2 : 2.3.3

## RESTful API End-Point

RESTful API Endpoints are shown in the table below :

| Method | End Point | Description |
| ------ | ------ | ------ |
|POST|/users|Register merchant as user|
|GET|/users|list of merchants
|DELETE|/users/{merchantId}|	Delete a merchant
|POST|/products|Add product
|GET|/products|Get products from a merchant
|PUT|/products/{id}|Update a specific product from a merchant
|DELETE|/product/{id}|Delete a specific product from a merchant