import { Request, Response } from "express";
import mongoose from "mongoose";
import authorModel from "../model/authorModel";

export const makeRequest = async (req:Request, res: Response) => {
try {
    const { authorID, friendID} =req.params
const author:any = await authorModel.findById(authorID)
const friend: any = await authorModel.findById(friendID)

if (author && friend) {
    friend.request.push(new mongoose.Types.ObjectId(authorID));
    friend.save();
    
    return res.status(200).json({
message: "Your request haas been sent"
    })
}

} catch (error) {
    return res.status(404).json({
        message: "Error"
    });
}
};