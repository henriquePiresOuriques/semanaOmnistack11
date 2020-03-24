const express = require('express');
const cors = require('cors');
const routes = require ('./routes');

const app = express();

app.use(cors(/*
    *caso seja publicado usar a seguinte sintaxe:
    {
        origin: 'nome do site, ex: http://meuapp.com'
    } 
    */));
app.use(express.json());
app.use(routes);

app.listen(3333);