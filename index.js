const express = require('express');
const path = require('path');
const hbs = require ('hbs');
const  app =express();
const port = 8585;


app.use(express.static('public'));
app.set('views',path.join(__dirname + '/public/views'));
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/agregar_evento',(req,res)=>{
    res.render('agregar_evento',{
        nombre : 'vramdom'
    })
})

app.get('/agregar_participante',(req,res)=>{
    res.render('agregar_participante',{
        nombre : 'vramdom'
    })
})

app.get('/eventos',(req,res)=>{
    res.render('calendar',{
        nombre : 'vramdom'
    })
})

app.get('/editar_evento',(req,res)=>{
    res.render('editar_evento',{
        nombre : 'vramdom'
    })
})

app.get('/editar_tipo_participante',(req,res)=>{
    res.render('editar_tipo_participante',{
        nombre : 'vramdom'
    })
})

app.get('/editar_vehiculo',(req,res)=>{
    res.render('editar_vehiculo',{
        nombre : 'vramdom'
    })
})

app.post('/agregar_evento',(req,res)=>{
    res.render('agregar_evento')
})

app.post('/editar_evento',(req,res)=>{
    res.render('editar_evento')
})

app.post('/editar_tipo_participante',(req,res)=>{
    res.render('editar_tipo_participante')
})

app.get('/editar_vehiculo',(req,res)=>{
    res.render('editar_vehiculo')
})


app.post('/registrar_Acudiente',(req,res)=>{
    res.render('registrar_Acudiente')
})
app.post('/lista_Acudiente',(req,res)=>{
    res.render('lista_Acudiente')
})
app.post('/login',(req,res)=>{
    res.render('login')
})
app.post('/index',(req,res)=>{
    res.render('index')
})
app.get('*',(req,res)=>{
    res.render('404')
})
app.listen(port, ()=>{
    console.log(`Listen to port ${port}`);
})