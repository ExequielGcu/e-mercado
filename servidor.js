const express = require('express');
const app = express();
const port = 3000;

var PRODUCTS_URL = require('./json/AUTO_INFO_CUATRO.json');
var PUBLISH_PRODUCT_URL = require('./json/PUBLISH_PRODUCT_URL.json');
var PRODUCT_INFO_URL = require('./json/PRODUCT_INFO_URL.json');
var PRODUCT_INFO_COMMENTS_URL= require('./json/PRODUCT_INFO_COMMENTS_URL.json');
var CATEGORY_INFO_URL = require('./json/CATEGORY_INFO_URL.json');
var CATEGORIES_URL = require('./json/CATEGORIES_URL.json');
var CART_BUY_URL = require('./json/CART_BUY_URL.json');
var CART_INFO_URL = require('./json/CART_INFO_URL.json');

app.get("/", (req, res) => {
    res.send("Servidor funcionando!");
})

app.get("/PRODUCTS_URL", (req, res) => {
    res.send(PRODUCTS_URL);
})

app.get("/PUBLISH_PRODUCT_URL", (req, res) => {
    res.send(PUBLISH_PRODUCT_URL);
})

app.get("/PRODUCT_INFO_URL", (req, res) => {
    res.send(PRODUCT_INFO_URL);
})

app.get("/PRODUCT_INFO_COMMENTS_URL", (req, res) => {
    res.send(PRODUCT_INFO_COMMENTS_URL);
})

app.get("/CATEGORY_INFO_URL", (req, res) => {
    res.send(CATEGORY_INFO_URL);
})

app.get("/CATEGORIES_URL", (req, res) => {
    res.send(CATEGORIES_URL);
})

app.get("/CART_BUY_URL", (req, res) => {
    res.send(CART_BUY_URL);
})

app.get("/CART_INFO_URL", (req, res) => {
    res.send(CART_INFO_URL);
})

app.listen(port, () => {
    console.log("Escucahndo a http://localhost:" + port);
})