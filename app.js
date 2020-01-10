const express = require('express');
const app = express();

const productRoutes = require('./api/route/products');
const ordersRoutes = require('./api/route/orders');

app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

module.exports = app;