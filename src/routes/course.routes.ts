import { Router } from "express";
import { createCourse } from "../controllers/course.controller";
import { authMiddleWare } from "../middlewares/auth.middlewares"

const router = Router();

router.post("/", authMiddleWare, createCourse);

export default router;