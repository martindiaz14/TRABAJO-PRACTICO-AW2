import { API } from "./APIs/api.js";
import { alert, handleAlert, closeAlert } from "./components/alert.js"
import { addSession } from "./utils/sessionStorage.js";
import { UserLogin } from "./APIs/user.api.js";

const btnLogin = document.getElementById("btnLogin")
const alertcont = document.getElementById('alertcontainer')

const register = document.getElementById('btnreg').addEventListener('click', () => {
    window.location.href = ('./pages/register/register.html')
})

alertcont.innerHTML = alert()
const BtnCloseAlert = document.getElementById(`btnAlert`)

btnLogin.addEventListener('click', (e) => {
    e.preventDefault()
    login()
})

const login = async () => {
    const email = document.getElementById("txtmail").value;
    const password = document.getElementById("txtpass").value;

    if (email === "" || password === "") {
        handleAlert("Complete los campos");
        return;
    }

    const res = await UserLogin(email, password);

    if (!res) {
        handleAlert("Datos Incorrectos, Intentelo nuevamente");
        return;
    }

    if (res.status) {
        addSession(res)
        window.location.href = './pages/home/home.html';
    } 
};




BtnCloseAlert.addEventListener('click', () => {
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