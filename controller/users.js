const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewUsers = async (req, res) => {
    const {body} = req;
    try {
        await UsersModel.createNewUsers(body);
        res.json({
            message : "CREATE new users success",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteUsers = async (req, res) => {
    const {idUser} = req.params;
    try {
        await UsersModel.deleteUsers(idUser);
        res.json({
            message : "DELETE users success",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}
module.exports = {
    getAllUsers,
    createNewUsers,
    deleteUsers,
}