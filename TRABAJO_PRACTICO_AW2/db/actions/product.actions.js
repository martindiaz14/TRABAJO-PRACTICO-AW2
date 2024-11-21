import { connectToDatabase } from "../connection.js"
import product from "../schemas/product.schemas.js"


export const createProd = async({name,desc,category,price,img})=>{
try {
    await connectToDatabase()

    const res = await product.create({name,desc,category,price,img})
    return JSON.parse(JSON.stringify(res))
} catch (error) {
    console.log(error)
}}

export const prodAll = async()=>{
    try {
        await connectToDatabase()
    
        const res = await product.find().populate({path:"category"})
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }

}

export const FindCategory = async(category)=>{
try {
    await connectToDatabase()
    const res = await product.find({category}).populate({path:"category"})
    return JSON.parse(JSON.stringify(res))
} catch (error) {
    console.log(error)
}


}