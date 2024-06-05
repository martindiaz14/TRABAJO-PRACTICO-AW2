import { API } from "../APIs/api.js";


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