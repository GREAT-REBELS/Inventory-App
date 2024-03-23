const express = require('express') 
const { registerUser, loginUser, logout, getUser, loggedin, updateUser } = require('../controllers/UserController')
const protect = require('../middleWare/authMiddleWare')
const router = express.Router()  

router.post("/register",registerUser) 
router.post('/login',loginUser) 
router.get('/logout',logout) 
router.get('/getuser',protect,getUser) 
router.get('/loggedin',loggedin) 
router.patch('/updateuser',protect,updateUser)

module.exports = router 