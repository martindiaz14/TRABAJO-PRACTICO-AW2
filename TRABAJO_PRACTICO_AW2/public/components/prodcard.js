export const prodcard = (data)=>{
    return `
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-5 p-10 bg-blue-950" id ="${data.id}">
      <img src= ${data.img} id = "img-${data.id}" alt="imagen.png" height="150" width="150">
      <h1 class="text-1xl m-1 font-semibold mt-2 underline" id = "name-${data.id}">${data.nombre}</h1>
      <h1 class="m-1 text-xs">${data.desc}</h1>
      <div class="bg-blue-800 p-2 rounded-2xl m-2 indigo font-semibold flex space-x-4">$<h1  id = "price-${data.id}">${data.precio}</h1></div>
      <button class="btnadd bg-indigo-600 rounded-1xl p-3 mt-10 justify-center pl-5 pr-5 hover:bg-indigo-700 p-3 transition-all" data-id="${data.id}"> 
        Add cart
      </button>
    </div>
`
}