import { API } from "./APIs/api.js";
import { alert,handleAlert,closeAlert} from "./components/alert.js"
import { addSession } from "./utils/sessionStorage.js";

const btnLogin = document.getElementById("btnLogin")
const alertcont = document.getElementById('alertcontainer')

const register = document.getElementById('btnreg').addEventListener('click',()=>{
    window.location.href = ('./pages/register/register.html')
})

alertcont.innerHTML = alert()
const BtnCloseAlert = document.getElementById(`btnAlert`)

btnLogin.addEventListener('click', (e)=>{
e.preventDefault()
login()
})

const login = async() =>{
const email = document.getElementById("txtmail").value
const password = document.getElementById("txtpass").value

const res = await fetch(`${API}/user/login`, {
    method: 'POST',
    body:JSON.stringify({email, password}),
    headers:{
        'Content-Type' : 'application/json'
    }
})


const user = await res.json()


if(email != "" && password != ""){

if(user.status){
    console.log(user)
    addSession(user)
    window.location.href = ('./pages/home/home.html')
}else{
    handleAlert("Datos Incorrectos")
}

}else{
    handleAlert("Complete los campos")
}
}




BtnCloseAlert.addEventListener('click', ()=>{
    closeAlert()
})



const passwordField = document.getElementById('txtpass');
const showPassword = document.getElementById('showPassword');

showPassword.addEventListener('change', function () {
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
})