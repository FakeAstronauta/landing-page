var navBarHeight = 71;
var link_container_height = 71;
var link_container_2_height = 55;
var link_container_3_height = 69;

var prevScrollpos = window.pageYOffset;

// al cargar la pagina se establecen estas medidas si es menor que 1000
function load_(){
    if(window.outerWidth < 800){
        document.getElementById("nav-bar").style.height = "50px";
        var linkContaineers = document.getElementsByClassName("link-container");
        for(var i=0; i < linkContaineers.length; i++){
            linkContaineers[i].style.height = "50px";    
        }
        var linkContaineersTwo = document.getElementsByClassName("link-container-2");
        for(var i=0; i < linkContaineersTwo.length; i++){
            linkContaineersTwo[i].style.height = "50px";    
        }
        var linkContaineersThree = document.getElementsByClassName("link-container-3");
        for(var i=0; i < linkContaineersThree.length; i++){
            linkContaineersThree[i].style.height = "50px";
        }    
    }
}

function hide_on_scroll(){
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-bar").style.top = "0";
    } else {
        document.getElementById("nav-bar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

function change_on_scroll(){

    // si la barra baja mas de 30
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        if(window.outerWidth > 800){
            navBarHeight = 40;
            document.getElementById("nav-bar").style.height = "40px";

            var linkContaineers = document.getElementsByClassName("link-container");
            link_container_height = 40;
            for(var i=0; i < linkContaineers.length; i++){
                linkContaineers[i].style.height = "40px";    
            }
            var linkContaineersTwo = document.getElementsByClassName("link-container-2");
            link_container_2_height = 39;
            for(var i=0; i < linkContaineersTwo.length; i++){
                linkContaineersTwo[i].style.height = "39px";    
            }
            var linkContaineersThree = document.getElementsByClassName("link-container-3");
            link_container_3_height = 40;
            for(var i=0; i < linkContaineersThree.length; i++){
                linkContaineersThree[i].style.height = "40px";    
            }
            document.getElementById("header-links").style.height = "40px";
            document.getElementById("nav-bar").style.fontSize = "13px";
            document.getElementById("logo").style.width = "80px";
        }else if(window.outerWidth < 800){
            navBarHeight = 40;
            link_container_height = 40;
            link_container_2_height = 39;
            link_container_3_height = 40;

            document.getElementById("header-links").style.height = "40px";
            document.getElementById("nav-bar").style.fontSize = "13px";
            document.getElementById("logo").style.width = "80px";
            // document.getElementById("nav-bar").style.display = 'none' ;
            hide_on_scroll();
        }

    }else if(document.body.scrollTop < 30 || document.documentElement.scrollTop < 30){
        if(window.outerWidth > 800){
            document.getElementById("nav-bar").style.display = 'flex';
            document.getElementById("nav-bar").style.height = "71px";
            navBarHeight = 71;
            var linkContaineers = document.getElementsByClassName("link-container");
            link_container_height = 71;
            for(var i=0; i < linkContaineers.length; i++){
                linkContaineers[i].style.height = "71px";    
            }
            var linkContaineersTwo = document.getElementsByClassName("link-container-2");
            link_container_2_height = 55;
            for(var i=0; i < linkContaineersTwo.length; i++){
                linkContaineersTwo[i].style.height = "55px";    
            }
            var linkContaineersThree = document.getElementsByClassName("link-container-3");
            link_container_3_height = 69;
            for(var i=0; i < linkContaineersThree.length; i++){
                linkContaineersThree[i].style.height = "69px";    
            }
            document.getElementById("header-links").style.height = "71px";
            document.getElementById("nav-bar").style.fontSize = "14px";
            document.getElementById("logo").style.width = "200px";
        }else if(window.outerWidth < 800){
            // no se ajusta un tamano
            navBarHeight = 71;
            link_container_height = 71;
            link_container_2_height = 55;
            link_container_3_height = 69;
            
            document.getElementById("nav-bar").style.display = 'flex';

            document.getElementById("header-links").style.height = "71px";
            document.getElementById("nav-bar").style.fontSize = "14px";
            document.getElementById("logo").style.width = "200px";
        }
    }
}

function change_height(){
    // console.log('kiss')
    // document.getElementById('print').innerHTML = "  " + window.outerWidth;
    if(window.outerWidth < 800){
        document.getElementById("nav-bar").style.height = "50px";
        var linkContaineers = document.getElementsByClassName("link-container");
        for(var i=0; i < linkContaineers.length; i++){
            linkContaineers[i].style.height = "50px";    
        }
        var linkContaineersTwo = document.getElementsByClassName("link-container-2");
        for(var i=0; i < linkContaineersTwo.length; i++){
            linkContaineersTwo[i].style.height = "50px";    
        }
        var linkContaineersThree = document.getElementsByClassName("link-container-3");
        for(var i=0; i < linkContaineersThree.length; i++){
            linkContaineersThree[i].style.height = "50px";    
        }
    }else if(window.outerWidth > 800){
        document.getElementById("nav-bar").style.display = 'flex';

        document.getElementById("nav-bar").style.height = `${navBarHeight}px`;
        
        var linkContaineers = document.getElementsByClassName("link-container");
        for(var i=0; i < linkContaineers.length; i++){
            linkContaineers[i].style.height = `${link_container_height}px`;    
        }
        var linkContaineersTwo = document.getElementsByClassName("link-container-2");
        for(var i=0; i < linkContaineersTwo.length; i++){
            linkContaineersTwo[i].style.height = `${link_container_2_height}px`;    
        }
        var linkContaineersThree = document.getElementsByClassName("link-container-3");
        for(var i=0; i < linkContaineersThree.length; i++){
            linkContaineersThree[i].style.height =  `${link_container_3_height}px`; 
        }

        document.getElementById("nav-bar").style.top = "0";
    }
}