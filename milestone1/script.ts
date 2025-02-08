const toggleButtone = document.getElementById('btn-up') as HTMLButtonElement
const skillse = document.getElementById('skills') as HTMLElement

toggleButtone.addEventListener('click', ()=> {
    if(skillse.style.display === 'none') {
        skillse.style.display = 'block'
    } else {
        skillse.style.display = 'none'
    }
})