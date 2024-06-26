
import  User from "../Models/userModal.js";
import bcrypt from "bcrypt"
// import Jwt from "jsonwebtoken"
import generateCookie from "../utils/userCookie.js"

export async function registerUser(req, res) {
    // const { username, email, password } = req.body;

    // // Check if all the details are entered in the form and none is empty
    // if (!username || !email || !password) {
    //     return res.status(400).json({
    //         success: false,
    //         message: "Please fill all the fields"
    //     });
    // }

    // // Checking if user already exists
    // try {
    //     const isUser = await User.findOne({ email });
    //     if (isUser) {
    //         return res.status(409).json({
    //             success: false,
    //             message: "User already exists"
    //         });
    //     }

    //     // Hashing the password for security
    //     const hashedPassword = await bcrypt.hash(password, 10);
    //     const newUser = await User.create({
    //         username,
    //         email,
    //         password: hashedPassword
    //     });

    //     // Initializing the token in cookie --> Jwt secret
    //     const token = Jwt.sign({ _id: newUser._id }, "#$$$#))AC((#$$_$#", { expiresIn: "1h" });

    //     return res.cookie("token", token, {
    //         httpOnly: true,
    //         maxAge: 3600000
    //     })
    //     .status(201)
    //     .json({
    //         success: true,
    //         message: "User created successfully"
    //     });
    // } catch (error) {
    //     console.error(error.message);
    //     return res.status(500).json({ success: false, message: "Internal Server Error" });
    // }
    const { name, email, password } = req.body;  // destructuring 
    let user = await User.findOne({ email });  // from mongoDB

    if (user) return res.status(404).json({
        success: false,
        message: "user already exist",
    })

    const hashPassword = await bcrypt.hash(password, 10);
    user = await User.create({
        name,
        email,
        password: hashPassword,  // updating password  with hashpassword 
    });

    generateCookie(user, res, 201, "User Register Successfully");
}

export async function loginUser(req, res) {
    // const { email, password } = req.body;

    // try {
    //     // Check if user exists
    //     const user = await User.findOne({ email });
    //     if (!user) {
    //         return res.status(400).json({
    //             success: false,
    //             message: "Invalid email or password"
    //         });
    //     }

    //     // Check if password is correct
    //     const isPasswordCorrect = await bcrypt.compare(password, user.password);
    //     if (!isPasswordCorrect) {
    //         return res.status(400).json({
    //             success: false,
    //             message: "Invalid email or password"
    //         });
    //     }

    //     // Token creation
    //     // const token = await Jwt.sign({ _id: user._id }, "#$$$#))AC((#$$_$#");
    //     // console.log(token)

    //     // return res.cookie("token", token, {
    //     //     httpOnly: true,
    //     //     maxAge: 3600000
    //     // }).status(200).json({
    //     //     success: true,
    //     //     message: "User logged in successfully"
    //     // });

        
    // const token = await Jwt.sign({ _id: user._id }, "#$$$#))AC((#$$_$#");

    // res.status(201).cookie("token", token, {
    //     httpOnly: true,
    //     maxAge: 24 * 60 * 60 * 1000
    // }).json({
    //     success: true,
    //     message: "Login sucessfull",
    //     data: user
    // })
    // } catch (error) {
    //     console.error(error.message);
    //     return res.status(500).json({ success: false, message: "Internal Server Error" });
    // }
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({
        success: false,
        message: "user or email do not exist",
    });

    // user.password = comming from db 
    // password      = comming from frontend website 
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({
            success: false,
            message: "Invalid Credential or Wrong password"
        })
    }

    generateCookie(user, res, 201, `Welcome ${user.name}`);
}

export async function detailsUser(req, res) {
    // // Checking if user is logged in
    // const token = req.cookies.token;

    // // If token doesn't exist
    // if (!token) {
    //     return res.status(401).json({
    //         success: false,
    //         message: "User not logged in"
    //     });
    // } else {
    //     try {
    //         // Extracting user id from token
    //         const decoded = Jwt.verify(token, "#$$$#))AC((#$$_$#");
    //         const user = await User.findById(decoded._id);

    //         return res.status(200).json({
    //             success: true,
    //             user
    //         });
    //     } catch (error) {
    //         console.error(error.message);
    //         return res.status(500).json({
    //             success: false,
    //             message: "Internal Server Error"
    //         });
    //     }
    // }
    const id = req.params.id;
    const user = await User.findById(id);

    if (!user) return res.status(404).json({
        success: false,
        message: "Invalid id, user does not exist "
    })

    res.json({
        success: true,
        message: "This  is the data of user ",
        data: user
    })
}

export async function logoutUser(req,res){
    // remove the token
    // res.clearCookie("token");
    // return res.status(200).json({
    //     success: true,
    //     message: "User logged out successfully"
    // })
    res.status(200).cookie("token", "", {
        expires: new Date(Date.now())
    }).json({
        success: true,
        message: "logout successfully"
    })
}