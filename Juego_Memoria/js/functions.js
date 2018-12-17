window.onload=function(){
	var imagenes=[]; //aqui meteremos nuestras 4 imagenes para rellenar todas las cartas, con los textos a, b, c y d. Serán nuestros 4 tipos de cartas.
	var letras=["a","b","c","d"];
	var colores=["ff0000","00ff00","0000ff","ff00ff","ffff00","00ffff"] //rojo, verde, azul, magenta, amarillo y cyan

	for (var i=0;i<4;i++){ 
		imagenes[i]="http://placehold.it/200x300/"+colores[Math.floor(Math.random()*colores.length)]+"/ffffff?text="+letras[i]; //Genera 4 URLs con color aleatorio y con textos a b c y d y las almacena como elementos del array. Serán nuestras cartas

		//console.log(imagenes); //Se muestran las 4 urls generadas en el punto anterior
	}

	var preSeleccion=[];
	for (var i=0;i<6;i++){
		var indice=Math.floor(Math.random()*imagenes.length); //Le asignamos a indice un valor aleatorio entre 0 y 3, que será machacado en cad vuelta.
		preSeleccion[i]={img:imagenes[indice],carta:indice};  //se crea un objeto en cada vuelta que tiene 6 indices (elementos) y cada indice 2 propiedades (img y carta)
	}

	console.log(preSeleccion);

	/*
	var cartas=[];
	for(var i=0;i<12;i++){
		cartas[i]=imagenes[Math.floor(Math.random()*imagenes.length)]; //llama a un elemento aleatorio del array imágenes que nunca es mayor que la longitud del array. Como el array imagenes tiene solo 4 elementos, siempre cogeremos una imagen que contenga o a o b o c o d.
		//	console.log(cartas[i]);
		addCarta(i);
	}
	*/

	var cartas=[];
	//como solo disponemos de 6 indices, tenemos que llenar una array de 12 elementos y en cada iteracion gastamos 2, debemos hacer un if para cuando llegamos a la segunda mitad del array, reutilicemos los indices gastados, pero sumando 3. La serie sería 012 012 012 012 012 012.

	for(var i=0;i<6;i++){
		if(i<3){
		//la primera vez es 0 y 2, la segunda 1 y 3 y la tercera...
		cartas[i]=preSeleccion[i];
		cartas[i+3]=preSeleccion[i];
	}else{
		cartas[i+3]=preSeleccion[i];
		cartas[i+6]=preSeleccion[i];
	}	
	}
	var cartasDom=[];
	var faseJuego=0;
	var ultimoClic=cartas.length; //Esta variable guardará el índice de la carta en la cual hemos hecho clic. Para que siempre por defecto esté fijada a un valor que no vaya a existir lo fijamos a cartas.lenght (12).

	for(var i=0;i<cartas.length;i++){
		// con esta clausura conseguimos que se sincronicen los indices de los arrays y poder saber en que carta hemos hecho click
		(function(indice){
			addCarta(indice);
			cartasDom[indice].onclick=function(){
				if(indice!=ultimoClic){
					if(faseJuego<1){ //si estamos en la priemra fase(no hemos hecho clic)
						this.childNodes[1].className="mascara mostrar";	//mostramos la carta
						ultimoClic=(indice); //asignamos el indice a la variable ultimo clic
						faseJuego=1; //y cambiamos la fase del juego para saber que ya hemos hecho un clic
					}else{
						this.childNodes[1].className="mascara mostrar";
						setTimeout(function(){ //recibe 2 parametros una funcion y un tiempo en milesimas de segundo. La funcion se ejecuta pasado el tiempo.
							if(cartas[indice].carta==cartas[ultimoClic].carta){
								cartasDom[indice].className="carta invisible";
								cartasDom[ultimoClic].className="carta invisible";
							}else{
								cartasDom[indice].childNodes[1].className="mascara";
								cartasDom[ultimoClic].childNodes[1].className="mascara";
							}
						faseJuego=0;
						},500) 
					}
				}
				//console.log(this); //this aqui es cartasDom[indice] (cada carta que se crea)
				//console.log(this.childNodes); //childNodes me dice cuales son los elmentos de quien hecho click
				//this.childNodes[1].className="mascara mostrar"; //seleccionamos el segundo elemento del array que es el div que contiene la clase mascara, y le añadimos la clase mostrar para que se quite la máscara con la animación (ver css) 				
				//console.log(indice);

			}

		})(i);
	}	

	console.log(cartas);

	function addCarta(indice){ //funcion para pintar las cartas
		var carta=document.createElement("div"); 
		carta.className="carta"; //creamos un div con la clase carta
		var imagen=document.createElement("img"); 
		imagen.src=cartas[indice].img; // creamos el elemento imagen con el atributo src que es una de las URLs random generadas antes
		
		var mascara=document.createElement("div");
		
		mascara.className="mascara";
		
		carta.appendChild(imagen); // montamos el elemento imagen en el elemento carta
		
		carta.appendChild(mascara);
		
		document.getElementsByClassName("tablero")[0].appendChild(carta); // montamos el elemento carta en el elemento tablero
		cartasDom.push(carta); //añadimos la carta a cartasDom para tener el control de en que carta pinchamos. CartasDom es un array de elemntos html
	}
}