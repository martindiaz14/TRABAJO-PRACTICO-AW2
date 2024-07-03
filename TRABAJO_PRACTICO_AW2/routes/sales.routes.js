import { Router } from "express";
import { readFile, writeFile } from 'fs/promises';


const router = Router();
const fileUser = await readFile('./DATA/ventas.json', 'utf-8')
const saleData = JSON.parse(fileUser)



router.post('/venta', async(req, res) => {
    const { user, adress, postal, phone, location, total, buycart } = req.body
    try {
        const id = saleData.length > 0 ? Math.max(...saleData.map(sale => sale.id)) + 1 : 1;

        saleData.push({ id:id ,user, adress, postal, phone, location, total, buycart })
        writeFile('./DATA/ventas.json', JSON.stringify(saleData, null, 2))
        res.status(200).json({ status: true })
    } catch (error) {
        res.status(400).json({ status: false }, error)
    }
})

export default router