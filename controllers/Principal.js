const Principal= require("../models/principal")
const {errorHandler} = require('../helpers/dbErrorHandler')

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

exports.read=(req, res) => {
    return res.json(res.principal);
};

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