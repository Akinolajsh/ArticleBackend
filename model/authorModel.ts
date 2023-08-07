import mongoose from "mongoose";
import { iAuthorData } from "../config/interfaces";

const authorModel = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
        unique: true,
        trim: true,
        toLowerCase: true
    },
    password:{
        type: String,
    },
    avatar:{
        type: String,
    },
    avatarID:{
        type: String,
    },

    articles: [
        {
            type: String,
        }
    ],
    category: 
        {
            type: Array<String>
        }
    ,

    friends: {
        type: Array<String>,
    },
},
{
    timestamps: true
},
);

export default mongoose.model<iAuthorData>("authors", authorModel)