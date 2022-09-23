const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/Ecommerce';
const addRouter = require('./route/router');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.express||8700;
var conn = express();

mongoose.connect(url).then((res)=>{
    try {
        console.log("connected to database");
    } catch (error) {
        console.log(error);
    }
});

// conn.use(bodyParser.urlencoded({extended:false}));
conn.use(cors());
conn.use(bodyParser.json());
conn.use('/api', addRouter);

conn.listen(port,()=>{
    try{
      console.log("server is listening on port", port);
    }catch(error){
        console.log(error)
    }
});