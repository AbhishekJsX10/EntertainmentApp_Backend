import mongoose from "mongoose";

const tvshowSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    language:{
        type:String,
        required:true
    },
    firstyear: {
        type: Number,
        required: true
    },
    lastyear: {
        type: Number,
        required: true
    },
    status:{
        type:String,
        required:true
    },
    genre: {
        type: [String], 
        required: true
    },
    synopsis:{
        type: String,
        required: true
    },
    casts:{
        type: [String], 
        default:[],
        required: true
    },
    links:{
        type: Map, 
        of: String 
    },
    trending:{
        type:Boolean,
        default:false,
        required: true
    },
    itemType: { 
        type: String, 
        required: true 
    },
    imageUrl: {
        type: String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const tvShows = mongoose.model("tvShows", tvshowSchema);
export default tvShows