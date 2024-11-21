import { API } from "./api.js"

export const addprod = async()=>{
try{
const res = await fetch(`${API}/prod/all`,{
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

export const addcategory = async(category)=>{
    try{
    const res = await fetch(`${API}/prod/all/${category}`,{
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