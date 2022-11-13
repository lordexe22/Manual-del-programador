function cambiarClase(nroBoton){
    if(nroBoton==0){
        document.getElementById("description-panel-0").innerHTML = '<b>row-gap</b><hr>Define la distancia entre las filas. Esta propiedad se debe incluir dentro de la clase donde se definen las propiedades del contenedor.';

        document.getElementById("view-panel-0").innerHTML = `        
        <div class="grid-container-center row-gap">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>  
        <div class="grid-item">4</div>
        <div class="grid-item">5</div>
        <div class="grid-item">6</div>  
        <div class="grid-item">7</div>
        <div class="grid-item">8</div>
        <div class="grid-item">9</div>  
        </div>
        `;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="css-body-text">.row-gap</span> {<br>
            <span class="tabulation1 css-attribute-text">row-gap</span>: <span class="css-value-text">1em</span>;<br>}    
        </b>`;

    } else if(nroBoton==1){ 
        document.getElementById("description-panel-0").innerHTML = '<b>column-gap</b><hr>Define la distancia entre las columnas. Esta propiedad se debe incluir dentro de la clase donde se definen las propiedades del contenedor.';
    
        document.getElementById("view-panel-0").innerHTML = `        
            <div class="grid-container-center column-gap">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>  
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>  
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>  
        </div>
            `;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="css-body-text">.column-gap</span> {<br>
            <span class="tabulation1 css-attribute-text">column-gap</span>: <span class="css-value-text">1em</span>;<br>}    
        </b>`;
    } else if(nroBoton==2){ 
        document.getElementById("description-panel-0").innerHTML = '<b>gap</b><hr>Es un shorthand (atajo) que permite utilizar las pripiedades row-gap y column-gap. Esta propiedad se debe incluir dentro de la clase donde se definen las propiedades del contenedor.';
    
        document.getElementById("view-panel-0").innerHTML = `        
            <div class="grid-container-center gap">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>  
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>  
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>  
        </div>
            `;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="css-body-text">.gap</span> {<br>
            <span class="tabulation1 css-attribute-text">gap</span>: <span class="css-value-text">1em 3em</span>;<br>}    
        </b>`;
    } 
    


}

document.getElementById("item-button-0").onclick = function(){ cambiarClase(0); }
document.getElementById("item-button-1").onclick = function(){ cambiarClase(1); }
document.getElementById("item-button-2").onclick = function(){ cambiarClase(2); }
document.getElementById("item-button-3").onclick = function(){ cambiarClase(3); }
document.getElementById("item-button-4").onclick = function(){ cambiarClase(4); }
document.getElementById("item-button-5").onclick = function(){ cambiarClase(5); }
document.getElementById("item-button-6").onclick = function(){ cambiarClase(6); }
document.getElementById("item-button-7").onclick = function(){ cambiarClase(7); }
document.getElementById("item-button-8").onclick = function(){ cambiarClase(8); }
document.getElementById("item-button-9").onclick = function(){ cambiarClase(9); }
document.getElementById("item-button-10").onclick = function(){ cambiarClase(10); }
document.getElementById("item-button-11").onclick = function(){ cambiarClase(11); }
document.getElementById("item-button-12").onclick = function(){ cambiarClase(12); }
document.getElementById("item-button-13").onclick = function(){ cambiarClase(13); }
document.getElementById("item-button-14").onclick = function(){ cambiarClase(14); }
document.getElementById("item-button-15").onclick = function(){ cambiarClase(15); }
document.getElementById("item-button-16").onclick = function(){ cambiarClase(16); }
document.getElementById("item-button-17").onclick = function(){ cambiarClase(17); }
document.getElementById("item-button-18").onclick = function(){ cambiarClase(18); }
document.getElementById("item-button-19").onclick = function(){ cambiarClase(19); }
document.getElementById("item-button-20").onclick = function(){ cambiarClase(20); }
document.getElementById("item-button-21").onclick = function(){ cambiarClase(21); }
document.getElementById("item-button-22").onclick = function(){ cambiarClase(22); }
document.getElementById("item-button-23").onclick = function(){ cambiarClase(23); }
document.getElementById("item-button-24").onclick = function(){ cambiarClase(24); }
document.getElementById("item-button-25").onclick = function(){ cambiarClase(25); }
document.getElementById("item-button-26").onclick = function(){ cambiarClase(26); }
document.getElementById("item-button-27").onclick = function(){ cambiarClase(27); }
document.getElementById("item-button-28").onclick = function(){ cambiarClase(28); }
document.getElementById("item-button-29").onclick = function(){ cambiarClase(29); }
document.getElementById("item-button-30").onclick = function(){ cambiarClase(30); }
document.getElementById("item-button-31").onclick = function(){ cambiarClase(31); }
document.getElementById("item-button-32").onclick = function(){ cambiarClase(32); }
document.getElementById("item-button-33").onclick = function(){ cambiarClase(33); }
document.getElementById("item-button-34").onclick = function(){ cambiarClase(34); }
document.getElementById("item-button-35").onclick = function(){ cambiarClase(35); }
document.getElementById("item-button-36").onclick = function(){ cambiarClase(36); }
document.getElementById("item-button-37").onclick = function(){ cambiarClase(37); }
document.getElementById("item-button-38").onclick = function(){ cambiarClase(38); }
document.getElementById("item-button-39").onclick = function(){ cambiarClase(39); }
document.getElementById("item-button-40").onclick = function(){ cambiarClase(40); }
document.getElementById("item-button-41").onclick = function(){ cambiarClase(41); }
document.getElementById("item-button-42").onclick = function(){ cambiarClase(42); }
document.getElementById("item-button-43").onclick = function(){ cambiarClase(43); }
document.getElementById("item-button-44").onclick = function(){ cambiarClase(44); }
document.getElementById("item-button-45").onclick = function(){ cambiarClase(45); }
document.getElementById("item-button-46").onclick = function(){ cambiarClase(46); }
document.getElementById("item-button-47").onclick = function(){ cambiarClase(47); }
document.getElementById("item-button-48").onclick = function(){ cambiarClase(48); }
document.getElementById("item-button-49").onclick = function(){ cambiarClase(49); }
document.getElementById("item-button-50").onclick = function(){ cambiarClase(50); }
document.getElementById("item-button-51").onclick = function(){ cambiarClase(51); }
document.getElementById("item-button-52").onclick = function(){ cambiarClase(52); }
document.getElementById("item-button-53").onclick = function(){ cambiarClase(53); }
document.getElementById("item-button-54").onclick = function(){ cambiarClase(54); }
document.getElementById("item-button-55").onclick = function(){ cambiarClase(55); }
document.getElementById("item-button-56").onclick = function(){ cambiarClase(56); }
document.getElementById("item-button-57").onclick = function(){ cambiarClase(57); }
document.getElementById("item-button-58").onclick = function(){ cambiarClase(58); }
document.getElementById("item-button-59").onclick = function(){ cambiarClase(59); }
document.getElementById("item-button-60").onclick = function(){ cambiarClase(60); }
document.getElementById("item-button-61").onclick = function(){ cambiarClase(61); }
document.getElementById("item-button-62").onclick = function(){ cambiarClase(62); }
document.getElementById("item-button-63").onclick = function(){ cambiarClase(63); }
document.getElementById("item-button-64").onclick = function(){ cambiarClase(64); }
document.getElementById("item-button-65").onclick = function(){ cambiarClase(65); }
document.getElementById("item-button-66").onclick = function(){ cambiarClase(66); }
document.getElementById("item-button-67").onclick = function(){ cambiarClase(67); }
document.getElementById("item-button-68").onclick = function(){ cambiarClase(68); }
document.getElementById("item-button-69").onclick = function(){ cambiarClase(69); }