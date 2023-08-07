import mongoose from "mongoose";
import { iArticle, iArticleData } from "../config/interfaces";

const articleModel = new mongoose.Schema<iArticle>(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
    description: {
      type: String,
    },

    image: {
      type: String,
    },
    imageID: {
      type: String,
    },
    coverImage: {
      type: String,
    },
    coverImageID: {
      type: String,
    },
    likes: {
      type: Array,
    },

    authorID: {
      type: String,
    },

    rate: {
      type: Number,
    },

    ratings: [
      {
        type: mongoose.Types.ObjectId,
        ref: "ratings",
      },
    ],
    categoryName: [{ 
      type: String,
  }]
      ,
    author: {
      type: mongoose.Types.ObjectId,
      ref: "authors",
    },
  },
  { timestamps: true }
);

export default mongoose.model<iArticleData>("articles", articleModel);
