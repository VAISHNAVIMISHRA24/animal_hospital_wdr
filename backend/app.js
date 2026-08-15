import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dbConnection from "./connetion/dbConnection.js";
import petBookRouter from "./routes/petbookRoute.js";

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api", petBookRouter);


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})