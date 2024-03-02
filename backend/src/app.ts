import express from "express";
import morgan from "morgan"
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import { config } from "dotenv";


config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(morgan("dev")); // Remove it in production
app.use("/api/v1", appRouter);

export default app;