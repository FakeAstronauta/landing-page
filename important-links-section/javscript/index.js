let label = document.querySelectorAll('#important-links-container > #important-links-responsive > .label')
let behindGroup = document.querySelector('#important-links-container > #content-behind')
let arrowDirection = document.querySelectorAll('#important-links-container > #important-links-responsive > .label > .material-icons')
let _lastNumPassed;
let state;

function changeLabelMargin(n){
    
    // returns margint bottom to 0, deletes the content, and changes arrow direction
    if(_lastNumPassed != undefined && state == true){
        label[_lastNumPassed].style.marginBottom = '0px';
        if(n - 1 == _lastNumPassed){
            state = false;
            behindGroup.innerHTML = '';
            arrowDirection[n - 1].innerHTML = 'expand_more';
            return
        }
    }

    // assigning values
    state = true;
    _lastNumPassed = n - 1;
    arrowDirection[n - 1].innerHTML = 'expand_less';


    // agrega un borde abajo de cada contenedor
    label[n - 1].style.borderBottomStyle = 'solid';
    label[n - 1].style.borderBottomWidth = '0.1px';
    label[n - 1].style.borderBottomColor = '#e0e0e0';
    
    label[n - 1].style.transition = '.3s';
    
    // separa los contenedores para mostrar el contenido de atras
    label[n - 1].style.marginBottom = '177px';

    behindGroup.style.marginTop = `${50 * n}px`;
    
    if(n == 1){
        behindGroup.innerHTML = 
        `
        <div id='content-behind-container'>
            <ul>
                <li>
                    Lorem, ipsum dolor.
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
                <li>
                    Sit amet consectetur
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
                <li>
                    Adipisicing elit
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
                <li>
                    Fugit, hic officia
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
                <li>
                    Eos accusamus nemo
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
            </ul>
        </div>
        `
    }else if(n == 2){
        behindGroup.innerHTML = 
        `
        <div id='content-behind-container'>
            <ul>
                <li>
                    Lorem, ipsum dolor.
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
                <li>
                    Sit amet consectetur
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
                <li>
                    Adipisicing elit
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
                <li>
                    Fugit, hic officia
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
                <li>
                    Eos accusamus nemo
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
            </ul>
        </div>
        `
    }else if(n == 3){
        behindGroup.innerHTML = 
        `
        <div id='content-behind-container'>
            <ul>
                <li>
                    Lorem, ipsum dolor.
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
                <li>
                    Sit amet consectetur
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
                <li>
                    Adipisicing elit
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
                <li>
                    Fugit, hic officia
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
                <li>
                    Eos accusamus nemo
                    <span class="material-icons red-icons">
                        chevron_right
                    </span>
                </li>
            </ul>
        </div>
        `
    }else if(n == 4){
        behindGroup.innerHTML = 
        `
        <div id='content-behind-container'>
            <ul>
                <li>
                    <span class="material-icons gray-icons">
                        campaign
                    </span>
                    Lorem, ipsum dolor.
                </li>
                <li>
                    <span class="material-icons gray-icons">
                        fingerprint
                    </span>
                    Sit amet consectetur
                </li>
                <li>
                    <span class="material-icons gray-icons">
                        shopping_cart
                    </span>
                    Adipisicing elit
                </li>
                <li>
                    <span class="material-icons gray-icons">
                        date_range
                    </span>
                    Fugit, hic officia
                </li>
                <li>
                    <span class="material-icons gray-icons">
                        account_balance
                    </span>
                    Eos accusamus nemo
                </li>
            </ul>
        </div>
        `
    }
}