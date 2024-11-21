import { Router } from "express";
import { readFile, writeFile } from 'fs/promises';
import { createSale ,salesAll,salesByuser} from "../db/actions/sales.actions.js";

const router = Router();
const fileUser = await readFile('./DATA/ventas.json', 'utf-8')
const saleData = JSON.parse(fileUser)



router.post('/venta', async(req, res) => {
    const {email, user, adress, postal, phone, location, total, cart } = req.body
    try {
const result = await createSale({email, user, adress, postal, phone, location, total, cart })
        res.status(200).json({ status: true })
    } catch (error) {
        res.status(400).json({ status: false })
    }
})


router.get('/all', async (req,res)=>{
    try {
       const result = await salesAll()
       res.status(200).json(result)
    } catch (error) {
       res.status(400).json({status:false})
    }  
   })

router.get('/all/:email', async(req,res)=>{
    const email = req.params.email
try {

    const result = await salesByuser(email)
    res.status(200).json(result)
} catch (error) {
    res.status(400).json("No se encontro ningun usuario")
}
}
)

export default router