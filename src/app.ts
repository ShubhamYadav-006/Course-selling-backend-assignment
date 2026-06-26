import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import courseRoutes from "./routes/course.routes";
import studentRoutes from "./routes/student.routes";
import enrollmentRoutes from "./routes/enrollment.routes";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Course Selling Backend API");
});

app.use("/auth", authRoutes);
app.use("/courses", courseRoutes);
app.use("/students", studentRoutes);
app.use("/enrollments", enrollmentRoutes);

export default app;