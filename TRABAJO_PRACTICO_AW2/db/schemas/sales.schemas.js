import mongoose from "mongoose";

const {Schema, model, models,ObjectId} = mongoose;


const cartItemSchema = new Schema({
    product: { type: ObjectId, required: true, ref: 'products' },
    img:{type:String, required:true},
    name:{type:String, required:true},
    price:{type:Number, required:true}
  }, { _id: false });

const salesSchema = new Schema({
email:{type:String, required:true},
user:{type:String, required:true},
adress:{type:String, required:true},
postal:{type:Number, required:true},
phone:{type:Number, required:true},
location:{type:String, required:true},
total:{type:Number, required:true},
cart:[cartItemSchema],
},{timestamps:true})

const sales = models.sales || model('sales',salesSchema )

export default sales