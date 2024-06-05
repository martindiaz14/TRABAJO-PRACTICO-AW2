import { getSession } from "../utils/sessionStorage.js";
import { getData, setData, deletedata } from "../utils/localStorage.js";
import { prodbag } from "../components/prodbag.js";
import { NewSale } from "../utils/sales.js";

document.getElementById("btnTitulo").addEventListener('click', () => {
    window.location.href = "./home.html"
})

try {
    if (getSession('user')) {
        const saludo = document.getElementById("txtSaludo")
        const user = getSession('user')
        saludo.textContent = `Hello ${user.name} ${user.lastname}!`
    } else {
        window.location.href = ('../index.html')
    }
} catch (error) {
    console.log(error)
}


try {

    const productos = getData('ProdList');


    function mostrarProductos() {
        const carrito = document.getElementById('cartContainer');
        carrito.innerHTML = '';

        let prodc = ''
        carrito.innerHTML = prodc
        productos.forEach(e => {
            prodc += prodbag(e)
        });
        carrito.innerHTML = prodc


    }

    mostrarProductos();


}
catch (error) {
    console.log(error);
}

try{
    const btnbuy = document.getElementById("btnBuy");
    btnbuy.addEventListener("click" ,() => {
    const adress = document.getElementById("adress").value;
    const postal = document.getElementById("postal").value;
    const phone = document.getElementById("phone").value;
    const locations = document.getElementById("location").value;
    
    if ( adress == "" || postal == "" || phone == "" || locations == ""){
      alert("Complete los datos de envio antes de seguir");
    }
    else{
    NewSale.addEventListener('submit', async(e)=>{
    e.preventDefault()
    const user = getSession('user')
    const prods = getData('ProdList')
      const personalizedMessage = `¡Compra realizada!\n
      Direccion: ${adress}\n
      Codigo Postal: ${postal}\n
      Telefono: ${phone}\n
      Localidad: ${locations}`;
      alert(personalizedMessage);
      const NewSaleObj = {
        name : user.name,
        lastname: user.lastname,
        adress,
        postal,
        phone,
        locations,
        products:prods.tittle
      }

      document.getElementById("adress").value = "";
      document.getElementById("postal").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("location").value = "";
      deletedata('ProdList');    
      location.reload();    

    }) }
    
        
    })
    const btncancel = document.getElementById("btnCancel");
    btncancel.addEventListener("click", ()=>{
    alert("Compra Cancelada");
    document.getElementById("adress").value = "";
    document.getElementById("postal").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("location").value = "";
    
    deletedata('ProdList');      
    location.reload();  
    })
    
    }catch (error) {
      console.log(error);
    };
    
    