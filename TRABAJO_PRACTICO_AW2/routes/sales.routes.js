import { Router } from "express";
import {readFile, writeFile} from 'fs/promises';
import {get_user_byId} from '../utils/user'
import {get_prod_byId} from '../utils/prod'

const fileUser = await readFile('./DATA/ventas.json', 'utf-8')
const saleData = JSON.parse(fileUser);

const router = Router();

router.get('/all'),(req,res)=>{
     if(saleData.lenght){
         res.status(200).json(saleData)
     }else{
        res.status(400).json("No se encontro ninguna venta")
     }

}

router.delete('/delete/:saleId'),(req, res)=>{
    const saleId = req.params.saleId

    try{
    const index = saleData.find(e=> e.id === id)

    if(index != -1){
        saleData.splice(index, 1)
        writeFile('./DATA/ventas.json'),JSON.stringify(saleData,null,2)
        res.status(200).json("Venta eliminada")
    }else{
        res.status(400).json("No se encontro ninguna venta")
    }
    }catch(error){
        res.status(500).json(`Error...`)
    }

}

router.post('/detail'),(req,res)=>{
const from = req.body.from
const to = req.body.to
let aux_name; 
let aux_prod;
try{

const sales = saleData.filter(e => e.date >= from && e.date <= to)

const result = sales.map(e=>{
    aux_name = get_user_byId(e.id_usuario)
    aux_name = aux_name.nombre + '' + aux_name.apellido
    aux_prod = get_prod_byId(e.productos)
    aux_prod = aux_name.nombre

    return{
        id: e.id,
        id_usuario : aux_name,
        fecha: e.fecha,
        total: e.total,
        direccion: e.direccion,
        productos: aux_prod

    }
})

if (result){
    res.status(200).json(result)
}else{
    res.status(400).json("No se encontro ninguna venta")
}
}catch(error){
    res.status(500).json(`Error...`)
}}
export default router