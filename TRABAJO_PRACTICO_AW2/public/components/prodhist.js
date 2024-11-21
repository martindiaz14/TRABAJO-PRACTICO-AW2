export const prodhist = (data) => {
    const productsHTML = data.cart.map((item, index) => `
        <div id="product-${data._id}-${index}" class="text-xs font-bold  rounded-2xl shadow-lg p-3 m-2 bg-gray-700 border border-Gray-50">
              <img src=${item.img} id="img-${item._id}" alt="imagen.png" height="50" width="50">
            <h4>${item.name}</h4>
            <h4>${item.price}</h4>
        </div>
    `).join('');

    return `
<div class="mt-4 mb-2 bg-blue-950 w-full font-bold p-6 sm:p-8 lg:p-10 relative rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4" id="buy-${data._id}">
    <!-- Primera fila -->
    <div class="flex items-center">
        <h4 class="py-2 underline break-words">Adress: ${data.adress}</h4>
    </div>
    <div class="flex items-center">
        <h4 class="py-2 underline break-words">Postal: ${data.postal}</h4>
    </div>

    <!-- Segunda fila -->
    <div class="flex items-center">
        <h4 class="py-2 underline break-words">Phone: ${data.phone}</h4>
    </div>
    <div class="flex items-center">
        <h4 class="py-2 underline break-words">Location: ${data.location}</h4>
    </div>

    <!-- Tercera fila -->
    <div class="flex items-center">
        <h4 class="py-2 underline break-words">Total: $${data.total}</h4>
    </div>
    <div class="flex items-center justify-end">
        <button class="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-2xl transition-all" id="btncart-${data._id}" name="btncart">Cart</button>
    </div>

    <!-- Cart Dropdown -->
    <div class="absolute border border-gray-50 bg-blue-800 w-full sm:w-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 rounded-2xl z-50 right-0 top-20 hidden" id="cart-${data._id}">
    <button class="px-2 absolute right-0 top-1 font-semibold  bg-blue-800 hover:font-bold text-white rounded-2xl transition-all" id="btncart-${data._id}" name="btncart">X</button>
    ${productsHTML}
    </div>
</div>


`;
};

document.addEventListener('click', function (event) {
    if (event.target && event.target.name === 'btncart') {
        const cartId = `cart-${event.target.id.split('-')[1]}`;
        const content = document.getElementById(cartId);
        if (content) {
            content.classList.toggle('hidden');
        }
    }
});