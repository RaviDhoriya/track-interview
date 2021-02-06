const jwt=require("jsonwebtoken");
const { Error, JWT_SECRET } = require("../common/helper");

const middleware={};
middleware.validateUser=(req,res,next)=>{
    if(req.headers && req.headers.authorization){
        var token=req.headers.authorization;
        token=token.replace("Bearer ","");
        try{
            jwt.verify(token,JWT_SECRET,(error,decoded)=>{
                if(error){
                    res.status(403).send(Error("Invalid token"));
                }else{
                    req.decoded=JSON.parse(decoded.data);
                    next();
                }
            });
        }
        catch(err){
            res.status(403).send(Error("Invalid token "+err));
        }
    }else{
        res.status(403).send(Error("Unauthorized access"));
    }    
};
module.exports=middleware;