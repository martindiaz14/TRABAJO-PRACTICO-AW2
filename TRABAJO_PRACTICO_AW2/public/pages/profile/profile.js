import { prodhist } from "../../components/prodhist.js"
import { getSession ,deleteSession} from "../../utils/sessionStorage.js"
import { carduser } from "../../components/carduser.js"
import { saleuser } from "../../APIs/sales.api.js"

document.getElementById("btnTitulo").addEventListener('click', () => {
    window.location.href = "../home/home.html"
})


const logout = document.getElementById('logout').addEventListener('click',()=>{
  deleteSession(); 
  location.reload()
  
})

if (getSession('user')) { 
  try {

  } catch (error) {
      console.log(error)
  }
} else {
  window.location.href = ('../../index.html')
}


window.addEventListener('load', ()=>{
    const userinfo = getSession('user')
    const datos = document.getElementById("datos");
    const card = carduser(userinfo);
    datos.innerHTML = card;
  
  })




const session = getSession('user')
const email = session.email

const renderprod = async () => {

  const prod = await saleuser(email)
  const container = document.getElementById("histcont")

  let prodcon = ``
  container.innerHTML = prodcon

  prod.forEach(e => {
      prodcon += prodhist(e)
  });
  container.innerHTML = prodcon

}

document.addEventListener('DOMContentLoaded', async()=>{

  await renderprod()
})