import { Request, Response } from "express";

export const createStudent = (req: Request, res: Response) => {
  res.status(201).json({
    message: "Student created successfully",
  });
};

export const getStudentById = (req: Request, res: Response) => {
  const { id } = req.params;

  res.status(200).json({
    message: `Student with id ${id} fetched successfully`,
  });
};