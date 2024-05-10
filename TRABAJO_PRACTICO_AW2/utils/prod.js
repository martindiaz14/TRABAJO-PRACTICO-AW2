import{readFile} from 'fs/promises'


const fileUser = await readFile('./DATA/productos.json', 'utf-8')
const prodData = JSON.parse(fileUser);

export const get_prod_byId = (id)=>{
     return prodData.find(e=> e.id === id)
}