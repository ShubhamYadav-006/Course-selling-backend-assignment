import { Request, Response } from "express";

export const getCourses = (req: Request, res: Response) => {
  res.status(200).json({
    message: "All courses fetched successfully"
  });
};

export const createCourse = (req: Request, res: Response) => {
  
  res.status(201).json({
    message: "Course created successfully"
  });
}; 

export const getCourseId=(req:Request,res:Response)=>{
    const{id}=req.params;

    res.status (200).json({
        message:`Course with id ${id} fetched Succesfully`
    });
};