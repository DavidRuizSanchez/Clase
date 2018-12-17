$(document).ready(	
	function(){
		var puntuacion =0;
		var tiempo=10;
		init();
		
		$(".reset").click(function(e){
			e.preventDefault();
			init();
		});
			

		function init(){
			$("h3").text("ERES UN LOOSER");
			$(".circulo").removeClass("invisible");
			$(".timer").empty(); //vacía todo lo que haya en el elemento
			puntuacion =0;
			tiempo=10;
			$(".fondo_modal").hide();
			$(".puntuacion").html(puntuacion);

			for(var i=0;i<tiempo;i++){
				var bloque=$("<div></div>").addClass("bloque_timer"); //con esta línea creamos una variable que contiene un div al que le adignamos una clase bloque_timer
				//console.log(bloque);
				bloque.css("width",100/tiempo-1+"%");
				$(".timer").append(bloque); //apend es como appendChild de JS. Le agregamos todos lo bloques a la barra de tiempo (timer)
			}

			var timer=setInterval(function(){ //setInterval tiene 2 parametros el callback a ejecutar y el tiempo
				if (tiempo>0){
					//console.log(tiempo);
					$(".bloque_timer").eq(tiempo-1).fadeOut();
					tiempo--;
				}else{
					clearInterval(timer); //mata el inervalo asignado a la variable timer
					//console.log("GAME OVER");
					$(".fondo_modal").show();
				}
			},1000); //1000 ms es un segundo y hace que el contenido de la función se ejecute cada 1s 

			$(".circulo").click(
				function(){
					if(!$(this).hasClass("invisible")){ // ponemos la exclamacion para invertir el valor booleano que devuelve el hasclass					
					$(this).addClass("invisible");
						puntuacion++;
						if(puntuacion == $(".circulo").length){
							
							//console.log("hola");
							$(".modal h3").text("No te lo creas mucho");								
							$(".fondo_modal").show();
							clearInterval(timer);

						}
						$(".puntuacion").html(puntuacion);
					}
					
					
				});

			}
	}
	);