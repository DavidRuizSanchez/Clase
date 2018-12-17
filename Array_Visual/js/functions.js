$(document).ready(
	function(){
		var array_grafico=[];
		var abrir=$('<div class="corchete corchete_abre"></div>'); //guardamos el div del corchete de inicio en una variable para poder imprimirlo luego
		var cerrar=$('<div class="corchete corchete_cierra"></div>'); //guardamos el div del corchete de fin en una variable para poder imprimirlo luego
		
		$(".insertar").submit( //solo debe haber un submit en los formularios
			function(e){
				e.preventDefault();
				//console.log("Hola");
				if($("#entrada").val()!=""){
					//console.log($(".seleccion"));
					var enviar=false; //flag que asume que de momento todo es falso
					var posicion=1;
					$(".seleccion").each(
						function(i){
							if($(".seleccion")[i].checked){
								enviar=true;
								posicion=i;
							}
						});
					if(enviar){ //poner solo enviar asume qu enviar =true
						if(posicion>0){
							array_grafico.push($("#entrada").val()); //push añade al final
							

						}else{
							array_grafico.unshift($("#entrada").val()); //unshift añade al principio
						}
						
					}
					dibujar();
					
				}
			})
		$(".contenedor-array").on( //como los elementos con la clase .close se crean al vuelo, no podemos crear un handler normal. Tenemos que hacer que deleguen en el padre que en este caso es .contenedor-array
			"click",".close",function(e){ //evento,elemento,callback
				e.preventDefault();
				//console.log($(this).data("indice")); //esta es la manera de capturar el atributo data que anteriormente hemos definido
				array_grafico.splice($(this).data("indice"),1);
				//$(this).parent().hide(); //con parenr seleccionamos el elemntos padre. Comentada porque hemos añadido la funcion dibujar
				dibujar();
			})

	
	function dibujar(){
		$(".contenedor-array").empty();
			$(".contenedor-array").append(abrir);
			for(var i =0;i<array_grafico.length;i++){
				var elemento=$("<p></p>").addClass("elemento"); //creamos un p con la clase previamente definida
				var add="";
				if(array_grafico.length>1 && i<array_grafico.length-1){ //para añadir la coma
				add=",";
				}
			elemento.html(array_grafico[i]+add); //añadimos cada valor del array al html del p y le añadiomos la variable add(coma) que previamente se ha definido
			var eliminar=$('<a href="#" data-indice="'+i+'">x</a>').addClass("close");
			elemento.prepend(eliminar); //append crea el elemento después del nodo textual, prepend lo crea antes
			$(".contenedor-array").append(elemento); //añadimos cada elemento completo al array grafico					
			}
			$(".contenedor-array").append(cerrar); //esta fuera del for
			//console.log(enviar+" "+posicion);
			console.log(array_grafico);
	}
	}
	)
