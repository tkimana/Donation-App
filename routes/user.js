const express= require("express")

const router= express.Router()
const {signup, signin}= require('../controllers/user')
const {userSignupValidator} = require("../validator/index")


// Linking the signup method to the page...
router.post("/signup", userSignupValidator, signup);
router.post("/signin",  signin);



module.exports= router;