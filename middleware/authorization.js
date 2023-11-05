const jwt=require('jsonwebtoken');

module.exports=(req,res,next)=>{
    try{
        const token=req.headers.authorization.split(" ")[1];
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        //req.body.userId=decoded.userId;
        next();
        //after next , the api of cart will be executed
    }catch(err)
    {
        res.send({
            message:err.message,
            success:false,  //fase-->false
        })
    }
}


