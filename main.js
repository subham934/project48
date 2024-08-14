let menuicon = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menuicon.onclick = () =>{
    navlist.classList.toggle('open')
    menuicon.classList.toggle('bx-x')
}