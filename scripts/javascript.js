const panel = document.querySelectorAll('.panel');

panel.forEach(panel =>{
    panel.addEventListener('click', ()=>{
        removeActivClass()
        panel.classList.add('activ')
    })
})

function removeActivClass(){
    panel.forEach(panel =>{
        panel.classList.remove('activ')
    })
}