import { Router } from "express";
import {readFile} from 'fs/promises';

const fileUser = await readFile('./DATA/usuarios.json', 'utf-8')
const UserData = JSON.parse(fileUser);

const router = Router();

router.post('/login', (req, res)=>{
const email = req.body.email
const contraseña = req.body.contraseña

const result = UserData.find(e => e.email === email && e.contraseña === contraseña)

if(result){
    const data = {
        name : result.nombre,
        lastname: result.apellido,
        status: true
    }
    console.log(data)
    res.status(200).json(data)
}else{
    res.status(400).json({status:false})
}
})


export default router