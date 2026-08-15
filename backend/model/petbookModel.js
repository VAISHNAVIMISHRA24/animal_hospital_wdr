import mongoose from "mongoose";
petSchema = new mongoose.Schema({
Owner_Name:{
    type:String,
    required:true
},
Pet_Name:{
    type:String,
    required:true
},
Date:{
    type:Date,
    required:true
}
})
export default mongoose.model("Pet",petSchema);