import { Router } from "express";
import {readFile} from 'fs/promises';

const fileUser = await readFile('./DATA/productos.json', 'utf-8')
const prodData = JSON.parse(fileUser);

const router = Router();

router.get('/all', async (req,res)=>{
    if(prodData){
        res.status(200).json(prodData)
    }else{
       res.status(400).json("No se encontro ningun producto")
    }

})

router.get('/all/:categoria', (req,res)=>{
    const categoria = req.params.categoria

    const searchcategory = prodData.filter(e => e.categoria == categoria)

    if(searchcategory){
        res.status(200).json(searchcategory)
    }else{
       res.status(400).json("No se encontro ningun producto")
    }

})


export default router