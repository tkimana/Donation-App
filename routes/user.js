const express= require("express")
const router= express.Router()
const {userById}= require('../controllers/user')
const {requireSignin, isAuth, isAdmin}= require('../controllers/auth')

// This is the route we need to see when the user is signin(/secret/:userId)
router.get('/secret/:userId', requireSignin, isAuth , isAdmin, (req, res)=>{
    // Here whover the user Id was found they would be returned as form of JSON
    res.json({
        user: req.profile
    });
});
// This parameters router, requires user to have a userId to be able to signin sucessfully.
router.param("userId", userById);




module.exports= router;