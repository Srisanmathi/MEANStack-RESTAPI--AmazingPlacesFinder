//Express
const express = require('express');
const app = express();

//CORS
const cors = require('cors');
app.use(cors({origin: 'http://161.35.15.186:4200'}));

app.set("view engine","ejs");

//Body Parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Swagger Documantation
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition :{
      info :
        {
      "title": "Amazing Places API",
      "description": "API documentation",
      "contact": {
        "name": "Srisanmathi Ramachandran",
        "url": "https://github.com/Srisanmathi",
        "email": "sramac13@uncc.edu"
      },
      "servers" : ["http://localhost:3000/"]
    }
  },
      apis: ["./routes/places.js"]
  }
const swaggerSpec = swaggerJsDoc(options);
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Routes
const places = require('./routes/places');
const about = require('./routes/about');
app.use('/',places);
//app.use('/',about);

//Server 
const   PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})