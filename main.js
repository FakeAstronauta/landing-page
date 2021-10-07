function onResize(){
    change_height();
    globalResize();  
}

function onLoad(){
    globalResize();
    load_();
    labelFunc(0);
    changeLabelStyle(0);
}