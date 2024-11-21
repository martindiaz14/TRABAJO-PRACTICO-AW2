import { connectToDatabase } from "../connection.js"
import category from "../schemas/category.schema.js"


export const createCat = async({name})=>{
    try {
        await connectToDatabase()
    
        const res = await category.create({name})
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }}