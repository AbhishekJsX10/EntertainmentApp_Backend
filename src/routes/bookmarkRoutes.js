
import express from "express"
import {isAuthenticated} from "../Middlewares/userAuth.js"
import { addbookMark, allBookmarked, removeBookmark } from "../controllers/bookmarksController.js";

const router = express()


// addding bookmark here
router.post('/add', isAuthenticated, addbookMark);


//  to recieve all bookmarked items
router.get('/all', isAuthenticated,  allBookmarked);


// remove bookmarks
router.delete('/remove/:id', isAuthenticated, removeBookmark);





export default router