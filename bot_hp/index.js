let documentLoaded = false
document.addEventListener("DOMContentLoaded", function() {
    documentLoaded = true
});

const path1 = document.querySelector(".preloader__glasses path")
const path2 = document.querySelector(".preloader__lightning path")
const svg1 = document.querySelector(".preloader__glasses path")
const svg2 = document.querySelector(".preloader__lightning")

let animationCounter = 0
console.log('Total path length:', path1.getTotalLength(), path2.getTotalLength());
const glasses = gsap.timeline({ repeat: -1, onRepeat: () => {
    if (documentLoaded) {
        animationCounter++
    }
    if (animationCounter>1) {
        glasses.pause()
        let preloaderDisappear = gsap.timeline()
        preloaderDisappear.to(".preloader__text" , {opacity: 1, duration: 1})
        .to(".preloader__text" , {opacity: 0, duration: 1}, "+=.3")
        .to(".preloader", {opacity:0, duration:1, ease: "easeOut"}, "-=0.5")
        .to(".preloader", {display: "none", duration: 0}, "+=.2")
    }
},});
        glasses
            .to(".preloader__glasses", {
                strokeDashoffset: 0,
                opacity: 1,
                duration: 1.1,
                ease: "easeIn",
            }).to(".preloader__lightning", {
                opacity: 1,
                duration: 1.1,
            },"-=100%")
            .to(".preloader__glasses", {
                strokeDashoffset: -1347.442626953125,
                opacity: 0,
                duration: 1.3,
                ease: "easeOut",
            },"+=0.2").to(".preloader__lightning", {
                opacity: 0,
                duration: 1.3,
            },"-=100%");