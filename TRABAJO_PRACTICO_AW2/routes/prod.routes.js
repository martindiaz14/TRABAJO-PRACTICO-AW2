import { Router } from "express";
import {readFile} from 'fs/promises';
import { createProd, prodAll, FindCategory } from "../db/actions/product.actions.js";
import { createCat } from "../db/actions/category.actions.js";

const fileUser = await readFile('./DATA/productos.json', 'utf-8')
const prodData = JSON.parse(fileUser);

const router = Router();

router.get('/all', async (req,res)=>{
 try {
    const result = await prodAll()
    res.status(200).json(result)
 } catch (error) {
    res.status(400).json({status:false})
 }  
})

router.get('/all/:category', async(req,res)=>{
    const category = req.params.category
try {

    const result = await FindCategory(category)
    res.status(200).json(result)
} catch (error) {
    res.status(400).json("No se encontro ningun producto")
}
    
        
    
       
    

})

router.post('/create' , async(req, res)=>{
const {name,desc,category,price,img} = req.body

try {
    const result = await createProd({name,desc,category,price,img})
    res.status(200).json(result)
} catch (error) {
    res.status(400).json({status:false})
}

})

router.post('/createCategory' , async(req, res)=>{
    const {name} = req.body
    
    try {
        const result = await createCat({name})
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({status:false})
    }
    
    })


export default router