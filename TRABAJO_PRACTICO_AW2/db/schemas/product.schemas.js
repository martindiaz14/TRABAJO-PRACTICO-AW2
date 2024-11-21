import mongoose from "mongoose";

const {Schema, model, models, ObjectId} = mongoose;

const productschema = new Schema({
name:{type:String, required:true, unique:true},
desc:{type:String, required:true},
category:{type:ObjectId, required:true, ref:"categories"},
price:{type:Number, required:true},
img:{type:String, required:true}
})

const product = models.product || model('products',productschema )

export default product