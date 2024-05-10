import { Router } from "express";
import {readFile, writeFile} from 'fs/promises';

const fileUser = await readFile('./DATA/productos.json', 'utf-8')
const prodData = JSON.parse(fileUser);

const router = Router();


router.get('/id/:id'),(req, res)=>{
    const id = parseInt(req.params.id)

    const result = prodData.find(e => e.id === id)

    if(result){
        res.status(200).json(result)
    } else{
        res.status(400).json(`Producto no encontrado`)
    }
}

router.get('/all'),(req,res)=>{
    if(prodData.lenght){
        res.status(200).json(prodData)
    }else{
       res.status(400).json("No se encontro ningun producto")
    }

}
router.put('price/change'),(req, res)=>{
const id = req.body.id
const new_price = req.body.new_price

try{
const index = prodData.findIndex(e=> e.id === id)

if(price == 1){
    prodData[index].price = new_price;
    writeFile('./DATA/productos.json'),JSON.stringify(saleData,null,2)
    res.status(200).json("Precio Modificado")
}else{
    res.status(200).json("No se encontro el producto")
}

}catch(error){
res.status(500).json(`Error...`)
}

}

export default router