import { connectToDatabase } from "../connection.js";
import sales from "../schemas/sales.schemas.js";

export const createSale = async({email, user,adress,postal,phone,location,total,cart}) => {
try {
    await connectToDatabase()
    const res = sales.create({email, user,adress,postal,phone,location,total,cart})

    return JSON.parse(JSON.stringify(res))
} catch (error) {
    console.log(error)
}
}

export const salesAll = async()=>{
    try {
        await connectToDatabase()
    
        const res = await sales.find().populate({path:"cart.product"})
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }
}


export const salesByuser = async(email)=>{
    try {
        await connectToDatabase()
    
        const res = await sales.find({email})
        return JSON.parse(JSON.stringify(res))
    } catch (error) {
        console.log(error)
    }
}
