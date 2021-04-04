const SchoolPrincipal= require("../models/schoolPrincipal")
const {errorHandler} = require('../helpers/dbErrorHandler')

// This creates new School
exports.create=(req, res)=>{
    const schoolPrincipal= new SchoolPrincipal(req.body)
    schoolPrincipal.save((err, data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({data})
    })
}