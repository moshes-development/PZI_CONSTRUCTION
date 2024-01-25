const nav = document.getElementById('nav') 
const menuIcon = document.getElementById('menuIcon')
const menuOptions =  document.getElementById('menuOptions')
const body = document.getElementById('body')
const closeMark = document.getElementById('closeMark')


menuIcon.onclick = () => {
    menuOptions.style.cssText = `left: 0; transition: ease-in-out 0.5s`
    // body.style.overflow = 'hidden'
}

closeMark.onclick = () => {
    menuOptions.style.cssText = `left: -100%; transition: ease-in-out 0.5s`
    // body.style.overflow = 'scroll'
}

// menuOptions.onclick = () => {
//     menuOptions.style.display = 'none'
//     body.style.overflow = 'scroll'
// }




