const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser= require('body-parser')
const cookieParser= require('cookie-parser')
const expressValidator= require('express-validator')



require('dotenv').config()

// import routes
const authRoutes= require('./routes/auth')
const userRoutes= require('./routes/user')
const schoolPrincipalRoutes= require('./routes/schoolPrincipal')
const schoolRoutes= require('./routes/school')

//app
const app = express()

// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    
})
.then(()=> console.log("DB Conected"));
// middleware

app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator())



// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", schoolPrincipalRoutes)
app.use("/api", schoolRoutes)

const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log(`the server is running on port ${port}`)
})
