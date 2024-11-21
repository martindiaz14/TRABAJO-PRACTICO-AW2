import { connectToDatabase } from "../connection.js";
import users from "../schemas/users.schemas.js";



export const createUser = async({name, lastname, email, password}) => {
try {
    await connectToDatabase()
    const res = users.create({name, lastname, email, password})

    return JSON.parse(JSON.stringify(res))
} catch (error) {
    console.log(error)
}

}

export const findUser = async(email)=>{
    try {
        await connectToDatabase()
        const res = await users.findOne({email})
        return res
    } catch (error) {
        console.log(error)
    }
}