window.onload=function(){
	var cuadrado=document.getElementsByClassName("cuadrado")[0];
	var contenedor=document.getElementsByClassName("contenedor")[0];
	var xInicial=498/2-50; //498 es el total de la altura del contenedor, por eso la dividimo entre 2 y le restamos 50 que es la mitad del cuadrado.
	var yInicial=498/2-50; //estas 2 variables marcan donde inicia el cuadrado interior (con respecto a la esquina de ariba izquda)
	var offsetY=100;
	var offsetX=(window.innerWidth-500)/2 //el ancho del navegador menos el ancho del contenedor/2
	var mouseX=0;
	var mouseY=0;
	var mouseOffsetX=0;
	var mouseOffsetY=0;

	cuadrado.style.top=yInicial+"px"; //le asigno el atributo css top 199px
	cuadrado.style.left=xInicial+"px";//le asigno el atributo css left 199px

	contenedor.onmousedown=function(e){
		//console.log(e);
		//pageX pageY y clientX clientY se refieren a la posición donde hemos hecho click con respecto a la esquina superior izquierda de la pagina
		//layerx ylayerY se refieren a la posicion donde hemos hecho click con respecto al elemnto donde hemos hecho el evento, en este caso, el contenedor
		
		console.log("x:"+e.clientX+","+"y:"+e.clientY);

		// esta linea no funciona por que han cambiado las especificaciones de xClient 
		//if (e.layerX>xInicial && e.layerX<xInicial+100 && e.layerY>yInicial && e.layerY<yInicial+100){
		mouseX=e.clientX;
		mouseY=e.clientY;

		contenedor.addEventListener("mousemove",mover);
	}
	contenedor.onmouseup=function(e){
		//console.log(e);
		//pageX pageY y clientX clientY se refieren a la posición donde hemos hecho click con respecto a la esquina superior izquierda de la pagina
		//layerx y layerY se refieren a la posicion donde hemos hecho click con respecto al elemnto donde hemos hecho el evento, en este caso, el contenedor
		
		console.log("x:"+e.clientX+","+"y:"+e.clientY);

		// esta linea no funciona por que han cambiado las especificaciones de xClient 
		//if (e.layerX>xInicial && e.layerX<xInicial+100 && e.layerY>yInicial && e.layerY<yInicial+100){
		contenedor.removeEventListener("mousemove",mover);
	}
	function mover(e){
		//console.log("moviendo");
		var puedoMover=false
		if (e.clientX-offsetX>xInicial && e.clientX-offsetX<xInicial+100 && e.clientY-offsetY>yInicial && e.clientY-offsetY<yInicial+100){
			//console.log("Yeah");
			puedoMover=true;
			} 
		if (puedoMover){
			mouseOffsetX=e.clientX-mouseX;
			mouseOffsetY=e.clientY-mouseY;
			mouseX=e.clientX;
			mouseY=e.clientY;
			xInicial+=mouseOffsetX;
			yInicial+=mouseOffsetY;
			cuadrado.style.top=yInicial+"px";
			cuadrado.style.left=xInicial+"px";
		}

	}
	
	
/*
	
Para probar el blubbling 

	contenedor.onclick=function(){
		console.log("contenedor");
	}
	cuadrado.onclick=function(e){
		e.stopPropagation(); //evita el bubbling
		console.log("cuadrado");
	}
*/
}	

