const express = require('express');
const hbs = require('hbs');
const app = express();

app.set('view engine', 'hbs');


hbs.registerPartials(__dirname + '/views/partials');


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Valeria Flores Hernandez',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/diego', (req, res)=>{
    res.render('diego', {
        autor : 'Valeria Flores Hernandez',
        year : new Date().getFullYear(),
        title : 'Diego Rodriguez '
    });
});

app.get('/frida', (req, res)=>{
    res.render('frida', {
        autor : 'Valeria Flores Hernandez',
        year : new Date().getFullYear(),
        title : 'Frida Kalo'
    });
});

app.get('/goya', (req, res)=>{
    res.render('goya', {
        autor : 'Valeria Flores Hernandez',
        year : new Date().getFullYear(),
        title : 'Fransisco de Goya',
        
    });
});

app.get('/picaso', (req, res)=>{
    res.render('picaso', {
        autor : 'Valeria Flores Hernandez',
        year : new Date().getFullYear(),
        title : 'Pablo Picasso',
        
    });
});

app.get('/vinci', (req, res)=>{
    res.render('vinci', {
        autor : 'Valeria Flores Hernandez',
        year : new Date().getFullYear(),
        title : 'Leonardo Da Vinci',
        
    });
});

//Arrancamos el servisdor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});





