window.onload = function() {
        setTimeout(()=>{
            for (let i = 0; i<document.querySelectorAll('.stripe').length; i++) {
                    document.querySelectorAll('.stripe')[i].style.height="0%";
            }
        },1500);
        setTimeout(()=>{
            for (let i = 0; i<document.querySelectorAll('.horizontal-line').length; i++) {
                document.querySelectorAll(".horizontal-line")[i].style.animationIterationCount='1';
                document.querySelectorAll(".vertical-line")[i].style.animationIterationCount='1';
            }
        },500)
        setTimeout(()=>{
            document.querySelector(".preloader").style.display="none";
        }, 2900)
    
    

    //animate on scroll
    let animItems = document.querySelectorAll('._anim-items');

    setTimeout(()=>{
        window.addEventListener("scroll", animOnScroll);

        function animOnScroll() {
            for (let i = 0; i< animItems.length; i++) {
                let animItem = animItems[i];
                let animItemHeight = animItem.offsetHeight;
                let animItemOffset = animItem.getBoundingClientRect().top+pageYOffset||document.documentElement.scrollTop;
                let animStart = 10;

                let animItemPoint = window.innerHeight - animItemHeight/animStart;
                if (animItemHeight> window.innerHeight) {
                    animItemPoint = window.innerHeight - window.innerHeight/animStart;
                }

                if ((pageYOffset>animItemOffset-animItemPoint)&& (pageYOffset< (animItemOffset+animItemHeight))) {
                    animItem.classList.add("_active")
                }
                // else { (if you want to repeat animation again and again)
                //     animItem.classList.remove("_active")
                // }
            }
        }
        animOnScroll();
    },1800);
}

