function cambiarPanel(nroBoton){
    if(nroBoton==1){
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:active</b><hr>
        Se aplica en el elemento sobre el cual se esta dando click. Se puede usar en links y en botones. Al soltar el click se acaba el efecto.


        `;

        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            button{
                margin:1em;
            }
            button:active{
                background-color:red;
            }
        </style>

        <button> Tocar </button>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <span class="tabulation1 css-body-text">button</span>{    
        <span class="tabulation0 css-attribute-text"> margin</span>: <span class="css-value-text">1em</span>;<span class="tabulation0"> }</span><br>  

        <span class="tabulation1 css-body-text">button:active</span>{    
        <span class="tabulation0 css-attribute-text">background-color</span>: <span class="css-variable-text">red</span>;    
        <span class="tabulation0">}</span><br>            
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>     

        &lt;<span class="html-label-text">button</span>&gt; Tocar &lt;<span class="html-label-text">/button</span>&gt;     
        </b>`;

    } else if(nroBoton==2){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:any-link</b><hr>
        Se aplica en elementos que tengan enlaces asignados mediante el atributo <b>href</b>, es decir, en elementos de tipo <b>&lt;a&gt;</b> o de tipo <b>&lt;area&gt;</b>. 
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .any-link-test{ padding: 1em; }
            .any-link-test>a:any-link { background-color: greenyellow; }
        </style>

        <div class="any-link-test">
            <a href="#t3">Ir a lista de pseudo-clases</a>
        </div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.any-link-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em;</span> }<br>
            <span class="css-body-text">.any-link-test&gt;a:any-link</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">greenyellow;</span> }<br>      
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"any-link-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">a </span><span class="html-attribute-text">href</span>=<span class="html-variable-text">"#t3"</span>&gt;Ir a lista de pseudo-clases&lt;<span class="html-label-text">/a</span>&gt;<br>
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>
        </b>`;
    } else if(nroBoton==3){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:autofill</b><hr>
        Se aplica en elementos de tipo <b>&lt;input&gt;</b> cuyo campo es autocompletado por el navegador. Si el campo es editado por el usuario, la clase pierde su efecto en el campo.<br>
        <b>NOTA</b>: Los estilos predeterminados de algunos navegadores se cargan usando el atributo <b>!important</b>, para la pseudo-clase autofill los navegadores cargan de forma predeterminada los atributos color, background-color y background-image, por lo cual, no podemos editar estos atributos usando la pseudo-clase autofill.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .autofill-test{ padding: 1em; }
            .autofill-test>input:autofill { border: solid thick yellowgreen; }
            .autofill-test>input:-webkit-autofill { border: solid thick yellowgreen; }
        </style>

        <form class="autofill-test">
            <div>Autocompletar el campo con el valor sugerido por el navegador.</div><br>

            <label for="name">Nombre</label><br>
            <input name="name" type="text" autocomplete="name"><br><br>
        
            <label for="email">Dirección de correo</label><br>
            <input name="email" type="email" autocomplete="email"><br><br>
        
            <label for="country">Ciudad</label><br>
            <input name="country" type="text" autocomplete="country-name">
        </form>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.autofill-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em;</span> }<br>
            <span class="css-body-text">.autofill-test&gt;input:autofill</span>{ <span class="css-attribute-text">border</span>: <span class="css-variable-text">solid thick yellowgreen;</span> }<br> 
            <span class="css-body-text">.autofill-test&gt;input:-webkit-autofill</span>{ <span class="css-attribute-text">border</span>: <span class="css-variable-text">solid thick yellowgreen;</span> }<br>      
 
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"autofill-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">div</span>&gt;Autocompletar el campo con el valor sugerido por el navegador&lt;<span class="html-label-text">/div</span>&gt; &lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">label </span><span class="html-attribute-text">for</span>=<span class="html-variable-text">"name"</span>&gt;Nombre&lt;<span class="html-label-text">/label</span>&gt; &lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">name</span>=<span class="html-variable-text">"name"</span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span><span class="html-attribute-text">autocomplete</span>=<span class="html-variable-text">"name"</span>&gt; &lt;<span class="html-label-text">br</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">label </span><span class="html-attribute-text">for</span>=<span class="html-variable-text">"email"</span>&gt;Dirección de correo&lt;<span class="html-label-text">/label</span>&gt; &lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">name</span>=<span class="html-variable-text">"email"</span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"email"</span><span class="html-attribute-text">autocomplete</span>=<span class="html-variable-text">"email"</span>&gt; &lt;<span class="html-label-text">br</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">label </span><span class="html-attribute-text">for</span>=<span class="html-variable-text">"country"</span>&gt;Ciudad&lt;<span class="html-label-text">/label</span>&gt; &lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">name</span>=<span class="html-variable-text">"country"</span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"name"</span><span class="html-attribute-text">autocomplete</span>=<span class="html-variable-text">"country-name"</span>&gt;<br>

        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>
        </b>`;
    } else if(nroBoton==4){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:blank</b> (EXPERIMENTAL-PENDIENTE)<hr>
        Poco soporte por el momento.<br>
        ver <a href="https://caniuse.com/?search=blank" target="_blank">https://caniuse.com/?search=blank</a><br>
        más info <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:blank" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:blank</a><br>

        `;

        document.getElementById("view-panel-1").innerHTML = `

        `;

        document.getElementById("code-panel-1").innerHTML = `<b>

        </b>`;
    } else if(nroBoton==5){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:checked</b><hr>
        Se aplica sobre elementos del tipo radio-button, check-button u otro elemento con opciones. El efecto se habilita sobre aquellos elementos que esten actualmente seleccionados. Para visualizar un efecto con esta pseudo clase, podemos editar el contenido de un label vinculado al elemento input o podemos modificar también el estilo del icono del input.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .checked-test { padding: 1em; }
            .checked-test input:checked + label{ background-color: green; }
            .checked-test input[type="radio"]:checked { box-shadow: 0 0 0 3px orangered; }
            .checked-test input[type="checkbox"]:checked { box-shadow: 0 0 0 3px purple; }
        </style>

        <form class="checked-test">
            <input type="radio" name="grupo-1" id="rbtn-1">
            <label for="rbtn-1">rb1</label>
            <input type="radio" name="grupo-1" id="rbtn-2">
            <label for="rbtn-2">rb2</label>
        
            <input type="checkbox" name="grupo-2" id="cbox-1">
            <label for="cbox-1">cb1</label>
            <input type="checkbox" name="grupo-2" id="cbox-2">
            <label for="cbox-1">cb1</label>        
        </form>

`;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>

        <div class="tabulation1">

            <span class="css-body-text">.checked-test </span>{    
            <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em</span>; }<br>

            <span class="css-body-text">.checked-test input:checked + label</span>{    
            <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">green</span>; }<br>
    
            <span class="css-body-text">.checked-test input</span>[<span class="html-attribute-text">type</span>=<span class="html-variable-text">"radio"</span>]<span class="css-body-text">:checked</span> {
            <span class="css-attribute-text">box-shadow</span>: <span class="css-value-text">0 0 0 3px </span><span class="css-variable-text">orangered</span>; }<br>
    
            <span class="css-body-text">.checked-test input</span>[<span class="html-attribute-text">type</span>=<span class="html-variable-text">"checkbox"</span>]<span class="css-body-text">:checked</span> {
            <span class="css-attribute-text">box-shadow</span>: <span class="css-value-text">0 0 0 3px </span><span class="css-variable-text">purple</span>; }<br>
            
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form </span>
        <span class="html-attribute-text">class</span>=<span class="html-variable-text">"checked-test"</span>&gt;<br>

        <div class="tabulation1">
        
            &lt;<span class="html-label-text">input </span>
            <span class="html-attribute-text">type</span>=<span class="html-variable-text">"radio"</span> <span class="html-attribute-text">name</span>=<span class="html-variable-text">"grupo-1"</span> <span class="html-attribute-text">id</span>=<span class="html-variable-text">"rbtn-1"</span>&gt;<br>

            &lt;<span class="html-label-text">label </span>
            <span class="html-attribute-text">for</span>=<span class="html-variable-text">"rbtn-1"</span>&gt; rb1 &lt;<span class="html-label-text">/label</span>&gt;<br>

            &lt;<span class="html-label-text">input </span>
            <span class="html-attribute-text">type</span>=<span class="html-variable-text">"radio"</span> <span class="html-attribute-text">name</span>=<span class="html-variable-text">"grupo-1"</span> <span class="html-attribute-text">id</span>=<span class="html-variable-text">"rbtn-2"</span>&gt;<br>

            &lt;<span class="html-label-text">label </span>
            <span class="html-attribute-text">for</span>=<span class="html-variable-text">"rbtn-2"</span>&gt; rb2 &lt;<span class="html-label-text">/label</span>&gt;<br>

            &lt;<span class="html-label-text">input </span>
            <span class="html-attribute-text">type</span>=<span class="html-variable-text">"checkbox"</span> <span class="html-attribute-text">name</span>=<span class="html-variable-text">"grupo-2"</span> <span class="html-attribute-text">id</span>=<span class="html-variable-text">"cbox-1"</span>&gt;<br>

            &lt;<span class="html-label-text">label </span>
            <span class="html-attribute-text">for</span>=<span class="html-variable-text">"cbox-1"</span>&gt; cb1 &lt;<span class="html-label-text">/label</span>&gt;<br>

            &lt;<span class="html-label-text">input </span>
            <span class="html-attribute-text">type</span>=<span class="html-variable-text">"checkbox"</span> <span class="html-attribute-text">name</span>=<span class="html-variable-text">"grupo-2"</span> <span class="html-attribute-text">id</span>=<span class="html-variable-text">"cbox-2"</span>&gt;<br>

            &lt;<span class="html-label-text">label </span>
            <span class="html-attribute-text">for</span>=<span class="html-variable-text">"cbox-2"</span>&gt; cb2 &lt;<span class="html-label-text">/label</span>&gt;<br>
        
        </div>

        &lt;<span class="html-label-text">/form</span>&gt;<br>

        </b>`;
    } else if(nroBoton==6){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:current</b> (EXPERIMENTAL-PENDIENTE)<hr>
        Buscar ejemplos, buscar y estudiar a fondo la documentación.<br>

        `;

        document.getElementById("view-panel-1").innerHTML = `

        `;

        document.getElementById("code-panel-1").innerHTML = `<b>

        </b>`;
    } else if(nroBoton==7){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:default</b><hr>
        Se aplica sobre cualquier elemento de formulario que sea el predeterminado entre un grupo de elementos relacionados.<br>Esto se puede usar, por ejemplo, en un grupo de elementos radio-button con el mismo atributo name al asignarle a uno de ellos el atributo checked en su etiqueta. Quien tenga el atributo checked será el radio-button seleccionado por defecto (default).
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .default-test{ padding: 1em; }
            .default-test>input:default + label{
                color: purple;
                font-weight: 900;
            }
            .default-test>input[type="radio"]:default { box-shadow: 0 0 0 3px orangered; }
        </style>

        <form class="default-test">
            <input type="radio" name="comida" id="desayuno" checked>
            <label for="desayuno">desayuno</label><br>
            <input type="radio" name="comida" id="almuerzo">
            <label for="desayuno">almuerzo</label><br>
            <input type="radio" name="comida" id="merienda">
            <label for="desayuno">merienda</label><br>
            <input type="radio" name="comida" id="cena">
            <label for="desayuno">cena</label>        
        </form>
    
`;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
        
            <span class="css-body-text">.default-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em</span>; }<br>
    
            <span class="css-body-text">.default-test&gt;input</span>[<span class="html-attribute-text">type</span>=<span class="html-variable-text">"radio"</span>]<span class="css-body-text">:default</span> {
            <span class="css-attribute-text">box-shadow</span>: <span class="css-value-text">0 0 0 3px </span><span class="css-variable.text">orangered</span>; }</span><br>
    
            <span class="css-body-text">.default-test&gt;input:default + label</span>{ <br>    
            <span class="tabulation1 css-attribute-text">color</span>: <span class="css-variable-text">purple</span>;<br>
            <span class="tabulation1 css-attribute-text">font-weight</span>: <span class="css-value-text">900</span>; <br>
            <span class="tabulation1">}</span><br>
            
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form </span>
        <span class="html-attribute-text">class</span>=<span class="html-variable-text">"default-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">input </span>
            <span class="html-attribute-text">type</span>=<span class="html-variable-text">"radio"</span> <span class="html-attribute-text">name</span>=<span class="html-variable-text">"comida"</span> <span class="html-attribute-text">id</span>=<span class="html-variable-text">"desayuno"</span> <span class="html-attribute-text">checked</span>&gt;<br>

            &lt;<span class="html-label-text">label </span>
            <span class="html-attribute-text">for</span>=<span class="html-variable-text">"desayuno"</span>&gt; desayuno &lt;<span class="html-label-text">/label</span>&gt; &lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">input </span>
            <span class="html-attribute-text">type</span>=<span class="html-variable-text">"radio"</span> <span class="html-attribute-text">name</span>=<span class="html-variable-text">"comida"</span> <span class="html-attribute-text">id</span>=<span class="html-variable-text">"almuerzo"</span>&gt;<br>

            &lt;<span class="html-label-text">label </span>
            <span class="html-attribute-text">for</span>=<span class="html-variable-text">"almuerzo"</span>&gt; almuerzo &lt;<span class="html-label-text">/label</span>&gt; &lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">input </span>
            <span class="html-attribute-text">type</span>=<span class="html-variable-text">"radio"</span> <span class="html-attribute-text">name</span>=<span class="html-variable-text">"comida"</span> <span class="html-attribute-text">id</span>=<span class="html-variable-text">"merienda"</span>&gt;<br>

            &lt;<span class="html-label-text">label </span>
            <span class="html-attribute-text">for</span>=<span class="html-variable-text">"merienda"</span>&gt; merienda &lt;<span class="html-label-text">/label</span>&gt; &lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">input </span>
            <span class="html-attribute-text">type</span>=<span class="html-variable-text">"radio"</span> <span class="html-attribute-text">name</span>=<span class="html-variable-text">"comida"</span> <span class="html-attribute-text">id</span>=<span class="html-variable-text">"cena"</span>&gt;<br>

            &lt;<span class="html-label-text">label </span>
            <span class="html-attribute-text">for</span>=<span class="html-variable-text">"cena"</span>&gt; cena &lt;<span class="html-label-text">/label</span>&gt;<br>
        </div>
        &lt;<span class="html-label-text">/form</span>&gt;

        

        </b>`;
    } else if(nroBoton==8){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:defined</b> (PENDIENTE)<hr>
        Ver DOM en JavaScript antes de implementar.<br>

        `;

        document.getElementById("view-panel-1").innerHTML = `

        `;

        document.getElementById("code-panel-1").innerHTML = `<b>

        </b>`;
    } else if(nroBoton==9){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:dir()</b> (EXPERIMENTAL)<hr>
        Poco soporte en los navegadores, ver:<br>
        <a href="https://caniuse.com/?search=dir()" target="_blank">https://caniuse.com/?search=dir()</a>
        
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==10){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:disabled</b><hr>
        Se aplica a cualquier elemento deshabilitado. Un elemento se encuentra deshabilitado si no puede ser activado (por ejemplo ser selecionado, hacer click en él o aceptar texto de entrada) ni aceptar el foco.<br>
        Para deshabilitar un elemento se usa el atributo disabled dentro de la etiqueta del elemento.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
        form{ padding:1em; }
        input[type=text]:disabled { background: lightcoral; }
        </style>

        <form action="">
            Nombre: <input type="text" value=""><br>
            Apellido: <input type="text" value=""><br>
            Sexo: <input type="text" value="Si, por favor" disabled>
        </form>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>

        &lt;<span class="html-label-text">style</span>&gt;<br>

        <span class="tabulation1 css-body-text">form</span>{    
        <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em</span>; }<br>
        
        <span class="tabulation1 css-comment-text">/* Edicion del contenido del input de tipo text que se encuentre inhabilitado*/</span><br>

        <span class="tabulation1 css-body-text">input</span>[<span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span>]<span class="css-body-text">:disabled</span> {
        <span class="css-attribute-text">background</span>: <span class="css-variable-text">lightcoral</span>; }</span><br>

        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form </span><span class="html-attribute-text">action</span>=<span class="html-variable-text">""</span>&gt;<br>

        <div class="tabulation1">
        
        Nombre: &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span> <span class="html-attribute-text">value</span>=<span class="html-variable-text">""</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

        Apellido: &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span> <span class="html-attribute-text">value</span>=<span class="html-variable-text">""</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>
   
        Sexo: &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span> <span class="html-attribute-text">value</span>=<span class="html-variable-text">"Si, por favor"</span> <span class="html-attribute-text">disabled</span>&gt;<br>


        
        </div>

        &lt;<span class="html-label-text">/form </span>&gt;

        </b>`;
    } else if(nroBoton==11){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:empty</b><hr>
        Se aplica a cualquier elemento que no tenga hijos. Los hijos pueden ser nodos de elemento o texto (incluido el espacio en blanco). Los comentarios o las instrucciones de procesamiento no afectan si un elemento se considera vacío..
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .test-text{ margin:1em; }
            .test-text:empty{
                height: 1em;
                width: 5em;
                background-color: blue;
            }
        </style>

            <div class="test-text">Hoy nos despertamos DI-VI-NAS!!</div>
            <div class="test-text">y abajo hay un espacio vacio</div>
            <div class="test-text"></div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>

        &lt;<span class="html-label-text">style</span>&gt;<br>

        <span class="tabulation1 css-body-text">.test-text</span>{    
        <span class="css-attribute-text">margin</span>: <span class="css-value-text">1em</span>; }<br>

        <span class="tabulation1 css-body-text">.test-text:empty</span>{<br>

        <span class="tabulation2 css-attribute-text">height</span>: <span class="css-value-text">1em</span>;<br>
        <span class="tabulation2 css-attribute-text">width</span>: <span class="css-value-text">5em</span>;<br>
        <span class="tabulation2 css-attribute-text">background-color</span>: <span class="css-variable-text">blue</span>;<br>
        <span class="tabulation1">}</span><br>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"test-text"</span>&gt;Hoy nos despertamos DI-VI-NAS!!&lt;<span class="html-label-text">/div</span>&gt;<br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"test-text"</span>&gt;y abajo hay un espacio vacio&lt;<span class="html-label-text">/div</span>&gt;<br>
        
        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"test-text"</span>&gt;&lt;<span class="html-label-text">/div</span>&gt;<br>


        </b>`;
    } else if(nroBoton==12){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:enabled</b><hr>
        Se aplica a cualquier elemento habilitado. Un elemento se encuentra habilitado si puede ser activado (por ejemplo puede ser selecionado, se puede hacer click en él o aceptar texto de entrada) y aceptar el foco.<br>
        Los elementos estan habilitados de manera predeterminada.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
        form{ padding:1em; }
        input[type=text]:enabled { background: lightgreen; }
        </style>

        <form action="">
            Nombre: <input type="text" value=""><br>
            Apellido: <input type="text" value=""><br>
            Sexo: <input type="text" value="Si, por favor" disabled>
        </form>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>

        &lt;<span class="html-label-text">style</span>&gt;<br>

        <span class="tabulation1 css-body-text">form</span>{    
        <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em</span>; }<br>
        
        <span class="tabulation1 css-comment-text">/* Edicion del contenido del input de tipo text que se encuentre habilitado*/</span><br>

        <span class="tabulation1 css-body-text">input</span>[<span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span>]<span class="css-body-text">:enabled</span> {
        <span class="css-attribute-text">background</span>: <span class="css-variable-text">lightgreen</span>; }</span><br>

        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form </span><span class="html-attribute-text">action</span>=<span class="html-variable-text">""</span>&gt;<br>

        <div class="tabulation1">
        
        Nombre: &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span> <span class="html-attribute-text">value</span>=<span class="html-variable-text">""</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

        Apellido: &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span> <span class="html-attribute-text">value</span>=<span class="html-variable-text">""</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>
   
        Sexo: &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span> <span class="html-attribute-text">value</span>=<span class="html-variable-text">"Si, por favor"</span> <span class="html-attribute-text">disabled</span>&gt;<br>
        </div>

        &lt;<span class="html-label-text">/form </span>&gt;

        </b>`;
    } else if(nroBoton==13){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:first</b> (PENDIENTE)<hr>
        Ver previamente contenido relacionado a documentos para las impresiones 
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==14){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:first-child</b><hr>
        Se aplica sobre el primer hijo entre un grupo de elementos hermanos contenidos dentro de un elemento HTML.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .firstOne{ padding: 1em; }
            .firstOne>*:first-child{ color: red; }
        </style>

        <div class="firstOne">
            <span>Lista de compras </span>
            <span>del sabado</span>
        </div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>

        <span class="tabulation1 css-body-text">.firstOne</span>{ <span class="css-attribute-text"> padding</span>: <span class="css-value-text"> 1em</span>; }   <br>
        <span class="tabulation1 css-body-text">.firstOne&gt;*:first-child</span>{    
        <span class="tabulation0 css-attribute-text"> color</span>: <span class="css-variable-text">red</span>; }<br>  

        &lt;<span class="html-label-text">/style</span>&gt;<br><br>     

        &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"firstOne"</span>&gt;<br> 
        <div class="tabulation1">
            &lt;<span class="html-label-text">span</span>&gt;Lista de compras &lt;<span class="html-label-text">/span</span>&gt;<br> 
            &lt;<span class="html-label-text">span</span>&gt;del sabado&lt;<span class="html-label-text">/span</span>&gt;<br> 
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;
        
        </b>`;
    } else if(nroBoton==15){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:first-of-type</b><hr>
        Se aplica sobre el primer hijo de un tipo determinado de cualquier elemento HTML. Por ejemplo, el primer elemento hijo p, el primer elemento hijo div, etc.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .firstType{ padding: 1em; }
            .firstType>*:first-of-type{ background-color: greenyellow; }
        </style>
        
        <div class="firstType">
            <div>Bloque 1</div>
            <div>Bloque 2</div>
            <div>Bloque 3</div>
            <div>Bloque 4</div>
            <p>Parrafo 1</p>
            <p>Parrafo 2</p>
            <p>Parrafo 3</p>
            <p>Parrafo 4</p>


        </div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.firstType</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em;</span> }<br>
            <span class="css-body-text">.firstType&gt;*:first-of-type</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">greenyellow;</span> }<br>      
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"firstType"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">div</span>&gt; Bloque 1 &lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span>&gt; Bloque 2 &lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span>&gt; Bloque 3 &lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span>&gt; Bloque 4 &lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">p</span>&gt; Parrafo 1 &lt;<span class="html-label-text">/p</span>&gt;<br>
            &lt;<span class="html-label-text">p</span>&gt; Parrafo 2 &lt;<span class="html-label-text">/p</span>&gt;<br>
            &lt;<span class="html-label-text">p</span>&gt; Parrafo 3 &lt;<span class="html-label-text">/p</span>&gt;<br>
            &lt;<span class="html-label-text">p</span>&gt; Parrafo 4 &lt;<span class="html-label-text">/p</span>&gt;<br>
            

        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>

        </b>`;
    } else if(nroBoton==16){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:focus</b><hr>
        Se aplica a cualquier elemento que contenga el foco actualmente. Un ejemplo de esto podria ser un elemento input de tipo text en el cual se este escribiendo.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
        form{ padding: 1em; }
        input[type="text"]:focus { background:yellowgreen; }
        </style>
        
        <form action="">
        Nombre: <input type="text" value=""><br>
        Apellido: <input type="text" value=""><br>
        </form >
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>

        &lt;<span class="html-label-text">style</span>&gt;<br>

        <span class="tabulation1 css-body-text">form</span>{    
        <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em</span>; }<br>
        
        <span class="tabulation1 css-body-text">input</span>[<span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span>]<span class="css-body-text">:focus</span> {
        <span class="css-attribute-text">background</span>: <span class="css-variable-text">yellowgreen</span>; }</span><br>

        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form </span><span class="html-attribute-text">action</span>=<span class="html-variable-text">""</span>&gt;<br>

        <div class="tabulation1">
        
        Nombre: &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span> <span class="html-attribute-text">value</span>=<span class="html-variable-text">""</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

        Apellido: &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span> <span class="html-attribute-text">value</span>=<span class="html-variable-text">""</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>
        
        </div>

        &lt;<span class="html-label-text">/form </span>&gt;

        </b>`;
    } else if(nroBoton==17){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:focus-visible</b><hr>
        Se aplica a elementos que contengan el foco actualmente y a los cuales se les quiera aplicar un campo, ya sea por autocompletado o por elección entre una lista de opciones. El elemento elegido es determinado por el UA (User Agent) via heurística, haciendo evidente de este modo el foco sobre el elemento.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .focus-visible-test{ padding: 1em; }
            .focus-visible-test>label { display: block; }
            .focus-visible-test input:focus-visible { background-color: yellowgreen; }
            .focus-visible-test select:focus-visible { background-color: salmon; }
        </style>
        
        <form class="focus-visible-test">
            <p>Escriba su nombre y elija un sabor de helado</p>
            <label>Nombre: <input name="firstName" type="text"></label>
            <label>Sabor:
                <select name="sabor">
                    <option>Cereza</option>
                    <option>Chocolate</option>
                    <option>Dulce de leche</option>
                    <option>Granizado</option>
                </select>
            </label>
        </form>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>

        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.focus-visible-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>
            <span class="css-body-text">.focus-visible-test&gt;label</span>{ <span class="css-attribute-text">display</span>: <span class="css-variable-text"> block</span>; }<br>
            <span class="css-body-text">.focus-visible-test input:focus-visible</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text"> yellowgreen</span>; }<br>
            <span class="css-body-text">.focus-visible-test select:focus-visible</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text"> salmon</span>; }<br>
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"focus-visible-test"</span>&gt;<br>
        <div class="tabulation1">

            &lt;<span class="html-label-text">p</span>&gt;Escriba su nombre y elija un sabor de helado&lt;<span class="html-label-text">/p</span>&gt;<br>

            &lt;<span class="html-label-text">label</span>&gt;Nombre: &lt;<span class="html-label-text">input </span><span class="html-attribute-text">name</span>=<span class="html-variable-text">"firstName" </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span>&gt;&lt;<span class="html-label-text">/label</span>&gt;<br>

            &lt;<span class="html-label-text">label</span>&gt;Sabor:<br> 
            <div class="tabulation1">
                &lt;<span class="html-label-text">select </span> <span class="html-attribute-text">name</span>=<span class="html-variable-text">"sabor"</span>&gt;<br>
                <div class="tabulation1">
                    &lt;<span class="html-label-text">option</span>&gt;Cereza&lt;<span class="html-label-text">/option</span>&gt; <br>
                    &lt;<span class="html-label-text">option</span>&gt;Chocolate&lt;<span class="html-label-text">/option</span>&gt; <br>
                    &lt;<span class="html-label-text">option</span>&gt;Dulce de leche&lt;<span class="html-label-text">/option</span>&gt; <br>
                    &lt;<span class="html-label-text">option</span>&gt;Granizado&lt;<span class="html-label-text">/option</span>&gt; <br>
                </div>
                &lt;<span class="html-label-text">/select</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text">/label</span>&gt;<br>
        </div>
        &lt;<span class="html-label-text">/form</span>&gt;<br>
        </br>`;
    } else if(nroBoton==18){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:focus-within</b><hr>
        Se aplica a un elemento siempre que este o alguno de sus herederos obtenga el foco.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .focus-within-test{ padding: 1em; }
            .focus-within-test label{ display: block; }
            .focus-within-test:focus-within { background-color:goldenrod; }
        </style>
    
        <form class="focus-within-test">
            <label>Nombre: <input type="text"></label>
            <label>Apellido: <input type="text"></label>
            <div>
                <label>Edad: <input type="number"></label>
                <label>Fecha: <input type="date" ></label>
            </div>
        </form>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>

        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.focus-within-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>
            <span class="css-body-text">.focus-within-test label</span>{ <span class="css-attribute-text">display</span>: <span class="css-variable-text"> block</span>; }<br>
            <span class="css-body-text">.focus-within-test:focus-within</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text"> goldenrod</span>; }<br>
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"focus-within-test"</span>&gt;<br>
        <div class="tabulation1">

            &lt;<span class="html-label-text">label</span>&gt;Nombre: &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span>&gt;&lt;<span class="html-label-text">/label</span>&gt;<br>

            &lt;<span class="html-label-text">label</span>&gt;Apellido: &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span>&gt;&lt;<span class="html-label-text">/label</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;<br> 
            <div class="tabulation1">

                &lt;<span class="html-label-text">label</span>&gt;Edad: &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"number"</span>&gt;&lt;<span class="html-label-text">/label</span>&gt;<br>

                &lt;<span class="html-label-text">label</span>&gt;Fecha: &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"date"</span>&gt;&lt;<span class="html-label-text">/label</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;<br>
        </div>
        &lt;<span class="html-label-text">/form</span>&gt;
        </b>`;
    } else if(nroBoton==19){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:fullscreen</b> (PENDIENTE) <hr>       
        Ver previamente contenido relacionado a pantallas completas
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==20){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:future</b> (EXPERIMENTAL) (PENDIENTE) <hr>       
        Ver previamente contenido relacionado a videos
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==21){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:has()</b> (EXPERIMENTAL) (PENDIENTE) <hr>       
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:has" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:has</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==22){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:host</b> (PENDIENTE) <hr>      
        Requiere conocer contenido del DOM en JavaScript.<br> 
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:host" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:host</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==23){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:host()</b> (PENDIENTE) <hr>      
        Requiere conocer contenido del DOM en JavaScript.<br> 
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:host_function" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:host_function</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==24){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:host-context</b> (EXPERIMENTAL) (PENDIENTE) <hr>      
        Requiere conocer contenido del DOM en JavaScript.<br> 
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:host-context" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:host-context</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==25){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:hover</b><hr>       
        Se aplica al elemento que este siendo apuntado por el puntero del mouse. Se puede aplicar sobre cualquier tipo de elemento.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .hover-test{ padding: 1em; }
            .hover-test *:hover{
                transition: all 0.3s;
                color: blue;
                font-size: 1.5em;
            }
        </style>

        <div class="hover-test">
            <div>ESPARTANOS!!!</div>
            <p>Hoy cenaremos</p>
            <span>en </span>
            <span>el </span>
            <span>infierno</span>    
        </div>
            `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>

        <div class="tabulation1">
            <span class="css-body-text">.hover-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>   
            <span class="css-body-text">.test-text:hover</span>{<br>
            <div class="tabulation1">
                <span class="css-attribute-text">transition</span>: <span class="css-variable-text">all </span><span class="css-value-text">0.3s</span>;<br>
                <span class="css-attribute-text">color</span>: <span class="css-variable-text">blue</span>;<br>
                <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1.5em</span>;<br>
            </div>
            }<br>
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>
        &lt;<span class="html-label-text">div</span>&gt;ESPARTANOS!!!&lt;<span class="html-label-text">/div</span>&gt;<br>
        &lt;<span class="html-label-text">p</span>&gt;Hoy cenaremos&lt;<span class="html-label-text">/p</span>&gt;<br>
        &lt;<span class="html-label-text">span</span>&gt;en &lt;<span class="html-label-text">/span</span>&gt;<br>
        &lt;<span class="html-label-text">span</span>&gt;el &lt;<span class="html-label-text">/span</span>&gt;<br>
        &lt;<span class="html-label-text">span</span>&gt;infierno&lt;<span class="html-label-text">/span</span>&gt;<br>
        </b>`;
    } else if(nroBoton==26){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:indeterminate</b> (PENDIENTE) <hr>       
        Requiere ver algo del DOM de JavaScript<br>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
            `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==27){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:in-range</b><hr>       
        Se aplica a los elementos a los cuales se les pueda determinar un rango dentro de su contenido, como los elementos input de tipo number. A los elementos input se les determina un rango con los atributos <b>min</b> y <b>max</b>, si el valor dado al elemento esta dentro del rango, se activa esta pseudo-clase.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
        input{ margin: 1em; }
        input:in-range{ background-color: lightgreen; }
        </style>
        <input type="number" min="5" max="10" value="1">
            `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>

        <span class="tabulation1 css-body-text">input</span>{ <span class="css-attribute-text">margin</span>: <span class="css-value-text"> 1em</span>; }<br>

        <span class="tabulation1 css-body-text">input:in-range</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">lightgreen</span>; }<br>

        &lt;<span class="html-label-text">/style</span>&gt;<br><br>


        &lt;<span class="html-label-text">input </span>
        <span class="html-attribute-text">type</span>=<span class="html-variable-text">"number"</span> <span class="html-attribute-text">min</span>=<span class="html-value-text">5 </span><span class="html-attribute-text">max</span>=<span class="html-value-text">10 </span><span class="html-attribute-text">value</span>=<span class="html-value-text">1</span>&gt;<br>
        
        </b>`;
    } else if(nroBoton==28){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:invalid</b><hr>       
        Se aplica a los elementos de tipo &lt;input&gt; o &lt;form&gt; cuyos contenidos no se pueden validar para el envio del formulario. Esta pseudo-clase es útil para resaltar errores de campo para el usuario.<br>
        Algunos casos de aplicación podrian ser sobre elementos con el atributo <b>required</b> que no estén completados, valores fuera de rango, direcciones de correo no válidas, etc.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
        form{ padding: 1em; }
        input:invalid, input:invalid + label{ background-color: rgba(255,50,50,0.2); }
    </style>
    
    <form action="">
        <input type="email"><br>
        <input type="number" min="1" max="2" value="3"><br>
        <input type="checkbox" required>
        <label for="cbox">Acepto términos y condiciones </label>
    </form>
            `;

        document.getElementById("code-panel-1").innerHTML = `<b>

        &lt;<span class="html-label-text">style</span>&gt;<br>

        <span class="tabulation1 css-body-text">form</span>{    
        <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em</span>; }<br>
        
        <span class="tabulation1 css-body-text">input:invalid</span>, <span class="css-body-text">input:invalid + label</span> {
        <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">rgba</span>(<span class="css-value-text">255</span>, <span class="css-value-text">50</span>, <span class="css-value-text">50</span>, <span class="css-value-text">0.2</span>); }<br>

        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form </span><span class="html-attribute-text">action</span>=<span class="html-variable-text">""</span>&gt;<br>

        <div class="tabulation1">
        
        &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"email"</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

        &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"number" </span><span class="html-attribute-text">min</span>=<span class="html-variable-text">"1" </span><span class="html-attribute-text">max</span>=<span class="html-variable-text">"2" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"3" </span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>


        &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"checkbox" </span> <span class="html-attribute-text">id</span>=<span class="html-variable-text">"cbox" </span> <span class="html-attribute-text">required</span>&gt;<br>
        
        &lt;<span class="html-label-text">label </span><span class="html-attribute-text">for</span>=<span class="html-variable-text">"cbox" </span>&gt; Acepto términos y condiciones &lt;<span class="html-label-text">/label </span>&gt;
        
        </div>


        &lt;<span class="html-label-text">/form </span>&gt;

        
        </b>`;
    } else if(nroBoton==29){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:is()</b><hr>       
        Se aplica a todos los elementos cuyos marcadores son usados como argumentos de esta pseudo-clase.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .is-test{ padding: 1em;}
            :is(.is-test1, .is-test2){ font-size: 2em; }
            :is(.is-test1){ color: red; }
            :is(.is-test2){ color: blue; }
        </style>
        
        <div class="is-test"> 
            <span class="is-test1">Hola </span>
            <span class="is-test2">mundo</span>
        </div>
            `;

        document.getElementById("code-panel-1").innerHTML = `<b>

        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.is-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">:is(.is-test1, .is-test2)</span>{ <span class="css-attribute-text">font-size</span>: <span class="css-value-text"> 2em</span>; }<br>
            <span class="css-body-text">:is(.is-test1)</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text"> red</span>; }<br>
            <span class="css-body-text">:is(.is-test2)</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text"> blue</span>; }<br>
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"is-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">span </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"is-test1"</span>&gt;Hola &lt;<span class="html-label-text">/span</span>&gt;<br>
            &lt;<span class="html-label-text">span </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"is-test2"</span>&gt;mundo&lt;<span class="html-label-text">/span</span>&gt;<br>
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;

        
        </b>`;
    } else if(nroBoton==30){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:lang()</b><hr>       
        Se aplica a los elementos en función del idioma de su contenido. Esto se puede especificar en lo elementos por medio del atributo <b>lang</b> y el valor en función de su idioma.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            *:lang(it){
                padding: 1em;
                color: red;
        }
        </style>
    
        <div lang="it">Sono io, Mario</div>

        `;

        document.getElementById("code-panel-1").innerHTML = `<b>

        &lt;<span class="html-label-text">style</span>&gt;<br>

        <span class="css-comment-text">/* Toma todo el contenido en italiano */</span><br>
        <span class="tabulation1 css-body-text">*:lang</span>(it){<br>    
        <span class="tabulation2 css-attribute-text">padding</span>: <span class="css-value-text">1em</span>; <br> 
        <span class="tabulation2 css-attribute-text">color</span>: <span class="css-variable-text">red</span>; 
        <br><span class="tabulation1">}</span><br>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>


        &lt;<span class="html-label-text">div </span><span class="html-attribute-text">lang</span>=<span class="html-variable-text">"it"</span>&gt;Sono io, Mario&lt;<span class="html-label-text">/div</span>&gt;

        
        </b>`;
    } else if(nroBoton==31){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:last-child</b><hr>
        Se aplica sobre el ultimo hijo de cualquier elemento HTML.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .last-child-test{ padding: 1em; }
            .lastOne>*:last-child{ color: red; }
        </style>

        <div class="last-child-test">
            <div class="lastOne">
                <span>Lista de compras </span>
                <span>del sabado</span>
            </div>
            <ul class="lastOne">
                <li>Pan</li>
                <li>Queso</li>
                <li>vodka</li>
            </ul>        
        </div>

        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.last-child-test</span>{    
            <span class="css-attribute-text"> padding</span>: <span class="css-value-text">1em</span>; }<br>          
            <span class="css-body-text">.lastOne&gt;*:last-child</span>{    
            <span class="css-attribute-text"> color</span>: <span class="css-variable-text">red</span>; }<br>          
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>     

        &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"last-child-test"</span>&gt;<br> 
        <div class="tabulation1">
        
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"lastOne"</span>&gt;<br> 
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt; Lista de compras &lt;<span class="html-label-text">/span</span>&gt;<br> 
                &lt;<span class="html-label-text">span</span>&gt;del sabado&lt;<span class="html-label-text">/span</span>&gt;<br> 
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;<br><br> 
            

            &lt;<span class="html-label-text">ul </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"lastOne"</span>&gt;<br> 
            <div class="tabulation1">
            &lt;<span class="html-label-text">li</span>&gt;Pan&lt;<span class="html-label-text">/li</span>&gt;<br> 
            &lt;<span class="html-label-text">li</span>&gt;Queso&lt;<span class="html-label-text">/li</span>&gt;<br> 
            &lt;<span class="html-label-text">li</span>&gt;Vodka&lt;<span class="html-label-text">/li</span>&gt;<br> 
            </div>
            &lt;<span class="html-label-text">/ul</span>&gt;<br><br> 

        </div>
        &lt;<span class="html-label-text">div </span>&gt;

        </b>`;
    } else if(nroBoton==32){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:last-of-type</b><hr>
        Se aplica sobre el último elemento de su tipo entre un grupo de elementos hermanos.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .lastType{ padding: 1em; }
            .lastType>*:last-of-type{ background-color: greenyellow; }
        </style>
        
        <div class="lastType">
        <div>Bloque 1</div>
        <div>Bloque 2</div>
        <div>Bloque 3</div>
        <div>Bloque 4</div>
        <p>Parrafo 1</p>
        <p>Parrafo 2</p>
        <p>Parrafo 3</p>
        <p>Parrafo 4</p>
        </div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.lastType</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em;</span> }<br>
            <span class="css-body-text">.lastType&gt;*:last-of-type</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">greenyellow;</span> }<br>      
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"lastType"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">div</span>&gt; Bloque 1 &lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span>&gt; Bloque 2 &lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span>&gt; Bloque 3 &lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span>&gt; Bloque 4 &lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">p</span>&gt; Parrafo 1 &lt;<span class="html-label-text">/p</span>&gt;<br>
            &lt;<span class="html-label-text">p</span>&gt; Parrafo 2 &lt;<span class="html-label-text">/p</span>&gt;<br>
            &lt;<span class="html-label-text">p</span>&gt; Parrafo 3 &lt;<span class="html-label-text">/p</span>&gt;<br>
            &lt;<span class="html-label-text">p</span>&gt; Parrafo 4 &lt;<span class="html-label-text">/p</span>&gt;<br>

        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>

        </b>`;
    } else if(nroBoton==33){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:left</b> (PENDIENTE)<hr>
        Requiere ver impresión.<br>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:left" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:left</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==34){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:link</b><hr>
        Se aplica sobre los elementos con enlaces que aún no se han visitado.<br>
        Se puede usar con elementos del tipo &lt;a&gt , &lt;area&gt o &lt;link&gt; que cuentan con el atributo href.<br>
        Para que las reglas relacionadas con un enlace funcionen correctamente, se define el orden de estilos según la regla <b>LVHA</b> :link - :visited - :hover - :active. 
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .link-test{ padding:1em; }
            a:link{ color:red; }
        </style>
        
        <div class="link-test">
            <a href="#t3">Ir a lista de pseudo-clases</a><br>
            <a href="https://www.google.com/" target="_blank">Ir a google</a>
        </div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.link-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em;</span> }<br>
            <span class="css-body-text">a:link</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text">red;</span> }<br>      
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"link-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">a </span><span class="html-attribute-text">href</span>=<span class="html-variable-text">"#t3"</span>&gt; Ir a lista de pseudo-clases &lt;<span class="html-label-text">/a</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>
            &lt;<span class="html-label-text">a </span><span class="html-attribute-text">href</span>=<span class="html-variable-text">"https://www.google.com/" </span><span class="html-attribute-text">target</span>=<span class="html-variable-text">"_blank"</span>&gt; Ir a google &lt;<span class="html-label-text">/a</span>&gt;<br>
            </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>

        </b>`;
    } else if(nroBoton==35){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:local-link</b> (EXPERIMENTAL) (PENDIENTE) <hr>
        No logré hacerlo funcionar.
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:local-link" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:local-link</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
         </b>`;
    } else if(nroBoton==36){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:modal</b><hr>
        Requiere ver elementos modales.
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:modal" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:modal</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .link-test{ padding:1em; }
            a:link{ color:red; }
        </style>
        
        <div class="link-test">
            <a href="#t3">Ir a lista de pseudo-clases</a><br>
            <a href="https://www.google.com/" target="_blank">Ir a google</a>
        </div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.link-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em;</span> }<br>
            <span class="css-body-text">a:link</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text">red;</span> }<br>      
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"link-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">a </span><span class="html-attribute-text">href</span>=<span class="html-variable-text">"#t3"</span>&gt; Ir a lista de pseudo-clases &lt;<span class="html-label-text">/a</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>
            &lt;<span class="html-label-text">a </span><span class="html-attribute-text">href</span>=<span class="html-variable-text">"https://www.google.com/" </span><span class="html-attribute-text">target</span>=<span class="html-variable-text">"_blank"</span>&gt; Ir a google &lt;<span class="html-label-text">/a</span>&gt;<br>
            </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>

        </b>`;
    } else if(nroBoton==37){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:not()</b><hr>
        Se aplica sobre todos los elementos a exepción del selector usado como argumento de esta pseudo-clase.<br>
        No se puede usar más de un argumento dentro de los paréntesis, para aplicar más de una vez el efecto not, se debe realizar una lista separada por comas. 
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .not-test{ padding: 1em; } 
            .not-test>*:not(p){ background-color: greenyellow; }
        </style>
        
        <div class="not-test">
            <div>Soy un div</div>
            <p>Soy un párrafo</p>
            <button>Soy un botón</button>
        </div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.not-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em;</span> }<br>
            <span class="css-body-text">.not-test>*:not(p)</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">greenyellow;</span> }<br>      
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"not-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">div</span>&gt;Soy un div&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">p</span>&gt;Soy un párrafo&lt;<span class="html-label-text">/p</span>&gt;<br>
            &lt;<span class="html-label-text">button</span>&gt;Soy un botón&lt;<span class="html-label-text">/button</span>&gt;<br>
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>

        </b>`;
    } else if(nroBoton==38){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:nth-child()</b><hr>
        Se aplica sobre uno o más elementos en función del argumento usado el cual marcará la posición de estos.<br>
        Puede asignarse un número concreto, <b>odd</b> para números impares, <b>even</b> para números pares y se pueden armar patrones usando series con la letra <b>n</b>. 
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .nth-child-test div *{ border: thin black solid; margin-right: 5px ;}
            .nth-child-test{ padding: 1em; }
            .ej1 *:nth-child(3), 
            .ej2 *:nth-child(3n), 
            .ej3 *:nth-child(2n+3), 
            .ej4 *:nth-child(even), 
            .ej5 *:nth-child(odd),
            .ej6 *:nth-child(-n+4) { background-color: greenyellow; }
        </style>
        
        <div class="nth-child-test">
            <div>Número concreto >> :nth-child(3)</div>
            <div class="ej1">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
            </div><br>
            <div>Patrón 3n >> :nth-child(3n)</div>
            <div class="ej2">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
            </div><br>
            <div>Patrón 2n+3 >> :nth-child(2n+3)</div>
            <div class="ej3">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
            </div><br>
            <div>Elementos pares >> :nth-child(even)</div>
            <div class="ej4">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
            </div><br>
            <div>Elementos impares >> :nth-child(odd)</div>
            <div class="ej5">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
            </div><br>
            <div>Primeros 4 elementos >> :nth-child(-n+4)</div>
            <div class="ej6">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
            </div><br>
        </div>
    
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.nth-child-test div *</span>{ <span class="css-attribute-text">border</span>: <span class="css-variable-text">thin black solid</span>; }<br>
            <span class="css-body-text">.nth-child-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.ej1 *:nth-child(3)</span>,<br>      
            <span class="css-body-text">.ej2 *:nth-child(3n)</span>,<br>      
            <span class="css-body-text">.ej3 *:nth-child(2n+3)</span>,<br>      
            <span class="css-body-text">.ej4 *:nth-child(even)</span>,<br>      
            <span class="css-body-text">.ej5 *:nth-child(odd)</span>,<br>      
            <span class="css-body-text">.ej6 *:nth-child(-n+4)</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text"> greenyellow</span>; }<br> 
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"nth-child-test"</span>&gt;<br>
        <div class="tabulation1">

            &lt;<span class="html-label-text">div</span>&gt;Número concreto >> :nth-child(3)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej1"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;6&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;7&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;8&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;9&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;10&lt;<span class="html-label-text">/span</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Patrón 3n >> :nth-child(3n)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej2"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;6&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;7&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;8&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;9&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;10&lt;<span class="html-label-text">/span</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Patrón 2n+3 >> :nth-child(2n+3)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej3"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;6&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;7&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;8&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;9&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;10&lt;<span class="html-label-text">/span</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Elementos pares >> :nth-child(even)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej4"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;6&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;7&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;8&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;9&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;10&lt;<span class="html-label-text">/span</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Elementos impares >> :nth-child(odd)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej5"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;6&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;7&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;8&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;9&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;10&lt;<span class="html-label-text">/span</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Primeros 4 elementos >> :nth-child(-n+4)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej6"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;6&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;7&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;8&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;9&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;10&lt;<span class="html-label-text">/span</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

        </div>
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>

        </b>`;
    } else if(nroBoton==39){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:nth-col</b> (EXPERIMENTAL) (PENDIENTE) <hr>
        Poco soporte en los navegadores.
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-col" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-col</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
         </b>`;
    } else if(nroBoton==40){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:nth-last-child()</b><hr>
        Se aplica sobre uno o más elementos en función del argumento usado el cual marcará la posición de estos.<br>
        Puede asignarse un número concreto, <b>odd</b> para números impares, <b>even</b> para números pares y se pueden armar patrones usando series con la letra <b>n</b>.<br>
        En resumen, su funcionamiento es identico al de la pseudo-clase <b>:nth-child()</b> con la única diferencia de que el conteo de los elementos se hace desde la posición del último elemento. 
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .nth-last-child-test div *{ border: thin black solid; margin-right: 5px ;}
            .nth-last-child-test{ padding: 1em; }
            .ej1 *:nth-last-child(3), 
            .ej2 *:nth-last-child(3n), 
            .ej3 *:nth-last-child(2n+3), 
            .ej4 *:nth-last-child(even), 
            .ej5 *:nth-last-child(odd),
            .ej6 *:nth-last-child(-n+4) { background-color: greenyellow; }
        </style>
        
        <div class="nth-last-child-test">
            <div>Número concreto >> :nth-last-child(3)</div>
            <div class="ej1">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
            </div><br>
            <div>Patrón 3n >> :nth-last-child(3n)</div>
            <div class="ej2">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
            </div><br>
            <div>Patrón 2n+3 >> :nth-last-child(2n+3)</div>
            <div class="ej3">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
            </div><br>
            <div>Elementos pares >> :nth-last-child(even)</div>
            <div class="ej4">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
            </div><br>
            <div>Elementos impares >> :nth-last-child(odd)</div>
            <div class="ej5">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
            </div><br>
            <div>Primeros 4 elementos >> :nth-last-child(-n+4)</div>
            <div class="ej6">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span>
            </div><br>
        </div>
    
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.nth-last-child-test div *</span>{ <span class="css-attribute-text">border</span>: <span class="css-variable-text">thin black solid</span>; }<br>
            <span class="css-body-text">.nth-last-child-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.ej1 *:nth-last-child(3)</span>,<br>      
            <span class="css-body-text">.ej2 *:nth-last-child(3n)</span>,<br>      
            <span class="css-body-text">.ej3 *:nth-last-child(2n+3)</span>,<br>      
            <span class="css-body-text">.ej4 *:nth-last-child(even)</span>,<br>      
            <span class="css-body-text">.ej5 *:nth-last-child(odd)</span>,<br>      
            <span class="css-body-text">.ej6 *:nth-last-child(-n+4)</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text"> greenyellow</span>; }<br> 
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"nth-last-child-test"</span>&gt;<br>
        <div class="tabulation1">

            &lt;<span class="html-label-text">div</span>&gt;Número concreto >> :nth-last-child(3)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej1"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;6&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;7&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;8&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;9&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;10&lt;<span class="html-label-text">/span</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Patrón 3n >> :nth-last-child(3n)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej2"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;6&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;7&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;8&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;9&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;10&lt;<span class="html-label-text">/span</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Patrón 2n+3 >> :nth-last-child(2n+3)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej3"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;6&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;7&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;8&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;9&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;10&lt;<span class="html-label-text">/span</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Elementos pares >> :nth-last-child(even)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej4"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;6&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;7&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;8&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;9&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;10&lt;<span class="html-label-text">/span</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Elementos impares >> :nth-last-child(odd)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej5"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;6&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;7&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;8&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;9&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;10&lt;<span class="html-label-text">/span</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Primeros 4 elementos >> :nth-last-child(-n+4)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej6"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;6&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;7&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;8&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;9&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;10&lt;<span class="html-label-text">/span</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

        </div>
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>

        </b>`;
    } else if(nroBoton==41){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:nth-last-col</b> (EXPERIMENTAL) (PENDIENTE) <hr>
        Poco soporte en los navegadores.
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-col" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-col</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
         </b>`;
    } else if(nroBoton==42){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:nth-last-of-type()</b><hr>
        Se aplica sobre uno o más elementos de un tipo dado, en función de su posición entre un grupo de hermanos, contando desde el final.<br>
        Puede asignarse un número concreto, <b>odd</b> para números impares, <b>even</b> para números pares y se pueden armar patrones usando series con la letra <b>n</b>.<br>
        En resumen, esta pseudo-clase es esencialmente la misma que :nth-of-type, excepto que cuenta los elementos hacia atrás desde el final, no hacia adelante desde el principio. 
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .nth-last-of-type-test div *{ border: thin black solid; margin-right: 5px ;}
            .nth-last-of-type-test div span{ color: red;}
            .nth-last-of-type-test div code{ color: blue;}
            .nth-last-of-type-test{ padding: 1em; }
            .ej1 *:nth-last-of-type(2), 
            .ej2 *:nth-last-of-type(2n), 
            .ej3 *:nth-last-of-type(2n+1), 
            .ej4 *:nth-last-of-type(even), 
            .ej5 *:nth-last-of-type(odd),
            .ej6 *:nth-last-of-type(-n+4) { background-color: greenyellow; }
        </style>
        
        <div class="nth-last-of-type-test">
            <div>Número concreto >> :nth-last-of-type(2)</div>
            <div class="ej1">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code>
            </div><br>
            <div>Patrón 2n >> :nth-last-of-type(2n)</div>
            <div class="ej2">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code>
            </div><br>
            <div>Patrón 2n+1 >> :nth-last-of-type(2n+1)</div>
            <div class="ej3">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code>
            </div><br>
            <div>Elementos pares >> :nth-last-of-type(even)</div>
            <div class="ej4">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code>
            </div><br>
            <div>Elementos impares >> :nth-last-of-type(odd)</div>
            <div class="ej5">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code>
            </div><br>
            <div>Primeros 4 elementos >> :nth-last-of-type(-n+4)</div>
            <div class="ej6">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code>
            </div><br>
        </div>
    
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.nth-last-of-type-test div *</span>{ <span class="css-attribute-text">border</span>: <span class="css-variable-text">thin black solid</span>; }<br>
            <span class="css-body-text">.nth-last-of-type-test div span</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text">red</span>; }<br>
            <span class="css-body-text">.nth-last-of-type-test div code</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text">blue</span>; }<br>
            <span class="css-body-text">.nth-last-of-type-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.ej1 *:nth-last-of-type(2)</span>,<br>      
            <span class="css-body-text">.ej2 *:nth-last-of-type(2n)</span>,<br>      
            <span class="css-body-text">.ej3 *:nth-last-of-type(2n+1)</span>,<br>      
            <span class="css-body-text">.ej4 *:nth-last-of-type(even)</span>,<br>      
            <span class="css-body-text">.ej5 *:nth-last-of-type(odd)</span>,<br>      
            <span class="css-body-text">.ej6 *:nth-last-of-type(-n+4)</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text"> greenyellow</span>; }<br> 
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"nth-last-of-type-test"</span>&gt;<br>
        <div class="tabulation1">

            &lt;<span class="html-label-text">div</span>&gt;Número concreto >> :nth-last-of-type(2)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej1"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;1&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;2&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;3&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;4&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;5&lt;<span class="html-label-text">/code</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Patrón 2n >> :nth-last-of-type(2n)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej2"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;2&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;3&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;4&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;5&lt;<span class="html-label-text">/code</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Patrón 2n+1 >> :nth-last-of-type(2n+1)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej3"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;1&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;2&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;3&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;4&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;5&lt;<span class="html-label-text">/code</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Elementos pares >> :nth-last-of-type(even)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej4"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;1&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;2&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;3&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;4&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;5&lt;<span class="html-label-text">/code</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Elementos impares >> :nth-last-of-type(odd)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej5"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;1&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;2&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;3&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;4&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;5&lt;<span class="html-label-text">/code</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Primeros 4 elementos >> :nth-last-of-type(-n+4)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej6"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;1&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;2&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;3&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;4&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;5&lt;<span class="html-label-text">/code</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

        </div>
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>

        </b>`;
    } else if(nroBoton==43){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:nth-of-type()</b><hr>
        Se aplica sobre uno o más elementos de un tipo dado, en función de su posición entre un grupo de hermanos, contando desde el comienzo.<br>
        Puede asignarse un número concreto, <b>odd</b> para números impares, <b>even</b> para números pares y se pueden armar patrones usando series con la letra <b>n</b>.<br> 
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .nth-of-type-test div *{ border: thin black solid; margin-right: 5px ;}
            .nth-of-type-test div span{ color: red;}
            .nth-of-type-test div code{ color: blue;}
            .nth-of-type-test{ padding: 1em; }
            .ej1 *:nth-of-type(2), 
            .ej2 *:nth-of-type(2n), 
            .ej3 *:nth-of-type(2n+1), 
            .ej4 *:nth-of-type(even), 
            .ej5 *:nth-of-type(odd),
            .ej6 *:nth-of-type(-n+4) { background-color: greenyellow; }
        </style>
        
        <div class="nth-of-type-test">
            <div>Número concreto >> :nth-of-type(2)</div>
            <div class="ej1">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code>
            </div><br>
            <div>Patrón 2n >> :nth-of-type(2n)</div>
            <div class="ej2">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code>
            </div><br>
            <div>Patrón 2n+1 >> :nth-of-type(2n+1)</div>
            <div class="ej3">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code>
            </div><br>
            <div>Elementos pares >> :nth-of-type(even)</div>
            <div class="ej4">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code>
            </div><br>
            <div>Elementos impares >> :nth-of-type(odd)</div>
            <div class="ej5">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code>
            </div><br>
            <div>Primeros 4 elementos >> :nth-of-type(-n+4)</div>
            <div class="ej6">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><code>1</code><code>2</code><code>3</code><code>4</code><code>5</code>
            </div><br>
        </div>
    
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.nth-of-type-test div *</span>{ <span class="css-attribute-text">border</span>: <span class="css-variable-text">thin black solid</span>; }<br>
            <span class="css-body-text">.nth-of-type-test div span</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text">red</span>; }<br>
            <span class="css-body-text">.nth-of-type-test div code</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text">blue</span>; }<br>
            <span class="css-body-text">.nth-of-type-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.ej1 *:nth-of-type(2)</span>,<br>      
            <span class="css-body-text">.ej2 *:nth-of-type(2n)</span>,<br>      
            <span class="css-body-text">.ej3 *:nth-of-type(2n+1)</span>,<br>      
            <span class="css-body-text">.ej4 *:nth-of-type(even)</span>,<br>      
            <span class="css-body-text">.ej5 *:nth-of-type(odd)</span>,<br>      
            <span class="css-body-text">.ej6 *:nth-of-type(-n+4)</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text"> greenyellow</span>; }<br> 
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"nth-of-type-test"</span>&gt;<br>
        <div class="tabulation1">

            &lt;<span class="html-label-text">div</span>&gt;Número concreto >> :nth-of-type(2)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej1"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;1&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;2&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;3&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;4&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;5&lt;<span class="html-label-text">/code</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Patrón 2n >> :nth-of-type(2n)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej2"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;2&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;3&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;4&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;5&lt;<span class="html-label-text">/code</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Patrón 2n+1 >> :nth-of-type(2n+1)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej3"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;1&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;2&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;3&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;4&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;5&lt;<span class="html-label-text">/code</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Elementos pares >> :nth-of-type(even)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej4"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;1&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;2&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;3&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;4&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;5&lt;<span class="html-label-text">/code</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Elementos impares >> :nth-of-type(odd)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej5"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;1&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;2&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;3&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;4&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;5&lt;<span class="html-label-text">/code</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">div</span>&gt;Primeros 4 elementos >> :nth-of-type(-n+4)&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"ej6"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">span</span>&gt;1&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;2&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;3&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;4&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">span</span>&gt;5&lt;<span class="html-label-text">/span</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;1&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;2&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;3&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;4&lt;<span class="html-label-text">/code</span>&gt;
                &lt;<span class="html-label-text">code</span>&gt;5&lt;<span class="html-label-text">/code</span>&gt;
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

        </div>
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>

        </b>`;
    } else if(nroBoton==44){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:only-child</b><hr>
        Se aplica sobre aquellos elementos que son hijos únicos.<br> 
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .only-child-test { padding: 1em; }
            .only-child-test *:only-child { color: red; }
        </style>
        
        <div class="only-child-test">
            <div>Hijo único</div>
        </div>
        
        <div class="only-child-test">
            <div>Hijo 1</div>
            <p>Hijo 2</p>
        </div>
    
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.only-child-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.only-child-test *:only-child</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text"> red</span>; }<br> 
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"only-child-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">div</span>&gt;Hijo único&lt;<span class="html-label-text">/div</span>&gt;<br>
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"only-child-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">div</span>&gt;Hijo 1&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">p</span>&gt;Hijo 2&lt;<span class="html-label-text">/p</span>&gt;<br>
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>

        </b>`;
    } else if(nroBoton==45){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:only-of-type</b><hr>
        Se aplica sobre aquellos elementos que son hijos únicos de su tipo.<br> 
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .only-of-type-test { padding: 1em; }
            .only-of-type-test *:only-of-type { color: red; }
        </style>
                
        <div class="only-of-type-test">
            <div>Hijo 1 tipo div</div>
            <p>Hijo 2 tipo p</p>
            <div>Hijo 3 tipo div</div>
        </div>
    
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.only-of-type-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.only-of-type-test *:only-of-type</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text"> red</span>; }<br> 
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"only-of-type-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">div</span>&gt;Hijo 1 tipo div&lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">p</span>&gt;Hijo 2 tipo p&lt;<span class="html-label-text">/p</span>&gt;<br>
            &lt;<span class="html-label-text">div</span>&gt;Hijo 3 tipo div&lt;<span class="html-label-text">/div</span>&gt;<br>
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>

        </b>`;
    } else if(nroBoton==46){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:optional</b><hr>
        Se aplica sobre aquellos elementos de tipo <b>&lt;input&gt;</b>, <b>&lt;textarea&gt;</b> o <b>&lt;select&gt;</b> que sean de caracter opcional y no tengan establecidos el atributo <b>required</b> en el mismo.<br> 
        Los elementos listados por defecto son opcionales, aunque también se les puede aplicar el atributo <b>optional</b>.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .optional-test { padding: 1em; }
            .optional-test *:optional { background-color: yellowgreen; }
        </style>
                
        <form class="optional-test">
            <input type="text" value="Usuario" required><br>
            <input type="email" value="email" optional><br>
            <input type="button" value="❤">
        </form>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.optional-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.optional-test *:optional</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text"> yellowgreen</span>; }<br> 
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"optional-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"Usuario" </span><span class="html-attribute-text">required</span>&gt;&lt;<span class="html-label-text">/br</span>&gt;<br>
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"email" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"email" </span><span class="html-attribute-text">optional</span>&gt;&lt;<span class="html-label-text">/br</span>&gt;<br>
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"button" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"❤" </span>&gt;<br>
        </div>
        &lt;<span class="html-label-text">/form</span>&gt;<br>

        </b>`;
    } else if(nroBoton==47){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:out-of-range</b><hr>       
        Se aplica a los elementos a los cuales se les pueda determinar un rango dentro de su contenido, como los elementos input de tipo number. A los elementos input se les determina un rango con los atributos <b>min</b> y <b>max</b>, si el valor dado al elemento esta fuera del rango, se activa esta pseudo-clase.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
        input{ margin: 1em; }
        input:out-of-range{ background-color: lightsalmon; }
        </style>
        <input type="number" min="5" max="10" value="1">
            `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>

        <span class="tabulation1 css-body-text">input</span>{ <span class="css-attribute-text">margin</span>: <span class="css-value-text"> 1em</span>; }<br>

        <span class="tabulation1 css-body-text">input:out-of-range</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">lightsalmon</span>; }<br>

        &lt;<span class="html-label-text">/style</span>&gt;<br><br>


        &lt;<span class="html-label-text">input </span>
        <span class="html-attribute-text">type</span>=<span class="html-variable-text">"number"</span> <span class="html-attribute-text">min</span>=<span class="html-value-text">5 </span><span class="html-attribute-text">max</span>=<span class="html-value-text">10 </span><span class="html-attribute-text">value</span>=<span class="html-value-text">1</span>&gt;<br>
        
        </b>`;
    } else if(nroBoton==48){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:past</b> (EXPERIMENTAL) (PENDIENTE) <hr>
        Requiere ver contenido sobre videos.
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:past" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:past</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
         </b>`;
    } else if(nroBoton==49){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:picture-in-picture</b> (PENDIENTE) <hr>
        Requiere ver contenido sobre videos.
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:picture-in-picture" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:picture-in-picture</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
         </b>`;
    } else if(nroBoton==50){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:placeholder-shown</b><hr>
        Se aplica a los elementos de tipo <b>&lt;input&gt;</b> o <b>&lt;textarea&gt;</b> que contengan algúnn valor dentro del atributo <b>placeholder</b>.<br>
        El placeholder es el texto que se previsualiza dentro de un elemento input antes de otorgarle un valor.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            form{ padding: 1em; }
            input:placeholder-shown{ background-color: yellowgreen; }
        </style>
        
        <form>
            <label for="name">Nombre:</label>
            <input name="name" type="text"><br>
        
            <label for="email">Email:</label>
            <input name="email" type="email" placeholder="name@example.com"><br>
        </form>
    
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>

        &lt;<span class="html-label-text">style</span>&gt;<br>

        <span class="tabulation1 css-body-text">form</span>{    
        <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em</span>; }<br>
        
        <span class="tabulation1 css-body-text">input:placeholder-shown</span> {
        <span class="css-attribute-text">background</span>: <span class="css-variable-text">lightgreen</span>; }</span><br>

        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form </span><span class="html-attribute-text">action</span>=<span class="html-variable-text">""</span>&gt;<br>

        <div class="tabulation1">
            &lt;<span class="html-label-text">label </span><span class="html-attribute-text">for</span>=<span class="html-variable-text">"name"</span>&gt;Nombre:&lt;<span class="html-label-text">/label</span>&gt;<br>

            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text"</span> <span class="html-attribute-text">name</span>=<span class="html-variable-text">"name"</span>&gt; &lt;<span class="html-label-text">br</span>&gt;<br><br>

            &lt;<span class="html-label-text">label </span><span class="html-attribute-text">for</span>=<span class="html-variable-text">"email"</span>&gt;Email:&lt;<span class="html-label-text">label</span>&gt;<br>

            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"email"</span> <span class="html-attribute-text">name</span>=<span class="html-variable-text">"email" </span><span class="html-attribute-text">placeholder</span>=<span class="html-variable-text">"name@example.com"</span>&gt;
        </div>

        &lt;<span class="html-label-text">/form </span>&gt;

        </b>`;
    } else if(nroBoton==51){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:paused</b> (PENDIENTE) <hr>
        Requiere ver contenido sobre audio y video.
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:paused" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:paused</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
         </b>`;
    } else if(nroBoton==52){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:playing</b> (PENDIENTE) <hr>
        Requiere ver contenido sobre audio y video.
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:playing" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:playing</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
         </b>`;
    } else if(nroBoton==53){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:read-only</b><hr>       
        Se aplica a los elementos que ya no sean editables por el usuario. Esto se puede lograr con elementos del tipo <b>&lt;input&gt;</b> con el atributo <b>readonly</b> activado o por defecto en algunos elementos como los <b>&lt;input&gt;</b> de tipo button.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .read-only-test { padding: 1em; }
            .read-only-test *:read-only { background-color: lightsalmon; }
        </style>
                
        <form class="read-only-test">
            <input type="text" value="Usuario"><br>
            <input type="email" value="email" readonly><br>
            <input type="button" value="❤">
        </form>
            `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.read-only-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.read-only-test *:read-only</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text"> lightsalmon</span>; }<br> 
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"read-only-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"Usuario"</span>&gt;&lt;<span class="html-label-text">/br</span>&gt;<br>
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"email" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"email" <span class="html-attribute-text">readonly</span></span>&gt;&lt;<span class="html-label-text">/br</span>&gt;<br>
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"button" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"❤" </span>&gt;<br>
        </div>
        &lt;<span class="html-label-text">/form</span>&gt;<br>
        
        </b>`;
    } else if(nroBoton==54){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:read-write</b><hr>       
        Se aplica a los elementos que sean editables y legibles por el usuario. Esto se aplica a elementos que no tengan activos los atributos <b>readonly</b> o <b>disabled</b>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .read-write-test { padding: 1em; }
            .read-write-test *:read-write { background-color: yellowgreen; }
        </style>
                
        <form class="read-write-test">
            <input type="text" value="Input normal"><br>
            <input type="text" value="Input readOnly" readonly><br>
            <input type="text" value="Input disabled" disabled><br>
        </form>
            `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.read-write-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.read-write-test *:read-write</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text"> yellowgreen</span>; }<br> 
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"read-write-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"Input normal"</span>&gt;&lt;<span class="html-label-text">/br</span>&gt;<br>
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"Input readOnly "</span><span class="html-attribute-text">readonly</span>&gt;&lt;<span class="html-label-text">/br</span>&gt;<br>
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"Input disabled "</span><span class="html-attribute-text">disabled</span>&gt;&lt;<span class="html-label-text">/br</span>&gt;<br>        
        </div>
        &lt;<span class="html-label-text">/form</span>&gt;<br>
        
        </b>`;
    } else if(nroBoton==55){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:required</b><hr>
        Se aplica sobre aquellos elementos de tipo <b>&lt;input&gt;</b>, <b>&lt;textarea&gt;</b> o <b>&lt;select&gt;</b> que sean de caracter obligatorio. Para esto el elemento debe tener establecido el atributo <b>required</b> en el mismo.<br> 
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .required-test { padding: 1em; }
            .required-test *:required { background-color: yellowgreen; }
        </style>
                
        <form class="required-test">
            <input type="text" value="Usuario" required><br>
            <input type="email" value="email" optional><br>
            <input type="button" value="❤">
        </form>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.required-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.required-test *:required</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text"> yellowgreen</span>; }<br> 
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"required-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"Usuario" </span><span class="html-attribute-text">required</span>&gt;&lt;<span class="html-label-text">/br</span>&gt;<br>
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"email" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"email" </span><span class="html-attribute-text">optional</span>&gt;&lt;<span class="html-label-text">/br</span>&gt;<br>
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"button" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"❤" </span>&gt;<br>
        </div>
        &lt;<span class="html-label-text">/form</span>&gt;<br>

        </b>`;
    } else if(nroBoton==56){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:right</b> (PENDIENTE)<hr>
        Requiere ver impresión.<br>
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:right" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:right</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==57){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:root</b> (PENDIENTE)<hr>
        Esta pseudo-clase representa el elemento raiz de un arbol que representa el documneto. En HTML representa el elemento <b>&lt;HTML&gt;</b> y es identico al selector <b>html</b> pero con una especificidad mayor.<br>
        Esta pseudo-clase puede ser útil para definir variables globales o para establecer estilos predefinidos para todo el documento.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            :root{ 
                --main-background-color: blue;
                background-color: var(--main-background-color); }
        </style>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">:root</span>{<br> 
                <div class="tabulation1">
                    <span class="css-attribute-text">--main-background-color</span>: <span class="css-variable-text"> blue</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-function-text"> var</span>(<span class="css-variable-text"> --main-background-color</span>);<br>
                
                }<br>         
                </div>

        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>
        </b>`;
    } else if(nroBoton==58){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:scope</b> (PENDIENTE)<hr>
        Requiere ver JavaScript 
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:scope" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:scope</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==59){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:target</b><hr>
        Coincide con un elemento objetivo de tipo link. Este elemento debe ser único (el elemento objetivo) con un id especificado y debe coincidir con el fragmento de la URL.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .target-test { padding: 1em; }
            .target-test div { display: none; }
            .target-test div:target { display: block; }
        </style>
        
        <div class="target-test">
            <a href="#link1">Link 1</a>   
            <a href="#link2">Link 2</a>

            <div id="link1">
            <h3>Contenido del primer link</h3>
            </div>

            <div id="link2">
            <h3>Contenido del segundo link</h3>
            </div>
        </div>

        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.target-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
 
            <span class="css-body-text">.target-test div</span>{ <span class="css-attribute-text">display</span>: <span class="css-variable-text"> none</span>; }<br>         
 
            <span class="css-body-text">.target-test div:target</span>{ <span class="css-attribute-text">display</span>: <span class="css-variable-text"> block</span>; }<br>         
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"target-test"</span>&gt;<br>
        <div class="tabulation1">

            &lt;<span class="html-label-text">a </span><span class="html-attribute-text">href</span>=<span class="html-variable-text">"#link1"</span>&gt;Link 1&lt;<span class="html-label-text">/a</span>&gt;<br>
            &lt;<span class="html-label-text">a </span><span class="html-attribute-text">href</span>=<span class="html-variable-text">"#link2"</span>&gt;Link 2&lt;<span class="html-label-text">/a</span>&gt;<br>

            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">id</span>=<span class="html-variable-text">"link1"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">h3</span>&gt;Contenido del primer link&lt;<span class="html-label-text">/h3</span>&gt;<br>            
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;<br>

            &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">id</span>=<span class="html-variable-text">"link2"</span>&gt;<br>
            <div class="tabulation1">
                &lt;<span class="html-label-text">h3</span>&gt;Contenido del segundo link&lt;<span class="html-label-text">/h3</span>&gt;<br>            
            </div>
            &lt;<span class="html-label-text">/div</span>&gt;<br> 
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>

        </b>`;
    } else if(nroBoton==60){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:target-within</b> (EXPERIMENTAL) (PENDIENTE)<hr>
        Muy bajo soporte en los navegadores 
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:target-within" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:target-within</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==61){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:user-invalid</b> (EXPERIMENTAL) (PENDIENTE)<hr>
        Muy bajo soporte en los navegadores 
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==62){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:valid</b><hr>
        Coincide con un elemento de tipo <b>&lt;input&gt;</b> dentro de un formulario cuyo contenido sea valido acorde a las especificaciones solicitadas. Algunos ejemplos de esto podria ser que el contenido de un input de tipo email tenga el formato de un correo electrónico o que el número de un input de tipo number acotado este dentro del rango de valores deseado.
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .valid-test{ padding: 1em; }
            .valid-test *:valid + label,
            .valid-test *:valid { background-color: yellowgreen; }

        </style>
        
        <form class="valid-test">
            <input type="email" value="miCorre@ejemplo.com"><br>
            <input type="number" min="1" max="2" value="1"><br>
            <input type="checkbox" id="cbox" required checked>
            <label for="cbox">Acepto términos y condiciones</label>
        </form >

        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.valid-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.valid-test *:valid + label</span>,<br> 
            <span class="css-body-text">.valid-test *:valid</span>{ <span class="css-attribute-text">background-color</span>: <span class="css-variable-text"> yellowgreen</span>; }<br> 
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">form</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"valid-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"email" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"miCorre@ejemplo.com"</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"number" </span><span class="html-attribute-text">min</span>=<span class="html-variable-text">"1" </span><span class="html-attribute-text">max</span>=<span class="html-variable-text">"2" </span><span class="html-attribute-text">value</span>=<span class="html-variable-text">"1"</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>

            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"checkbox" </span><span class="html-attribute-text">id</span>=<span class="html-variable-text">"cbox" </span><span class="html-attribute-text">required checked</span>&gt;<br>

            &lt;<span class="html-label-text">label </span><span class="html-attribute-text">for</span>=<span class="html-variable-text">"cbox"</span>&gt;Acepto términos y condiciones&lt;<span class="html-label-text">/label</span>&gt;<br>        

            </div>
        &lt;<span class="html-label-text">/form</span>&gt;<br>

        </b>`;
    } else if(nroBoton==63){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:visited</b><hr>
        Se aplica sobre los enlaces que han sido visitado.<br>
        Se puede usar con elementos del tipo <b>&lt;a&gt</b>, <b>&lt;area&gt</b> o <b>&lt;visited&gt;</b> que cuentan con el atributo href.<br> Para que las reglas relacionadas con un enlace funcionen correctamente, se define el orden de estilos según la regla <b>LVHA</b> :link - :visited - :hover - :active. 
        `;

        document.getElementById("view-panel-1").innerHTML = `
        <style>
            .visited-test{ padding:1em; }
            .visited-test a:visited{ color:red; }
        </style>
        
        <div class="visited-test">
            <a href="#t3">Ir a lista de pseudo-clases</a><br>
            <a href="https://www.google.com/" target="_blank">Ir a google</a>
        </div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.visited-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text">1em;</span> }<br>
            <span class="css-body-text">.visited-test a:visited</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text">red;</span> }<br>      
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"visited-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">a </span><span class="html-attribute-text">href</span>=<span class="html-variable-text">"#t3"</span>&gt; Ir a lista de pseudo-clases &lt;<span class="html-label-text">/a</span>&gt;&lt;<span class="html-label-text">br</span>&gt;<br>
            &lt;<span class="html-label-text">a </span><span class="html-attribute-text">href</span>=<span class="html-variable-text">"https://www.google.com/" </span><span class="html-attribute-text">target</span>=<span class="html-variable-text">"_blank"</span>&gt; Ir a google &lt;<span class="html-label-text">/a</span>&gt;<br>
            </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>

        </b>`;
    } else if(nroBoton==64){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">:visited</b><hr>
        Es casi igual a la pseudo-clase is() con unas sutiles diferencias
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:where" target="_blank">https://developer.mozilla.org/en-US/docs/Web/CSS/:where</a>
        `;

        document.getElementById("view-panel-1").innerHTML = `
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } 


    


}

document.getElementById("rb-1").onclick = function(){ cambiarPanel(1); }
document.getElementById("rb-2").onclick = function(){ cambiarPanel(2); }
document.getElementById("rb-3").onclick = function(){ cambiarPanel(3); }
document.getElementById("rb-4").onclick = function(){ cambiarPanel(4); }
document.getElementById("rb-5").onclick = function(){ cambiarPanel(5); }
document.getElementById("rb-6").onclick = function(){ cambiarPanel(6); }
document.getElementById("rb-7").onclick = function(){ cambiarPanel(7); }
document.getElementById("rb-8").onclick = function(){ cambiarPanel(8); }
document.getElementById("rb-9").onclick = function(){ cambiarPanel(9); }
document.getElementById("rb-10").onclick = function(){ cambiarPanel(10); }
document.getElementById("rb-11").onclick = function(){ cambiarPanel(11); }
document.getElementById("rb-12").onclick = function(){ cambiarPanel(12); }
document.getElementById("rb-13").onclick = function(){ cambiarPanel(13); }
document.getElementById("rb-14").onclick = function(){ cambiarPanel(14); }
document.getElementById("rb-15").onclick = function(){ cambiarPanel(15); }
document.getElementById("rb-16").onclick = function(){ cambiarPanel(16); }
document.getElementById("rb-17").onclick = function(){ cambiarPanel(17); }
document.getElementById("rb-18").onclick = function(){ cambiarPanel(18); }
document.getElementById("rb-19").onclick = function(){ cambiarPanel(19); }
document.getElementById("rb-20").onclick = function(){ cambiarPanel(20); }
document.getElementById("rb-21").onclick = function(){ cambiarPanel(21); }
document.getElementById("rb-22").onclick = function(){ cambiarPanel(22); }
document.getElementById("rb-23").onclick = function(){ cambiarPanel(23); }
document.getElementById("rb-24").onclick = function(){ cambiarPanel(24); }
document.getElementById("rb-25").onclick = function(){ cambiarPanel(25); }
document.getElementById("rb-26").onclick = function(){ cambiarPanel(26); }
document.getElementById("rb-27").onclick = function(){ cambiarPanel(27); }
document.getElementById("rb-28").onclick = function(){ cambiarPanel(28); }
document.getElementById("rb-29").onclick = function(){ cambiarPanel(29); }
document.getElementById("rb-30").onclick = function(){ cambiarPanel(30); }
document.getElementById("rb-31").onclick = function(){ cambiarPanel(31); }
document.getElementById("rb-32").onclick = function(){ cambiarPanel(32); }
document.getElementById("rb-33").onclick = function(){ cambiarPanel(33); }
document.getElementById("rb-34").onclick = function(){ cambiarPanel(34); }
document.getElementById("rb-35").onclick = function(){ cambiarPanel(35); }
document.getElementById("rb-36").onclick = function(){ cambiarPanel(36); }
document.getElementById("rb-37").onclick = function(){ cambiarPanel(37); }
document.getElementById("rb-38").onclick = function(){ cambiarPanel(38); }
document.getElementById("rb-39").onclick = function(){ cambiarPanel(39); }
document.getElementById("rb-40").onclick = function(){ cambiarPanel(40); }
document.getElementById("rb-41").onclick = function(){ cambiarPanel(41); }
document.getElementById("rb-42").onclick = function(){ cambiarPanel(42); }
document.getElementById("rb-43").onclick = function(){ cambiarPanel(43); }
document.getElementById("rb-44").onclick = function(){ cambiarPanel(44); }
document.getElementById("rb-45").onclick = function(){ cambiarPanel(45); }
document.getElementById("rb-46").onclick = function(){ cambiarPanel(46); }
document.getElementById("rb-47").onclick = function(){ cambiarPanel(47); }
document.getElementById("rb-48").onclick = function(){ cambiarPanel(48); }
document.getElementById("rb-49").onclick = function(){ cambiarPanel(49); }
document.getElementById("rb-50").onclick = function(){ cambiarPanel(50); }
document.getElementById("rb-51").onclick = function(){ cambiarPanel(51); }
document.getElementById("rb-52").onclick = function(){ cambiarPanel(52); }
document.getElementById("rb-53").onclick = function(){ cambiarPanel(53); }
document.getElementById("rb-54").onclick = function(){ cambiarPanel(54); }
document.getElementById("rb-55").onclick = function(){ cambiarPanel(55); }
document.getElementById("rb-56").onclick = function(){ cambiarPanel(56); }
document.getElementById("rb-57").onclick = function(){ cambiarPanel(57); }
document.getElementById("rb-58").onclick = function(){ cambiarPanel(58); }
document.getElementById("rb-59").onclick = function(){ cambiarPanel(59); }
document.getElementById("rb-60").onclick = function(){ cambiarPanel(60); }
document.getElementById("rb-61").onclick = function(){ cambiarPanel(61); }
document.getElementById("rb-62").onclick = function(){ cambiarPanel(62); }
document.getElementById("rb-63").onclick = function(){ cambiarPanel(63); }
document.getElementById("rb-64").onclick = function(){ cambiarPanel(64); }