export const handleAlert = (text) => {
    const buyalert = document.getElementById('buyalert')
    const txtBuy = document.getElementById('txtBuy')
    buyalert.classList.remove('hidden')
    txtBuy.textContent = text
}

export const closeAlert = () => {
    const buyalert = document.getElementById('buyalert')
    buyalert.classList.add('hidden')
    location.reload()
}

export const buyalert = () => { 
    return `<div class = "bg-slate-800 mt-5 rounded-2xl p-4 mt-40 hidden" id = "buyalert">
    <div class="flex justify-between items-center">
       <p class="text-sm font-semibold ml-4" id ="txtBuy">

       </p>
       <button class="bg-slate-900 rounded-full p-2 pr-4 w-1/12 hover:bg-slate-950 transition-all" id ="btnbuyclose">
        X
       </button>
    </div>
</div>`
}

