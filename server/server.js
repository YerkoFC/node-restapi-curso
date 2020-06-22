const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./config/config');


// Middlewares
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

app.get('/user/:id', (req, res) => {
    let body = req.body;
    if (body.nomber === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    }
    res.json({
        body
    });
})

app.post('/user/:id', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    } 
    res.json({
        persona: body
    })
});

app.put('/user', (req, res) => {
    res.json('put user');
})

app.delete('/user', (req, res) => {
    res.json('delete user');
})


app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT}`);
})