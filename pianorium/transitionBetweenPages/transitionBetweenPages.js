let transitionLinks = document.querySelectorAll("[data-transition-link]");
let transitionBlock = document.querySelector(".transition-block");
let transitionClef = document.querySelector(".transition__treble-clef");
let currentPage = "main-header";
let playActive = false

for (let i = 0; i < transitionLinks.length; i++) {
    let transitionLink = transitionLinks[i];
    transitionLink.addEventListener("click", (event)=>{
        event.preventDefault();
        transitionBlock.classList.toggle("_active");
        transitionClef.classList.toggle("_active");
        let pageToClose = document.querySelector("." + currentPage);
        setTimeout(()=>{
            pageToClose.classList.remove("_burgerMenuOpenned");
            pageToClose.style.display = "none";
            currentPage = transitionLink.getAttribute("data-transition-link");
            playActive = (currentPage === "play");
            let pageToOpen = document.querySelector("."+currentPage);
            pageToOpen.style.display = "";
        }, 500);

        setTimeout(()=>{
            transitionBlock.classList.toggle("_active");
            transitionClef.classList.toggle("_active");
        },3600);
    })
}