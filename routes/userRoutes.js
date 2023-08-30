const express=require('express')
const router=express.Router()
const authMiddleware=require('../middleware/authMiddleware')
const User = require('../models/userSchema');
const {register,login,getuserinfo,deleteUser,updateUserFields,getBook,getAllBooks}=require('../controllers/userControllers')
router.get('/deleteAll', async (req, res) => {
    try {
        await User.deleteMany({});
        res.status(200).json({ message: "All users have been deleted." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while deleting users." });
    }
});
router.post('/register',register)
router.post('/login',login)
router.get('/get',authMiddleware,getuserinfo)
router.delete('/delete/:id',deleteUser); 
router.put('/update/:id', updateUserFields); 
router.get('/getBook/:id',getBook)
router.get('/getAllBooks',getAllBooks)


module.exports=router
