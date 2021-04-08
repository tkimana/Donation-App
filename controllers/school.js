
const formidable= require('formidable')
const _ = require('lodash')
const fs= require('fs')
const School= require('../models/school')
const { errorHandler } = require('../helpers/dbErrorHandler')
// This function is set to create a new school object.
exports.create=(req, res)=>{
let form= new formidable.IncomingForm()
form.keepExtensions= true
form.parse(req, (err, fields, files)=>{
    if(err){
        return res.status(400).json({
            error: 'Image could not be uploaded'
        })
    }
        let school = new School(fields)
        if(files.photo){
            school.photo.data= fs.readFileSync(files.photo.path)
            school.photo.contentType= files.photo.type
        }
        school.save((err, result)=>{
            if(err){
                return res.status(400).json({
                    error: errorHandler(err)
                })
            }
            res.json(result);
        })
    })
}
