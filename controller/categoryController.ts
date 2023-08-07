import { iCategory } from './../config/interfaces';
import express, { Request, Response} from "express";
import categoryModel  from "../model/categoryModel";
import articleModel from '../model/articleModel';
// import articleModel from "../model/articleModel";

export const createCategory = async (req:Request, res:Response) => {
try {  

const {categoryName}  = req.body;

const data = await categoryModel.create({categoryName});

    return res.status(201).json({
        message: "Category created",
        data
    })
    
} catch (error) {
    return res.status(404).json({
        message: "Error creating category",
    })
}
} 


export const viewCategory = async (req: Request, res: Response) => {
    try {
        const category: any = await categoryModel.find()
        return res.status(200).json({
            message : "Viewing categories",
data: category
        })
    } catch (error: any) {
        return res.status(400).json({
            message : error.message
        })
    }
}