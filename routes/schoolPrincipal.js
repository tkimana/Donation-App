const express= require("express")
const router= express.Router()
const {create} = require("../controllers/schoolPrincipal")
const {requireSignin, isAuth, isAdmin}= require('../controllers/auth')
const {userById}= require('../controllers/user')

router.post("/schoolPrincipal/create/:userId", requireSignin, isAdmin, isAuth, create);


router.param("userId", userById);
module.exports= router;