const jwt =require('jsonwebtoken')
const authMiddleware=async(req,res,next)=>{
    try {
        const token=req.headers.token
        const verifyToken=jwt.verify(token,process.env.JWT)
        if(!verifyToken){
            res.status(400).json({ msg: "you not autorized"});

        }
        else{
            req.body.userid=verifyToken.id
            next()
        }
    } catch (error) {
    res.status(500).json({ msg: "something went wrong", err: error });

    }

}
module.exports=authMiddleware;