let readSlider = document.querySelector(".read__slider");
let readSliderItems = readSlider.querySelectorAll(".slider__item");
let sliderIndicatorWrapper = readSlider.querySelector(".slider__indicator-wrapper");
let indicatorNumber = 1;

readSliderItems[indicatorNumber-1].classList.add("_active");


for (let i = 0; i < readSliderItems.length; i++) {
    readSliderItems[i].ontransitionend = (event)=> {
        readSliderItems.forEach((el)=>{
            el.style.zIndex="0";
            el.style.transition= "top 0s";
        });
    }
}

function changeIdicationNumber(newNumber) {
    readSliderItems[newNumber-1].style.zIndex = "3";

    readSliderItems[newNumber-1].style.transition= "top .7s";
    readSliderItems[indicatorNumber-1].style.transition= "top .7s";

    readSliderItems[newNumber-1].style.top = "0";

    readSliderItems.forEach((el, i)=>{
        if (i+1<newNumber) {
            el.style.top = "-100vh"
        } else if(i+1>newNumber){
            el.style.top = "100vh"
        }
    })

    indicatorNumber = newNumber

}

changeIdicationNumber(indicatorNumber)


//creating indicators automatically
for( let i = 0; i < readSliderItems.length; i++) {
    let indicator = document.createElement('div');
    indicator.classList.add("slider__indicator")
    indicator.dataset.sliderIndicatorId = i + 1;
    sliderIndicatorWrapper.appendChild(indicator);
}

//highlighting first indicator
let sliderIndicators = sliderIndicatorWrapper.querySelectorAll(".slider__indicator");
sliderIndicators[indicatorNumber-1].classList.add("_active");

//indicator animation
for (let i = 0; i < sliderIndicators.length; i++) {
    let indicator = sliderIndicators[i];
    indicator.addEventListener("click", (event)=>{
        sliderIndicatorWrapper.querySelector(".slider__indicator._active").classList.remove("_active");
        indicator.classList.add("_active");
        changeIdicationNumber(indicator.dataset.sliderIndicatorId);
    });
}


