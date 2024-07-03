import { Router } from "express";
import { readFile, writeFile } from 'fs/promises';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


dotenv.config()

const fileUser = await readFile('./DATA/usuarios.json', 'utf-8')
const UserData = JSON.parse(fileUser);

const router = Router();

const SECRET = process.env.SECRET

router.post('/login', async(req, res) => {
    const email = req.body.email
    const contraseña = req.body.contraseña

    const result = UserData.find(e => e.email === email)

    if (!result) {
        return res.status(404).json({ status: false })
    }
    const control = bcrypt.compareSync(contraseña, result.contraseña)
    
    if (!control) {
        return res.status(401).json({ status: false })
    }
    const token = jwt.sign({ ...result }, SECRET, { expiresIn: 86400 })

    const data = {
        name: result.nombre,
        lastname: result.apellido,
        status: true
    }
    console.log(token)
    res.status(200).json(data)

})


router.post('/create', async(req,res)=>{
const {nombre,apellido,email,contraseña} = req.body

try {
    const cryppass = bcrypt.hashSync(contraseña, 8)

    const id = UserData.length > 0 
    ? Math.max(...UserData.map(user => user.id)) + 1 : 1;

    UserData.push({id:id,nombre,apellido,email,contraseña:cryppass})
    writeFile('./DATA/usuarios.json', JSON.stringify(UserData, null, 2))

    res.status(200).json({status:true})

} catch (error) {
    res.status(400).json({status:false})
}

})


export default router