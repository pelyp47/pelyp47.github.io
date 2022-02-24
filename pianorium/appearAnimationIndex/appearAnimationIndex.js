
for (let i = 0; i < animatedElements.length; i++) {
    setTimeout(()=>{
        let el = animatedElements[i];
        el.style.transform = "translateX(0px)"
        el.style.opacity = "1";
    },200*i)
}