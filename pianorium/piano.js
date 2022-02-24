//notes

//2 octave
let C2 = new Audio("sounds/Piano.pp.C2.wav");
let Db2 = new Audio("sounds/Piano.pp.Db2.wav");
let D2 = new Audio("sounds/Piano.pp.D2.wav");
let Eb2 = new Audio("sounds/Piano.pp.Eb2.wav");
let E2 = new Audio("sounds/Piano.pp.E2.wav");
let F2 = new Audio("sounds/Piano.pp.F2.wav");
let Gb2 = new Audio("sounds/Piano.pp.Gb2.wav");
let G2 = new Audio("sounds/Piano.pp.G2.wav");
let Ab2 = new Audio("sounds/Piano.pp.Ab2.wav");
let A2 = new Audio("sounds/Piano.pp.A2.wav");
let Bb2 = new Audio("sounds/Piano.pp.Bb2.wav");
let B2 = new Audio("sounds/Piano.pp.B2.wav");
//3 octave
let C3 = new Audio("sounds/Piano.pp.C3.wav");
let Db3 = new Audio("sounds/Piano.pp.Db3.wav");
let D3 = new Audio("sounds/Piano.pp.D3.wav");
let Eb3 = new Audio("sounds/Piano.pp.Eb3.wav");
let E3 = new Audio("sounds/Piano.pp.E3.wav");
let F3 = new Audio("sounds/Piano.pp.F3.wav");
let Gb3 = new Audio("sounds/Piano.pp.Gb3.wav");
let G3 = new Audio("sounds/Piano.pp.G3.wav");
let Ab3 = new Audio("sounds/Piano.pp.Ab3.wav");
let A3 = new Audio("sounds/Piano.pp.A3.wav");
let Bb3 = new Audio("sounds/Piano.pp.Bb3.wav");
let B3 = new Audio("sounds/Piano.pp.B3.wav");
//4 octave
let C4 = new Audio("sounds/Piano.pp.C4.wav");
let Db4 = new Audio("sounds/Piano.pp.Db4.wav");
let D4 = new Audio("sounds/Piano.pp.D4.wav");
let Eb4 = new Audio("sounds/Piano.pp.Eb4.wav");
let E4 = new Audio("sounds/Piano.pp.E4.wav");
let F4 = new Audio("sounds/Piano.pp.F4.wav");
let Gb4 = new Audio("sounds/Piano.pp.Gb4.wav");
let G4 = new Audio("sounds/Piano.pp.G4.wav");
let Ab4 = new Audio("sounds/Piano.pp.Ab4.wav");
let A4 = new Audio("sounds/Piano.pp.A4.wav");
let Bb4 = new Audio("sounds/Piano.pp.Bb4.wav");
let B4 = new Audio("sounds/Piano.pp.B4.wav");

let C5 = new Audio("sounds/Piano.pp.C5.wav");

let pressedNote = ""
let noteScreen = document.querySelector(".note-screen");
//states
//2 octave
let C2Fired = false;
let Db2Fired = false;
let D2Fired = false;
let Eb2Fired = false;
let E2Fired = false;
let F2Fired = false;
let Gb2Fired = false;
let G2Fired = false;
let Ab2Fired = false;
let A2Fired = false;
let Bb2Fired = false;
let B2Fired = false;
//3 octave
let C3Fired = false;
let Db3Fired = false;
let D3Fired = false;
let Eb3Fired = false;
let E3Fired = false;
let F3Fired = false;
let Gb3Fired = false;
let G3Fired = false;
let Ab3Fired = false;
let A3Fired = false;
let Bb3Fired = false;
let B3Fired = false;
//4 octave
let C4Fired = false;
let Db4Fired = false;
let D4Fired = false;
let Eb4Fired = false;
let E4Fired = false;
let F4Fired = false;
let Gb4Fired = false;
let G4Fired = false;
let Ab4Fired = false;
let A4Fired = false;
let Bb4Fired = false;
let B4Fired = false;

let C5Fired = false;

let pianoKeys = document.querySelectorAll("[data-piano-key]");
let piano = pianoKeys[0].parentElement;

if (document.documentElement.clientWidth < 842) {
    for (let i = pianoKeys.length-1; i>pianoKeys.length-13; i--) {
        piano.removeChild(pianoKeys[i]);
    }
    if (document.documentElement.clientHeight < 580) {
        for (let i = 0; i<9; i++) {
            piano.removeChild(pianoKeys[i]);
        }
    } 
}


let keyEvenet1 = {
    "q": [C2, C2Fired, "sounds/Piano.pp.C2.wav", "C2"],
    "й": [C2, C2Fired, "sounds/Piano.pp.C2.wav", "C2"],
    "2": [Db2, Db2Fired, "sounds/Piano.pp.Db2.wav", "Db2"],
    "w": [D2, D2Fired, "sounds/Piano.pp.D2.wav", "D2"],
    "ц": [D2, D2Fired, "sounds/Piano.pp.D2.wav", "D2"],
    "3": [Eb2, Eb2Fired, "sounds/Piano.pp.Eb2.wav", "Eb2"],
    "e": [E2, E2Fired, "sounds/Piano.pp.E2.wav", "E2"],
    "у": [E2, E2Fired, "sounds/Piano.pp.E2.wav", "E2"],
    "r": [F2, F2Fired, "sounds/Piano.pp.F2.wav", "F2"],
    "к": [F2, F2Fired, "sounds/Piano.pp.F2.wav", "F2"],
    "5": [Gb2, Gb2Fired, "sounds/Piano.pp.Gb2.wav", "Gb2"],
    "t": [G2, G2Fired, "sounds/Piano.pp.G2.wav", "G2"],
    "е": [G2, G2Fired, "sounds/Piano.pp.G2.wav", "G2"],
    "6": [Ab2, Ab2Fired, "sounds/Piano.pp.Ab2.wav", "Ab2"],
    "y": [A2, A2Fired, "sounds/Piano.pp.A2.wav", "A2"],
    "н": [A2, A2Fired, "sounds/Piano.pp.A2.wav", "A2"],
    "7": [Bb2, Bb2Fired, "sounds/Piano.pp.Bb2.wav", "Bb2"],
    "u": [B2, B2Fired, "sounds/Piano.pp.B2.wav", "B2"],
    "г": [B2, B2Fired, "sounds/Piano.pp.B2.wav", "B2"],
    "i": [C3, C3Fired, "sounds/Piano.pp.C3.wav", "C3"],
    "ш": [C3, C3Fired, "sounds/Piano.pp.C3.wav", "C3"],
    "9": [Db3, Db3Fired, "sounds/Piano.pp.Db3.wav", "Db3"],
    "o": [D3, D3Fired, "sounds/Piano.pp.D3.wav", "D3"],
    "щ": [D3, D3Fired, "sounds/Piano.pp.D3.wav", "D3"],
    "0": [Eb3, Eb3Fired, "sounds/Piano.pp.Eb3.wav", "Eb3"],
    "p": [E3, E3Fired, "sounds/Piano.pp.E3.wav", "E3"],
    "з": [E3, E3Fired, "sounds/Piano.pp.E3.wav", "E3"],
    "[": [F3, F3Fired, "sounds/Piano.pp.F3.wav", "F3"],
    "х": [F3, F3Fired, "sounds/Piano.pp.F3.wav", "F3"],
    "=": [Gb3, Gb3Fired, "sounds/Piano.pp.Gb3.wav", "Gb3"],
    "]": [G3, G3Fired, "sounds/Piano.pp.G3.wav", "G3"],
    "ї": [G3, G3Fired, "sounds/Piano.pp.G3.wav", "G3"],
    "a": [Ab3, Ab3Fired, "sounds/Piano.pp.Ab3.wav", "Ab3"],
    "ф": [Ab3, Ab3Fired, "sounds/Piano.pp.Ab3.wav", "Ab3"],
    "z": [A3, A3Fired, "sounds/Piano.pp.A3.wav", "A3"],
    "я": [A3, A3Fired, "sounds/Piano.pp.A3.wav", "A3"],
    "s": [Bb3, Bb3Fired, "sounds/Piano.pp.Bb3.wav", "Bb3"],
    "і": [Bb3, Bb3Fired, "sounds/Piano.pp.Bb3.wav", "Bb3"],
    "x": [B3, B3Fired, "sounds/Piano.pp.B3.wav", "B3"],
    "ч": [B3, B3Fired, "sounds/Piano.pp.B3.wav", "B3"],
    "c": [C4, C4Fired, "sounds/Piano.pp.C4.wav", "C4"],
    "с": [C4, C4Fired, "sounds/Piano.pp.C4.wav", "C4"],
    "f": [Db4, Db4Fired, "sounds/Piano.pp.Db4.wav", "Db4"],
    "а": [Db4, Db4Fired, "sounds/Piano.pp.Db4.wav", "Db4"],
    "v": [D4, D4Fired, "sounds/Piano.pp.D4.wav", "D4"],
    "м": [D4, D4Fired, "sounds/Piano.pp.D4.wav", "D4"],
    "g": [Eb4, Eb4Fired, "sounds/Piano.pp.Eb4.wav", "Eb4"],
    "п": [Eb4, Eb4Fired, "sounds/Piano.pp.Eb4.wav", "Eb4"],
    "b": [E4, E4Fired, "sounds/Piano.pp.E4.wav", "E4"],
    "и": [E4, E4Fired, "sounds/Piano.pp.E4.wav", "E4"],
    "n": [F4, F4Fired, "sounds/Piano.pp.F4.wav", "F4"],
    "т": [F4, F4Fired, "sounds/Piano.pp.F4.wav", "F4"],
    "j": [Gb4, Gb4Fired, "sounds/Piano.pp.Gb4.wav", "Gb4"],
    "о": [Gb4, Gb4Fired, "sounds/Piano.pp.Gb4.wav", "Gb4"],
    "m": [G4, G4Fired, "sounds/Piano.pp.G4.wav", "G4"],
    "ь": [G4, G4Fired, "sounds/Piano.pp.G4.wav", "G4"],
    "k": [Ab4, Ab4Fired, "sounds/Piano.pp.Ab4.wav", "Ab4"],
    "л": [Ab4, Ab4Fired, "sounds/Piano.pp.Ab4.wav", "Ab4"],
    ",": [A4, A4Fired, "sounds/Piano.pp.A4.wav", "A4"],
    "б": [A4, A4Fired, "sounds/Piano.pp.A4.wav", "A4"],
    "l": [Bb4, Bb4Fired, "sounds/Piano.pp.Bb4.wav", "Bb4"],
    "д": [Bb4, Bb4Fired, "sounds/Piano.pp.Bb4.wav", "Bb4"],
    ".": [B4, B4Fired, "sounds/Piano.pp.B4.wav", "B4"],
    "ю": [B4, B4Fired, "sounds/Piano.pp.B4.wav", "B4"],
    "/": [C5, C5Fired, "sounds/Piano.pp.C5.wav", "C5"],
}

document.addEventListener("keydown", (event)=>{
    let pressedKey = event.key;

    if(playActive) {

        for(const [key, value] of Object.entries(keyEvenet1)) {

            //sound is value[0];
            //value[i] is firedState
            let soundLocation = value[2];
            let note = value[3];

            if ( (pressedKey==key) && (!value[1]) ) {

                value[0].play();
                value[1] = true;
                noteScreen.innerHTML = note;

                for( let i = 0; i < pianoKeys.length; i++) {
                    let pianoKey = pianoKeys[i]
                    if (note == pianoKey.getAttribute("data-piano-key")) {
                        console.log(pianoKey);
                        pianoKey.classList.toggle("_pressed");
                    }
                }

            }
        }

    }
})

document.addEventListener("keyup", (event)=>{

    let unpressedKey = event.key;

    if(playActive) {

        for(const [key, value] of Object.entries(keyEvenet1)) {
            //sound is value
            //value[i] is firedState
            let soundLocation = value[2];
            let note = value[3];

            if (unpressedKey===key) {
                value[0] = new Audio(soundLocation);
                value[1] = false;

                for( let i = 0; i < pianoKeys.length; i++) {
                    let pianoKey = pianoKeys[i]
                    if (note == pianoKey.getAttribute("data-piano-key")) {
                        pianoKey.classList.remove("_pressed");
                    }
                }

            }

        }

    }
})

for( let i = 0; i < pianoKeys.length; i++) {
    let pianoKey = pianoKeys[i];

    pianoKey.addEventListener("mousedown", (event)=>{

        let pianoKeyNote = pianoKey.getAttribute("data-piano-key");

        for(const [key, value] of Object.entries(keyEvenet1)) {

            if( (value[3] == pianoKeyNote) &&( !value[1]) ) {
                pianoKey.classList.toggle("_pressed");
                value[0].play();
                noteScreen.innerHTML = value[3];
                value[1] = true;
                break
            }

        }
    });

    pianoKey.addEventListener("mouseup", (event)=>{

        let pianoKeyNote = pianoKey.getAttribute("data-piano-key");

        for(const [key, value] of Object.entries(keyEvenet1)) {

            let soundLocation = value[2];

            if(value[3] == pianoKeyNote) {
                value[1] = false;
                value[0]= new Audio(soundLocation);
                pianoKey.classList.remove("_pressed");
                break
            }

        }
    });
    pianoKey.addEventListener("mouseout", (event)=>{
        let pianoKeyNote = pianoKey.getAttribute("data-piano-key");

        for(const [key, value] of Object.entries(keyEvenet1)) {

            if(value[3] == pianoKeyNote) {
                pianoKey.classList.remove("_pressed")
            }

        }
    })
}