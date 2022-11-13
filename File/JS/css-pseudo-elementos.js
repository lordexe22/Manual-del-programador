function cambiarPanel(nroBoton){
    if(nroBoton==1){
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">::after</b><hr>
        Crea un pseudo-elemento el cual será el último hijo del elemento seleccionado.<br>
        Este pseudo-elemento se suele usar para agregar contenido al final del elemento mediante el atributo <b>content</b> en CSS.<br>
        El elemento agregado es un elemento inline de manera prederminada.
        `;

        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .after-test{ padding: 1em; }
            .after-test::after{ 
                color: red;
                content: " >> IMPORTANTE!!!"; 
            }
        </style>
        
        <div class="after-test">
            Llamar al 911
        </div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.after-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.after-test::after</span>{ <br>
                <span class="css-attribute-text">color</span>: <span class="css-variable-text"> red</span>; <br>
                <span class="css-attribute-text">content</span>: <span class="css-variable-text"> " >> IMPORTANTE"</span>; <br>
            }            
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"after-test"</span>&gt;<br>
        <div class="tabulation1">
            Llamar al 911
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>
        </b>`;

    } else if(nroBoton==2){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">::backdrop</b> (EXPERIMENTAL)<hr>
        `;

        document.getElementById("view-panel-1").innerHTML = `      
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        </b>`;
    } else if(nroBoton==3){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">::before</b><hr>
        Crea un pseudo-elemento el cual será el primer hijo del elemento seleccionado.<br>
        Este pseudo-elemento se suele usar para agregar contenido al inicio del elemento mediante el atributo <b>content</b> en CSS.<br>
        El elemento agregado es un elemento inline de manera prederminada.
        `;

        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .before-test{ padding: 1em; }
            .before-test::before{ 
                color: red;
                content: " IMPORTANTE!!!  >>  "; 
            }
        </style>
        
        <div class="before-test">
            Llamar al 911
        </div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.before-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.before-test::before</span>{ <br>
                <span class="css-attribute-text">color</span>: <span class="css-variable-text"> red</span>; <br>
                <span class="css-attribute-text">content</span>: <span class="css-variable-text"> " >> IMPORTANTE"</span>; <br>
            }            
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"before-test"</span>&gt;<br>
        <div class="tabulation1">
            Llamar al 911
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>
        </b>`;
    } else if(nroBoton==6){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">::first-letter</b><hr>
        Aplica estilos a la primera letra de la primera linea del elemento seleccionado. <br>
        Este pseudo-elemento solo aplica cuando al inicio se comienza con letras y no es requerido otro tipo de contenido, como tablas o imagenes.
        `;

        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .first-letter-test{ padding: 1em; }
            .first-letter-test::first-letter{ 
                color: red;
                font-size: 1.5em; 
            }
        </style>
        
        <div class="first-letter-test">
            <div>Llamar al 911</div>
            <div>O gritar</div>  
        </div>
        <div class="first-letter-test">
            <div>Prohibido llorar en posición fetal</div>
        </div>

        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.first-letter-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.first-letter-test::first-letter</span>{ <br>
                <span class="css-attribute-text">color</span>: <span class="css-variable-text"> red</span>; <br>
                <span class="css-attribute-text">font-size</span>: <span class="css-value-text"> 1.5em</span>; <br>
            }            
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"first-letter-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">div</span>&gt;
            Llamar al 911
            &lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span>&gt;
            O gritar
            &lt;<span class="html-label-text">/div</span>&gt;<br>

        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>
        

        


        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"first-letter-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">div</span>&gt;
            Prohibido llorar en posición fetal
            &lt;<span class="html-label-text">/div</span>&gt;<br>

        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>



        </b>`;
    } else if(nroBoton==7){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">::first-line</b><hr>
        Aplica estilos a la primera linea (renglon) del elemento seleccionado. <br>
        `;

        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .first-line-test{ padding: 1em; }
            .first-line-test::first-line{ color: red; }
        </style>
        
        <div class="first-line-test">
            <div>Llamar al 911</div>
            <div>O gritar</div>  
        </div>

        <div class="first-line-test">
            <div>El gato atónito por su presencia, contuvo el aliento y sostuvo la mirada sobre él. En ese instante ya no era el sr. bigotes, la caceria habia comenzado.</div>              
        </div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.first-line-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.first-line-test::first-line</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text"> red</span>; } <br>            
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>

        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"first-line-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">div</span>&gt;
            Llamar al 911
            &lt;<span class="html-label-text">/div</span>&gt;<br>
            &lt;<span class="html-label-text">div</span>&gt;
            O gritar
            &lt;<span class="html-label-text">/div</span>&gt;<br>

        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>
        
        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"first-line-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">div</span>&gt;
            El gato atónito por su presencia, contuvo el aliento y sostuvo la mirada sobre él. En ese instante ya no era el sr. bigotes, la caceria habia comenzado.
            &lt;<span class="html-label-text">/div</span>&gt;<br>

        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>



        </b>`;
    } else if(nroBoton==12){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">::placeholder</b><hr>
        Marca la apariencia de los placeholder en los elementos <b>&lt;input&gt;</b> o <b>&lt;textarea&gt;</b>.<br>
        Un placeholder es el texto que aparece en un cuadro editable antes de que se escriba algo sobre el mismo. Para usar un placeholder podemos usar la propiedad <b>placeholder</b> dentro de un elemento.
        `;

        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .placeholder-test{ padding: 1em; }
            .placeholder-test *::placeholder{ color: red; }
        </style>

        <div class="placeholder-test">
            <input type="text" placeholder="Nombre de usuario"> 
        </div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.placeholder-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.placeholder-test *::placeholder</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text"> red</span>; } <br>            
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>
        
        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"placeholder-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">input </span><span class="html-attribute-text">type</span>=<span class="html-variable-text">"text" </span><span class="html-attribute-text">placeholder</span>=<span class="html-variable-text">"Nombre de usuario"</span>&gt;
        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>
        </b>`;
    } else if(nroBoton==13){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">::selection</b><hr>
        Aplica estilos al contenido indicado cuando el mismo es resaltado en el documento. Para ver el efecto solo basta con escoger parte del texto con el mouse o el teclado.<br>
        `;

        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .selection-test{ padding: 1em; }
            .selection-test *::selection{ color: red; }
        </style>
        
        <div class="selection-test">
            <div>El gato atónito por su presencia, contuvo el aliento y sostuvo la mirada sobre él. En ese instante ya no era el sr. bigotes, la caceria habia comenzado.</div>              
        </div>
        `;

        document.getElementById("code-panel-1").innerHTML = `<b>
        &lt;<span class="html-label-text">style</span>&gt;<br>
        <div class="tabulation1">
            <span class="css-body-text">.selection-test</span>{ <span class="css-attribute-text">padding</span>: <span class="css-value-text"> 1em</span>; }<br>         
            <span class="css-body-text">.selection-test *::selection</span>{ <span class="css-attribute-text">color</span>: <span class="css-variable-text"> red</span>; } <br>            
        </div>
        &lt;<span class="html-label-text">/style</span>&gt;<br><br>
        
        &lt;<span class="html-label-text">div</span> <span class="html-attribute-text">class</span>=<span class="html-variable-text">"selection-test"</span>&gt;<br>
        <div class="tabulation1">
            &lt;<span class="html-label-text">div</span>&gt;
            El gato atónito por su presencia, contuvo el aliento y sostuvo la mirada sobre él. En ese instante ya no era el sr. bigotes, la caceria habia comenzado.
            &lt;<span class="html-label-text">/div</span>&gt;<br>

        </div>
        &lt;<span class="html-label-text">/div</span>&gt;<br>
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