
import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
import cors from "cors"
import { config } from 'dotenv';


import userRouter from "./src/routes/userRoutes.js"
import tvShowsRouter from "./src/routes/tvShowsRoutes.js"
import trendingRouter from "./src/routes/trendingRoutes.js"
import moviesRouter from "./src/routes/moviesRoutes.js"
import bookmarkRouter from "./src/routes/bookmarkRoutes.js"
import recommendRouter from "./src/routes/recommendRoutes.js"


const app = express()

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

config({
    path:'./.env'
})

mongoose.connect(process.env.MONGO_DB_URL,{
    dbName:"Entertainment_App"
}).then(()=>console.log("MongoDB database is connected"))

app.use("/user",userRouter)
app.use("/tvshow",tvShowsRouter)
app.use("/trends",trendingRouter)
app.use("/recommends",recommendRouter)
app.use("/movies",moviesRouter)
app.use("/bookmarks",bookmarkRouter)



app.get("/",async(req,res)=>{
    res.send("hello")
})



app.listen(process.env.PORT,()=>console.log(`Server's runing on port ${process.env.PORT}`))

