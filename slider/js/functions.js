window.onload=function(){
	var slider=document.getElementsByClassName("slider")[0];
	var imagenes=document.getElementsByClassName("img");
	//console.log(slider);
	//console.log(imagenes);
	var proporcion=imagenes[0].naturalHeight/imagenes[0].naturalWidth; //calculamos la proporcion de la imagen principal. Multiplicando (ancho entre alto) este numero por el ancho, conocemos el alto.
	
	//console.log(proporcion);
	slider.style.height=window.innerWidth*proporcion+"px"; //para calcular al alto del slider, multiplicamos el ancho de la ventana (está al 100%) x la proporcion calculada
	var activa=0;
	imagenes[activa].className="img activa";
	imagenes[(activa==0)?imagenes.length-1:activa-1].className="img left"; //Definimos la imagen de la izquierda. Si activa es =0, la imagen de la izquierda sera la última del array, sino será la imagen  anterior a la activa
	imagenes[(activa==imagenes.length-1)?0:activa+1].className="img right";

	window.onresize=function(){ //onresize manda un aviso de que se está redimensionando
		proporcion=imagenes[0].naturalHeight/imagenes[0].naturalWidth;
		slider.style.height=window.innerWidth*proporcion+"px";
	}
}