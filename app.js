//Creatindex.html file.
const path = require('path');
const express =require('express');
const app = express();
app.use('/static',express.static('public'));
app.get('/',function(req,res){
res.sendFile(pth.join(__dirname,'/index.html'))
})