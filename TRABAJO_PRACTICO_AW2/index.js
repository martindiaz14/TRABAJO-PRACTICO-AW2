import {readFile} from 'fs/promises'
const venta = await readFile ("./DATA/ventas.json" , "utf-8")
const user = await readFile ("./DATA/usuarios.json" , "utf-8")
const prod = await readFile ("./DATA/productos.json" , "utf-8")

const ventas = JSON.parse(venta)
const usuarios = JSON.parse(user)
const productos = JSON.parse(prod)

/* buscar venta por usuario */
const venta_usuario = (iduser) =>{
 let filter_user = ventas.filter(e => e.id_usuario === iduser)
 
 return filter_user
}
console.log(venta_usuario(2))
/* buscar venta por productos */
const venta_prod = (idprod) =>{
    let filter_prod = ventas.filter(e => e.productos === idprod)
    return filter_prod
   }
console.log(venta_prod(1))
/* buscar venta por mayor a precio */
const venta_price = () =>{
    let filter_prod = ventas.filter(e => e.total >= 50)
    return filter_prod
   }
console.log(venta_price())