let preloader = document.querySelector(".preloader")
let path = document.querySelector('.preloader__terble-clef_path');
let trebleClef = document.querySelector('.preloader__treble-clef');
let pathLength = path.getTotalLength();
let pathLengthDouble = pathLength*2;
let animatedElements = document.querySelectorAll("[data-animation]");
for (let i = 0; i < animatedElements.length; i++) {
    let item = animatedElements[i];
    item.classList.add('_loading');
}
console.log(pathLength);
console.log(pathLengthDouble);//stroke-dashoffset for animation


window.onload = function () {
    preloader.classList.add('_pageLoaded');
    trebleClef.addEventListener("animationend", function() {
        preloader.style.opacity="0";
        preloader.ontransitionend=()=>{
            preloader.style.display="none";
            let appearAnimation = document.createElement("script");
            appearAnimation.setAttribute("src","appearAnimationIndex/appearAnimationIndex.js")
            document.head.appendChild(appearAnimation);
        }
    })
}