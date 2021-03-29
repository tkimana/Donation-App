const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


const app= express()
app.get('/', (req, res)=>{
    res.send('hello from node')
})


// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
    
})
.then(()=> console.log("DB conected"));

const port = process.env.PORT || 8000;

// route
app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`)
})