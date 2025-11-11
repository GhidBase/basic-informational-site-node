import { Router } from "express";
import AuthorController from "../controllers/authorController.js";

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.send("All authors"));
authorRouter.get("/:authorId", AuthorController.getAuthorById);

export default authorRouter;
