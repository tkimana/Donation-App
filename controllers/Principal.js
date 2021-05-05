const Principal= require("../models/principal")
const {errorHandler} = require('../helpers/dbErrorHandler')
// This function is grabing principal information by the id.
exports.principalById=(req, res, next, id)=>{
    Principal.findById(id).exec((err, principal)=>{
        if(err || !principal){
            return res.status(400).json({
                error:'Principal does not exist'
            })
        }

      req.principal= principal
      next()
    })
}

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
};
// This function displays the principal
exports.read=(req, res) => {
    return res.json(res.principal);
};
// This function is a blue print on modifying or updating principal information.
exports.update=(req, res)=>{
    const principal= req.principal
    principal.name= req.body.name
    principal.save((err, data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)
    })
}
// This is a blue print on updating principal. 
exports.remove=(req, res)=>{
    const principal= req.principal
    principal.name= req.body.name
    principal.remove((err, data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json({
            message:"Principal deleted"
        })
    })
}

exports.list=(req, res)=>{
    Principal.find().exec((err, data)=>{
        if(err){
            return res.status(400).json({
                error: errorHandler(err)
            })
        }
        res.json(data)
    })
}