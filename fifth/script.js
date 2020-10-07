//preload
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }

//header
var referene_dot_1 = document.getElementById('reference-down_dot__1');
var referene_dot_2 = document.getElementById('reference-down_dot__2');
var referene_dot_3 = document.getElementById('reference-down_dot__3');

function refference_down__hover() {
    referene_dot_1.style.transform='translateY(-10px)';
    referene_dot_2.style.transform='translateY(-3px)';
    referene_dot_1.style.backgroundColor='#e6e4e4'
    referene_dot_2.style.backgroundColor='#c5c5c5'
    referene_dot_3.style.backgroundColor='#8b8b8b'
}

function refference_down__unhover() {
    referene_dot_1.style.transform='translateY(0)';
    referene_dot_2.style.transform='translateY(0)';
    referene_dot_1.style.backgroundColor=''
    referene_dot_2.style.backgroundColor=''
    referene_dot_3.style.backgroundColor=''
}