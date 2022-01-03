const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();
const PUERTO = 3000;

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', require('./routes/comments.routes'));

app.listen(PUERTO, ()=>{
    console.info(`Servidor HTTP Corriendo en el puerto ${PUERTO}`);
});