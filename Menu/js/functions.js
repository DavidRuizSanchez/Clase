window.onload=function(){
	var menu=document.getElementsByTagName("nav")[0]; //Tag coge por la etiqueta
	var burguer=document.getElementsByClassName("burguer")[0]; //Aunque solo hay un elemento, hay que especificar que queremos el priemero porque sino coge el array (contenedor)
	//console.log(burguer);
	var cerrar=document.getElementsByClassName("close_nav")[0];
	//console.log(cerrar);
	burguer.onclick=function(evento){ //solamente poniendo un nombre ya hemos capturado el evento
		evento.preventDefault(); //para que no navegue el enlace
		menu.className="nav_visible nav_abrir"; //hacemos que le menu salgo con la clase
	}
	cerrar.onclick=function(evento){
		evento.preventDefault();
		menu.className="nav_cerrar"; //quitamos la clase para que desaparezca
	}
}