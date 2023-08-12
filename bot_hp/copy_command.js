let comands = document.querySelectorAll(".info__comand")
let copyAlert = gsap.timeline({ repeat: -1, onStart: ()=>{
    copyAlert.pause()
}, onRepeat: ()=>{
    copyAlert.pause()
}})

copyAlert.to(".copy-alert", {
    opacity: 1,
    duration:.5
}).to(".copy-alert", {
    width: "200px",
    duration:.5
}).to(".copy-alert__char", {
    y:-100,
    opacity: 1,
    duration: 1,
    stagger: .1
}).to(".copy-alert__char", {
    y:100,
    opacity: 0,
    duration: 1,
    stagger: .1
}).to(".copy-alert", {
    width: "20px",
    duration:.5
}).to(".copy-alert", {
    opacity: 0,
    duration:.5
})

comands.forEach((comand, i)=>{
    comand.addEventListener("click", ()=>{
        text = comand.innerHTML

        text = text[0]==="‘"? text.slice(1):text
        text = text[text.length-1]==="’"? text.slice(0, text.length-1):text

        navigator.clipboard.writeText(text).then((res)=>{
            copyAlert.play()
        }, (fail)=>{})
    })
})