function cambiarPanel(){

    let idItemChecked;
    let idCodeChecked;
    let nChildren;

    //Seccion flex-container-------------------------------------------------------------------------------

    // Guardamos en idCodeChecked el id del tipo de código que debemos mostrar
    nChildren = document.getElementById("code-selector-1").childElementCount;
    for( let i=0 ; i<nChildren ; i++ ){ 
        if(document.getElementById("code-selector-1").children[i].checked)
        idCodeChecked = document.getElementById("code-selector-1").children[i].id;
    }
    // Guardamos en idItemChecked el id del elemento sobre el cual debemos trabajar
    nChildren = document.getElementById("options-panel-1").childElementCount;
    for( let i=0 ; i<nChildren ; i++ ){ 
        if(document.getElementById("options-panel-1").children[i].checked)
        idItemChecked = document.getElementById("options-panel-1").children[i].id;
    }

    if(idItemChecked=="rb-1"){
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">display: flex;</b><hr>
        El elemento muestra su contenido en formato flexboflex-containerx. Cada uno de los hijos del contenedor se comportara como un elemento de tipo bloq, es decir, que ocupará todo el ancho disponible.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-direction: column;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
            <div class="flex-item">Item 4</div>
            <div class="flex-item">Item 7</div>
            <div class="flex-item">Item 8</div>
            <div class="flex-item">Item 9</div>
            <div class="flex-item">Item 10</div>
            <div class="flex-item">Item 11</div>
            <div class="flex-item">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-direction</span>: <span class="css-variable-text">column</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-2"){
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">display: inline-flex;</b><hr>
        El elemento muestra su contenido en formato flexbox. Cada uno de los hijos del contenedor se comportara como un elemento de tipo inline, es decir, que ocupará solo el ancho necesario para su contenido.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: inline-flex;
                flex-direction: column;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
            <div class="flex-item">Item 4</div>
            <div class="flex-item">Item 7</div>
            <div class="flex-item">Item 8</div>
            <div class="flex-item">Item 9</div>
            <div class="flex-item">Item 10</div>
            <div class="flex-item">Item 11</div>
            <div class="flex-item">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">inline-flex</span>;<br>
                    <span class="css-attribute-text">flex-direction</span>: <span class="css-variable-text">column</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-3"){
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">flex-direction: row;</b><hr>
        Los <code>flex-items</code> se ordenan de izquierda a derecha. El eje principal (main axis) es horizontal en esta configuración.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-direction: row;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
            <div class="flex-item">Item 4</div>
            <div class="flex-item">Item 7</div>
            <div class="flex-item">Item 8</div>
            <div class="flex-item">Item 9</div>
            <div class="flex-item">Item 10</div>
            <div class="flex-item">Item 11</div>
            <div class="flex-item">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-direction</span>: <span class="css-variable-text">row</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-4"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">flex-direction: inverse-row;</b><hr>
        Los <code>flex-items</code> se ordenan de derecha a izquierda. El eje principal (main axis) es horizontal en esta configuración.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-direction: row-reverse;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
            <div class="flex-item">Item 4</div>
            <div class="flex-item">Item 7</div>
            <div class="flex-item">Item 8</div>
            <div class="flex-item">Item 9</div>
            <div class="flex-item">Item 10</div>
            <div class="flex-item">Item 11</div>
            <div class="flex-item">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-direction</span>: <span class="css-variable-text">row-reverse</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
      
    } else if(idItemChecked=="rb-5"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">flex-direction: column;</b><hr>
        Los <code>flex-items</code> se ordenan desde arriba hacia abajo. El eje principal (main axis) es vertical en esta configuración.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-direction: column;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
            <div class="flex-item">Item 4</div>
            <div class="flex-item">Item 7</div>
            <div class="flex-item">Item 8</div>
            <div class="flex-item">Item 9</div>
            <div class="flex-item">Item 10</div>
            <div class="flex-item">Item 11</div>
            <div class="flex-item">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-direction</span>: <span class="css-variable-text">column</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
   
    } else if(idItemChecked=="rb-6"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">flex-direction: column-reverse;</b><hr>
        Los <code>flex-items</code> se ordenan desde abajo hacia arriba. El eje principal (main axis) es vertical en esta configuración.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-direction: column-reverse;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
            <div class="flex-item">Item 4</div>
            <div class="flex-item">Item 7</div>
            <div class="flex-item">Item 8</div>
            <div class="flex-item">Item 9</div>
            <div class="flex-item">Item 10</div>
            <div class="flex-item">Item 11</div>
            <div class="flex-item">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-direction</span>: <span class="css-variable-text">column-reverse</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-7"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">flex-wrap: wrap;</b><hr>
        El atributo <code>flex-wrap</code> indica la forma en la cual se desplegan los flex-items dentro del flex-container. Configurado en <code><b>wrap</b></code> los flex-items se desplegan por completo sin tener en cuenta el ancho del flex-container, los flex-items que no entren en una fila seran desplazados a la siguiente. 
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-wrap: wrap; 
                flex-direction: row;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
            <div class="flex-item">Item 4</div>
            <div class="flex-item">Item 7</div>
            <div class="flex-item">Item 8</div>
            <div class="flex-item">Item 9</div>
            <div class="flex-item">Item 10</div>
            <div class="flex-item">Item 11</div>
            <div class="flex-item">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-direction</span>: <span class="css-variable-text">row</span>;<br>
                    <span class="css-attribute-text">flex-wrap</span>: <span class="css-variable-text">wrap</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-8"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">flex-wrap: nowrap;</b><hr>
        El atributo <code>flex-wrap</code> indica la forma en la cual se desplegan los flex-items dentro del flex-container. Configurado en <code><b>nowrap</b></code> los flex-items se contaen y aumentan su altura al desplegarse de manera tal de que todos ellos quepan dentro de la primera fila. 
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-wrap: nowrap; 
                flex-direction: row;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
            <div class="flex-item">Item 4</div>
            <div class="flex-item">Item 7</div>
            <div class="flex-item">Item 8</div>
            <div class="flex-item">Item 9</div>
            <div class="flex-item">Item 10</div>
            <div class="flex-item">Item 11</div>
            <div class="flex-item">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-direction</span>: <span class="css-variable-text">row</span>;<br>
                    <span class="css-attribute-text">flex-wrap</span>: <span class="css-variable-text">nowrap</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-9"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">flex-wrap: wrap-reverse;</b><hr>
        El atributo <code>flex-wrap</code> indica la forma en la cual se desplegan los flex-items dentro del flex-container. Configurado en <code><b>wrap-reverse</b></code> funciona de forma similar a <code><b>wrap</b></code> pero se invierte el orden de las filas.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-wrap: wrap-reverse; 
                flex-direction: row;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
            <div class="flex-item">Item 4</div>
            <div class="flex-item">Item 7</div>
            <div class="flex-item">Item 8</div>
            <div class="flex-item">Item 9</div>
            <div class="flex-item">Item 10</div>
            <div class="flex-item">Item 11</div>
            <div class="flex-item">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-direction</span>: <span class="css-variable-text">row</span>;<br>
                    <span class="css-attribute-text">flex-wrap</span>: <span class="css-variable-text">wrap-reverse</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-10"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">flex-flow: &lt;'flex-direction'&gt; || &lt;flex-wrap &gt;;</b><hr>
        El atributo <code>flex-flow</code> es un shorthand que nos permite usar las propiedades de los atributos <code>flex-direction</code> y <code>flex-wrap</code> en una sola línea.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: inline-flex;
                flex-flow: row-reverse wrap;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2</div>
            <div class="flex-item">Item 3</div>
            <div class="flex-item">Item 4</div>
            <div class="flex-item">Item 7</div>
            <div class="flex-item">Item 8</div>
            <div class="flex-item">Item 9</div>
            <div class="flex-item">Item 10</div>
            <div class="flex-item">Item 11</div>
            <div class="flex-item">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">inline-flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row-reverse wrap</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-11"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">justify-content: flex-start;</b><hr>
        El atributo <code>justify-content</code> se usa para configurar el posicionamiento de los flex-items dentro de las filas del flex-container. En <code>flex-start</code> posiciona los flex-items pegados uno al otro en el sentido del main axis (desde main start a main end).
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2 más ancho</div>
            <div class="flex-item">Item 3</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2 más ancho&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">justify-content</span>: <span class="css-variable-text">flex-start</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-12"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">justify-content: flex-start;</b><hr>
        El atributo <code>justify-content</code> se usa para configurar el posicionamiento de los flex-items dentro de las filas del flex-container. En <code>flex-start</code> posiciona los flex-items pegados uno al otro en el sentido del main axis (desde main start a main end).
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row-reverse nowrap;
                justify-content: flex-start;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2 más ancho</div>
            <div class="flex-item">Item 3</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2 más ancho&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row-reverse nowrap</span>;<br>
                    <span class="css-attribute-text">justify-content</span>: <span class="css-variable-text">flex-start</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-13"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">justify-content: flex-end;</b><hr>
        El atributo <code>justify-content</code> se usa para configurar el posicionamiento de los flex-items dentro de las filas del flex-container. En <code>flex-end</code> posiciona los flex-items pegados uno al otro en el sentido inverso al del main axis (desde main end a main star).
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-end;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2 más ancho</div>
            <div class="flex-item">Item 3</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2 más ancho&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">justify-content</span>: <span class="css-variable-text">flex-end</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-14"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">justify-content: flex-end;</b><hr>
        El atributo <code>justify-content</code> se usa para configurar el posicionamiento de los flex-items dentro de las filas del flex-container. En <code>flex-end</code> se posiciona los flex-items pegados uno al otro en el sentido inverso al del main axis (desde main end a main star).
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row-reverse nowrap;
                justify-content: flex-end;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2 más ancho</div>
            <div class="flex-item">Item 3</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2 más ancho&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row-reverse nowrap</span>;<br>
                    <span class="css-attribute-text">justify-content</span>: <span class="css-variable-text">flex-end</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-15"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">justify-content: center;</b><hr>
        El atributo <code>justify-content</code> se usa para configurar el posicionamiento de los flex-items dentro de las filas del flex-container. En <code>center</code> se posiciona los flex-items pegados uno al otro en el centro del espacio disponible en el flex-container.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row nowrap;
                justify-content: center;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2 más ancho</div>
            <div class="flex-item">Item 3</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2 más ancho&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">justify-content</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-16"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">justify-content: space-between;</b><hr>
        El atributo <code>justify-content</code> se usa para configurar el posicionamiento de los flex-items dentro de las filas del flex-container. En <code>space-between</code> se posiciona los flex-items ocupando todo el ancho del flex-container y los mismos son separados repartiendo equitativamente el espacio sobrante de la fila.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2 más ancho</div>
            <div class="flex-item">Item 3</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2 más ancho&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">justify-content</span>: <span class="css-variable-text">space-between</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-17"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">justify-content: space-around;</b><hr>
        El atributo <code>justify-content</code> se usa para configurar el posicionamiento de los flex-items dentro de las filas del flex-container. En <code>space-around</code> los flex-items son separados equitativamente entre si y la mitad de esta distancia se usa para separar los flex-items de cada extremo del flex-container.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-around;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2 más ancho</div>
            <div class="flex-item">Item 3</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2 más ancho&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">justify-content</span>: <span class="css-variable-text">space-around</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-18"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">justify-content: space-evenly;</b><hr>
        El atributo <code>justify-content</code> se usa para configurar el posicionamiento de los flex-items dentro de las filas del flex-container. En <code>space-evenly</code> los flex-items son separados entre si y los extremos por la misma distancia.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-evenly;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
        </style>

        <div class="flex-container">
            <div class="flex-item">Item 1</div>
            <div class="flex-item">Item 2 más ancho</div>
            <div class="flex-item">Item 3</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2 más ancho&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">justify-content</span>: <span class="css-variable-text">space-evenly</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                }
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-19"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">align-items: flex-start;</b><hr>
        El atributo <code>align-items</code> se usa para configurar el alineamiento de los flex-items en torno a las filas del flex-container. En <code>flex-start</code> los flex-items se alinean haciendo coincidir la parte superior de los mismo con la parte superior del flex-container.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row nowrap;
                align-items: flex-start;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">flex-start</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                    <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.mediano</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.grande</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                    } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-20"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">align-items: center;</b><hr>
        El atributo <code>align-items</code> se usa para configurar el alineamiento de los flex-items en torno a las filas del flex-container. En <code>center</code> los flex-items se alinean haciendo coincidir el centro de los flex-items con el centro del flex-container.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.mediano</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.grande</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                    } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-21"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">align-items: flex-end;</b><hr>
        El atributo <code>align-items</code> se usa para configurar el alineamiento de los flex-items en torno a las filas del flex-container. En <code>flex-end</code> los flex-items se alinean haciendo coincidir el bore inferior de los mismos con el borde inferior del flex-container.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row nowrap;
                align-items: flex-end;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">flex-end</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.mediano</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.grande</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                    } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-22"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">align-items: stretch;</b><hr>
        El atributo <code>align-items</code> se usa para configurar el alineamiento de los flex-items en torno a las filas del flex-container. En <code>stretch</code> los flex-items se extienden arriba y abajo hasta ocupar todo el flex-container o hasta llegar a alguna altura límite preestablecida. Este es el valor por defecto.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row nowrap;
                align-items: stretch;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">stretch</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.mediano</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.grande</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                    } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-23"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">align-items: baseline;</b><hr>
        El atributo <code>align-items</code> se usa para configurar el alineamiento de los flex-items en torno a las filas del flex-container. En <code>baseline</code> los flex-items se alinean de manera tal de que la linea de base de todos los textos de los distintos flex-items coincidan. La linea de base (baseline) es una linea imaginaria que pasa por debajo del texto.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row nowrap;
                align-items: baseline;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">baseline</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.mediano</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.grande</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                    } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-24"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">align-content: flex-start;</b><hr>
        El atributo <code>align-content</code> se usa para configurar la forma en la cual se agrupan de los flex-items dentro del flex-container. En <code>flex-start</code> los flex-items se intentan agrupar en la zona superior del flex-container.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                align-content: flex-start;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
            <div class="flex-item mediano">Item 7</div>
            <div class="flex-item pequeño">Item 8</div>
            <div class="flex-item mediano">Item 9</div>
            <div class="flex-item grande">Item 10</div>
            <div class="flex-item grande">Item 11</div>
            <div class="flex-item mediano">Item 12</div>

        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row wrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">align-content</span>: <span class="css-variable-text">flex-start</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.mediano</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.grande</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-25"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">align-content: center;</b><hr>
        El atributo <code>align-content</code> se usa para configurar la forma en la cual se agrupan de los flex-items dentro del flex-container. En <code>center</code> los flex-items se intentan agrupar en la zona central del flex-container.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                align-content: center;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
            <div class="flex-item mediano">Item 7</div>
            <div class="flex-item pequeño">Item 8</div>
            <div class="flex-item mediano">Item 9</div>
            <div class="flex-item grande">Item 10</div>
            <div class="flex-item grande">Item 11</div>
            <div class="flex-item mediano">Item 12</div>

        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row wrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">align-content</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.mediano</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.grande</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-26"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">align-content: flex-end;</b><hr>
        El atributo <code>align-content</code> se usa para configurar la forma en la cual se agrupan de los flex-items dentro del flex-container. En <code>flex-end</code> los flex-items se intentan agrupar en la zona inferior del flex-container.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                align-content: flex-end;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em;  }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
            <div class="flex-item mediano">Item 7</div>
            <div class="flex-item pequeño">Item 8</div>
            <div class="flex-item mediano">Item 9</div>
            <div class="flex-item grande">Item 10</div>
            <div class="flex-item grande">Item 11</div>
            <div class="flex-item mediano">Item 12</div>

        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row wrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">align-content</span>: <span class="css-variable-text">flex-end</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.mediano</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.grande</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                    } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-27"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">align-content: stretch;</b><hr>
        El atributo <code>align-content</code> se usa para configurar la forma en la cual se agrupan de los flex-items dentro del flex-container. En <code>stretch</code> los flex-items se expanden verticalmente intentado ocupar todo el espacio posible dentro de su fila correspondiente.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                align-content: stretch;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
            <div class="flex-item mediano">Item 7</div>
            <div class="flex-item pequeño">Item 8</div>
            <div class="flex-item mediano">Item 9</div>
            <div class="flex-item grande">Item 10</div>
            <div class="flex-item grande">Item 11</div>
            <div class="flex-item mediano">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row wrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">align-content</span>: <span class="css-variable-text">stretch</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.mediano</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.grande</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                    } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-28"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">align-content: space-between;</b><hr>
        El atributo <code>align-content</code> se usa para configurar la forma en la cual se agrupan de los flex-items dentro del flex-container. En <code>space-between</code> los flex-items se posicionan ocupando las zonas superior e inferior y dividiendo el espacio disponible restante para separar todas las filas.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                align-content: space-between;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
            <div class="flex-item mediano">Item 7</div>
            <div class="flex-item pequeño">Item 8</div>
            <div class="flex-item mediano">Item 9</div>
            <div class="flex-item grande">Item 10</div>
            <div class="flex-item grande">Item 11</div>
            <div class="flex-item mediano">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row wrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">align-content</span>: <span class="css-variable-text">space-between</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.mediano</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.grande</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                    } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-29"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">align-content: space-around;</b><hr>
        El atributo <code>align-content</code> se usa para configurar la forma en la cual se agrupan de los flex-items dentro del flex-container. En <code>space-around</code> los flex-items se posicionan separando las filas entre si en una distancia fija y separando las filas superior e inferior a la mitad de esta disntacia de los bordes del flex-container.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                align-content: space-around;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
            <div class="flex-item mediano">Item 7</div>
            <div class="flex-item pequeño">Item 8</div>
            <div class="flex-item mediano">Item 9</div>
            <div class="flex-item grande">Item 10</div>
            <div class="flex-item grande">Item 11</div>
            <div class="flex-item mediano">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row wrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">align-content</span>: <span class="css-variable-text">space-around</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.mediano</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.grande</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                    } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-30"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">align-content: space-evenly;</b><hr>
        El atributo <code>align-content</code> se usa para configurar la forma en la cual se agrupan de los flex-items dentro del flex-container. En <code>space-evenly</code> los flex-items se posicionan separando las filas entre si y con los extremos la misma distancia.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                align-content: space-evenly;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
            <div class="flex-item mediano">Item 7</div>
            <div class="flex-item pequeño">Item 8</div>
            <div class="flex-item mediano">Item 9</div>
            <div class="flex-item grande">Item 10</div>
            <div class="flex-item grande">Item 11</div>
            <div class="flex-item mediano">Item 12</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row wrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">align-content</span>: <span class="css-variable-text">space-evenly</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.mediano</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                    } <br><br>
                    <span class="css-body-text">.flex-container&gt;.grande</span>{
                        <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                    } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-31"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">row-gap: value;</b><hr>
        El atributo <code>column-gap</code> establece una medida de separación entre las distintas filas pertenencientes a un flex-container.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                align-content: center;
                row-gap: 40px;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
            <div class="flex-item mediano">Item 7</div>
            <div class="flex-item pequeño">Item 8</div>
            <div class="flex-item mediano">Item 9</div>
            <div class="flex-item grande">Item 10</div>
            <div class="flex-item grande">Item 11</div>
            <div class="flex-item mediano">Item 12</div>

        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row wrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">align-content</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">row-gap</span>: <span class="css-value-text">40px</span>;<br>                    
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.mediano</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.grande</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-32"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">column-gap: value;</b><hr>
        El atributo <code>column-gap</code> establece una medida de separación entre flex-items pertenecientes a una misma fila.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                align-content: center;
                column-gap: 5px;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
            <div class="flex-item mediano">Item 7</div>
            <div class="flex-item pequeño">Item 8</div>
            <div class="flex-item mediano">Item 9</div>
            <div class="flex-item grande">Item 10</div>
            <div class="flex-item grande">Item 11</div>
            <div class="flex-item mediano">Item 12</div>

        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row wrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">align-content</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">column-gap</span>: <span class="css-value-text">5px</span>;<br>                    
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.mediano</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.grande</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-33"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">gap: value;</b><hr>
        El atributo <code>gap</code> es un shorthand para usar las propiedades row-gap y column-gap. Si se pone un solo valor, este se establece para ambas propiedades. Si se ponen dos valores el primero es para row-gap y el segundo para column-gap.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                align-content: center;
                gap: 5px;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
            <div class="flex-item mediano">Item 7</div>
            <div class="flex-item pequeño">Item 8</div>
            <div class="flex-item mediano">Item 9</div>
            <div class="flex-item grande">Item 10</div>
            <div class="flex-item grande">Item 11</div>
            <div class="flex-item mediano">Item 12</div>

        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row wrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">align-content</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">gap</span>: <span class="css-value-text">5px</span>;<br>                    
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.mediano</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.grande</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } else if(idItemChecked=="rb-34"){ 
        document.getElementById("description-panel-1").innerHTML =  `       
        <b style="font-size:1.2em;">gap: value;</b><hr>
        El atributo <code>gap</code> es un shorthand para usar las propiedades row-gap y column-gap. Si se pone un solo valor, este se establece para ambas propiedades. Si se ponen dos valores el primero es para row-gap y el segundo para column-gap.
        `;
        document.getElementById("view-panel-1").innerHTML = `      
        <style>
            .flex-container{
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                align-content: center;
                gap: 40px 5px;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container>.flex-item{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container>.pequeño{ font-size: 1em; }
            .flex-container>.mediano{ font-size: 2em; }
            .flex-container>.grande{ font-size: 3em; }
        </style>

        <div class="flex-container">
            <div class="flex-item grande">Item 1</div>
            <div class="flex-item mediano">Item 2</div>
            <div class="flex-item pequeño">Item 3</div>
            <div class="flex-item mediano">Item 4</div>
            <div class="flex-item grande">Item 5</div>
            <div class="flex-item pequeño">Item 6</div>
            <div class="flex-item mediano">Item 7</div>
            <div class="flex-item pequeño">Item 8</div>
            <div class="flex-item mediano">Item 9</div>
            <div class="flex-item grande">Item 10</div>
            <div class="flex-item grande">Item 11</div>
            <div class="flex-item mediano">Item 12</div>

        </div>
        `;
        if(idCodeChecked=="rb-HTML-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 7&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item pequeño"</span>&gt;Item 8&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 9&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 10&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grande"</span>&gt;Item 11&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item mediano"</span>&gt;Item 12&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-1"){
            document.getElementById("code-display-1").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row wrap</span>;<br>
                    <span class="css-attribute-text">align-items</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">align-content</span>: <span class="css-variable-text">center</span>;<br>
                    <span class="css-attribute-text">gap</span>: <span class="css-value-text">40px 5px</span>;<br>                    
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.pequeño</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">1em</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.mediano</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">2em</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.grande</span>{
                    <span class="css-attribute-text">font-size</span>: <span class="css-value-text">3em</span>;
                } <br><br>
            </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-1"){
            document.getElementById("code-display-1").innerHTML = "";
        }
    } 

    //Seccion flex-item-----------------------------------------------------------------------------

    // Guardamos en idCodeChecked el id del tipo de código que debemos mostrar
    nChildren = document.getElementById("code-selector-2").childElementCount;
    for( let i=0 ; i<nChildren ; i++ ){ 
        if(document.getElementById("code-selector-2").children[i].checked)
        idCodeChecked = document.getElementById("code-selector-2").children[i].id;
    }
    // Guardamos en idItemChecked el id del elemento sobre el cual debemos trabajar
    nChildren = document.getElementById("options-panel-2").childElementCount;
    for( let i=0 ; i<nChildren ; i++ ){ 
        if(document.getElementById("options-panel-2").children[i].checked)
        idItemChecked = document.getElementById("options-panel-2").children[i].id;
    }

    if(idItemChecked=="rb-35"){ 
        document.getElementById("description-panel-2").innerHTML =  `       
        <b style="font-size:1.2em;">order: value;</b><hr>
        El atributo <code>order</code> permite indicar en que orden se posicionan los flex-items. Cuanto menor sea el número, antes se desplegará el flex-item. El valor por defecto es cero y se permite el uso de números negativos. 
        `;
        document.getElementById("view-panel-2").innerHTML = `      
        <style>
            .flex-container-2{
                display: flex;
                flex-flow: row nowrap;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container-2>.flex-item-2{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container-2>.primero{ order: 1; }
            .flex-container-2>.segundo{ order: 2; }
            .flex-container-2>.tercero{ order: 3; }
            .flex-container-2>.principal{ order: -1; }

        </style>

        <div class="flex-container-2">
            <div class="flex-item-2">Item 1</div>
            <div class="flex-item-2 segundo">Item 2</div>
            <div class="flex-item-2 primero">Item 3</div>
            <div class="flex-item-2 tercero">Item 4</div>
            <div class="flex-item-2 principal">Item 5</div>
            <div class="flex-item-2 primero">Item 6</div>

        </div>
        `;
        if(idCodeChecked=="rb-HTML-2"){
            document.getElementById("code-display-2").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item segundo"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item primero"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item tercero"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item principal"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item primero"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-2"){
            document.getElementById("code-display-2").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.primero</span>{
                    <span class="css-attribute-text">order</span>: <span class="css-value-text">1</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.segundo</span>{
                    <span class="css-attribute-text">order</span>: <span class="css-value-text">2</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.tercero</span>{
                    <span class="css-attribute-text">order</span>: <span class="css-value-text">3</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.principal</span>{
                    <span class="css-attribute-text">order</span>: <span class="css-value-text">-1</span>;
                }
                </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-2"){
            document.getElementById("code-display-2").innerHTML = "";
        }
    } else if(idItemChecked=="rb-36"){ 
        document.getElementById("description-panel-2").innerHTML =  `       
        <b style="font-size:1.2em;">flex-grow: value;</b><hr>
        El atributo <code>flex-grow</code> indica la habilidad que tiene un flex-item para crecer de tamaño de ser necesario. El valor por defecto es cero, si se asigna un número superior, dicho flex-item crecera proporcionalmente con respecto al resto de los flex-items. 
        `;
        document.getElementById("view-panel-2").innerHTML = `      
        <style>
            .flex-container-2{
                display: flex;
                flex-flow: row nowrap;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container-2>.flex-item-2{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
            }
            .flex-container-2>.grow-1{ flex-grow: 1; }
            .flex-container-2>.grow-2{ flex-grow: 2; }
            .flex-container-2>.grow-3{ flex-grow: 3; }

        </style>

        <div class="flex-container-2">
            <div class="flex-item-2">Item 1</div>
            <div class="flex-item-2 grow-1">Item 2</div>
            <div class="flex-item-2">Item 3</div>
            <div class="flex-item-2 grow-2">Item 4</div>
            <div class="flex-item-2">Item 5</div>
            <div class="flex-item-2 grow-3">Item 6</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-2"){
            document.getElementById("code-display-2").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grow-1"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grow-2"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item grow-3"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-2"){
            document.getElementById("code-display-2").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.grow-1</span>{
                    <span class="css-attribute-text">flex-grow</span>: <span class="css-value-text">1</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.grow-2</span>{
                    <span class="css-attribute-text">flex-grow</span>: <span class="css-value-text">2</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.grow-3</span>{
                    <span class="css-attribute-text">flex-grow</span>: <span class="css-value-text">3</span>;
                } 
                </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-2"){
            document.getElementById("code-display-2").innerHTML = "";
        }
    } else if(idItemChecked=="rb-37"){ 
        document.getElementById("description-panel-2").innerHTML =  `       
        <b style="font-size:1.2em;">flex-shrink: value;</b><hr>
        El atributo <code>flex-shrink</code> indica la habilidad que tiene un flex-item para encogerse de tamaño de ser esto necesario. El valor por defecto es cero, si se asigna un número superior, dicho flex-item se encogera proporcionalmente con respecto al resto de los flex-items. 
        `;
        document.getElementById("view-panel-2").innerHTML = `      
        <style>
            .flex-container-2{
                display: flex;
                flex-flow: row nowrap;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container-2>.flex-item-2{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
                width: 92px;
            }
            .flex-container-2>.shrink-1{ flex-shrink: 10; }
            .flex-container-2>.shrink-2{ flex-shrink: 20; }
            .flex-container-2>.shrink-3{ flex-shrink: 30; }

        </style>

        <div class="flex-container-2">
            <div class="flex-item-2">Item 1</div>
            <div class="flex-item-2 shrink-1">Item 2</div>
            <div class="flex-item-2">Item 3</div>
            <div class="flex-item-2 shrink-2">Item 4</div>
            <div class="flex-item-2">Item 5</div>
            <div class="flex-item-2 shrink-3">Item 6</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-2"){
            document.getElementById("code-display-2").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item shrink-1"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item shrink-2"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item shrink-3"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-2"){
            document.getElementById("code-display-2").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">row nowrap</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                    <span class="css-attribute-text">width</span>: <span class="css-value-text">92px</span>;<br>
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.shrink-1</span>{
                    <span class="css-attribute-text">flex-shrink</span>: <span class="css-value-text">1</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.shrink-2</span>{
                    <span class="css-attribute-text">flex-shrink</span>: <span class="css-value-text">2</span>;
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.shrink-3</span>{
                    <span class="css-attribute-text">flex-shrink</span>: <span class="css-value-text">3</span>;
                } 
                </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-2"){
            document.getElementById("code-display-2").innerHTML = "";
        }
    } else if(idItemChecked=="rb-38"){ 
        document.getElementById("description-panel-2").innerHTML =  `       
        <b style="font-size:1.2em;">flex-basis: value;</b><hr>
        El atributo <code>flex-basis</code> asigna el alto o ancho (según el main-axis configurado) de los flex-items antes de que estos sean colocados dentro del flex-container. 
        `;
        document.getElementById("view-panel-2").innerHTML = `      
        <style>
            .flex-container-2{
                display: flex;
                flex-flow: column nowrap;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container-2>.flex-item-2{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
                flex-basis: calc(75%/6);
            }
        </style>

        <div class="flex-container-2">
            <div class="flex-item-2">Item 1</div>
            <div class="flex-item-2">Item 2</div>
            <div class="flex-item-2">Item 3</div>
            <div class="flex-item-2">Item 4</div>
            <div class="flex-item-2">Item 5</div>
            <div class="flex-item-2">Item 6</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-2"){
            document.getElementById("code-display-2").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-2"){
            document.getElementById("code-display-2").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">column nowrap</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                    <span class="css-attribute-text">flex-basis</span>: <span class="css-value-text">calc(75%/6)</span>;<br>

                </div>
                } 
                </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-2"){
            document.getElementById("code-display-2").innerHTML = "";
        }
    } else if(idItemChecked=="rb-39"){ 
        document.getElementById("description-panel-2").innerHTML =  `       
        <b style="font-size:1em;">flex: none | [<'flex-grow> <'flex-shrink'>? || <'flex-basis'>];</b><hr>
        El atributo <code>flex</code> es un shorthand que nos permite usar las propiedades &lt;<code><b>flex-grow</b></code>&gt;, &lt;<code><b>flex-shrink</b></code>&gt; y &lt;<code><b>flex-basis</b></code>&gt;.
        `;
        document.getElementById("view-panel-2").innerHTML = `      
        <style>
            .flex-container-2{
                display: flex;
                flex-flow: row nowrap;
                border: medium black solid;
                background-color: gold;
                height: 21.4em;
            }
            .flex-container-2>.flex-item-2{
                border: medium darkred solid;
                background-color: darkblue;
                color: white;
                flex-basis: calc(75%/6);
            }
            .flex-container-2>.flex-a{ flex: 5; }
            .flex-container-2>.flex-b{ flex: 50px; }
            .flex-container-2>.flex-c{ flex: 3 30px; }
            .flex-container-2>.flex-d{ flex: 2 10; }
            .flex-container-2>.flex-e{ flex: 5 10 30px; }
        </style>

        <div class="flex-container-2">
            <div class="flex-item-2">Item 1</div>
            <div class="flex-item-2 flex-a">Item 2</div>
            <div class="flex-item-2 flex-b">Item 3</div>
            <div class="flex-item-2 flex-c">Item 4</div>
            <div class="flex-item-2 flex-d">Item 5</div>
            <div class="flex-item-2 flex-e">Item 6</div>
        </div>
        `;
        if(idCodeChecked=="rb-HTML-2"){
            document.getElementById("code-display-2").innerHTML = `<b>
            &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-container"</span>&gt;
            <div class="tabulation1">
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item flex-a"</span>&gt;Item 1&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 2&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item flex-b"</span>&gt;Item 3&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item"</span>&gt;Item 4&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item flex-c"</span>&gt;Item 5&lt;<span class="html-label-text">/div</span>&gt;<br>
                &lt;<span class="html-label-text">div </span><span class="html-attribute-text">class</span>=<span class="html-variable-text">"flex-item flex-d"</span>&gt;Item 6&lt;<span class="html-label-text">/div</span>&gt;<br>
            </div>
            &lt;<span class="html-label-text tabulation0">/div</span>&gt;
            </b>`;
        }
        else if(idCodeChecked=="rb-CSS-2"){
            document.getElementById("code-display-2").innerHTML = `<b>
            <span class="css-body-text">.flex-container</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">display</span>: <span class="css-variable-text">flex</span>;<br>
                    <span class="css-attribute-text">flex-flow</span>: <span class="css-variable-text">column nowrap</span>;<br>
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium black solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">gold</span>;<br>
                    <span class="css-attribute-text">height</span>: <span class="css-value-text">21.4em</span>;<br>                    
                </div>
                } <br><br>
                <span class="css-body-text">.flex-container&gt;.flex-item</span>{<br>
                <div class="tabulation1">
                    <span class="css-attribute-text">border</span>: <span class="css-variable-text">medium darkred solid</span>;<br>
                    <span class="css-attribute-text">background-color</span>: <span class="css-variable-text">darkblue</span>;<br>
                    <span class="css-attribute-text">color</span>: <span class="css-variable-text">white</span>;<br>
                    <span class="css-attribute-text">flex-basis</span>: <span class="css-value-text">calc(75%/6)</span>;<br>
                </div>
                } <br><br>
                <span class="css-comment-text">/* flex-grow */</span><br>
                <span class="css-body-text">.flex-container&gt;.flex-a</span>{
                    <span class="css-attribute-text">flex</span>: <span class="css-value-text">5</span>;
                } <br><br>
                <span class="css-comment-text">/* flex-basis */</span><br>
                <span class="css-body-text">.flex-container&gt;.flex-b</span>{
                    <span class="css-attribute-text">flex</span>: <span class="css-value-text">50px</span>;
                } <br><br>
                <span class="css-comment-text">/* flex-grow | flex-basis */</span><br>
                <span class="css-body-text">.flex-container&gt;.flex-c</span>{
                    <span class="css-attribute-text">flex</span>: <span class="css-value-text">3 30px</span>
                } <br><br>
                <span class="css-comment-text">/* flex-grow | flex-shrink */</span><br>
                <span class="css-body-text">.flex-container&gt;.flex-d</span>{
                    <span class="css-attribute-text">flex</span>: <span class="css-value-text">2 10</span>;
                } <br><br>
                <span class="css-comment-text">/* flex-grow | flex-shrink | flex-basis */</span><br>
                <span class="css-body-text">.flex-container&gt;.flex-e</span>{
                    <span class="css-attribute-text">flex</span>: <span class="css-value-text">5 10 30px</span>;
                } <br><br>
                </b>`;
        }
        else if(idCodeChecked=="rb-JavaScript-2"){
            document.getElementById("code-display-2").innerHTML = "";
        }
    } 




}


// ACTUALIZA LA LISTA DE OPCIONES DISPONIBLES EN FUNCION DEL TEMA ELEGIDO EN LA SECCION DE TITULO
function actualizarOpciones(object) {
    // Object es una referencia directa al elemento que invoca la funcion (en mi caso el elemento select)
    let theme = object.value;  
    if(theme == "clear"){
        document.getElementById("description-panel-1").innerHTML ="";
        document.getElementById("options-panel-1").innerHTML ="";
        document.getElementById("code-display-1").innerHTML ="";
        document.getElementById("view-panel-1").innerHTML ="";

    } 
    // Seccion flex-container
    else if(theme == "theme-1"){    // display
        document.getElementById("options-panel-1").innerHTML = `
        <input type="radio" name="group-1" id="rb-1" class="rb" onclick="cambiarPanel()" checked>
        <label for="rb-1">flex</label>
        <input type="radio" name="group-1" id="rb-2" class="rb" onclick="cambiarPanel()">
        <label for="rb-2">inline-flex</label>    
        `;
    } else if (theme == "theme-2"){ // flex-direction
        document.getElementById("options-panel-1").innerHTML = `
        <input type="radio" name="group-1" id="rb-3" class="rb" onclick="cambiarPanel()" checked>
        <label for="rb-3">row</label>
        <input type="radio" name="group-1" id="rb-4" class="rb" onclick="cambiarPanel()">
        <label for="rb-4">row-reverse</label>            
        <input type="radio" name="group-1" id="rb-5" class="rb" onclick="cambiarPanel()">
        <label for="rb-5">column</label>
        <input type="radio" name="group-1" id="rb-6" class="rb" onclick="cambiarPanel()">
        <label for="rb-6">column-reverse</label> 
        `;
    } else if (theme == "theme-3"){ // flex-wrap
        document.getElementById("options-panel-1").innerHTML = `
        <input type="radio" name="group-1" id="rb-7" class="rb" onclick="cambiarPanel()" checked>
        <label for="rb-7">wrap</label>
        <input type="radio" name="group-1" id="rb-8" class="rb" onclick="cambiarPanel()">
        <label for="rb-8">nowrap</label>            
        <input type="radio" name="group-1" id="rb-9" class="rb" onclick="cambiarPanel()">
        <label for="rb-9">wrap-reverse</label> 
        `;
    } else if (theme == "theme-4"){ // flex-flow
        document.getElementById("options-panel-1").innerHTML = `
        <input type="radio" name="group-1" id="rb-10" class="rb" onclick="cambiarPanel()" checked>
        <label for="rb-10">ejemplo</label> 
        `;
    } else if (theme == "theme-5"){ // justify-content
        document.getElementById("options-panel-1").innerHTML = `
        <input type="radio" name="group-1" id="rb-11" class="rb" onclick="cambiarPanel()" checked>
        <label for="rb-11">flex-start (1)</label> 
        <input type="radio" name="group-1" id="rb-12" class="rb" onclick="cambiarPanel()">
        <label for="rb-12">flex-start (2)</label> 
        <input type="radio" name="group-1" id="rb-15" class="rb" onclick="cambiarPanel()">
        <label for="rb-15">center</label> 
        <input type="radio" name="group-1" id="rb-13" class="rb" onclick="cambiarPanel()">
        <label for="rb-13">flex-end (1)</label> 
        <input type="radio" name="group-1" id="rb-14" class="rb" onclick="cambiarPanel()">
        <label for="rb-14">flex-end (2)</label> 
        <input type="radio" name="group-1" id="rb-16" class="rb" onclick="cambiarPanel()">
        <label for="rb-16">space-between</label> 
        <input type="radio" name="group-1" id="rb-17" class="rb" onclick="cambiarPanel()">
        <label for="rb-17">space-around</label> 
        <input type="radio" name="group-1" id="rb-18" class="rb" onclick="cambiarPanel()">
        <label for="rb-18">space-evenly</label> 
        `;
    } else if (theme == "theme-6"){ // align-items
        document.getElementById("options-panel-1").innerHTML = `
        <input type="radio" name="group-1" id="rb-19" class="rb" onclick="cambiarPanel()" checked>
        <label for="rb-19">flex-start</label> 
        <input type="radio" name="group-1" id="rb-20" class="rb" onclick="cambiarPanel()">
        <label for="rb-20">center</label> 
        <input type="radio" name="group-1" id="rb-21" class="rb" onclick="cambiarPanel()">
        <label for="rb-21">flex-end</label> 
        <input type="radio" name="group-1" id="rb-22" class="rb" onclick="cambiarPanel()">
        <label for="rb-22">stretch</label> 
        <input type="radio" name="group-1" id="rb-23" class="rb" onclick="cambiarPanel()">
        <label for="rb-23">baseline</label> 
        `;
    } else if (theme == "theme-7"){ // align-content
        document.getElementById("options-panel-1").innerHTML = `
        <input type="radio" name="group-1" id="rb-24" class="rb" onclick="cambiarPanel()" checked>
        <label for="rb-24">flex-start</label> 
        <input type="radio" name="group-1" id="rb-25" class="rb" onclick="cambiarPanel()">
        <label for="rb-25">center</label> 
        <input type="radio" name="group-1" id="rb-26" class="rb" onclick="cambiarPanel()">
        <label for="rb-26">flex-end</label> 
        <input type="radio" name="group-1" id="rb-27" class="rb pendiente" onclick="cambiarPanel()">
        <label for="rb-27">stretch</label> 
        <input type="radio" name="group-1" id="rb-28" class="rb" onclick="cambiarPanel()">
        <label for="rb-28">space-between</label> 
        <input type="radio" name="group-1" id="rb-29" class="rb" onclick="cambiarPanel()">
        <label for="rb-29">space-around</label>
        <input type="radio" name="group-1" id="rb-30" class="rb" onclick="cambiarPanel()">
        <label for="rb-30">space-evenly</label>  
        `;
    } else if (theme == "theme-8"){ // gap
        document.getElementById("options-panel-1").innerHTML = `
        <input type="radio" name="group-1" id="rb-31" class="rb" onclick="cambiarPanel()" checked>
        <label for="rb-31">row-gap</label> 
        <input type="radio" name="group-1" id="rb-32" class="rb" onclick="cambiarPanel()">
        <label for="rb-32">column-gap</label> 
        <input type="radio" name="group-1" id="rb-33" class="rb" onclick="cambiarPanel()">
        <label for="rb-33">gap (1)</label> 
        <input type="radio" name="group-1" id="rb-34" class="rb" onclick="cambiarPanel()">
        <label for="rb-34">gap (2)</label> 

        `;
    } 
    // seccion flex-items
    else if (theme == "theme-9"){    // order
        document.getElementById("options-panel-2").innerHTML = `
        <input type="radio" name="group-2" id="rb-35" class="rb" onclick="cambiarPanel()" checked>
        <label for="rb-35">order</label> 
        `;
    } else if (theme == "theme-10"){ // flex-grow
        document.getElementById("options-panel-2").innerHTML = `
        <input type="radio" name="group-2" id="rb-36" class="rb" onclick="cambiarPanel()" checked>
        <label for="rb-36">flex-grow</label> 
        `;
    } else if (theme == "theme-11"){ // flex-shrink
        document.getElementById("options-panel-2").innerHTML = `
        <input type="radio" name="group-2" id="rb-37" class="rb" onclick="cambiarPanel()" checked>
        <label for="rb-37">flex-shrink</label> 
        `;
    } else if (theme == "theme-12"){ // flex-basis
        document.getElementById("options-panel-2").innerHTML = `
        <input type="radio" name="group-2" id="rb-38" class="rb" onclick="cambiarPanel()" checked>
        <label for="rb-38">flex-basis</label> 
        `;
    } else if (theme == "theme-13"){ // flex
        document.getElementById("options-panel-2").innerHTML = `
        <input type="radio" name="group-2" id="rb-39" class="rb" onclick="cambiarPanel()" checked>
        <label for="rb-39">flex</label> 
        `;
    } 

    cambiarPanel();
}


