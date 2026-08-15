import express from "express";
import { petBookController } from "../controller/petBookController.js";


const petBookRouter = express.Router();
petBookRouter.post("/petbook", petBookController);
export default petBookRouter;