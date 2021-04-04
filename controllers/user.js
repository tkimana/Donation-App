const User= require("../models/user")

// This finds the user by id when they login 
exports.userById=(req, res, next, id)=>{
    User.findById(id).exec((err, user)=>{
        if(err || !user){
            return res.status(400).json({
                error: 'User not found'
            })
        }
        // Here we're asigning the user information to req.profile.
        req.profile=user;
        next();
    })
}