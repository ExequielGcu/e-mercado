const express = require('express');
const app = express();
const port = 3000;
var AUTO_INFO_CUATRO = require('./AUTO_INFO_CUATRO.json');

app.get("/", (req, res) => {
    res.send("Servidor funcionando!");
})

app.get("/jose", (req, res) => {
    res.send("AUTO_INFO_CUATRO");
})

app.listen(port, () => {
    console.log("Escucahndo a http://localhost:" + port);
})