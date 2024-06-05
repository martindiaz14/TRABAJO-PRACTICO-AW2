export const handleAlert = (text) =>{
const alert = document.getElementById('alert')
const txtAlert = document.getElementById('txtAlert')

alert.classList.remove('hidden')
txtAlert.textContent = text
}

export const closeAlert = () =>{
    const alert = document.getElementById('alert')
    alert.classList.add('hidden')
    }

export const alert = ()=>{
    return `<div class = "bg-rose-500 mt-5 rounded-2xl p-4 hidden" id = "alert">
    <div class="flex justify-between items-center">
       <p class="text-sm font-semibold" id ="txtAlert">
         
       </p>
       <button class="bg-rose-800 rounded-full p-1 w-1/12 hover:bg-rose-700 transition-all" id ="btnAlert">
        X
       </button>
    </div>

</div>`
}