let arrowLinks = document.getElementsByClassName('arrow-link');


let arrowLinkClicked = function(arrowLinkNumber) {
    let item = arrowLinks[arrowLinkNumber];
    item.classList.add("arrow-link_clicked");
    item.classList.add("arrow-link_clicked__imp");

    setTimeout(()=>{
        item.classList.remove("arrow-link_clicked");
        item.classList.remove("arrow-link_clicked__imp");
    }, 1500)
}


// beautiness of form

let finput = document.querySelector(".footer__input");

let foutput = document.querySelector(".footer__output");

function inputFocus() {
    document.querySelector(".line_dark-gray").style.flexGrow='1';
    document.querySelector(".line_gray").style.flexGrow='0';
    finput.classList.add('_shown')
}

function inputLostFocus() {
    document.querySelector(".line_dark-gray").style.flexGrow='0';
    document.querySelector(".line_gray").style.flexGrow='1';
}

function beutifulInput() {
    if( foutput.childElementCount < finput.value.length) {
        for(let i = foutput.childElementCount; i<finput.value.length; i++ )  {
            foutput.innerHTML+="<span>"+finput.value.split('')[i]+'</span>'
            setTimeout(()=>{
                foutput.lastElementChild.style.opacity='1';
                foutput.lastElementChild.style.top='0';
            },0);
        }
    }
    else {
        for(let i = foutput.childElementCount; i>finput.value.length; i-- )  {
            foutput.lastElementChild.style.opacity='0';
            foutput.lastElementChild.style.top='-10px';
            setTimeout(()=>{
                foutput.lastChild.remove()
            },100);
        }
    }

    if (finput.value!='') {
        document.querySelector(".form-arrow").style.opacity='1';
        document.querySelector(".form-arrow").style.top='0px';
    }
    else {
        document.querySelector(".form-arrow").style.top='-20px';
        document.querySelector(".form-arrow").style.opacity='0';

    }
}