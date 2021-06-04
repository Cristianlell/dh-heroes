const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('views'))

const views = path.join(__dirname,'views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/home',(req,res)=>{
  res.sendFile(path.join(views,'index.html'))
})

app.get('/turing',(req,res)=>{
  res.sendFile(path.join(views,'turing.html'))
})

app.get('/lovelace',(req,res)=>{
  res.sendFile(path.join(views,'lovelace.html'))
})

app.get('/hopper',(req,res)=>{
  res.sendFile(path.join(views,'hopper.html'))
})

app.get('/hamilton',(req,res)=>{
  res.sendFile(path.join(views,'hamilton.html'))
})

app.get('/clarke',(req,res)=>{
  res.sendFile(path.join(views,'clarke.html'))
})

app.get('/berners-lee',(req,res)=>{
  res.sendFile(path.join(views,'berners-lee.html'))
})

app.get('/babbage',(req,res)=>{
  res.sendFile(path.join(views,'babbage.html'))
})





app.listen(3030,()=> console.log('Servidor corriendo en puerto 3030'))
