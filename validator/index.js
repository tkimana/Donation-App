// This function checks if there is error in the name, email, password requests.
exports.userSignupValidator=(req, res, next)=>{
    req.check("name", "Name is required").notEmpty();
    req.check("email", "Email must be 3 to 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage("Email must contain @")
    .isLength({
        min: 4,
        max:32
    });
    // Checking if there are errors in password the request sent by the user.
    req.check('password', "Password is required").notEmpty()
    req.check("password")
    .isLength({min: 6})
    .withMessage("Password must contain at least 6 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number");

// This function grabs the errors if there's any and it displays it as JSON
    const errors= req.validationErrors();
    if(errors){
        const firstError= errors.map(error=> error.msg)[0];
        return res.status(400).json({error: firstError});
    };
    next()
}