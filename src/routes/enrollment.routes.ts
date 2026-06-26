import { Router } from "express";
import {
  createEnrollment,
  getEnrollments,
} from "../controllers/enrollments.controller";

const router = Router();

router.post("/", createEnrollment);
router.get("/", getEnrollments);

export default router;