const express= require("express")
const router= express.Router()
const {create, principalById, read, remove, update, list} = require("../controllers/principal")
const {requireSignin, isAuth, isAdmin}= require('../controllers/auth')
const {userById}= require('../controllers/user')



router.get('/principal/:principalId', read)
router.post("/principal/create/:userId", requireSignin, isAdmin, isAuth, create);
router.put("/principal/principalId/:userId", requireSignin, isAdmin, isAuth, update);
router.delete("/principal/principalId/:userId", requireSignin, isAdmin, isAuth, remove);
router.get('/principals', list)


router.param('principalId', principalById);
router.param("userId", userById);
module.exports= router;