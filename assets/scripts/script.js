const openMenuButton = document.getElementById('menu-button')
const closeMenuButton = document.getElementById('exit')
const menuMobile = document.querySelector('nav#mobile')
const bcgMobile = document.querySelector('.bcg-mobile')
const blurList = Array.from(document.querySelectorAll('.blur'))

console.log(blurList)

function addBlur(array){
    array.map((item)=>{
        item.classList.add('onblur')
        item.classList.remove('outblur')
    })
}

function removeBlur(array){
    array.map((item)=>{
        item.classList.remove('onblur')
        item.classList.add('outblur')
    })
}

openMenuButton.addEventListener('click', (e) => {
    e.preventDefault()
    menuMobile.classList.remove('close')
    menuMobile.classList.add('open')
    bcgMobile.classList.remove('close')
    bcgMobile.classList.add('open')
    addBlur(blurList)
})

closeMenuButton.addEventListener('click', (e) => {
    e.preventDefault()
    menuMobile.classList.remove('open')
    menuMobile.classList.add('close')
    bcgMobile.classList.add('close')
    bcgMobile.classList.remove('open')
    removeBlur(blurList)
})

