const mongoose= require('mongoose')

// This is a blueprint of how the user should be. And how the schema should look like.
const principalSchema= new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
 
 
},{timestamps: true})



module.exports= mongoose.model('Principal', principalSchema)