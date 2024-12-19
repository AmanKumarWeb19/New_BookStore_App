import express from "express";
import { getBook } from "../Controller/book.controller.js";

const bookRouter = express.Router();

bookRouter.get("/", getBook);

export default bookRouter;
