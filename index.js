
import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()
const app = express()

import userRouter from "./src/routes/userRoutes.js"
import tvShowsRouter from "./src/routes/tvShowsRoutes.js"
import trendingRouter from "./src/routes/trendingRoutes.js"
import moviesRouter from "./src/routes/moviesRoutes.js"
import bookmarkRouter from "./src/routes/bookmarkRoutes.js"
import recommendRouter from "./src/routes/recommendRoutes.js"





mongoose.connect("mongodb+srv://githubabhishekchaturvedi0:5tmWNfUgpuH8AbRw@entertainment-app.93th5sk.mongodb.net/",{
    dbName:"Entertainment_App"
}).then(()=>console.log("MongoDB database is connected"))

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());


app.use("/user",userRouter)
app.use("/tvshow",tvShowsRouter)
app.use("/trends",trendingRouter)
app.use("/recommends",recommendRouter)
app.use("/movies",moviesRouter)
app.use("/bookmarks",bookmarkRouter)

app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

app.get("/",async(req,res)=>{
    res.send("hello")
})



app.listen(3000,()=>console.log("Server's runing on port 3000"))

