const mongoose= require('mongoose')
const {ObjectId}= mongoose.Schema

// This is a blueprint of how the user should be. And how schema should look like
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

    principal:{
        type: ObjectId,
        ref: "Principal",
        required: true
    },

    photo:{
        data: Buffer,
        contentType: String
    }
 
},{timestamps: true})



module.exports= mongoose.model('School', schoolSchema)