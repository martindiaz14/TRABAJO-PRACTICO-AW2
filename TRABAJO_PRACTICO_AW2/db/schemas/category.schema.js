import mongoose from "mongoose";

const {Schema, model, models} = mongoose;

const categorySchema = new Schema({
name:{type:String, required:true, unique:true}
})

const category = models.category || model('categories',categorySchema )

export default category