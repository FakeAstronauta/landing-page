let lastNumPassed = 0;
let form = document.querySelectorAll('.second-form-inside');
const formBody =  document.querySelectorAll('.second-form-inside .form-body')
var secondHeaderTitle = document.querySelectorAll('.first-container h4');
var expandLogo = document.querySelectorAll('.first-container .material-icons');


function displayContent(n){
    // Return every element selected to its original format
    if(lastNumPassed != undefined){

        formBody[lastNumPassed].innerHTML = ' ';
        
        secondHeaderTitle[lastNumPassed].style.color = '#343E5B';
        expandLogo[lastNumPassed].innerHTML = 'expand_more';
    }
    
    lastNumPassed = n;

    if(n == 0){
        formBody[n].innerHTML = 
        `
            <div class='horizontal-divisor'></div>
            <ul id='radio-buttons-group-two'>
                <li>
                    <input type="radio" name='two' id="radio-button-one" checked>
                    <label>Ida y vuelta</label>
                </li>
                <li>
                    <input type="radio" name='two' id="radio-button-two">
                    <label>Solo ida</label>
                </li>
            </ul>
            <div id='content-table'>
                <div class='content-table-cell'>
                    <h2>Lorem</h2>
                    <p>Ipsum</p>
                </div>
                <div class='swap'>
                    <i class="material-icons">swap_horiz</i>
                </div>
                <div class='content-table-cell'>
                    <h2>Ipsum</h2>
                    <p>Lorem</p>
                </div>
                <div class='content-table-cell'>
                    <h4>Lorem ipsum</h4>
                </div>
                <div class='content-table-cell'>
                    <h3>Sit amet</h3>
                </div>
            </div>
            <div id="prom-code-second-form">
                <img src="form/icons/add_circle_black_24dp.svg">
                <a  href="#">Añadir codigo promocional</a>
            </div>
            <div class="form-button-second-form">Lorem ipsum</div>
            <ul id='second-form-links'>
                <li>
                    <a><h5>Hoteles</h5><img src='form/icons/open_in_new_black_24dp.svg'></a>
                </li>
                <li>
                    <a><h5>Experiencias</h5><img src='form/icons/open_in_new_black_24dp.svg'></a>
                </li>
            </ul>
        `

        // Change the height of the form to its original size
        form[n].style.transition = '3s';
        
        // Change the color of the title
        
        secondHeaderTitle[n].style.color = 'red';
        expandLogo[n].innerHTML = 'expand_less';

    }else if(n == 1){
        formBody[n].innerHTML = 
        `
            <div class='horizontal-divisor'></div>
            <div class='second-form-text'>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>
                    Distinctio in, neque aspernatur dolor, velit ullam accusamus dolore blanditiis dolor corporis libero beatae
                </p>
            </div>
            <div class='fieldset-inner-group margin-top-big'>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Número de reserva</span>
                </label>
            </div>
            <div class='fieldset-inner-group margin-top-big'>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Apellido del pasajero</span>
                </label>
            </div>
            <div class="form-button-second-form margin-top-small">Lorem ipsum</div>
            
        `
        form[n].style.transition = '.3s';

        // Change the color of the title
        
        secondHeaderTitle[n].style.color = 'red';
        expandLogo[n].innerHTML = 'expand_less';

    }if(n == 2){
        formBody[n].innerHTML = 
        `
            <div class='horizontal-divisor'></div>
            <div class='second-form-text'>
                <p>
                    Velit ullam accusamus dolore blanditiis dolor corporis libero beatae
                </p>
            </div>
            <div class='fieldset-inner-group margin-top-small'>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Usar mi código de reserva</span>
                </label>
            </div>
            <div class='fieldset-inner-group margin-top-big'>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Apellido del pasajero</span>
                </label>
            </div>
            <div class='fieldset-inner-group margin-top-small'>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Fecha de salida</span>
                    <span class="material-icons">
                        unfold_more
                    </span>
                </label>
            </div>
            <div class="form-button-second-form margin-top-small">Lorem ipsum</div>
        `
        form[n].style.transition = '.3s';

        // Change the color of the title
        
        secondHeaderTitle[n].style.color = 'red';
        expandLogo[n].innerHTML = 'expand_less';
    }

    if(n == 3){
        formBody[n].innerHTML = 
        `
            <div class='horizontal-divisor'></div>
            <div class='second-form-text'>
                <p>
                    Velit ullam accusamus dolore blanditiis dolor corporis libero beatae
                </p>
            </div>
            <ul id='radio-buttons-group-two'>
                <li>
                    <input type="radio" name='gatito' id="radio-button-one" onclick='radioButtonSecondForm(0)' checked>
                    <label>Ruta</label>
                </li>
                <li>
                    <input type="radio" name='gatito' id="radio-button-two" onclick='radioButtonSecondForm(1)'>
                    <label>Número de vuelo</label>
                </li>
            </ul>
            <div id='input-holder'></div>
        `
        form[n].style.transition = '.3s';

        // Change the color of the title
        
        secondHeaderTitle[n].style.color = 'red';
        expandLogo[n].innerHTML = 'expand_less';

        radioButtonSecondForm(0);
    }else if(n == 4){
        formBody[n].innerHTML = 
        `
            <div class='horizontal-divisor'></div>
            <div class='second-form-text'>
                <p>
                    Distinctio in, neque aspernatur dolor, velit ullam accusamus dolore blanditiis dolor corporis libero beatae
                </p>
            </div>
            <div class='fieldset-inner-group margin-top-big'>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Código de reserva</span>
                </label>
            </div>
            <div class='fieldset-inner-group margin-top-big'>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Primer pellido</span>
                </label>
            </div>
            <div class="form-button-second-form margin-top-small">Lorem ipsum</div>
            
        `
        form[n].style.transition = '.3s';

        // Change the color of the title
        
        secondHeaderTitle[n].style.color = 'red';
        expandLogo[n].innerHTML = 'expand_less';

    }
}
