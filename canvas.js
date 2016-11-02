var can= document.querySelector ("canvas");
var ctx = can.getContext("2d");//

ctx.fillStyle="Brown";// pinta el fondo
ctx.strokeStyle="red"; // pinta la linea 
ctx.lineWidth =2; // // tamaño en pixels de la linea 
ctx.moveTo(75,75); // nos situamos al inicio de la figura
ctx.lineTo(130,75);
ctx.lineTo(130,180);
ctx.lineTo(40,180);
ctx.lineTo(40,130);

ctx.closePath(); // cierra el recorrido desde la ultima linea hasta la primera liena
ctx.stroke();
ctx.fill (); // pinta el trazado definido


// pinta el remolque 
ctx.stroke();
ctx.lineWidth =2;// tamaño en pixels de la linea 
ctx.strokeStyle="black";
ctx.fillStyle="red";
ctx.fillRect (135,60,220,120); // dibuja un rectangulo con relleno
ctx.strokeRect (135,60,220,120); // dibuja las lineas de rectangulo

ctx.beginPath();// nueva figura 

// rueda cavina 
ctx.arc(80,180,25,0,(Math.PI/2)*2,false);
ctx.stroke();// pinta la lineas de la rueda
ctx.beginPath();// nueva figura 

// rueda remolque 1
ctx.arc(200,180,25,0,(Math.PI/2)*2,false);
ctx.stroke();// pinta la lineas de la rueda
ctx.beginPath();// nueva figura


// rueda remolque 2
ctx.arc(300,180,25,0,(Math.PI/2)*2,false);
ctx.stroke();// pinta la lineas de la rueda