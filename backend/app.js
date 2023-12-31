const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require("dotenv").config();
var cors = require('cors');
const cookieParser = require("cookie-parser");
//database connection

// mangoose.connect(process.env.DATABASE, {
//     useNewUrlParser : true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// }).then(()=>console.log('DB connected'))
// .catch((err)=>console.log(err));

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('DB connected');
  })
  .catch((err) => {
    console.error('DB connection error:', err);
  });


//Middleware
app.use(morgan('dev')) ;
app.use(bodyParser.json({
  limit: '5mb'})) ;
  extended : true ;

  app.use(cookieParser());
  app.use(cors());

//port
const port = process.env.PORT || 8000;


app.listen(port, () => {  

    console.log(`Server running on port ${port}`);


  });
