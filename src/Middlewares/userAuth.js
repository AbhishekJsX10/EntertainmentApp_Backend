

import User  from "../Models/userModal.js";
import Jwt from 'jsonwebtoken'
// import { config } from 'dotenv';


export const isAuthenticated = async (req,res,next)=>{
    // const {token} = req.cookies

    // console.log(token);

    // if(!token) return res.status(404).json({
    //     success:false,
    //     message:"Please Login..!"
    // })

    // const decode = jwt.verify(token,"#$$$#))AC((#$$_$#")
    //     req.user = await User.findById(decode._id)
    //     next();  
    const { token } = req.cookies; // cookies  = in built things 

    if (!token) return res.status(404).json({
        success: false,
        message: 'Token Not Found, Please Login'
    })

    const secretToken = process.env.TOKEN;

    const decode = Jwt.verify(token, secretToken);

    // we are assigning req.user, a find by findinng from mongodb 
    req.user = await User.findById(decode._id);

    next();
}