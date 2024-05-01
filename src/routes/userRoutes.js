
import express from "express"

import { registerUser,loginUser,detailsUser,logoutUser } from "../controllers/userController.js";


const router = express.Router()

// route to create a new user
router.post("/register", registerUser);

// route to login a user
router.post("/login", loginUser);

// route to get the details of the user
router.get("/details", detailsUser);

//  route to logout a user
router.get("/logout",logoutUser)





export default router;