const express= require("express")
const router= express.Router()
const {signup, signin, signout, requireSignin}= require('../controllers/auth')
const {userSignupValidator} = require("../validator/index")


// Linking the signup method to the page...
router.post("/signup", userSignupValidator, signup);
router.post("/signin",  signin);
router.get("/signout", signout)



router.get('/Hello', requireSignin, (req, res)=>{
    res.send('Hello world')
})



module.exports= router;