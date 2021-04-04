const mongoose= require('mongoose')
const {ObjectId}= mongoose.Schema

// This is a blueprint of how the user should be. that's what schema means
const schoolSchema= new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    location:{
        type: String,
        required: true,
        maxlength: 200    
    },

    description:{
        type: String,
        required: true,
        maxlength: 2000 
    },

    schoolPrincipal:{
        type: String,
        ref: 'SchoolPrincipal',
        required: true
    },

    photo:{
        data: Buffer,
        contentType: String
    }
 
},{timestamps: true})



module.exports= mongoose.model('School', schoolSchema)