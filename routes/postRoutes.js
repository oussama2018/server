const express=require('express')
const router=express.Router()
const authMiddleware=require('../middleware/authMiddleware')
const  Book= require('../models/postSchema');
const {getBook,allposts}=require('../controllers/postControllers')
router.get('/getBook/',authMiddleware,getBook)
router.get('/allBook/',authMiddleware,allposts)


module.exports=router