function labelFunc(n){
    const form =  document.querySelector('.form-inside')
    
    if(n == 0){
        form.innerHTML = 
        `
            <div id='first-group'>
                <ul id='radio-buttons-group'>
                    <li>
                        <input type="radio" name='destiny' id="radio-button-one" onclick='radioButtonFunc(0)' checked>
                        <label>Ida y vuelta</label>
                    </li>
                    <li>
                        <input type="radio" name='destiny' id="radio-button-two" onclick='radioButtonFunc(1)'>
                        <label>Solo ida</label>
                    </li>
                    <div id='divisor'></div>
                    <li>
                        <a>Hoteles<img src='form/icons/open_in_new_black_24dp.svg'></a>
                    </li>
                    <li>
                        <a>Alquileres de autos <img src='form/icons/open_in_new_black_24dp.svg'></a>
                    </li>
                    <li>
                        <a>Experiencias<img src='form/icons/open_in_new_black_24dp.svg'></a>
                    </li>
                </ul>
                <div id="prom-code">
                    <img src="form/icons/add_circle_black_24dp.svg">
                    <a  href="#">Codigo promocional</a>
                </div>
            </div>
            <div id='form-second-group'></div>
        `
        radioButtonFunc(0)  // actives the first radio button
        

    }else if(n == 1){
        form.innerHTML=
        `
            <div class='form-header soft-gray'>
                <h2>
                    Lorem Ipsum is their default model text 
                </h2>
                <h3>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</h3>
            </div> 
            <div id='form-second-group' class='margin-top '>     
                <fieldset class='right-mar-big standar-inputs-width-huge'>
                    <div class='fieldset-inner-group input-big-width'>
                        <label class="custom-field">
                            <input type="text" required/>
                            <span class="placeholder">Número de reserva </span>
                        </label>
                    </div>
                </fieldset >
                <fieldset class='right-mar-big standar-inputs-width-huge'>
                    <div class='fieldset-inner-group input-big-width'>
                        <label class="custom-field">
                            <input type="text" required/>
                            <span class="placeholder">Apellidos del pasajero</span>
                        </label>
                    </div>
                </fieldset>
                <div class='button-container join-column'>
                    <div class="form-button"><a>Lorem ipsum</a></div>
                </div>
            </div>
            
        `

    }else if(n == 2){
        form.innerHTML=
        `
        <div class='form-header'>
          <h3>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</h3>
        </div> 
        <div id='form-second-group' class='margin-top' style="padding-top: 60px;">                 
            <div class='fieldset-inner-group input-big-width right-mar-big standar-inputs-width-medium'>
                <label class="custom-field ">
                    <input type="text" required/>
                    <span class="placeholder">Usar mi codigo</span>
                </label>
            </div>
            <div class='fieldset-inner-group input-big-width right-mar-big standar-inputs-width-medium'>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Apellido</span>
                </label>
            </div>
            <div class='fieldset-inner-group right-mar-big standar-inputs-width-medium'>
                <label class="custom-field">
                    <input type="text" required/>
                    <span class="placeholder">Fecha de salida</span>
                </label>
            </div>
            <div class='button-container'>
                <div class="form-button"><a>Lorem ipsum</a></div>
            </div>
        </div>
        `
        

    }else if(n == 3){
        form.innerHTML =
        `
        <div class='form-header'>
                <h3>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</h3>
            </div> 
            <div id='first-group'>
                <ul id='radio-buttons-group'>
                    <li>
                        <input type="radio" name='destiny' id="radio-button-one" onclick='radioButtonFuncTwo(0)' checked>
                        <label>Ida y vuelta</label>
                    </li>
                    <li>
                        <input type="radio" name='destiny' id="radio-button-two" onclick='radioButtonFuncTwo(1)'>
                        <label>Solo ida</label>
                    </li>
                </ul>
            </div>
            <div id='form-second-group'></div>
        `
        radioButtonFuncTwo(0);
         
        

    }else if(n == 4){
        form.innerHTML=
        `
            <div class='form-header'>
                <h3>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</h3>
            </div> 
            <div id='form-second-group' style = 'padding-top: 60px'>                 
                    <div class='fieldset-inner-group input-big-width right-mar-big standar-inputs-width-huge'>
                        <label class="custom-field input-huge">
                            <input type="text" required/>
                            <span class="placeholder">Código de reserva</span>
                        </label>
                    </div>
                    <div class='fieldset-inner-group input-big-width right-mar-big standar-inputs-width-huge'>
                        <label class="custom-field input-huge">
                            <input type="text"  required/>
                            <span class="placeholder">Primer apellido</span>
                        </label>
                    </div>
                    <div class='button-container join-column'>
                        <div class="form-button"><a>Lorem ipsum</a></div>
                    </div>
            </div>
        `
    }
}