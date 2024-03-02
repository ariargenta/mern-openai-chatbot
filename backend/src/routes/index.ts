import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";
import { Router } from "express";


const appRouter = Router();

appRouter.use("/user", userRoutes); // domain/api/v1/user
appRouter.use("/chats", chatRoutes);    // domain/api/v1/chats

export default appRouter;