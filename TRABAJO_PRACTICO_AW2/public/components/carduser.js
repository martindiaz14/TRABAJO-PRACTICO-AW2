export const carduser = (data) =>{
    return`
    <div  class="p-2 m-4">  
    <img src="../../imgs/1361728.png" id = "img" alt="imagen.jpeg" width="200" height="200">
    <h4 id = "name" class="m-2 underline">${data.name}</h4>

    <h4 id = "lastname" class="m-2 underline">${data.lastname}</h4>
 
    <h4 id = "email" class="m-2 underline">${data.email}</h4>

    <br>
    </div>`
  }