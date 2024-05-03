

import User  from "../Models/userModal.js";
import jwt from 'jsonwebtoken'

export const isAuthenticated = async (req,res,next)=>{
    const {token} = req.cookies

    // console.log(token);

    if(!token) return res.status(404).json({
        success:false,
        message:"Please Login..!"
    })

    const decode = jwt.verify(token,"#$$$#))AC((#$$_$#")
        req.user = await User.findById(decode._id)
        next();  
}