import { Request, Response } from "express";

export const createEnrollment = (req: Request, res: Response) => {
  res.status(201).json({
    message: "Enrollment created successfully",
  });
};

export const getEnrollments = (req: Request, res: Response) => {
  res.status(200).json({
    message: "All enrollments fetched successfully",
  });
};