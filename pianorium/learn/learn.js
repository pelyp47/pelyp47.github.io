let learnOptions = document.querySelectorAll(".learn__option");
let learnOptionBlocks = document.querySelectorAll(".learn__option-block");

let pianoToLearn = document.querySelector(".piano");
let pianoClone = pianoToLearn.cloneNode(true)


learnOptionBlocks.forEach((el)=>{
    el.appendChild(pianoToLearn.cloneNode(true));
})