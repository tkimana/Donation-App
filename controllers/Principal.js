const Principal= require("../models/principal")
const {errorHandler} = require('../helpers/dbErrorHandler')

// This creates new Principal and saves it in the database
exports.create=(req, res)=>{
    const principal= new Principal(req.body)
    principal.save((err, data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({data})
    })
}