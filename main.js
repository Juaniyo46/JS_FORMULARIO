let nomUsuario = document.getElementById("nomUsuario");
let password = document.getElementById("contrasenia");
let name = document.getElementById("nombre");
let country = document.getElementById("pais");
let direccion = document.getElementById("direccion");
let zip = document.getElementById("codigoZip");
let correo = document.getElementById("correo");
let conIngles = document.getElementById("conIngles");
let sinIngles = document.getElementById("sinIngles");


window.onload = function(){


	var enviar = document.getElementById("enviar");
	nomUsuario.addEventListener("blur",checkNomUsu);
	password.addEventListener("blur",checkPass);
	name.addEventListener("blur",checkName);
	country.addEventListener("blur",checkCountry);
	zip.addEventListener("blur",checkZip);
	correo.addEventListener("blur",checkCorreo);
	sinIngles.addEventListener("blur",checkIngles);


}





function checkNomUsu() {

	//event.preventDefault();

	//Validación de Nombre usuario
 	let nomUsu = document.getElementById("nomUsuario");
 	let errorUsu = document.getElementById("errorNomUsu");

 	if (nomUsu.value == "") {
  		errorUsu.innerHTML = "Campo Obligatorio!";
  	
  	} else if (nomUsu.value.length < 5 || nomUsu.value.length > 12) {
  		errorUsu.innerHTML = "De 5 a 12 caracteres requeridos!";
  	} else errorUsu.innerHTML = "";
}

function checkPass(){
	//Validación de contraseña
  	let password = document.getElementById("contrasenia");
  	let errorPas = document.getElementById("errorPass");

  	if (password.value == "") {
  		errorPas.innerHTML = "Campo Obligatorio!";
  	} else if (password.value.length < 7 || password.value.length >12) {
  		errorPas.innerHTML = "De 7 a 12 caracteres requeridos";
  	} else errorPas.innerHTML = "";
}

function checkName(e){
	let name = document.getElementById("nombre");
	let errorName = document.getElementById("errorName");
	letras = "áéíóúabcdefghijklmnñopqrstuvwxyz";
	key = e.keyCode || e.which;
	teclado = String.fromCharCode(key).toLowerCase();

	if (name.value == "") {
		errorName.innerHTML = "Campo Obligatorio!";
	} else if (!name.value.match((/[A-Za-z]/))) {
		errorName.innerHTML = "Introduzca solo letras"
	} else errorName.innerHTML = "";
}


function checkCountry(){
	let country = document.getElementById("pais");
	let errorCountry = document.getElementById("errorCountry");

	if (country.value == "Seleccione su pais") {
		errorCountry.innerHTML = "Por favor, elija su país";
	} else errorCountry.innerHTML = "";
}

function checkZip(){
	let zip = document.getElementById("codigoZip");
	let errorZip = document.getElementById("errorZip");

	if (zip.value == "") {
		errorZip.innerHTML = "Campo Obligatorio!";
	} else if (isNaN(zip.value)) {
		errorZip.innerHTML = "Introduzca solo números";
	} else errorZip.innerHTML = "";
}

function checkCorreo(){
	let correo = document.getElementById("correo");
	let errorCorreo = document.getElementById("errorCorreo");

	if (correo.value == "") {
		errorCorreo.innerHTML = "Campo Obligatorio!";
	} else errorCorreo.innerHTML = "";
}

function checkIngles(){
	let conIngles = document.getElementById("conIngles");
	let chekCon = conIngles.checked;
	let sinIngles = document.getElementById("sinIngles");
	let chekSin = sinIngles.checked;
	let errorIngles = document.getElementById("errorIngles");

	if (!chekCon && !chekSin) {
		errorIngles.innerHTML = "Debe seleccionar una opcion";
	} else if (chekCon && chekSin) {
		errorIngles.innerHTML = "Seleccione solo una opcion";
	} else {
		errorIngles.innerHTML = "";
	}
}










