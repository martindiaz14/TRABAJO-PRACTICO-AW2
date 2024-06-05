document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', function (event) {
      if (event.target && event.target.id === 'btnDelete') {
          const productId = event.target.getAttribute('data-id');
          removeLocal(productId);
          removeUI(productId);
      }
  });
});

const removeLocal = (id) => {
  let products = JSON.parse(localStorage.getItem('ProdList')) || [];
  products = products.filter(product => product.id !== id);
  localStorage.setItem('ProdList', JSON.stringify(products));
};

const removeUI = (id) => {
  const productElement = document.getElementById(`prod-${id}`);
  if (productElement) {
      productElement.remove();
  }
};




export const prodbag = (data)=>{
    return `
    <div class="rounded-2xl relative shadow-lg p-4 m-5 bg-gray-700 border border-gray-950" id="prod-${data.id}">
      <button class="p-2 absolute bg-gray-900 top-2 right-2 hover:bg-gray-800 rounded-full transition-all" id ="btnDelete" data-id="${data.id}">
        X
      </button>
      <img src=${data.img} id="img2" alt="imagen.png" height="100" width="100" class="mt-8">
      <div class="w-full bg-gray-900 rounded-2xl p-1 mt-4">
        <h1 class="text-1xl m-1 font-semibold mt-2" id = "name">${data.tittle}</h1>
        <h1 class="text-1xl m-1 font-semibold mt-2" id = "price">${data.price}</h1>
      </div>
    </div>
`
}