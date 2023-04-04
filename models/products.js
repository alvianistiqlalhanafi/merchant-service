const dbPool = require('../config/database');

const getAllProduct = () => {
    const SQLQuery = 'SELECT * FROM Product';
    return dbPool.execute(SQLQuery);
}

const createNewProduct = (body) => {
    const SQLQuery = `INSERT INTO Product (Product_ID, Name, Quantity, Price)
                      VALUES (
                        '${body.Product_ID}', 
                        '${body.Name}',
                        '${body.Quantity}',
                        '${body.Price}'
                    )`;
    return dbPool.execute(SQLQuery);
}

const updateProduct = (body, idProduct) => {
    const SQLQuery = `UPDATE Product 
                      SET
                        Name = '${body.Name}',
                        Quantity = '${body.Quantity}',
                        Price = '${body.Price}'
                      WHERE Product_ID = ${idProduct};`
    return dbPool.execute(SQLQuery);
}

const deleteProduct = (idProduct) => {
    const SQLQuery = `DELETE FROM Product WHERE Product_ID=${idProduct}`;
    return dbPool.execute(SQLQuery);
} 

module.exports = {
    getAllProduct,
    createNewProduct,
    updateProduct,
    deleteProduct,
}