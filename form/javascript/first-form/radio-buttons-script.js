
function radioButtonFunc(n){
    const rb = document.querySelectorAll('input[name="destiny"]')
    const SecondGroup = document.querySelector('#form-second-group')

    if (n == 0){
        SecondGroup.innerHTML = `
        <!-- las clases 'inputs-width' modifican el ancho de los input en 1440x804 -->

        <fieldset class='right-mar-big first-inputs-width'> 
            <legend>
                <h3>¿A donde viajas?</h3>
            </legend>
            <!-- cuando se encoje el form los primeros input lo hacen demasiado, esto podria solucionarse agregando un 'auto-width' a cada uno en lugar de al fieldset-->
            <div class='fieldset-inner-group input-medium-width'>
                <label class="custom-field right-mar">
                    <input type="text" required/>
                    <span class="placeholder">Desde</span>
                    <span class="material-icons">
                        flight_takeoff
                    </span>
                </label>
                <span class="material-icons">
                    swap_horiz
                </span>
                <label class="custom-field left-mar">
                    <input type="text" required/>
                    <span class="placeholder">Hacia</span>
                    <span class="material-icons">
                        flight_takeoff
                    </span>
                </label>
            </div>
        </fieldset>
        
        <fieldset class='right-mar-big second-inputs-width'>
            <legend>
                <h3>¿Como viajas?</h3>
            </legend>
            <div class='fieldset-inner-group input-small-width'>
                <label class="custom-field right-mar">
                    <input type="text" required/>
                    <span class="placeholder">Salida</span>
                    <span class="material-icons">
                        event
                    </span>
                </label>
                
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Vuelta</span>
                    <span class="material-icons">
                        event
                    </span>
                </label>
            </div>
        </fieldset>
        
        <! --  este de abajo se ajusta de forma automatica, por eso no tiene una clase 'input-width' -->

        <fieldset class='right-mar-big third-inputs-width'>  
            <legend>
                <h3>¿Cuando viajas?</h3>
            </legend>
            <div class='fieldset-inner-group last-fieldset '>
                <label class="custom-field ">
                    <input type="text" required/>
                    <span class="placeholder">Pasajeros</span>
                    <span class="material-icons">
                        person_add
                    </span>
                </label>
            </div>
            <div id="prom-code-two">
                <img src="form/icons/add_circle_black_24dp.svg">
                <a href="#">Codigo promocional</a>
            </div>
        </fieldset>
        <div class='button-container'>        
            <div class="form-button">Lorem ipsum</div>
        </div>
        `
    }else if (n == 1){
        SecondGroup.innerHTML = `
        <fieldset class='right-mar-big input-medium-width first-inputs-width'>
            <legend>
                <h3>¿A donde viajas?</h3>
            </legend>
            <div class='fieldset-inner-group'>
                <label class="custom-field right-mar">
                    <input type="text" required/>
                    <span class="placeholder">Desde</span>
                    <span class="material-icons">
                        flight_takeoff
                    </span>
                </label>
                <span class="material-icons">
                    swap_horiz
                </span>
                <label class="custom-field left-mar">
                    <input type="text" required/>
                    <span class="placeholder">Hacia</span>
                    <span class="material-icons">
                        flight_takeoff
                    </span>
                </label>
            </div>
        </fieldset>
        
        <fieldset class='right-mar-big second-inputs-width'>
            <legend>
                <h3>¿Como viajas?</h3>
            </legend>
            <div class='fieldset-inner-group input-small-width'>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Fecha de ida</span>
                    <span class="material-icons">
                        event
                    </span>
                </label>
            </div>
        </fieldset>
        
        <! --  este de abajo se ajusta de forma automatica  -->

        <fieldset class='right-mar-big second-inputs-width'>
            <legend>
                <h3>¿Cuando viajas?</h3>
            </legend>
            <div class='fieldset-inner-group last-fieldset '>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Pasajeros</span>
                    <span class="material-icons">
                        person_add
                    </span>
                </label>
            </div>
            <div id="prom-code-two">
                <img src="form/icons/add_circle_black_24dp.svg">
                <a href="#">Codigo promocional</a>
            </div>
        </fieldset>
        <div class='button-container'>        
            <div class="form-button">Lorem ipsum</div>
        </div>
        `

    }
}

function radioButtonFuncTwo(n){
    const rb = document.querySelectorAll('input[name="destiny"]')
    const SecondGroup = document.querySelector('#form-second-group')

    if (n == 0){
        SecondGroup.innerHTML = `
                <div class='fieldset-inner-group input-big-width right-mar-big standar-inputs-width-medium'>
                    <label class="custom-field">
                        <input type="text" required/>
                        <span class="placeholder">Desde</span>
                    </label>
                </div>
                <div class='fieldset-inner-group input-big-width right-mar-big standar-inputs-width-medium'>
                    <label class="custom-field">
                        <input type="text" required/>
                        <span class="placeholder">Hacia</span>
                    </label>
                </div>
                <div class='fieldset-inner-group input-big-width right-mar-big standar-inputs-width-medium'>
                    <label class="custom-field">
                        <input type="text" required/>
                        <span class="placeholder">Fecha de salida</span>
                    </label>
                </div>
                <div class='button-container'>
                    <div class="form-button"><a>Lorem ipsum</a></div>
                </div>
        `
        

    }else if(n == 1){
        SecondGroup.innerHTML = `
            <div class='fieldset-inner-group input-big-width standar-inputs-width-huge'>
                <label class="custom-field">
                <input type="text" required/>
                <span class="placeholder">Número de vuelo </span>
                </label>
            </div>
            <div class='fieldset-inner-group input-big-width standar-inputs-width-huge'>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Fecha de vuelo</span>
                </label>
            </div>
            <div class='button-container join-column'>
                <div class="form-button"><a>Lorem ipsum</a></div>
            </div>
        `;
    }
}

function radioButtonSecondForm(n){
    const holder = document.querySelector('#input-holder')

    if(n == 0){
    holder.innerHTML =
    `
        <div class='fieldset-inner-group'>
            <label class="custom-field">
                <input type="text" required/>
                <span class="placeholder">Origen</span>
            </label>
        </div>
        <div class='fieldset-inner-group margin-top-big'>
            <label class="custom-field">
                <input type="text" required/>
                <span class="placeholder">Destino</span>
            </label>
        </div>
        <div class='fieldset-inner-group margin-top-small'>
            <label class="custom-field">
                <input type="text" required/>
                <span class="placeholder">Fecha de vuelo</span>
                <span class="material-icons">
                    unfold_more
                </span>
            </label>
        </div>
        <div class="form-button-second-form margin-top-small" onclick='print()'>Lorem ipsum</div>
    `;

    }if(n == 1){
        holder.innerHTML =
        `
            <div class='fieldset-inner-group'>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Número de vuelo</span>
                </label>
            </div>
            <div class='fieldset-inner-group margin-top-small'>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Fecha de vuelo</span>
                    <span class="material-icons">
                        unfold_more
                    </span>
                </label>
            </div>
            <div class="form-button-second-form margin-top-big" onclick='print()'>Lorem ipsum</div>
        `;
        }
}