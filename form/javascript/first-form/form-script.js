const listElemets = document.querySelectorAll('form ul li')
const listText = document.querySelectorAll('form ul li a')
let lastLabelPassed;

function changeLabelStyle(n){
    
    // return the last label selected to its original style
    if(lastLabelPassed != undefined){
        listElemets[lastLabelPassed].style.backgroundColor = 'rgb(231, 231, 231)';
        listElemets[lastLabelPassed].style.borderColor = 'rgb(231, 231, 231)';
        listElemets[lastLabelPassed].style.padding = '0 0 0 0';
        
        listText[lastLabelPassed].style.textDecoration = 'none';
        listText[lastLabelPassed].style.color = 'black';
    }

    // gives a selected style to the different labels
    listElemets[n].style.backgroundColor = 'white';
    listElemets[n].style.borderColor = 'white';
    listElemets[n].style.padding = '5px 0 0 0';
    
    listText[n].style.textDecoration = 'underline';
    listText[n].style.color = 'red';
    
    lastLabelPassed = n;  // holds the last value passed

}

// scroll to the form area when click over
function scrollToForm(n){
    if(n == 0){
        window.scrollTo(0, 350);
    }else if(n == 1){
        window.scrollTo(0, 390);
    }else if(n == 2){
        window.scrollTo(0, 400);
    }else if(n == 3){
        window.scrollTo(0, 500);
    }else if(n == 4){
        window.scrollTo(0, 500);
    }
}

