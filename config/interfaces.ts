import mongoose from "mongoose";

interface iAuthor {
    name?: string;
    email?: string;
    password?: string;
    avatar?: string;
    avatarID?: string;
    articles?: {}[];
    friends?: string[];
    category: []
}

export interface iArticle {
    rate?: number;
    title?: string;
    content?: string;
    description?: string;
    authorID?: string;
    image?: string;
    categoryName: string;
    // categoryID?: string;
    imageID?: string;
    coverImage?: string;
    coverImageID?: string;
    ratings?: [];
    likes?: [];
    author?: {};
}

interface iRating {
    rate?: number;
    ratedBy?: string;
    article?: string;
}


export interface iCategory {
   article?:  Array<string>
   categoryName?: string
}


export interface iCategoryData extends iCategory, mongoose.Document {}
export interface iAuthorData extends iAuthor, mongoose.Document {}
export interface iArticleData extends iArticle, mongoose.Document {}
export interface iRatingData extends iRating, mongoose.Document {}