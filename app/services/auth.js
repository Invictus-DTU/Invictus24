const jwt=require("jsonwebtoken");
import dotenv from "dotenv"
dotenv.config();
const secret= process.env.SECRET;


function setUser(user){
    if(!user) return null;
    return jwt.sign({
        _id: user._id,
        email: user.email
    },secret);
}

function getUser(token){
    if(!token) return null;
    let res;
    try{
       res= jwt.verify(token,secret);
    } catch(err){
        res=null;
    }
    return res;
}

export {setUser,getUser}