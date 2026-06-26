import { Router } from "express";
import {
  createStudent,
  getStudentById,
} from "../controllers/student.controller";

const router = Router();

router.post("/", createStudent);
router.get("/:id", getStudentById);

export default router;