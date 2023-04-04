const dbPool = require('../config/database');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM Merchant';
    return dbPool.execute(SQLQuery);
}

const createNewUsers = (body) => {
    const SQLQuery = `INSERT INTO Merchant (Merchant_ID, Password, Name, Address, Join_Date, Phone_Number)
                      VALUES (
                        '${body.Merchant_ID}', 
                        '${body.Password}',
                        '${body.Name}',
                        '${body.Address}',
                        '${body.Join_Date}',
                        '${body.Phone_Number}'
                    )`;
    return dbPool.execute(SQLQuery);
}

const deleteUsers = (idUser) => {
    const SQLQuery = `DELETE FROM Merchant WHERE Merchant_ID=${idUser}`;
    return dbPool.execute(SQLQuery);
} 

module.exports = {
    getAllUsers,
    createNewUsers,
    deleteUsers,
}