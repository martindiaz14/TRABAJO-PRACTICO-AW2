import { Router } from "express";
import {readFile} from 'fs/promises';


const fileUser = await readFile('./DATA/productos.json', 'utf-8')
const prodData = JSON.parse(fileUser);

const router = Router();

router.get('/all', async (req,res)=>{
 try {
    res.status(200).json(prodData)
 } catch (error) {
    res.status(400).json({status:false})
 }  
})

router.get('/all/:categoria', async(req,res)=>{
    const category = req.params.categoria
try {
    const searchcategory = prodData.filter(e => e.categoria == category)
    res.status(200).json(searchcategory)
} catch (error) {
    res.status(400).json("No se encontro ningun producto")
}
    
        

})



export default router