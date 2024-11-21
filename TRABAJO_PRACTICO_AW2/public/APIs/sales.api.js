import { API } from "./api.js";


export const NewSale = async (NewSaleData) => {

    try {
        const res = fetch(`${API}/sales/venta`, {
            method: 'POST',
            body: JSON.stringify(NewSaleData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
return res
    } catch (error) {
console.log(error)
    }

}


export const saleuser = async(user)=>{
    try{
    const res = await fetch(`${API}/sales/all/${user}`,{
    method: 'GET',
    headers: {
        'Content-Type' : 'application/json',
    }
    })
    
    if(!res.ok){
    throw new Error(`Error: ${res.status}`)
    }
    
    const prod = await res.json()
    return prod
    }catch(error){
        console.error(error)
        }
    }