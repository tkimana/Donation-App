
const formidable= require('formidable')
const _ = require('lodash')
const School= require("../models/school")

exports.create=(req, res)=>{
let form= new formidable.IncomingForm()
form.keepExtensions= true
form.parse(req, (err, fields, files)=>{
    if(err){
        return res.status(400).json({
            error: 'Image could not be uploaded'
        })

        let school = new School(fields)
    }
})
}