const express = require('express');
const route = express.Router();

route.get('/', (req,res, next)=>{
    console.log('asdasd');
})

module.exports = route;