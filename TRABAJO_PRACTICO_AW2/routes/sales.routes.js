import { Router } from "express";
import { readFile, writeFile } from 'fs/promises';


const router = Router();
const fileUser = await readFile('./DATA/ventas.json', 'utf-8')
const saleData = JSON.parse(fileUser)



router.post('/venta', (req, res) => {
    const { user, lastname, adress, postal, phone, location, total, productos } = req.body
    try {
        saleData.push({ user, lastname, adress, postal, phone, location, total, venta, productos })
        writeFile('./DATA/ventas.json', JSON.stringify(saleData, null, 2))
        res.status(200).json({ status: true })
    } catch (error) {
        res.status(400).json({ status: false })
    }
})

export default router