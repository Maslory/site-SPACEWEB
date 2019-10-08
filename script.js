let left = 0;
let timer;
let step = 430;
autoSlider();
let polosa= document.getElementById('polosa');

// document.getElementById('slider-right').onclick = function (){
//     let polosa = document.getElementById('polosa');
//     left = left - 430;
//     if(left <= -1290){
//         left = left + 430;
//     }
//     polosa.style.left = left +'px';
// }

// document.getElementById('slider-left').onclick = function (){
//     let polosa = document.getElementById('polosa');
//     left = left + 430;
//     if(left > 0){
//         left = 0;
//     }
//     polosa.style.left = left +'px';
    
// }

function autoSlider() {
    // if(window.innerWidth < )
    time = setTimeout (function () {
    if(left <= -1290){
        polosa.className = 'poloska';
        left = 0;
        polosa.style.left = 0;
        setTimeout(function(){
            polosa.className = 'polosa';
        },1500);
    }

        
    },1200);
   
    timer = setTimeout (function () {
        var polosa = document.getElementById('polosa');

      

        if(left == 0){
            circle2.style.background = 'rgb(216, 216, 216)';
    circle1.style.background = '#a5a5a5';
    circle3.style.background = '#a5a5a5';
        }

        if(left == -430){
            circle3.style.background = 'rgb(216, 216, 216)';
    circle2.style.background = '#a5a5a5';
    circle1.style.background = '#a5a5a5';
        }

        if(left == -860){
            circle1.style.background = 'rgb(216, 216, 216)';
            circle2.style.background = '#a5a5a5';
            circle3.style.background = '#a5a5a5';
        }

        left = left - step;
        if(left > 0){
            left = 0;
            step = 430;
        }

        polosa.style.left = left + 'px';
        
        console.log(left);
        autoSlider();
    },5000);

}

let circle1 = document.getElementById('circle1');
let circle2 = document.getElementById('circle2');
let circle3 = document.getElementById('circle3');
let eventCircleClick = 0;
let prevCircle = 0;

circle1.onclick = function() {
    circle1.style.background = 'rgb(216, 216, 216)';
    circle2.style.background = '#a5a5a5';
    circle3.style.background = '#a5a5a5';
        left = 0;
        polosa.style.left = 0 + 'px';
        eventCircleClick = 1;
}

circle2.onclick = function() {
    circle2.style.background = 'rgb(216, 216, 216)';
    circle1.style.background = '#a5a5a5';
    circle3.style.background = '#a5a5a5';
        left = -430;
        polosa.style.left = left + 'px';
        eventCircleClick = 2;
}

circle3.onclick = function() {
    circle3.style.background = 'rgb(216, 216, 216)';
    circle2.style.background = '#a5a5a5';
    circle1.style.background = '#a5a5a5';
        left = -860;
        polosa.style.left = left + 'px';
        eventCircleClick = 3;
}

