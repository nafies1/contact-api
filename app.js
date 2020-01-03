'use strict'

const express = require('express');
const app = express();
const api = require('./routes/api');

app.use(express.urlencoded({extended: true}))
app.use('/api', api)

app.listen(3000, ()=>{
    console.log('This app is running on port 3000');
})

