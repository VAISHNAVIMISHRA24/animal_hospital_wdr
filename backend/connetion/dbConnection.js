import mongoose from "mongoose";
const dbConnection = mongoose.connect("mongodb://localhost:27017/animal_project");


export default dbConnection;