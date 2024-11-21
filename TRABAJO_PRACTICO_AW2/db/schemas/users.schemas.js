import mongoose from "mongoose";

const {Schema, model, models} = mongoose;

const usersSchema = new Schema({
name:{type:String, required:true},
lastname:{type:String, required:true},
email:{type:String, required:true,unique:true},
password:{type:String, required:true}
})

const users = models.users || model('users',usersSchema )

export default users