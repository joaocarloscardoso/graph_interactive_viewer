var express = require('express');
const http = require('http');
const fs = require('fs');
var path = require('path');

var app = express();
app.set('view engine','ejs');
//specify folder for views
app.set('views',path.join(__dirname,'views'));

app.get('/', (req,res)=>{
    res.render('index', {
    });
});

http.createServer(app).listen(3000);