import { alert, handleAlert, closeAlert } from "../../components/alert.js"
import { NewUser } from "../../APIs/user.api.js"


const alertcont = document.getElementById('alertcontainer')
alertcont.innerHTML = alert()
const BtnCloseAlert = document.getElementById(`btnAlert`)


const passwordField = document.getElementById('txtpassword');
const showPassword = document.getElementById('showPassword');

showPassword.addEventListener('change', function () {
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
})



const back = document.getElementById('btnBack').addEventListener('click', () => {
    window.location.href = ('../../index.html')
})

const reg = document.getElementById("btnReg");
reg.addEventListener('click', async (e) => {
    const name = document.getElementById('txtname').value;
    const lastname = document.getElementById('txtlastname').value;
    const email = document.getElementById('txtmail').value;
    const pass = document.getElementById('txtpassword').value;
    e.preventDefault()
    try {
        if (name == "" || lastname == "" || email == "" || pass == "") {
            handleAlert("Complete los campos")
            return
        }

        const NewUserObj = {
            name: name,
            lastname: lastname,
            email: email,
            password: pass
        }
        const res = await NewUser(NewUserObj)
        if (res.status) {
            handleAlert("Usuario Creado")
        } else {
            handleAlert("Error, El usuario ya existe")
        }
        document.getElementById('txtname').value = "";
        document.getElementById('txtlastname').value = "";
        document.getElementById('txtmail').value = "";
        document.getElementById('txtpassword').value = "";
      
       } catch (error) {
        console.log(error)
    };
}

)