import { Router } from "express";
import {readFile, writeFile} from 'fs/promises';

const fileUser = await readFile('./DATA/usuarios.json', 'utf-8')
const UserData = JSON.parse(fileUser);

const router = Router();

router.post('/login'), (req, res)=>{
const email = req.body.email;
const pass = req.body.contraseña;

const login = UserData.find(e=> e.email === email && e.contraseña === pass)
try{
if(login){

    res.status(200).json(`Bienvenido al Sistema ${login.nombre + '' + login.apellido}`)
}else{

}   res.status(400).json(`Usuario no encontrado`)
}
catch(error){
    res.status(500).json(`Error...`)
}
}


router.get('/all'),(req,res)=>{
    if(UserData.lenght){
        res.status(200).json(UserData)
    }else{
       res.status(400).json("No se encontro ninguna venta")
    }

}

router.get('/id/:id'),(req, res)=>{
    const id = parseInt(req.params.id)

    const result = UserData.find(e => e.id === id)

    if(result){
        res.status(200).json(result)
    } else{
        res.status(400).json(`Usuario no encontrado`)
    }
}

export default router