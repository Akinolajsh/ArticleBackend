import { iCategory } from './../config/interfaces';
import mongoose from "mongoose"
import { iCategoryData } from "../config/interfaces"

const categoryModel = new mongoose.Schema<iCategory>({
    article: [
    {
        type: Array<String>,
        item: mongoose.Schema.ObjectId,
        ref: "articles"
    }
    
],
    categoryName: {
        type: String,
    }
})

export default  mongoose.model<iCategoryData>("categories", categoryModel)