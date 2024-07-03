import { getSession } from "../../utils/sessionStorage.js";
import { prodcard } from "../../components/prodcard.js";
import { addprod, addcategory } from "../../APIs/prod.api.js";
import { getData, setData, deletedata } from "../../utils/localStorage.js";

const user = getSession('user')

if (getSession('user')) {
    try {
        const saludo = document.getElementById("txtSaludo")
        const user = getSession('user')
        saludo.textContent = `Hello ${user.name} ${user.lastname}!`
    } catch (error) {
        console.log(error)
    }
} else {
    window.location.href = ('../index.html')
}

let selectedOption = '';

document.addEventListener('DOMContentLoaded', async () => {
    const buttons = document.querySelectorAll('#menu-item');
    buttons.forEach(button => {
        button.addEventListener('click', async (event) => {
            var content = document.getElementById('menu');
            selectedOption = event.target.name;
            await renderprod();
            content.classList.add('hidden');
        });
    });

    await renderprod();
});

const renderprod = async () => {

    const prod = await addcategory(selectedOption)
    const prodcontainer = document.getElementById("ProdContainer")

    let prodcon = ``
    prodcontainer.innerHTML = prodcon

    prod.forEach(e => {
        prodcon += prodcard(e, user.id)
    });
    prodcontainer.innerHTML = prodcon

}



const container = document.getElementById("ProdContainer");
container.addEventListener('click', (e) => {
    const target = e.target;
    if (target && target.className.includes('btnadd')) {
        try {
            const id = target.getAttribute('data-id');
            const img = document.getElementById(`img-${id}`).src
            const tittle = document.getElementById(`name-${id}`).textContent;
            const price = document.getElementById(`price-${id}`).textContent;

            const prod = {
                id: id,
                img: img,
                tittle: tittle,
                price: price,

            };
            const prodtList = getData('ProdList');

            prodtList.push(prod);

            setData('ProdList', prodtList);
        } catch (error) {
            console.log(error);
        }

    }
})




document.getElementById('btncategory').addEventListener('click', function () {
    var content = document.getElementById('menu');
    content.classList.toggle('hidden');
});

document.getElementById("btnTitulo").addEventListener('click', () => {
    location.reload()
})
document.getElementById("btnBag").addEventListener('click', () => {
    window.location.href = "../cart/cart.html"
})