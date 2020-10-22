var preload = document.querySelector('.preload');
window.onload = function() {
    preload.style.opacity='0';
    window.setTimeout(
        function() {
            preload.style.display='none';
        },
        2000
    );
}

var burger_menu_strip1=document.querySelector('.burger-menu__strip1');
var burger_menu_strip2=document.querySelector('.burger-menu__strip2');
var burger_menu_strip3=document.querySelector('.burger-menu__strip3');
var navItems = document.getElementsByClassName('nav__navitem');

var burger_open = function() {
    burger_menu_strip1.classList.toggle('burger-menu__strip1--opened');
    burger_menu_strip2.classList.toggle('burger-menu__strip2--opened');
    burger_menu_strip3.classList.toggle('burger-menu__strip3--opened');
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].classList.toggle('nav__navitems--opened');
    }
}