const carouselSlide = document.querySelector('#container');
const carouselImages = document.querySelectorAll('#container .shell');
const carouselText = document.querySelectorAll('#container .shell-text');

var dots = document.getElementsByClassName("dot");
var buttons = document.getElementsByClassName('btn-play-pause');
var dotsTwo = document.getElementsByClassName('dot-two')


let counter = 0;
var height;
var size; 
var l = 0;
var condition; // used to move the image at the end
var comp;
var num; // will have a value of -1 or 1, used to revert the flow of the transitions

/* this function moves the 'shell' container and the text inside */
function changeImage(num){
    this.num = num;
    size = carouselImages[0].clientWidth;
    if (num == 1){
        condition = counter - 1 == - 1 ? 2 : counter - 1; // cuando se presiona el next button
    }else if(num == -1){
        condition = counter == 2 ? 0 : 1 + counter;// cuando se presiona el prev button
    }

    

    for(var i = 0; i < carouselImages.length - 1; i++){

        carouselImages[counter].style.transition = "transform 0.3s ease-in-out";
        carouselImages[counter].style.transform = 'translate(' + ((-size + l) * num) + 'px)';

        carouselText[counter].style.transition = "transform 0.3s ease-in-out";
        carouselText[counter].style.transform = 'translate(' + ((-size + l) * num) + 'px)';
        
        if(i == 0){
            l = size;
            if (counter == 2 && num == 1) {counter = -1;}
        }else if(i == 1){ 
            l = 0;

            // para counter sea 1 al momento de mover los puntos
            if(window.outerWidth <= 784){
                changeDotAppearence(counter, false);
                }else if(window.outerWidth > 784){
                changeDotAppearence(counter, true);
                }

            return; // esto permite que el mismo numero se repita de nuevo
        }
        
        if(num == -1 && counter == 0){
            counter = 2
        }else if(num == -1 && counter != 0){
            counter--;
        } else if(num == 1){
            counter++;
        }
    }
}


carouselSlide.addEventListener('transitionend', () => {
    // elimina la animacion de todas las imagenes
    for(var i = 0; i < carouselImages.length; i++){
        carouselImages[i].style.transition = "none";
        carouselText[i].style.transition = "none";
    }
    // mueve la primera imagen al final
    if(condition > -1){

    carouselImages[condition].style.transform = 'translate(' + (size * num) + 'px)';
    carouselText[condition].style.transform = 'translate(' + (size * num) + 'px)';
    }
   
});

// change dots style
function changeDotAppearence(n, b){
    if(b == true){
        // este loop le da el color original a todos los puntos
        for(var i = 0; i < dots.length; i++){
            dots[i].style.background = 'rgba(255, 255, 255, 0.562)';
        }
        for(var i = 0; i < dots.length; i++){
            dots[i].style.width = '10px';
        }
        for(var i = 0; i < dots.length; i++){
            dots[i].style.borderRadius = '20px';
        }
        
        dots[n].style.background = 'rgba(255, 255, 255)';
        dots[n].style.width = '17px';
        dots[n].style.borderRadius = '10px';
        
    }else if(b == false){

        // este loop le da el color original a todos los puntos
        for(var i = 0; i < dots.length; i++){
            dotsTwo[i].style.background = 'rgba(255, 255, 255, 0)';
        }
        
        dotsTwo[n].style.background = 'rgba(255, 255, 255)';
    }
}

// la funcion de los puntos
function moveEachOne(num, b){
    var style = window.getComputedStyle(carouselImages[num]);
    var matrix = new WebKitCSSMatrix(style.transform);
    
    if(matrix.e > 0){
        counter = num == 0 ? 2 : num - 1;
        changeImage(1);
    }else if(matrix.e < 0){
        counter = num == 2 ? 0 : num + 1;
        changeImage(-1);
    }
    changeDotAppearence(num, b);
}

// change play/pause buttons appearence
function change_button(event, n){
    if(event.type == 'mousedown'){
        if(n == 1){
            buttons[0].src = 'header/icons/pause_circle_filled_blue_24dp.svg';
        }else if(n == 0){
            buttons[1].src = 'header/icons/play_circle_filled_blue_24dp.svg';
        }
    }

    if(event.type == 'mouseup'){
        if(n == 0){
            buttons[0].src = 'header/icons/pause_circle_filled_white_24dp.svg';
            startCarousel();
        }else if(n == 1){
            buttons[1].src = 'header/icons/play_circle_filled_white_24dp.svg';
            clearInterval(runner);
        }
        
        for(var i = 0; i < buttons.length; i++){
            buttons[i].style.display = 'none';
        }
        buttons[n].style.display = 'block';
    }
}

// sends a boolean value depending of the dosts displayed
if(window.outerWidth <= 784){
changeDotAppearence(0, false);
}else if(window.outerWidth > 784){
changeDotAppearence(0, true);
}

// parece ser que hay un delay equivalente a la frecuencia de ejecucion

function startCarousel(){
    runner = setInterval(function(){
        changeImage(1);
    }, 7000);
}

startCarousel();  

// modifies the size and position of the images and text
function globalResize(){
    a = document.getElementsByClassName('shell');
    height = a[0].clientHeight;
    size = carouselImages[0].clientWidth; 
    
    for(var i = 0; i < carouselImages.length; i++){
        var style = window.getComputedStyle(carouselImages[i]);
        var matrix = new WebKitCSSMatrix(style.transform);
        
        if(matrix.e > 0){
            comp = size * 1
        }else if(matrix.e == 0){
            comp = size * 0
        }else if(matrix.e < 0){
            comp = size * -1
        }

        carouselImages[i].style.transform = 'translate(' + (comp) + 'px)';
        carouselText[i].style.transform = 'translate(' + (comp) + 'px)';
    }

    document.getElementById('container').style.maxHeight = (height) + 'px';
}

