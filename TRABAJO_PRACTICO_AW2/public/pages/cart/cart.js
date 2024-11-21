import { getSession } from "../../utils/sessionStorage.js";
import { getData, setData, deletedata } from "../../utils/localStorage.js";
import { prodbag } from "../../components/prodbag.js";
import { NewSale } from "../../APIs/sales.api.js";
import { handleAlert, closeAlert, buyalert } from "../../components/buyalert.js";

const buycont = document.getElementById('buycontainer')

buycont.innerHTML = buyalert()
const btnBuyClose = document.getElementById(`btnbuyclose`)
btnBuyClose.addEventListener('click', () => {
    closeAlert()
})


document.getElementById("btnTitulo").addEventListener('click', () => {
    window.location.href = "../home/home.html"
})


if (getSession('user')) {
    const saludo = document.getElementById("txtSaludo")
    const user = getSession('user')
    saludo.textContent = `Hello ${user.name} ${user.lastname}!`
} else {
    window.location.href = ('../../index.html')
}


const productos = getData('ProdList');


function mostrarProductos() {

    const carrito = document.getElementById('cartContainer');
    carrito.innerHTML = '';


    let prodc = ''
    let total = 0;
    carrito.innerHTML = prodc
    productos.forEach(e => {
        try {
            prodc += prodbag(e)
            total += parseFloat(e.price)
        } catch (error) {
            console.log(error)
        }
    });
    carrito.innerHTML = prodc

    const totalPriceInput = document.getElementById('totalinput');
    totalPriceInput.value = total.toFixed(2);


}

mostrarProductos();




const btnbuy = document.getElementById("btnBuy");
btnbuy.addEventListener("click", async (e) => {
    const adress = document.getElementById("adress").value;
    const postal = document.getElementById("postal").value;
    const phone = document.getElementById("phone").value;
    const location = document.getElementById("location").value;
    const total = document.getElementById("totalinput").value;

    e.preventDefault()
    try {
        const prods = getData('ProdList')
        if (!prods || prods.length === 0) {
            handleAlert("Carro de compras vacío, agregue un producto.");
        }
        else {
            if (adress == "" || postal == "" || phone == "" || location == "") {
                handleAlert("Complete los datos de envio antes de seguir");
            }
            else {

                const user = getSession('user')

                const NewSaleObj = {
                    email: user.email,
                    user:user.name + " "  + user.lastname,
                    adress,
                    postal,
                    phone,
                    location,
                    total,
                    cart: prods.map(product => ({
                        product:product.id,
                        img:product.img,
                        name:product.name,
                        price:product.price
                    }))
                }
                const res = await NewSale(NewSaleObj)
                if (res.status) {
                    handleAlert(`¡Compra realizada!\n
                    Direccion: ${adress}\n
                    Codigo Postal: ${postal}\n
                    Telefono: ${phone}\n
                    Localidad: ${location}`)
                }
                else {
                    handleAlert("La compra no se  pudo realizar")
                }
                document.getElementById("adress").value = "";
                document.getElementById("postal").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("location").value = "";
                deletedata('ProdList');
                location.reload()
            }
        }
    } catch (error) {
        console.log(error);
    };
}

)



const btncancel = document.getElementById("btnCancel");
btncancel.addEventListener("click", () => {
    try {
        document.getElementById("adress").value = "";
        document.getElementById("postal").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("location").value = "";
        deletedata('ProdList');
        location.reload();
        handleAlert("Compra Cancelada");
    } catch (error) {
        console.log(error);
    };
})


document.getElementById("profile").addEventListener('click', ()=>{
    window.location.href = "../profile/profile.html"
    })