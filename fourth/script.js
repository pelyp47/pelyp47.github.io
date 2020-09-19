let dotnav_butt1_func = function () {
    document.getElementById("dotnav_butt1").style.backgroundColor='#00e0d0'
    document.getElementById("dotnav_butt2").style.backgroundColor=''
    document.getElementById("dotnav_butt3").style.backgroundColor=''
    document.getElementById("dotnav_butt4").style.backgroundColor=''
}

let dotnav_butt2_func = function () {
    document.getElementById("dotnav_butt2").style.backgroundColor='#00e0d0'
    document.getElementById("dotnav_butt1").style.backgroundColor=''
    document.getElementById("dotnav_butt3").style.backgroundColor=''
    document.getElementById("dotnav_butt4").style.backgroundColor=''
}

let dotnav_butt3_func = function () {
    document.getElementById("dotnav_butt3").style.backgroundColor='#00e0d0'
    document.getElementById("dotnav_butt1").style.backgroundColor=''
    document.getElementById("dotnav_butt2").style.backgroundColor=''
    document.getElementById("dotnav_butt4").style.backgroundColor=''
}

let dotnav_butt4_func = function () {
    document.getElementById("dotnav_butt4").style.backgroundColor='#00e0d0'
    document.getElementById("dotnav_butt1").style.backgroundColor=''
    document.getElementById("dotnav_butt2").style.backgroundColor=''
    document.getElementById("dotnav_butt3").style.backgroundColor=''
}

function playPause() { 
    if (document.getElementById('video_about').paused) {
        document.getElementById('video_about').play();
        document.getElementById('video_icon').style.display='none'
        document.getElementById('video_h1').style.display='none'
    } 
    else {
        document.getElementById('video_about').pause(); 
        document.getElementById('video_icon').style.display='inline-block'
    }
  } 
function move() {
    document.getElementById('right_arrow_works').style.transform='translateX(10px)'
}

function back() {
    document.getElementById('right_arrow_works').style.transform='translateX(0)'
}

var test_counter = 3;
var test_persons1 = ['PERSON_1_1','PERSON_1_2','PERSON_1_3','PERSON_1_4','PERSON_1_5']
var test_persons2 = ['PERSON_2_1','PERSON_2_2','PERSON_2_3','PERSON_2_4','PERSON_2_5']
var order = [1, 2, 3, 4, 5]

function left_test() {
    test_counter+=1
    if (test_counter>=6){
        test_counter=1
    }
    
    for (let i = 0; i<5; i++){
        order[i]-=1;
        if (order[i]<1){
            order[i]=5
        }
    }
}

function right_test() {
    test_counter-=1
    if (test_counter<=0){
        test_counter=5
    }
    for (let i = 0; i<5; i++){
        order[i]+=1;
        if (order[i]>5){
            order[i]=1
        }
    }
}

function test_counter_change() {
    document.getElementById('testimonial_person').innerHTML=test_persons1[test_counter-1];
    document.getElementById('testimonial_person2').innerHTML=test_persons2[test_counter-1];

    document.getElementById('testimonial_picture_1').style.order=order[0]
    document.getElementById('testimonial_picture_2').style.order=order[1]
    document.getElementById('testimonial_picture_3').style.order=order[2]
    document.getElementById('testimonial_picture_4').style.order=order[3]
    document.getElementById('testimonial_picture_5').style.order=order[4]
    for (let i = 0; i < document.querySelectorAll('.testimonial_picture').length; i++){
        document.querySelectorAll('.testimonial_picture')[i].style.width='45px'
        document.querySelectorAll('.testimonial_picture')[i].style.heigth='45px'
        if (document.querySelectorAll('.testimonial_picture')[i].style.order=='3') {
            document.querySelectorAll('.testimonial_picture')[i].style.width='75px'
            document.querySelectorAll('.testimonial_picture')[i].style.height='75px'
        }
        }
    }
