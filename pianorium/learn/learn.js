let learnOptions = document.querySelectorAll(".learn__option");
let learnOptionsWarapper = learnOptions[0].parentNode;

let learnOptionBlocks = document.querySelectorAll(".learn__option-block");
let learnOptionBlocksWrapper = learnOptionBlocks[0].parentNode;

let pianoToLearn = document.querySelector(".piano");
let pianoClone = pianoToLearn.cloneNode(true);

let optionFired = false;


learnOptionBlocks.forEach((el)=>{
    el.appendChild(pianoToLearn.cloneNode(true));
})

//opener animation
learnOptions.forEach((learnOption,i)=>{
    let optionChoosed = learnOption.getAttribute("data-learn-option");
    let blockChoosed = learnOptionBlocks[optionChoosed-1];
    learnOption.addEventListener("click", (event)=>{
        if (!optionFired) {
            learnOptionBlocksWrapper.style.display = "block";
            learnOptions.forEach((learnOption)=>{
                learnOption.classList.add("_active")
            })
            learnOption.classList.add("_choosed")
            
            setTimeout(()=>{
                learnOptionBlocksWrapper.classList.add("_active");
            }, 0);
            setTimeout(()=>{
                blockChoosed.classList.add("_choosed");
                setTimeout(()=>{
                    blockChoosed.style.opacity="1"
                },400);
            },399);
        }
        else {

            learnOptionBlocks.forEach((optionBlock)=>{
                optionBlock.classList.remove("_choosed");
                blockChoosed.style.opacity="0";
            });

            learnOptions.forEach((learnOption)=>{
                learnOption.classList.remove("_choosed");
            });

            learnOption.classList.add("_choosed");
            blockChoosed.classList.add("_choosed");

            setTimeout(()=>{
                blockChoosed.style.opacity="1"
                blockChoosed.style.flexGrow="1"
            },0);

        }

        optionFired = true;
    });
});

// piano


// 1 option
let chordsDisplay = document.querySelector('.learn__chords-display');
let chords = {
    "A major (A)": [["A2", "Db3", "E3"], ["A3", "Db4", "E4"]],
    "A minor (Am)": [["A2", "C3", "E3"], ["A3", "C4", "E4"]],
    "C major (C)": [["C2", "E2", "G2"], ["C3", "E3", "G3"], ["C4", "E4", "G4"]],
    "C minor (Cm)": [["C2", "Eb2", "G2"], ["C3", "Eb3", "G3"], ["C3", "Eb3", "G3"]],
    "D major (D)": [["D2", "Gb2", "A2"], ["D3", "Gb3", "A3"], ["D4", "Gb4", "A4"]],
    "D minor (Dm)": [["D2", "F2", "A2"], ["D3", "F3", "A3"], ["D4", "F4", "A4"]],
    "E major (E)": [["E2", "Ab2", "B2"], ["E3", "Ab3", "B3"], ["E4", "Ab4", "B4"]],
    "E minor (Em)": [["E2", "G2", "B2"], ["E3", "G3", "B3"], ["E4", "G4", "B4"]],
    "F major (F)": [["F2", "A2", "C3"], ["F3", "A3", "C4"], ["F4", "A4", "C5"]],
    "F minor (Fm)": [["F2", "Ab2", "C3"], ["F3", "Ab3", "C4"], ["F4", "Ab4", "C5"]],
    "G major (G)": [["G2", "B2", "D3"], ["G3", "B3", "D4"]],
    "G minor (Gm)": [["G2", "Bb2", "D3"], ["G3", "Bb3", "D4"]],
}

let prevChordNumber=-1;
let randomChoose = function(Obj, prev) {
    let len = Object.keys(Obj).length;
    let res = Math.floor(Math.random()*len);
    return res===prev ? randomChoose(Obj):res;
}

let rightChordNumber = randomChoose(chords, prevChordNumber);
let rightChord = Object.keys(chords)[rightChordNumber];
let rightChordAnswers = chords[rightChord];
let chordChoosed = [];
let canChoose = true;
let learnResult1 = false;

chordsDisplay.innerHTML = rightChord;

let learnPiano1 = document.querySelector(".learn__option-block_1 .piano");
let learnPiano1Buttons = document.querySelectorAll(".learn__option-block_1 .piano .piano__button");


learnPiano1Buttons.forEach((button)=>{
    button.innerHTML = " ";
    button.addEventListener("click", ()=>{
        let noteName = button.getAttribute("data-piano-key");
        if (canChoose) {
            if(chordChoosed.length<3) {
                if(!chordChoosed.includes(noteName)) {
                    chordChoosed.push(noteName);
                    button.classList.add("_choosed");
                    console.log(chordChoosed);
                }
                else {
                    chordChoosed.splice(chordChoosed.indexOf(noteName),1);
                    button.classList.remove("_choosed");
                    console.log(chordChoosed);
                }
            }
            else {
                if(chordChoosed.includes(noteName)) {
                    chordChoosed.splice(chordChoosed.indexOf(noteName),1);
                    button.classList.remove("_choosed");
                    console.log(chordChoosed);
                }
                else {
                    console.log(chordChoosed);
                }
            }
        } 
    })
});

let admitButton1 = document.querySelector(".learn__option-block_1 .learn__control-button_1");
let refreshButton1 = document.querySelector(".learn__option-block_1 .learn__control-button_2");

admitButton1.addEventListener("click", (event)=>{
    chordChoosed = chordChoosed.sort()
    for( let i = 0; i<rightChordAnswers.length; i++) {
        let answerI = rightChordAnswers[i];
        let result = true;
        for( let j = 0; j<answerI.length; j++) {
            if(answerI.sort()[j]!==chordChoosed[j]) {
                result = false;
            }
        }
        if (result) {
            learnResult1 = true;
        }
    }
    if(learnResult1) {
        document.querySelectorAll(".learn__option-block_1 .piano__button._choosed").forEach((btn)=>{
            btn.classList.add("_right");
            canChoose = false;
            refreshButton1.innerHTML = "Next";
            prevChordNumber = rightChordNumber;
        });
    }
    else {
        alert("take another guess");
    }
});

refreshButton1.addEventListener("click", (event)=>{
    prevChordNumber = rightChordNumber;
    rightChordNumber = randomChoose(chords, prevChordNumber);
    rightChord = Object.keys(chords)[rightChordNumber];
    rightChordAnswers = chords[rightChord];
    chordChoosed = [];
    canChoose = true;
    learnResult1 = false;
    chordsDisplay.innerHTML = rightChord;
    refreshButton1.innerHTML = "Refresh";
    learnPiano1Buttons.forEach((btn)=>{
        btn.classList.remove("_choosed");
        btn.classList.remove("_right");
    })
});

//2 option
let learnPiano2Buttons = document.querySelectorAll(".learn__option-block_2 .piano .piano__button");
let staveImages = {};

learnPiano2Buttons.forEach((btn)=>{
    let btnNote = btn.getAttribute("data-piano-key");
    if (btnNote=="C3") {
        btn.innerHTML = "C3";
    }
    else {
        btn.innerHTML = ' '
    }
    if (btnNote[1]!=="b"&&!["C2", "D2"].includes(btnNote)) {
        staveImages[btnNote] = "images/imagesStave/"+btnNote+".svg"
    }
});

let prevImageNumber = -1;
let imageNumber = randomChoose(staveImages, prevImageNumber);
let imageAnswer = Object.keys(staveImages)[imageNumber];
let imageScreen = document.querySelector(".learn__task_2 img");
imageScreen.src = staveImages[imageAnswer];
let noteChoosed = "";
let canChoose2 = true;

learnPiano2Buttons.forEach((btn)=>{
    btn.addEventListener("click", (event)=>{
        if (noteChoosed!==btn.getAttribute("data-piano-key")&&canChoose2) {
            if(document.querySelector(".learn__option-block_2 .piano__button._choosed")) {
                document.querySelector(".learn__option-block_2 .piano__button._choosed").classList.remove("_choosed");
            }    
            noteChoosed=btn.getAttribute("data-piano-key");
            btn.classList.add("_choosed");
        }
        else {
            noteChoosed = "";
            btn.classList.remove("_choosed");
        }
    });
});

let admitButton2 = document.querySelector(".learn__option-block_2 .learn__control-button_1");
let refreshButton2 = document.querySelector(".learn__option-block_2 .learn__control-button_2");

admitButton2.addEventListener("click", (event)=>{
    if (noteChoosed===imageAnswer) {
        document.querySelector(".learn__option-block_2 .piano__button._choosed").classList.add("_right");
        canChoose2 = false;
        refreshButton2.innerHTML = "Next";
    }
    else {
        alert("take another guess");
    }
});
refreshButton2.addEventListener("click", (event)=>{
    learnPiano2Buttons.forEach((btn)=>{
        btn.classList.remove("_right");
        btn.classList.remove("_choosed");
    });
    prevImageNumber = imageNumber;
    imageNumber = randomChoose(staveImages, prevImageNumber);
    imageAnswer = Object.keys(staveImages)[imageNumber];
    imageScreen = document.querySelector(".learn__task_2 img");
    imageScreen.src = staveImages[imageAnswer];
    noteChoosed = "";
    canChoose2 = true;
    refreshButton2.innerHTML = "Refresh";
});

//3 option
let soundImg = document.querySelector(".learn__sound-display img");
let learnPiano3Buttons = document.querySelectorAll(".learn__option-block_3 .piano .piano__button");
let sounds = {};
let prevSoundNumber = -1;
learnPiano3Buttons.forEach((btn)=>{
    let btnNote = btn.getAttribute("data-piano-key");
    if (btnNote!=="C3") {
        btn.innerHTML = " ";
    }
    else {
        btn.innerHTML = "C3";
    }
    if (true) {
        sounds[btnNote]=`sounds/Piano.pp.${btnNote}.wav`;
    }
});

let soundAnswerNumber = 0;
let soundAnswer = Object.keys(sounds)[soundAnswerNumber];
let soundChoosed = '';

soundImg.addEventListener("click", (event)=>{
    let sound = new Audio(sounds[soundAnswer]);
    sound.play();
});
learnPiano3Buttons.forEach((btn)=>{btn.addEventListener("click", (event)=>{
        let sound = new Audio(sounds[btn.getAttribute("data-piano-key")]);
        sound.play();
        if (soundChoosed !== btn.getAttribute("data-piano-key")) {
            if(document.querySelector(".learn__option-block_3 .piano .piano__button._choosed")){
                document.querySelector(".learn__option-block_3 .piano .piano__button._choosed").classList.remove("_choosed");
            }
            btn.classList.add("_choosed");
            soundChoosed=btn.getAttribute("data-piano-key");
        }
        // else {
        //     soundChoosed = "";
        //     btn.classList.remove("_choosed");
        // }
    });
    });

let admitButton3 = document.querySelector(".learn__option-block_3 .learn__control-button_1");
let refreshButton3 = document.querySelector(".learn__option-block_3 .learn__control-button_2");

admitButton3.addEventListener("click", (event)=>{
    if(soundAnswer === soundChoosed) {
        document.querySelector(".learn__option-block_3 .piano .piano__button._choosed").classList.add("_right");
    }
    else {
        alert("take another guess");
    }
});
refreshButton3.addEventListener("click", (event)=>{
    prevSoundNumber = soundAnswerNumber;
    learnPiano3Buttons.forEach((btn)=>{
        btn.classList.remove("_choosed");
        btn.classList.remove("_right");
    })
    soundAnswerNumber = randomChoose(sounds, prevSoundNumber);
    soundAnswer = Object.keys(sounds)[soundAnswerNumber];
    soundChoosed = '';
});

//refreshing after changing option;
let imitateClicking = new Event("click");
learnOptions.forEach((option,i)=>{
    option.addEventListener("click", (event)=>{
        [refreshButton1, refreshButton2, refreshButton3].forEach((refreshButton,i1)=>{
            if(i1!==i){
                refreshButton.dispatchEvent(imitateClicking);
            } 
        });
    });
})
