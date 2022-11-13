/*****************************************************************************************************/
/* Sección "Primeros pasos" */
let myCanvas = document.getElementById("canvas-id");
let myContext = myCanvas.getContext("2d");
myContext.fillStyle = "#FF0000";
myContext.fillRect(50, 50, 100, 100);



function editarCanvas(nroBoton){
    // Texto del panel de descripcion
    let descriptionPanelText;
    if(nroBoton==0){
        descriptionPanelText = '<b>rect</b>(x0, y0, width, height)<hr>Crea (pero no dibuja) un rectángulo hueco cuyo origen inicia en las coordenadas (x0-y0) y con el ancho y alto especificado en width y height respectivamente.';
    } else if(nroBoton==1){
        descriptionPanelText = '<b>fillRect</b>(x0, y0, width, height)<hr>Dibuja en el canvas un rectángulo relleno cuyo origen inicia en las coordenadas (x0-y0) y con el ancho y alto especificado en width y height respectivamente.';
    } else if(nroBoton==2){
        descriptionPanelText = '<b>strokeRect</b>(x0, y0, width, height)<hr>Dibuja en el canvas un rectángulo hueco cuyo origen inicia en las coordenadas (x0-y0) y con el ancho y alto especificado en width y height respectivamente.';
    } else if(nroBoton==3){
        descriptionPanelText = '<b>clearRect</b>(x0, y0, width, height)<hr>Borra un fragmento rectangular en el canvas cuyo origen inicia en las coordenadas (x0-y0) y con el ancho y alto especificado en width y height respectivamente.';
    } else if(nroBoton==4){
        descriptionPanelText = '<b>font</b><hr>La propiedad <b>font</b> activa o retorna la fuente actual del texto contenido en el canvas.<br>En este ejemplo se ve el font-style que puede variar entre (normal|italic|oblique).';
    } else if(nroBoton==5){
        descriptionPanelText = '<b>font</b><hr>La propiedad <b>font</b> activa o retorna la fuente actual del texto contenido en el canvas.<br>En este ejemplo se ve el font-variant que puede variar entre (normal|small-caps).';
    } else if(nroBoton==6){
        descriptionPanelText = '<b>font</b><hr>La propiedad <b>font</b> activa o retorna la fuente actual del texto contenido en el canvas.<br>En este ejemplo se ve el font-weight que puede variar entre (normal|bold|bolder|lighter|100|200|300|400|500|600|700|800|900).';
    } else if(nroBoton==7){
        descriptionPanelText = '<b>font</b><hr>La propiedad <b>font</b> activa o retorna la fuente actual del texto contenido en el canvas.<br>En este ejemplo se ve el font-size el cual modifica el tamaño del texto del canvas y cuyo valor debe ser algún tipo de medida como px, em, rem, etc.';
    } else if(nroBoton==8){
        descriptionPanelText = '<b>font</b><hr>La propiedad <b>font</b> activa o retorna la fuente actual del texto contenido en el canvas.<br>En este ejemplo se ve el font-family el cual modifica la familia de la fuente usada en el texto. Algunos de las fuentes mas comunes son (Arial|Verdana|Times New Roman|Courier New|serif|sans-serif)';
    }

/*     if(nroBoton==0||nroBoton==1||nroBoton==2||nroBoton==3){
        descriptionPanelText = '<b>createLinearGradient</b>(x0,y0,x1,y1)<hr>Crea un objeto del tipo <b>linearGradient</b>. El punto de origen (x0,y0) y el punto de destino (x1,y1) se usan para indicar la dirección y las dimensiones que tendra el gradiente formado.<br>El objeto creado de esta forma es un valor que puede usarse en las propiedades <b>strokeStyle</b> y <b>fillStyle</b>.<br> En conjunto con este comando se usa el método <b>addColorStop()</b> para especificar los colores y las posiciones de estos dentro del gradiente.';
    } else if(nroBoton==4||nroBoton==5||nroBoton==6||nroBoton==7){
        descriptionPanelText = '<b>createLinearGradient</b>(x0,y0,r0,x1,y1,r1)<hr>Crea un objeto del tipo <b>radialGradient</b>. El punto de origen (x0,y0) y el punto de destino (x1,y1) se usan para indicar el centro de las circunferencias inicial y final respectivamente, mientras que r0 y r1 indican los radios de las mismas.<br>El objeto creado de esta forma es un valor que puede usarse en las propiedades <b>strokeStyle</b> y <b>fillStyle</b>.<br> En conjunto con este comando se usa el método <b>addColorStop()</b> para especificar los colores y las posiciones de estos dentro del gradiente.';
    } else if(nroBoton==8||nroBoton==9||nroBoton==10||nroBoton==11){
        descriptionPanelText = '<b>createPattern</b>(image, repeat|no-repeat|repeat-x|repeat-y)<hr>Crea un patrón de imagenes con la imagen asignada al mismo. La imagen puede repetirse en el eje x, en el eje y, en ambos o no repetirse según el argumento usado.<br>Se pueden usar como imagenes SVGImageElement (<image>), HTMLImageElement (<img>), HTMLVideoElement(<video>, usando la captura de video), HTMLCanvasElement (<canvas>) ,ImageBitmap, OffscreenCanvas y VideoFrame.';
    } */

    // Contenido interactivo

    if(nroBoton==0){
        let myCanvas = document.getElementById("canvas-0");
        let myContext = myCanvas.getContext("2d");
        
        /* LIMPIA EL CANVAS */
        myContext.beginPath();
        myContext.fillStyle = "white";
        myContext.fillRect(0, 0, myCanvas.width, myCanvas.height);
        myContext.stroke();

        myContext.beginPath();
        myContext.fillStyle = "black";
        myContext.rect(100, 100, myCanvas.width -200, myCanvas.height -200);
        myContext.stroke();
        
        document.getElementById("description-panel-0").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span>.<span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br><br> 
        
        <span class="js-name-text"> myContext</span>.<span class="js-method-text">beginPath</span>();<br>

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">rect</span>(<span class="js-value-text">100</span>,<span class="js-value-text"> 100</span>,<span class="js-name-text"> myCanvas</span>.<span class="js-name-text">width</span><span class="js-value-text"> - 100</span>,<span class="js-name-text"> myCanvas</span>.<span class="js-name-text">height</span><span class="js-value-text"> - 100</span>);

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">stroke</span>();

        </b>`;
    } else if (nroBoton==1){
        let myCanvas = document.getElementById("canvas-0");
        let myContext = myCanvas.getContext("2d");
        
        /* LIMPIA EL CANVAS */
        myContext.fillStyle = "white";
        myContext.fillRect(0, 0, myCanvas.width, myCanvas.height);

        myContext.fillStyle = "black";
        myContext.fillRect(100, 100, myCanvas.width -200, myCanvas.height -200);
        
        document.getElementById("description-panel-0").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span>.<span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br><br> 
        
        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillRect</span>(<span class="js-value-text">100</span>,<span class="js-value-text"> 100</span>,<span class="js-name-text"> myCanvas</span>.<span class="js-name-text">width</span><span class="js-value-text"> - 100</span>,<span class="js-name-text"> myCanvas</span>.<span class="js-name-text">height</span><span class="js-value-text"> - 100</span>);

        </b>`;
    } else if (nroBoton==2){
        let myCanvas = document.getElementById("canvas-0");
        let myContext = myCanvas.getContext("2d");
        
        /* LIMPIA EL CANVAS */
        myContext.fillStyle = "white";
        myContext.fillRect(0, 0, myCanvas.width, myCanvas.height);

        myContext.fillStyle = "black";
        myContext.strokeRect(100, 100, myCanvas.width -200, myCanvas.height -200);
        
        document.getElementById("description-panel-0").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span>.<span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br><br> 
        
        <span class="js-name-text"> myContext</span>.<span class="js-method-text">strokeRect</span>(<span class="js-value-text">100</span>,<span class="js-value-text"> 100</span>,<span class="js-name-text"> myCanvas</span>.<span class="js-name-text">width</span><span class="js-value-text"> - 100</span>,<span class="js-name-text"> myCanvas</span>.<span class="js-name-text">height</span><span class="js-value-text"> - 100</span>);


        </b>`;
    } else if (nroBoton==3){
        let myCanvas = document.getElementById("canvas-0");
        let myContext = myCanvas.getContext("2d");
        

        myContext.fillStyle = "red";
        myContext.fillRect(0, 0, myCanvas.width, myCanvas.height);
        myContext.clearRect(100, 100, myCanvas.width -200, myCanvas.height -200);
        
        document.getElementById("description-panel-0").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span>.<span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br><br> 
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">fillStyle</span> = <span class="js-string-text"> "red"</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillRect</span>(<span class="js-value-text">0</span>,<span class="js-value-text"> 0</span>,<span class="js-name-text"> myCanvas</span>.<span class="js-name-text">width</span>,<span class="js-name-text"> myCanvas</span>.<span class="js-name-text">height</span>);<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">clearRect</span>(<span class="js-value-text">100</span>,<span class="js-value-text"> 100</span>,<span class="js-name-text"> myCanvas</span>.<span class="js-name-text">width</span><span class="js-value-text"> - 100</span>,<span class="js-name-text"> myCanvas</span>.<span class="js-name-text">height</span><span class="js-value-text"> - 100</span>);


        </b>`;
    } else if (nroBoton==4){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");

        /* LIMPIA EL CANVAS */
        myContext.fillStyle = "white";
        myContext.fillRect(0, 0, myCanvas.width, myCanvas.height);
        myContext.fillStyle = "black";

        myContext.font='normal 30px Arial';
        myContext.fillText('Texto en normal', 10,30);

        myContext.font='italic 30px Arial';
        myContext.fillText('Texto en italic', 10,80);

        myContext.font='oblique 30px Arial';
        myContext.fillText('Texto en oblique', 10,130);

        
        document.getElementById("description-panel-1").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-1").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span>.<span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br><br> 
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> 'normal 30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en normal'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 30</span>);<br><br>

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> 'italic 30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en italic'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 80</span>);<br><br>

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> 'oblique 30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en oblique'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 130</span>);

        </b>`;
    } else if (nroBoton==5){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");

        /* LIMPIA EL CANVAS */
        myContext.fillStyle = "white";
        myContext.fillRect(0, 0, myCanvas.width, myCanvas.height);
        myContext.fillStyle = "black";

        myContext.font='normal 30px Arial';
        myContext.fillText('Texto en normal', 10,30);

        myContext.font='small-caps 30px Arial';
        myContext.fillText('Texto En Small-Caps', 10,80);
        
        document.getElementById("description-panel-1").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-1").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span>.<span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br><br> 
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> 'normal 30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en normal'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 30</span>);<br><br>

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> 'small-caps 30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto En Small-Caps'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 80</span>);


        </b>`;
    } else if (nroBoton==6){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");

        /* LIMPIA EL CANVAS */
        myContext.fillStyle = "white";
        myContext.fillRect(0, 0, myCanvas.width, myCanvas.height);
        myContext.fillStyle = "black";

        myContext.font='normal 30px Arial';
        myContext.fillText('Texto en normal', 10,30);

        myContext.font='bold 30px Arial';
        myContext.fillText('Texto en bold', 10,70);

        myContext.font='bolder 30px Arial';
        myContext.fillText('Texto en bolder', 10,110);

        myContext.font='lighter 30px Arial';
        myContext.fillText('Texto en lighter', 10,150);

        myContext.font='100 30px Arial';
        myContext.fillText('Texto en 100', 10,190);

        myContext.font='600 30px Arial';
        myContext.fillText('Texto en 600', 10,230);

        myContext.font='900 30px Arial';
        myContext.fillText('Texto en 900', 10,270);

        document.getElementById("description-panel-1").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-1").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span>.<span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br><br> 
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> 'normal 30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en normal'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 30</span>);<br><br>

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> 'bold 30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en bold'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 70</span>);<br><br>    

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> 'bolder 30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en bolder'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 110</span>);<br><br>

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> 'lighter 30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en lighter'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 150</span>);<br><br>

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> '100 30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en 100'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 190</span>); <br><br>

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> '600 30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en 600'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 230</span>); <br><br>

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> '900 30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en 900'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 270</span>);

        </b>`;
    } else if (nroBoton==7){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");

        /* LIMPIA EL CANVAS */
        myContext.fillStyle = "white";
        myContext.fillRect(0, 0, myCanvas.width, myCanvas.height);
        myContext.fillStyle = "black";

        myContext.font='10px Arial';
        myContext.fillText('Texto en 10px', 10,30);

        myContext.font='30px Arial';
        myContext.fillText('Texto en 30px', 10,60);
        
        myContext.font='70px Arial';
        myContext.fillText('Texto en 70px', 10,120);


        document.getElementById("description-panel-1").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-1").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span>.<span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br><br> 
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> '10px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en 10px'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 30</span>);<br><br>

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> '30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en 30px'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 60</span>);<br><br>

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> '70px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en 70px'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 120</span>);

        </b>`;
    } else if (nroBoton==8){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");

        /* LIMPIA EL CANVAS */
        myContext.fillStyle = "white";
        myContext.fillRect(0, 0, myCanvas.width, myCanvas.height);
        myContext.fillStyle = "black";

        myContext.font='30px Arial';
        myContext.fillText('Texto en Arial', 10,30);

        myContext.font='30px Verdana';
        myContext.fillText('Texto en Verdana', 10,70);
        
        myContext.font='30px Times New Roman';
        myContext.fillText('Texto en Times New Roman', 10,110);

        myContext.font='30px Courier New';
        myContext.fillText('Texto en Courier New', 10,150);

        myContext.font='30px sefir';
        myContext.fillText('Texto en serif', 10,190);

        myContext.font='30px sans-serif';
        myContext.fillText('Texto en sans-serif', 10,230);


        document.getElementById("description-panel-1").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-1").style = 'font-size: 0.85em;'

        document.getElementById("code-panel-1").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span>.<span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br><br>
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> '30px Arial'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en Arial'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 30</span>);<br><br>

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> '30px Verdana'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en Verdana'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 70</span>);<br><br>      
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> '30px Times New Roman'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en Times New Roman'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 110</span>);<br><br>   

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> '30px Courier New'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en Courier New'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 150</span>);<br><br>   

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> '30px serif'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en serif'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 190</span>);<br><br>  

        <span class="js-name-text"> myContext</span>.<span class="js-name-text">font</span> = <span class="js-string-text"> '30px sans-serif'</span>;<br> 

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillText</span>(<span class="js-string-text">'Texto en sans-serif'</span>, <span class="js-value-text"> 10</span>, <span class="js-value-text"> 230</span>);

        </b>`;
    } 


/*     if(nroBoton==0){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");
        let grad1 = myContext.createLinearGradient(0,0,500,0);
        grad1.addColorStop("0", "black");
        grad1.addColorStop("0.5", "blue");;
        grad1.addColorStop("1", "red");
        myContext.fillStyle = grad1;
        myContext.fillRect(0, 0, 500, 300);
        
        document.getElementById("description-panel-0").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span><b>.</b><span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myGradient</span> =<span class="js-name-text"> myContext</span><b>.</b><span class="js-method-text">createLinearGradient</span>(<span class="js-value-text">0</span><b>,</b><span class="js-value-text">0</span><b>,</b><span class="js-value-text">500</span><b>,</b><span class="js-value-text">0</span>);<br><br>
        
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0"</span>,<span class="js-string-text">"black"</span>);<br>
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0.5"</span>,<span class="js-string-text">"blue"</span>);<br>  
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"1"</span>,<span class="js-string-text">"red"</span>);<br><br>       
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">fillStyle</span> = <span class="js-name-text"> myGradient</span>;<br>

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillRect</span>(<span class="js-value-text">0</span><b>,</b><span class="js-value-text">0</span><b>,</b><span class="js-value-text">500</span><b>,</b><span class="js-value-text">300</span>);
        </b>`;
    } else if (nroBoton==1){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");
        let grad1 = myContext.createLinearGradient(0,0,0,300);
        grad1.addColorStop("0", "black");
        grad1.addColorStop("0.5", "blue");;
        grad1.addColorStop("1", "red");
        myContext.fillStyle = grad1;
        myContext.fillRect(0, 0, 500, 300);
        
        document.getElementById("description-panel-0").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span><b>.</b><span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myGradient</span> =<span class="js-name-text"> myContext</span><b>.</b><span class="js-method-text">createLinearGradient</span>(<span class="js-value-text">0</span><b>,</b><span class="js-value-text">0</span><b>,</b><span class="js-value-text">0</span><b>,</b><span class="js-value-text">300</span>);<br><br>
        
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0"</span>,<span class="js-string-text">"black"</span>);<br>
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0.5"</span>,<span class="js-string-text">"blue"</span>);<br>  
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"1"</span>,<span class="js-string-text">"red"</span>);<br><br>       
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">fillStyle</span> = <span class="js-name-text"> myGradient</span>;<br>

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillRect</span>(<span class="js-value-text">0</span><b>,</b><span class="js-value-text">0</span><b>,</b><span class="js-value-text">500</span><b>,</b><span class="js-value-text">300</span>);
        </b>`;
    } else if (nroBoton==2){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");
        let grad1 = myContext.createLinearGradient(0,300,300,0);
        grad1.addColorStop("0", "black");
        grad1.addColorStop("0.5", "blue");;
        grad1.addColorStop("1", "red");
        myContext.fillStyle = grad1;
        myContext.fillRect(0, 0, 500, 300);
        
        document.getElementById("description-panel-0").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span><b>.</b><span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myGradient</span> =<span class="js-name-text"> myContext</span><b>.</b><span class="js-method-text">createLinearGradient</span>(<span class="js-value-text">0</span><b>,</b><span class="js-value-text">300</span><b>,</b><span class="js-value-text">300</span><b>,</b><span class="js-value-text">0</span>);<br><br>
        
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0"</span>,<span class="js-string-text">"black"</span>);<br>
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0.5"</span>,<span class="js-string-text">"blue"</span>);<br>  
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"1"</span>,<span class="js-string-text">"red"</span>);<br><br>       
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">fillStyle</span> = <span class="js-name-text"> myGradient</span>;<br>

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillRect</span>(<span class="js-value-text">0</span><b>,</b><span class="js-value-text">0</span><b>,</b><span class="js-value-text">500</span><b>,</b><span class="js-value-text">300</span>);
        </b>`;
    } else if (nroBoton==3){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");
        let grad1 = myContext.createLinearGradient(0,20,20,0);
        grad1.addColorStop("0", "black");
        grad1.addColorStop("0.5", "blue");;
        grad1.addColorStop("1", "red");
        myContext.fillStyle = grad1;
        myContext.fillRect(0, 0, 500, 300);
        
        document.getElementById("description-panel-0").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span><b>.</b><span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myGradient</span> =<span class="js-name-text"> myContext</span><b>.</b><span class="js-method-text">createLinearGradient</span>(<span class="js-value-text">0</span><b>,</b><span class="js-value-text">20</span><b>,</b><span class="js-value-text">20</span><b>,</b><span class="js-value-text">0</span>);<br><br>
        
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0"</span>,<span class="js-string-text">"black"</span>);<br>
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0.5"</span>,<span class="js-string-text">"blue"</span>);<br>  
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"1"</span>,<span class="js-string-text">"red"</span>);<br><br>       
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">fillStyle</span> = <span class="js-name-text"> myGradient</span>;<br>

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillRect</span>(<span class="js-value-text">0</span><b>,</b><span class="js-value-text">0</span><b>,</b><span class="js-value-text">500</span><b>,</b><span class="js-value-text">300</span>);
        </b>`;
    } else if (nroBoton==4){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");
        let grad1 = myContext.createRadialGradient(250,150,0,250,150,300);
        grad1.addColorStop("0", "black");
        grad1.addColorStop("0.5", "blue");;
        grad1.addColorStop("1", "red");
        myContext.fillStyle = grad1;
        myContext.fillRect(0, 0, 500, 300);
        
        document.getElementById("description-panel-0").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span><b>.</b><span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myGradient</span> =<span class="js-name-text"> myContext</span><b>.</b><span class="js-method-text">createRadialGradient</span>(<span class="js-value-text">250</span><b>,</b><span class="js-value-text">150</span><b>,</b><span class="js-value-text">0</span><b>,</b><span class="js-value-text">250</span>,<span class="js-value-text">150</span><b>,<span class="js-value-text">300</span><b>);<br><br>
        
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0"</span>,<span class="js-string-text">"black"</span>);<br>
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0.5"</span>,<span class="js-string-text">"blue"</span>);<br>  
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"1"</span>,<span class="js-string-text">"red"</span>);<br><br>       
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">fillStyle</span> = <span class="js-name-text"> myGradient</span>;<br>

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillRect</span>(<span class="js-value-text">0</span><b>,</b><span class="js-value-text">0</span><b>,</b><span class="js-value-text">500</span><b>,</b><span class="js-value-text">300</span>);
        </b>`;
    } else if (nroBoton==5){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");
        let grad1 = myContext.createRadialGradient(50,150,50,150,150,150);
        grad1.addColorStop("0", "black");
        grad1.addColorStop("0.5", "blue");;
        grad1.addColorStop("1", "red");
        myContext.fillStyle = grad1;
        myContext.fillRect(0, 0, 500, 300);
        
        document.getElementById("description-panel-0").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span><b>.</b><span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myGradient</span> =<span class="js-name-text"> myContext</span><b>.</b><span class="js-method-text">createRadialGradient</span>(<span class="js-value-text">50</span><b>,</b><span class="js-value-text">150</span><b>,</b><span class="js-value-text">50</span><b>,</b><span class="js-value-text">150</span>,<span class="js-value-text">150</span><b>,<span class="js-value-text">150</span><b>);<br><br>
        
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0"</span>,<span class="js-string-text">"black"</span>);<br>
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0.5"</span>,<span class="js-string-text">"blue"</span>);<br>  
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"1"</span>,<span class="js-string-text">"red"</span>);<br><br>       
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">fillStyle</span> = <span class="js-name-text"> myGradient</span>;<br>

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillRect</span>(<span class="js-value-text">0</span><b>,</b><span class="js-value-text">0</span><b>,</b><span class="js-value-text">500</span><b>,</b><span class="js-value-text">300</span>);
        </b>`;
    } else if (nroBoton==6){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");
        let grad1 = myContext.createRadialGradient(250,150,300,250,150,0);
        grad1.addColorStop("0", "black");
        grad1.addColorStop("0.5", "blue");;
        grad1.addColorStop("1", "red");
        myContext.fillStyle = grad1;
        myContext.fillRect(0, 0, 500, 300);
        
        document.getElementById("description-panel-0").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span><b>.</b><span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myGradient</span> =<span class="js-name-text"> myContext</span><b>.</b><span class="js-method-text">createRadialGradient</span>(<span class="js-value-text">250</span><b>,</b><span class="js-value-text">150</span><b>,</b><span class="js-value-text">300</span><b>,</b><span class="js-value-text">250</span>,<span class="js-value-text">150</span><b>,<span class="js-value-text">0</span><b>);<br><br>
        
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0"</span>,<span class="js-string-text">"black"</span>);<br>
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0.5"</span>,<span class="js-string-text">"blue"</span>);<br>  
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"1"</span>,<span class="js-string-text">"red"</span>);<br><br>       
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">fillStyle</span> = <span class="js-name-text"> myGradient</span>;<br>

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillRect</span>(<span class="js-value-text">0</span><b>,</b><span class="js-value-text">0</span><b>,</b><span class="js-value-text">500</span><b>,</b><span class="js-value-text">300</span>);
        </b>`;
    } else if (nroBoton==7){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");
        let grad1 = myContext.createRadialGradient(250,150,20,250,150,40);
        grad1.addColorStop("0", "black");
        grad1.addColorStop("0.5", "blue");;
        grad1.addColorStop("1", "red");
        myContext.fillStyle = grad1;
        myContext.fillRect(0, 0, 500, 300);
        
        document.getElementById("description-panel-0").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-0").innerHTML = `<b>
        <span class="js-declare-text">let</span><span class="js-name-text"> myCanvas</span> =<span class="js-name-text"> document</span><b>.</b><span class="js-method-text">getElementById</span>(<span class="js-string-text">"canvas-id"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myContext</span> =<span class="js-name-text"> myCanvas</span><b>.</b><span class="js-method-text">getContext</span>(<span class="js-string-text">"2d"</span>);<br>

        <span class="js-declare-text">let</span><span class="js-name-text"> myGradient</span> =<span class="js-name-text"> myContext</span><b>.</b><span class="js-method-text">createRadialGradient</span>(<span class="js-value-text">250</span><b>,</b><span class="js-value-text">150</span><b>,</b><span class="js-value-text">20</span><b>,</b><span class="js-value-text">250</span>,<span class="js-value-text">150</span><b>,<span class="js-value-text">40</span><b>);<br><br>
        
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0"</span>,<span class="js-string-text">"black"</span>);<br>
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"0.5"</span>,<span class="js-string-text">"blue"</span>);<br>  
        <span class="js-name-text"> myGradient</span>.<span class="js-method-text">addColorStop</span>(<span class="js-string-text">"1"</span>,<span class="js-string-text">"red"</span>);<br><br>       
        
        <span class="js-name-text"> myContext</span>.<span class="js-name-text">fillStyle</span> = <span class="js-name-text"> myGradient</span>;<br>

        <span class="js-name-text"> myContext</span>.<span class="js-method-text">fillRect</span>(<span class="js-value-text">0</span><b>,</b><span class="js-value-text">0</span><b>,</b><span class="js-value-text">500</span><b>,</b><span class="js-value-text">300</span>);
        </b>`;
    } else if (nroBoton==8){
        let myCanvas = document.getElementById("canvas-1");
        let myContext = myCanvas.getContext("2d");
        myContext.clearRect(0, 0, myCanvas.width, myCanvas.height); 
        let img = document.getElementById("img1")
        let pat = myContext.createPattern(img, "repeat");
        myContext.rect(0, 0, myCanvas.width, myCanvas.height);
        myContext.fillStyle = pat;
        myContext.fill();
        
        document.getElementById("description-panel-0").innerHTML = descriptionPanelText;

        document.getElementById("code-panel-0").innerHTML = `<b>
        codigo
        </b>`;
    } */
}

/*****************************************************************************************************/
/* Declaracion de botones interactivos */
document.getElementById("item-button-0").onclick = function(){ editarCanvas(0); }
document.getElementById("item-button-1").onclick = function(){ editarCanvas(1); }
document.getElementById("item-button-2").onclick = function(){ editarCanvas(2); }
document.getElementById("item-button-3").onclick = function(){ editarCanvas(3); }
document.getElementById("item-button-4").onclick = function(){ editarCanvas(4); }
document.getElementById("item-button-5").onclick = function(){ editarCanvas(5); }
document.getElementById("item-button-6").onclick = function(){ editarCanvas(6); }
document.getElementById("item-button-7").onclick = function(){ editarCanvas(7); }
document.getElementById("item-button-8").onclick = function(){ editarCanvas(8); }
document.getElementById("item-button-9").onclick = function(){ editarCanvas(9); }
document.getElementById("item-button-10").onclick = function(){ editarCanvas(10); }
document.getElementById("item-button-11").onclick = function(){ editarCanvas(11); }
document.getElementById("item-button-12").onclick = function(){ editarCanvas(12); }
document.getElementById("item-button-13").onclick = function(){ editarCanvas(13); }
document.getElementById("item-button-14").onclick = function(){ editarCanvas(14); }
document.getElementById("item-button-15").onclick = function(){ editarCanvas(15); }
document.getElementById("item-button-16").onclick = function(){ editarCanvas(16); }
document.getElementById("item-button-17").onclick = function(){ editarCanvas(17); }
document.getElementById("item-button-18").onclick = function(){ editarCanvas(18); }
document.getElementById("item-button-19").onclick = function(){ editarCanvas(19); }
document.getElementById("item-button-20").onclick = function(){ editarCanvas(20); }
document.getElementById("item-button-21").onclick = function(){ editarCanvas(21); }
document.getElementById("item-button-22").onclick = function(){ editarCanvas(22); }
document.getElementById("item-button-23").onclick = function(){ editarCanvas(23); }
document.getElementById("item-button-24").onclick = function(){ editarCanvas(24); }
document.getElementById("item-button-25").onclick = function(){ editarCanvas(25); }
document.getElementById("item-button-26").onclick = function(){ editarCanvas(26); }
document.getElementById("item-button-27").onclick = function(){ editarCanvas(27); }
document.getElementById("item-button-28").onclick = function(){ editarCanvas(28); }
document.getElementById("item-button-29").onclick = function(){ editarCanvas(29); }
document.getElementById("item-button-30").onclick = function(){ editarCanvas(30); }
document.getElementById("item-button-31").onclick = function(){ editarCanvas(31); }
document.getElementById("item-button-32").onclick = function(){ editarCanvas(32); }
document.getElementById("item-button-33").onclick = function(){ editarCanvas(33); }
document.getElementById("item-button-34").onclick = function(){ editarCanvas(34); }
document.getElementById("item-button-35").onclick = function(){ editarCanvas(35); }
document.getElementById("item-button-36").onclick = function(){ editarCanvas(36); }
document.getElementById("item-button-37").onclick = function(){ editarCanvas(37); }
document.getElementById("item-button-38").onclick = function(){ editarCanvas(38); }
document.getElementById("item-button-39").onclick = function(){ editarCanvas(39); }
document.getElementById("item-button-40").onclick = function(){ editarCanvas(40); }
document.getElementById("item-button-41").onclick = function(){ editarCanvas(41); }
document.getElementById("item-button-42").onclick = function(){ editarCanvas(42); }
document.getElementById("item-button-43").onclick = function(){ editarCanvas(43); }
document.getElementById("item-button-44").onclick = function(){ editarCanvas(44); }
document.getElementById("item-button-45").onclick = function(){ editarCanvas(45); }
document.getElementById("item-button-46").onclick = function(){ editarCanvas(46); }
document.getElementById("item-button-47").onclick = function(){ editarCanvas(47); }
document.getElementById("item-button-48").onclick = function(){ editarCanvas(48); }
document.getElementById("item-button-49").onclick = function(){ editarCanvas(49); }
document.getElementById("item-button-50").onclick = function(){ editarCanvas(50); }
document.getElementById("item-button-51").onclick = function(){ editarCanvas(51); }
document.getElementById("item-button-52").onclick = function(){ editarCanvas(52); }
document.getElementById("item-button-53").onclick = function(){ editarCanvas(53); }
document.getElementById("item-button-54").onclick = function(){ editarCanvas(54); }
document.getElementById("item-button-55").onclick = function(){ editarCanvas(55); }
document.getElementById("item-button-56").onclick = function(){ editarCanvas(56); }
document.getElementById("item-button-57").onclick = function(){ editarCanvas(57); }
document.getElementById("item-button-58").onclick = function(){ editarCanvas(58); }
document.getElementById("item-button-59").onclick = function(){ editarCanvas(59); }
document.getElementById("item-button-60").onclick = function(){ editarCanvas(60); }
document.getElementById("item-button-61").onclick = function(){ editarCanvas(61); }
document.getElementById("item-button-62").onclick = function(){ editarCanvas(62); }
document.getElementById("item-button-63").onclick = function(){ editarCanvas(63); }
document.getElementById("item-button-64").onclick = function(){ editarCanvas(64); }
document.getElementById("item-button-65").onclick = function(){ editarCanvas(65); }
document.getElementById("item-button-66").onclick = function(){ editarCanvas(66); }
document.getElementById("item-button-67").onclick = function(){ editarCanvas(67); }
document.getElementById("item-button-68").onclick = function(){ editarCanvas(68); }
document.getElementById("item-button-69").onclick = function(){ editarCanvas(69); }