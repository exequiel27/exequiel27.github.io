const menu =document.querySelector(".menu");
const abrirmenubtn =document.querySelector(".abrir");
const cerrarmenubtn =document.querySelector(".cerrar");

function togglemenu() {
    menu.classList.toggle("menu_ab")
}

abrirmenubtn.addEventListener("click", togglemenu) 
cerrarmenubtn.addEventListener("click", togglemenu) 