const formidable= require('formidable')
const _ = require('lodash')
const fs= require('fs')
const School= require('../models/school')
const { errorHandler } = require('../helpers/dbErrorHandler')

// This function finds the school by the Id from the database
exports.schoolById=(req, res, next, id)=>{
// This access the school model and execute 
 School.findById(id).exec((err, school)=>{
     if(err || !school){
        return res.status(400).json({
            error: 'School Dont exist'
        })
     }
     req.school=school
     next();
 });
};
// This function is for displaying the school information
exports.read=(req, res)=>{
    req.school.photo= undefined
    return res.json(req.school)
}
// This function is set to create a new school and saving it in the database
exports.create=(req, res)=>{
let form= new formidable.IncomingForm()
form.keepExtensions= true
form.parse(req, (err, fields, files)=>{
    if(err){
        return res.status(400).json({
            error: 'Image could not be uploaded'
        })
    }
    // check for all fields
        let school = new School(fields);
     // This statement makes it that all fields required
        const{name, location, description, principal, photo}=fields
        if(!name || !location || !description || !principal || !photo ){
            return res.status(400).json({
                error: "All fields are required"
            })
        }
      // This statement is for the photo size 
        if(files.photo){
            // console.log("FILES PHOTO: ", files.photo)
            if(files.photo.size > 1000000){
                return res.status(400).json({
                    error: 'Image should be less than 1mb in size'
                })
            }

            school.photo.data= fs.readFileSync(files.photo.path);
            school.photo.contentType= files.photo.type;
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
// This function removes the school data from the database
exports.remove=(req, res)=>{
 let school= req.school
 school.remove((err, deletedSchool)=>{
     if(err){
         return res.status(400).json({
             error: errorHandler(err)
         })
     }
     res.json({
         deletedSchool,
         message: "School deleted successfully"
     })
 })
}


// This function updates the school information from the database.

exports.update=(req, res)=>{
    let form= new formidable.IncomingForm()
    form.keepExtensions= true
    form.parse(req, (err, fields, files)=>{
        if(err){
            return res.status(400).json({
                error: 'Image could not be uploaded'
            })
        }
        // check for all fields
           
         // This statement makes it that all fields required
            const{name, location, description, principal, photo}=fields
            if(!name || !location || !description || !principal || !photo ){
                return res.status(400).json({
                    error: "All fields are required"
                })
            }
            let school= req.school;
            school= _.extend(school, fields)
          // This statement is for the photo size 
            if(files.photo){
                // console.log("FILES PHOTO: ", files.photo)
                if(files.photo.size > 1000000){
                    return res.status(400).json({
                        error: 'Image should be less than 1mb in size'
                    })
                }
    
                school.photo.data= fs.readFileSync(files.photo.path);
                school.photo.contentType= files.photo.type;
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