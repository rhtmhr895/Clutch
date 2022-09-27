const express = require('express');
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/Ecommerce';
const addRouter = require('./route/router');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const fs = require('fs')
const customCss = fs.readFileSync((process.cwd()+"/swagger.css"), 'utf8');;
const port = process.env.express||8700;
var conn = express();

mongoose.connect(uri).then((res)=>{
    try {
        console.log("connected to database");
    } catch (error) {
        console.log(error);
    }
});

const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Api testing in Swagger",
            version:"1.0.0"
        },
        servers:[
            {
               url: 'http://localhost:8700/api'
            }
        ]
    },
    apis:['./route/router.js']
}

const swaggerSpec = swaggerJSDoc(options)

conn.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {customCss}));

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