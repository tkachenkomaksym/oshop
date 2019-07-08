const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

const getProducts = require('./controllers/products');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'client')));

app.get('/products', getProducts);

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});

