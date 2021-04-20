const express= require("express")
const router= express.Router()
const {create, schoolById, read, remove} = require("../controllers/school")
const {requireSignin, isAuth, isAdmin}= require('../controllers/auth')
const {userById}= require('../controllers/user')

// This router gets a single school information
router.get("/school/:schoolId", read);
router.post("/school/create/:userId", requireSignin, isAdmin, isAuth, create);
router.delete("/school/:schoolId/userId", requireSignin, isAdmin, isAuth, remove)


router.param("userId", userById);
router.param("schoolId", schoolById);
module.exports= router;