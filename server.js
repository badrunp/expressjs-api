const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const dbconfig = require('./config/db.config');
const appcofig = require('./config/app.config');

const app = express(); // application
const port = appcofig.port; // port server
const dburl = dbconfig.url; // database url (mongoodb) 

// use module middleware
app.use(cors()) // handle cors origin
app.use(morgan('tiny')); // logger 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))

// route 
app.use('/api', require('./BlogPost.route'));

// connecting in database (mongodb)
mongoose.connect(dburl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
mongoose.connection.on('error', console.error.bind(console, 'Database error')); // display in concole if database error
mongoose.connection.once('open', () => console.log(`Database connected`)) // display in console if database connect

// listening server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`); // display in console if server is running
})