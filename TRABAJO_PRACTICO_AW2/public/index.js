import { API } from "./APIs/api.js";
import { alert,handleAlert,closeAlert} from "./components/alert.js"
import { addSession } from "./utils/sessionStorage.js";

const btnLogin = document.getElementById("btnLogin")
const alertcont = document.getElementById('alertcontainer')

alertcont.innerHTML = alert()
const BtnCloseAlert = document.getElementById(`btnAlert`)

btnLogin.addEventListener('click', (e)=>{
e.preventDefault()
login()
})

const login = async() =>{
const email = document.getElementById("txtmail").value
const contraseña = document.getElementById("txtpass").value

const res = await fetch(`${API}/user/login`, {
    method: 'POST',
    body:JSON.stringify({email, contraseña}),
    headers:{
        'Content-Type' : 'application/json'
    }
})


const user = await res.json()


if(email != "" && contraseña != ""){

if(user.status){
    console.log(user)
    addSession(user)
    window.location.href = ('./pages/home/home.html')
}else{
    handleAlert("No se encontro el usuario")
}

}else{
    handleAlert("Complete los campos")
}
}



BtnCloseAlert.addEventListener('click', ()=>{
    closeAlert()
})