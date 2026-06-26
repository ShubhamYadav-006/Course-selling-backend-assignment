import {Request, Response } from "express";


export const register =(req: Request, res:Response )=>{
    res.status(201).json({
        message:"User registered Succesfully"

    });
};
export const login =(req:Request , res:Response)=>{
    res.status(200).json({
        message:"User Logged in succesfully"
    });
};