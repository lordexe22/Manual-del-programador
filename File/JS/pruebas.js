
// ACTUALIZA LA LISTA DE OPCIONES DISPONIBLES EN FUNCION DEL TEMA ELEGIDO EN LA SECCION DE TITULO
function actualizarOpciones(object) {
    // Object es una referencia directa al elemento que invoca la funcion (en mi caso el elemento select)
    let theme = object.value;  
    if(theme == "clear"){
        document.getElementById("op").innerHTML = ""
    } else if(theme == "theme-1"){
        document.getElementById("options-panel-1").innerHTML = `
            <input type="radio" name="group-1" id="rb-1" class="rb" onclick="cambiarPanel(1)">
            <label for="rb-1">Item 1</label>
            <input type="radio" name="group-1" id="rb-2" class="rb" onclick="cambiarPanel(2)">
            <label for="rb-2">Item 2</label>    
            <input type="radio" name="group-1" id="rb-3" class="rb" onclick="cambiarPanel(3)">
            <label for="rb-3">Item 3</label>
            <input type="radio" name="group-1" id="rb-4" class="rb" onclick="cambiarPanel(4)">
            <label for="rb-4">Item 4</label>            
            `;
    } else if (theme == "theme-2"){
        document.getElementById("options-panel-1").innerHTML = `
        <input type="radio" name="group-1" id="rb-5" class="rb" onclick="cambiarPanel(5)">
        <label for="rb-5">Item 5</label>
        <input type="radio" name="group-1" id="rb-6" class="rb" onclick="cambiarPanel(6)">
        <label for="rb-6">Item 6</label> 
        `;
    } 
}

// ACTUALIZA TODOS LOS PANELES EN FUNCION DE LA OPCION ELEGIDA EN LA SECCION DE OPCIONES
function cambiarPanel(nroBoton){
    if(nroBoton==1){
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">Titulo item 1</b><hr>
        `;
        document.getElementById("view-panel-1").innerHTML = `     
        <div>Hola bebe </div> 
        `;
        document.getElementById("code-panel-1").innerHTML = `<b>
        Si señor
        </b>`;
    }    
}


