import express from 'express';
import errorHandler from './modules/core/errorHandler.js';
import dotenv from 'dotenv';
import logger from './modules/core/logger.js';
import parseHandler from './modules/core/parseResponse.js';
import applyCors from './modules/core/cors.js';
import dbConnect from './modules/core/db.js';
import routes from './modules/core/routes.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

dbConnect(app); // database connection
logger(app); // should be at the top // log usefull information
parseHandler(app); // body parser
applyCors(app);
routes(app); // call all routes

app.get('/', (req, res) => {
    res.send('Hello from invoice server API');
});

  

errorHandler(app); // handle errors

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    // console.log(lodash.get({name: 'Steve', age: 34 },'name', 'xxx')); 
});

// import express from 'express';
// import errorHandler from './modules/core/errorHandler';
// require('dotenv').config();
// import logger from './modules/core/logger';
// import parseHandler from './modules/core/parseResponse';
// import applyCors from './modules/core/cors';
// import dbConnect from './modules/core/db';
// import routes from './modules/core/routes';

// const app = express();
// const PORT = process.env.PORT || 8000;

// dbConnect(app); // database connection
// logger(app); // should be at the top // log usefull information
// parseHandler(app); // body parser
// applyCors(app);
// routes(app); // call all routes

// app.get('/', (req, res) => {
//     res.send('Hello from invoice server API');
// });
  

// errorHandler(app); // handle errors

// app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
// });
