if (document.documentElement.clientWidth < 580) {
    let usualMenu = document.querySelectorAll(".menu");
    for ( let i = 0; i < usualMenu.length; i++) {
        usualMenu[i].parentNode.removeChild(usualMenu[i]);
    }
}

let burgerMenuOpener = document.querySelectorAll(".burger-menu__strips");

for ( let i = 0; i < burgerMenuOpener.length; i++) {
    burgerMenuOpener[i].addEventListener( "click", (event)=>{
        burgerMenuOpener[i].parentNode.parentNode.parentNode.classList.toggle("_burgerMenuOpenned");
    });
}