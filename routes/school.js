const express= require("express")
const router= express.Router()
const {create, schoolById, read} = require("../controllers/school")
const {requireSignin, isAuth, isAdmin}= require('../controllers/auth')
const {userById}= require('../controllers/user')


router.get("/school/create/:schoolId", read);
router.post("/school/create/:userId", requireSignin, isAdmin, isAuth, create);


router.param("userId", userById);
router.param("schoolId", schoolById);
module.exports= router;