const express=require('express')
const router=express.Router()
const Admin = require('../models/adminSchema');
const authmiddleware=require('../middleware/authMiddleware')
const {login,addBook,deleteBook, updateBook, getBook,getAllBooks,getAllUsers,deleteUser}=require('../controllers/adminControllers')

router.post('/addBook',addBook)
router.get('/getBook/:id',getBook)
router.delete('/deleteBook/:id', deleteBook);
router.put('/updateBook/:id', updateBook);
router.post('/login',login)
router.get('/getAllBooks',getAllBooks)
router.get('/getAllUsers',getAllUsers)
router.delete('/deleteUser/:id',deleteUser)


module.exports=router