let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
// let Client = require ("./models/clientModel")
let clientApi = require("./Api/clientApi")
let app = express()

mongoose.connect(process.env.CONNECTION_STRING||'mongodb://localhost/crmDB');

// mongoose.connect('mongodb://localhost/crmDB', function () {
//     console.log("DB connection established!!!");
// })

// let data = require('./src/data.json')
// for (let d of data) {
//     const client = new Client (d)        
//     client.save()
// }

app.use(express.static('build'));
app.use(express.static('node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
    next()
  })
  
app.use('/', clientApi)

app.listen(process.env.PORT || '5555');

// app.listen(5555, () => {
//     console.log('server started on port 5555')
// });
