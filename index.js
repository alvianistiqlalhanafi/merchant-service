const express = require('express');
const app = express();
const usersList = require('./routes/users.js');
const productList = require('./routes/product.js');
app.use(express.json());

app.use('/users', usersList);
app.use('/products', productList);


// server port
app.listen(3000, () => {
    console.log('Server up and running in port 3000...')
})