    function cambiarClase(nroBoton){
        if(nroBoton==0){
            document.getElementById("view-panel-0").className = "view-panel background-color-1";
            document.getElementById("description-panel-0").innerHTML = '<b>background-color</b>: <span class="css-variable-text">darkgreen</span>;<hr>Permite asignar un color de fondo plano a un elemento. El color puede ser predefinido como en este caso o puede ser creado con cualquiera de las propiedades para crear colores dados en la sección colores.';
        } else if(nroBoton==1){
            document.getElementById("view-panel-1").className = "view-panel background-image-none";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">none</span>;<hr>Opción por defecto. Este valor no muestra ninguna imagen de fondo.';
        } else if(nroBoton==2){
             document.getElementById("view-panel-1").className = "view-panel background-image-url";
             document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">url</span>(image.png);<hr>Este valor muestra la imagen con la dirección url especificada';
        } else if(nroBoton==3){
            document.getElementById("view-panel-1").className = "view-panel background-image-linear-gradient-1";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">linear-gradient</span>(red, green, blue);<hr>Este valor permite formar un gradiente lineal de dos o más colores.';
        } else if(nroBoton==4){       
            document.getElementById("view-panel-1").className = "view-panel background-image-linear-gradient-2";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">linear-gradient</span>(20deg, red, green, blue);<hr>Adicionalmente permite asignarle al gradiente un ángulo determinado.';
        } else if(nroBoton==5){       
            document.getElementById("view-panel-1").className = "view-panel background-image-linear-gradient-3";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">linear-gradient</span>(20deg, red 20%, green 40% 60%, blue 80%);<hr>Despues de asignar un color, podemos determinar la zona en la cual el color se mantiene puro dentro del gradiente. De 0 al 20% el color es rojo puro, del 20% al 40% el gradiente transiciona de rojo a verde, del 40% al 60% el color es verde puro, del 60% al 80% el gradiente transiciona de verde a azul y del 80% en adelante el color es azul puro.';
        } else if(nroBoton==6){       
            document.getElementById("view-panel-1").className = "view-panel background-image-repeating-linear-gradient-1";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">repeating-linear-gradient</span>(20deg, red 0 1%, green 16% 17%, blue 32% 33.3%);<hr>Este valor nos permite repetir el patrón definido en el gradiente. Para que funcione correctamente es obligatorio asignarle un valor de cierre al último color del patrón, de lo contrario se comportara como lineal-gradient.\nFunciona con las propiedades de asignación de ángulo de inclinación y con la asignación de zonas de colores puros.';
        } else if(nroBoton==7){       
            document.getElementById("view-panel-1").className = "view-panel background-image-repeating-linear-gradient-2";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">repeating-linear-gradient</span>(20deg, red 0, green 11%, blue 22%, red 33.3%);<hr>Para repetir el gradiente con transiciones suaves debemos iniciar y terminar cada transición con el mismo color.';
        } else if(nroBoton==8){       
            document.getElementById("view-panel-1").className = "view-panel background-image-radial-gradient-1";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">radial-gradient</span>(red, green, blue);<hr>Este valor permite formar un gradiente radial de dos o más colores.';
        } else if(nroBoton==9){       
            document.getElementById("view-panel-1").className = "view-panel background-image-radial-gradient-2";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">radial-gradient</span>(circle, red, green, blue);<hr>Agregando circle, podemos modificar la forma del gradiente para que el mismo sea circular y no ovalado.';
        } else if(nroBoton==10){       
            document.getElementById("view-panel-1").className = "view-panel background-image-radial-gradient-3";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">radial-gradient</span>(circle closest-side at 80% 20%, red 0, green 50%, blue 100%);<hr>Agregando closest-side at 80% 20%, podemos centrar el gradiente en la posición 80% en el eje x y 20% en el eje y. A diferencia de los casos anteriores, ahora el gradiente no ocupa la totalidad de la imagen, su tamaño se ve significativamente reducido.';
        } else if(nroBoton==11){       
            document.getElementById("view-panel-1").className = "view-panel background-image-repeating-radial-gradient-1";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">repeating-radial-gradient</span>(circle closest-side at 10% 90%, red, green 60%, blue 120%, red 180%);<hr>Este valor permite formar patrones a partir de gradientes radiales. Es necesario agregarle un valor de cierre al último color, de lo contrario se comportara como radial-gradient. Funciona con todas las opciones presentadas anteriormente en radial-gradient y combinandolas se pueden obtener patrones interesantes como el aquí presentado.';
        } else if(nroBoton==12){       
            document.getElementById("view-panel-1").className = "view-panel background-image-conic-gradient-1";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">conic-gradient</span>(red, green, blue);<hr>Este valor genera un gradiente radial. El mismo presentará un corte abrupto de colores entre el centro y la zona superior de la imagen.';
        } else if(nroBoton==13){       
            document.getElementById("view-panel-1").className = "view-panel background-image-conic-gradient-2";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">conic-gradient</span>(red, green 33%, blue 66%, red);<hr>Podemos usar valores despues de los colores para indicar la proporción de los mismos dentro del gradiente.';
        } else if(nroBoton==14){       
            document.getElementById("view-panel-1").className = "view-panel background-image-multi-1";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">url</span>(image.png), <span class="css-variable-text">radial-gradient</span>(circle, red, green, blue);<hr>background-image nos permite cargar varias imagenes simultaneamente al separarlas con una coma.<br>El comportamiento en este caso hace que la imagen generada al inicio (con url) quede encima de las imagenes generadas posteriormente, por esto mismo vemos la imagen cargada por sobre el gradiente radial.';
        } else if(nroBoton==15){       
            document.getElementById("view-panel-1").className = "view-panel background-image-multi-2";
            document.getElementById("description-panel-1").innerHTML = '<b>background-image</b>: <span class="css-variable-text">radial-gradient</span>(circle, rgba(255,0,0,0.3), rgba(0,255,0,0.1), rgba(0,0,255,0.3)), <span class="css-variable-text">url</span>(image.png);<hr>Cuando usamos imagenes sin fondo (o fondo transparente), o bien imagenes (o gradientes) afectados por un valor de opacidad, podemos obtener resultados interesantes como el aquí mostrado.\nEn este caso primero cargamos el gradiente radial pero con la opacidad modificada para que sea más transparente y nos permita ver la segunda imagen.';
        } else if(nroBoton==16){       
            document.getElementById("view-panel-2").className = "view-panel background-clip background-clip-border-box-1";
            document.getElementById("description-panel-2").innerHTML = '<b>background-clip</b>: <span class="css-variable-text">border-box</span>;<hr>Valor por defecto. El fondo cubre todo el elemento incluyendo el borde.';
        } else if(nroBoton==17){       
            document.getElementById("view-panel-2").className = "view-panel background-clip background-clip-padding-box-1";
            document.getElementById("description-panel-2").innerHTML = '<b>background-clip</b>: <span class="css-variable-text">padding-box</span>;<hr>El fondo cubre todo el elemento hasta el borde exterior de la zona de padding (no incluye el borde).';
        } else if(nroBoton==18){       
            document.getElementById("view-panel-2").className = "view-panel background-clip background-clip-content-box-1";
            document.getElementById("description-panel-2").innerHTML = '<b>background-clip</b>: <span class="css-variable-text">content-box</span>;<hr>El fondo cubre todo el elemento sin incluir el borde o la zona de padding.';
        } else if(nroBoton==19){       
            document.getElementById("view-panel-3").className = "view-panel background-repeat background-repeat-repeat-1";
            document.getElementById("description-panel-3").innerHTML = '<b>background-repeat</b>: <span class="css-variable-text">repeat</span>;<hr>Opción por defecto. Repite la imagen asignada en los ejes x e y hasta cubrir todo el elemento.';
        } else if(nroBoton==20){       
            document.getElementById("view-panel-3").className = "view-panel background-repeat background-repeat-repeat-x-1";
            document.getElementById("description-panel-3").innerHTML = '<b>background-repeat</b>: <span class="css-variable-text">repeat-x</span>;<hr>Repite la imagen asignada a lo largo del eje x hasta cubrir todo ancho del elemento.';
        } else if(nroBoton==21){       
            document.getElementById("view-panel-3").className = "view-panel background-repeat background-repeat-repeat-y-1";
            document.getElementById("description-panel-3").innerHTML = '<b>background-repeat</b>: <span class="css-variable-text">repeat-y</span>;<hr>Repite la imagen asignada a lo largo del eje y hasta cubrir todo el alto del elemento.';
        } else if(nroBoton==22){       
            document.getElementById("view-panel-3").className = "view-panel background-repeat background-repeat-space-1";
            document.getElementById("description-panel-3").innerHTML = '<b>background-repeat</b>: <span class="css-variable-text">space</span>;<span class="css-comment-text"> /*Ejemplo 1*/</span><hr>Repite la imagen asignada a lo largo del eje y hasta cubrir todo el alto del elemento.';
        } else if(nroBoton==23){       
            document.getElementById("view-panel-3").className = "view-panel background-repeat background-repeat-space-2";
            document.getElementById("description-panel-3").innerHTML = '<b>background-repeat</b>: <span class="css-variable-text">space</span>;<span class="css-comment-text"> /*Ejemplo 2*/</span><hr>Se modifica el tamaño de la imagen para apreciar el efecto del relleno entre las imagenes';
        } else if(nroBoton==24){       
            document.getElementById("view-panel-3").className = "view-panel background-repeat background-repeat-space-3";
            document.getElementById("description-panel-3").innerHTML = '<b>background-repeat</b>: <span class="css-variable-text">space</span>;<span class="css-comment-text"> /*Ejemplo 3*/</span><hr>En este caso la imagen es demasiado grande para entrar en el elemento y la misma es recortada.';
        } else if(nroBoton==25){       
            document.getElementById("view-panel-3").className = "view-panel background-repeat background-repeat-round-1";
            document.getElementById("description-panel-3").innerHTML = '<b>background-repeat</b>: <span class="css-variable-text">round</span>;<span class="css-comment-text"> /*Ejemplo 1*/</span><hr>Ajusta las dimensiones de las imagenes de manera tal que se repitan en la totalidad del elemento. Las imágenes repetidas se estrechan (sin dejar huecos) hasta que haya espacio suficiente <b>(espacio restante >= la mitad del ancho|alto de la imagen)</b> para que otra sea añadida. Cuando la próxima imagen es añadida, todas las demás son comprimidas al espacio disponible.';
        } else if(nroBoton==26){       
            document.getElementById("view-panel-3").className = "view-panel background-repeat background-repeat-round-2";
            document.getElementById("description-panel-3").innerHTML = '<b>background-repeat</b>: <span class="css-variable-text">round</span>;<span class="css-comment-text"> /*Ejemplo 2*/</span><hr>Disminuimos ligeramente las dimensiones de la imagen para ver su comportamiento. Si bajamos lo suficiente para que se cumpla la condición de que <b>(espacio restante >= la mitad del ancho|alto de la imagen)</b> se repetiran otras imagenes como se ve en este caso';
        } else if(nroBoton==27){       
            document.getElementById("view-panel-3").className = "view-panel background-repeat background-repeat-no-repeat-1";
            document.getElementById("description-panel-3").innerHTML = '<b>background-repeat</b>: <span class="css-variable-text">no-repeat</span>;<hr>No repite la imagen y la misma será alineada arriba a la izquierda por defecto.';
        } else if(nroBoton==28){       
            document.getElementById("view-panel-4").className = "view-panel background-position background-position-top-1 background-repeat-no-repeat-1";
            document.getElementById("description-panel-4").innerHTML = '<b>background-position</b>: <span class="css-variable-text">top</span>;<hr>Alinea la imagen arriba en el centro del elemento.';
        } else if(nroBoton==29){       
            document.getElementById("view-panel-4").className = "view-panel background-position background-position-botton-1 background-repeat-no-repeat-1";
            document.getElementById("description-panel-4").innerHTML = '<b>background-position</b>: <span class="css-variable-text">botton</span>;<hr>Alinea la imagen abajo en el centro del elemento.';
        } else if(nroBoton==30){       
            document.getElementById("view-panel-4").className = "view-panel background-position background-position-left-1 background-repeat-no-repeat-1";
            document.getElementById("description-panel-4").innerHTML = '<b>background-position</b>: <span class="css-variable-text">left</span>;<hr>Alinea la imagen en el centro y a la izquierda del elemento.';
        } else if(nroBoton==31){       
            document.getElementById("view-panel-4").className = "view-panel background-position background-position-right-1 background-repeat-no-repeat-1";
            document.getElementById("description-panel-4").innerHTML = '<b>background-position</b>: <span class="css-variable-text">right</span>;<hr>Alinea la imagen en el centro y a la derecha del elemento.';
        } else if(nroBoton==32){       
            document.getElementById("view-panel-4").className = "view-panel background-position background-position-center-1 background-repeat-no-repeat-1";
            document.getElementById("description-panel-4").innerHTML = '<b>background-position</b>: <span class="css-variable-text">center</span>;<hr>Alinea la imagen en el centro del elemento.';
        } else if(nroBoton==33){       
            document.getElementById("view-panel-4").className = "view-panel background-position background-position-x-y-1 background-repeat-no-repeat-1";
            document.getElementById("description-panel-4").innerHTML = '<b>background-position</b>: <span class="css-variable-text">center</span>;<hr>Podemos indicar con valores la posición exacta de la imagen dentro del elemento. El primer valor corresponde al eje x y el segundo al eje y. El extremo superior izquierdo de la imagen coincidira con los valores indicados.';
        } else if(nroBoton==34){       
            document.getElementById("view-panel-5").className = "view-panel background-size background-size-auto-1 background-repeat-no-repeat-1";
            document.getElementById("description-panel-5").innerHTML = '<b>background-size</b>: <span class="css-variable-text">auto</span>;<hr>Es el valor por defecto. Mostrará la imagen en su tamaño original.';
        } else if(nroBoton==35){       
            document.getElementById("view-panel-5").className = "view-panel background-size background-size-cover-1 background-repeat-no-repeat-1";
            document.getElementById("description-panel-5").innerHTML = '<b>background-size</b>: <span class="css-variable-text">cover</span>;<hr>Escala la imagen al mayor tamaño posible sin estirarla. Si las proporciones de la imagen difieren de las del elemento, es recortada vertical u horizontalmente para que no quede un espacio vacío dentro del elemento.';
        } else if(nroBoton==36){       
            document.getElementById("view-panel-5").className = "view-panel background-size background-size-contain-1 background-repeat-no-repeat-1";
            document.getElementById("description-panel-5").innerHTML = '<b>background-size</b>: <span class="css-variable-text">contain</span>;<hr>Escala la imagen al mayor tamaño posible sin recortarla ni estirarla de manera tal que la misma pueda verse por completo dentro de las dimensiones del elemento.';
        } else if(nroBoton==37){       
            document.getElementById("view-panel-5").className = "view-panel background-size background-size-manual-1 background-repeat-no-repeat-1";
            document.getElementById("description-panel-5").innerHTML = '<b>background-size</b>: <span class="css-value-text">50%</span>;<hr>Escala la imagen de fondo proporcionalmente según el valor asignando.';
        } else if(nroBoton==38){       
            document.getElementById("view-panel-5").className = "view-panel background-size background-size-manual-2 background-repeat-no-repeat-1";
            document.getElementById("description-panel-5").innerHTML = '<b>background-size</b>: <span class="css-value-text">200px 200px</span>;<hr>Escala la imagen según los valores asignados de ancho y de alto (en ese orden). La imagen será estirada para coincidir con los datos asignados';
        } else if(nroBoton==39){       
            document.getElementById("view-panel-6").className = "view-panel background-attachment background-attachment-scroll-1";
            document.getElementById("view-panel-6").innerHTML = '<p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p>'
            document.getElementById("description-panel-6").innerHTML = '<b>background-attachment</b>: <span class="css-variable-text">scroll</span>;<hr>Valor por defecto. La imagen de fondo se movera junto al contenido de la página al hacer un scroll sobre la misma. No obstante, si realizamos un scroll local dentro del elemento contenedor de la imágen, esta se mantendra estática.';
        } else if(nroBoton==40){       
            document.getElementById("view-panel-6").className = "view-panel background-attachment background-attachment-fixed-1";
            document.getElementById("view-panel-6").innerHTML = '<p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p>'
            document.getElementById("description-panel-6").innerHTML = '<b>background-attachment</b>: <span class="css-variable-text">fixed</span>;<hr>La imagen de fondo se mantiene estática en todo momento, ya sea que se trate de un desplazamiento de la página o del elemento contenedor de la imagen.';
        } else if(nroBoton==41){       
            document.getElementById("view-panel-6").className = "view-panel background-attachment background-attachment-local-1";
            document.getElementById("view-panel-6").innerHTML = '<p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p><p style="color:rgba(0,0,0,0.2); font-size:4em">Desplazar hacia abajo</p>'
            document.getElementById("description-panel-6").innerHTML = '<b>background-attachment</b>: <span class="css-variable-text">local</span>;<hr>La imagen de fondo se movera tanto si desplazamos la página como si realizamos un desplazamiento local del elemento al que pertenece la imágen.';
        } else if(nroBoton==42){       
            document.getElementById("view-panel-7").className = "view-panel background-origin background-origin-border-box-1";
            document.getElementById("description-panel-7").innerHTML = '<b>background-origin</b>: <span class="css-variable-text">border-box</span>;<hr>La imagen se posiciona de forma relativa al borde del elemento';
        } else if(nroBoton==43){       
            document.getElementById("view-panel-7").className = "view-panel background-origin background-origin-padding-box-1";
            document.getElementById("description-panel-7").innerHTML = '<b>background-origin</b>: <span class="css-variable-text">padding-box</span>;<hr>La imagen se posiciona de forma relativa al padding del elemento';
        } else if(nroBoton==44){       
            document.getElementById("view-panel-7").className = "view-panel background-origin background-origin-content-box-1";
            document.getElementById("description-panel-7").innerHTML = '<b>background-origin</b>: <span class="css-variable-text">content-box</span>;<hr>La imagen se posiciona de forma relativa al contenido del elemento';
        } else if(nroBoton==45){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-normal-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">normal</span>;<hr>El color final es el de la capa superior, sin importar el color de fondo. Es el mismo efecto que producen dos papeles superpuestos.';
        } else if(nroBoton==46){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-multiply-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">multiply</span>;<hr>El color final es el resultado de multiplicar el color superior y el inferior.Una capa negra conduce a una capa final negra, y una capa blanca lleva a que no haya cambios.El efecto ese similar a dos imágenes impresas en papel transparente sobrepuestas.';
        } else if(nroBoton==47){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-screen-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">screen</span>;<hr>El color final es el resultado de invertir los colores, multiplicarlos e invertir el resultado. Una capa negra no produce cambio alguno, y una capa blanca conduce a una capa blanca final. El efecto es similar a dos imágenes mostrándose desde un proyector.';
        } else if(nroBoton==48){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-overlay-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">overlay</span>;<hr>El color final es el resultado de multiply si el color inferior es más oscuro, o screen si el color inferior es más claro. Este modo de mezcla es equivalente a hard-light, pero si las capas son intercambiadas.';
        } else if(nroBoton==49){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-darken-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">darken</span>;<hr>El resultado final es un color compuesto de los valores más oscuros de cada canal de color.';
        } else if(nroBoton==50){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-lighten-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">lighten</span>;<hr>El resultado final es un color compuesto de los valores más oscuros de cada canal de color.';
        } else if(nroBoton==51){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-color-dodge-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">color-dodge</span>;<hr>El color final es el resultado de dividir el color inferior por el inverso del color superior. Un fondo negro no produce cambio alguno. Un color de primer plano con el color invertido del fondo produce un color completamente iluminado. Este modo de mezcla es similar a screen, pero basta con que el color de primer plano sea tan claro como el inverso del color de fondo para alcanzar un color completamente iluminado.';
        } else if(nroBoton==52){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-color-burn-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">color-burn</span>;<hr>El color final es el resultado de invertir el color de fondo, dividir el valor por el color superior, e invertir el resultado. Un fondo blanco no produce cambio alguno. Un color de primer plano con el color invertido del fondo produce una imagen negra. Este modo de mezcla es similar a multiply, pero basta con que el color de primer plano sea tan oscuro como el inverso del color de fondo para dar como resultado una imagen negra.';
        } else if(nroBoton==53){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-hard-light-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">hard-light</span>;<hr>El color final es el resultado de multiply si el color superior es más oscuro, o screen si el color superior es más oscuro.Este modo de mezcla es equivalente a overlay, pero con las capas intercambiadas. El efecto es similar a encender un foco con mucha intensidad en el fondo.';
        } else if(nroBoton==54){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-soft-light-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">soft-light</span>;<hr>El color final es similar a hard-light, pero más suave. Este modo de mezcla se comporta similar a hard-light. El efecto es similar a encender un foco difuso en el fondo.';
        } else if(nroBoton==55){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-difference-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">difference</span>;<hr>El color final es elresultado de restar el color más oscuro de las dos capas, del más claro.Una capa negra no produce efecto alguno, mientras una capa blanca invierte el color de la otra capa.';
        } else if(nroBoton==56){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-exclusion-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">exclusion</span>;<hr>El color final es similar a difference, pero con menor contraste. Así como con difference, una capa negra no produce efecto alguno, mientras una capa blanca invierte el color de la otra capa.';
        } else if(nroBoton==57){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-hue-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">hue</span>;<hr>El color final tiene el matiz del color superior, mientras usa la saturación y luminosidad del color inferior.';
        } else if(nroBoton==58){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-saturation-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">saturation</span>;<hr>El color final tiene la saturación del color superior, mientras usa el matiz y luminosidad del color inferior. Un fondo gris puro, que no tenga saturación, no producirá efecto alguno.';
        } else if(nroBoton==59){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-color-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">color</span>;<hr>El color final tiene el matiz y saturación del color superior, mientras usa la luminosidad del color inferior.El efecto preserva los niveles de grid y puede ser usado para colorear el primer plano.';
        } else if(nroBoton==60){       
            document.getElementById("view-panel-8").className = "view-panel background-blend-mode background-blend-mode-luminosity-1";
            document.getElementById("description-panel-8").innerHTML = '<b>background-blend-mode</b>: <span class="css-variable-text">luminosity</span>;<hr>El color final tiene la luminosidad del color superior, mientras usa el matiz y saturación del color inferior.Este modo de mezcla es equivalente a color, pero con las capas intercambiadas.';
        } else if(nroBoton==61){       
            document.getElementById("view-panel-9").className = "view-panel background-1";
            document.getElementById("description-panel-9").innerHTML = '<b>background</b>:<span class="css-variable-text">linear-gradient</span>(45deg, rgba(255,0,0,0.6),rgba(0,0,0,0.6)),<span class="css-variable-text">url</span>(../../Image/dog-cheems.png) <span class="css-variable-text">no-repeat center</span>/60% <span class="css-variable-text">border-box</span>;</button><br>En una sola linea de código combinamos un gradiente con una imagen, aplicamos el valor de no-repeat, la escalamos al 60%, la centramos y le aplicamos un border-box.';
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