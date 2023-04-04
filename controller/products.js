const productModel = require('../models/products');

const getAllProduct = async (req, res) => {
    try {
        const [data] = await productModel.getAllProduct();
        res.json({
            message: 'GET all product success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewProduct = async (req, res) => {
    const {body} = req;
    try {
        await productModel.createNewProduct (body);
        res.json({
            message : "CREATE new product success",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateProduct = async (req, res) => {
    const {idProduct} = req.params;
    const {body} = req;
    try {
        await productModel.updateProduct (body, idProduct);
        res.json({
            message : "UPDATE product success",
            data: {
                Product_ID: idProduct,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const deleteProduct = async (req, res) => {
    const {idProduct} = req.params;
    try {
        await productModel.deleteProduct(idProduct);
        res.json({
            message : "DELETE product success",
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
    getAllProduct,
    createNewProduct,
    updateProduct,
    deleteProduct,
}