	//Código realizado por William Sandoval Rosas, haciendo uso de algunos materiales de la web y el material visto durante las clases del proyecto 
	//Oracle One con Alura Latam

	const btnCode = document.querySelector("#btn-cripto");
	const btnDecode = document.querySelector("#btn-descripto");
	const btnCopy = document.querySelector("#btn-Copy");
	const btnClear = document.querySelector("#clean");
	const input = document.querySelector("input");
	const input1=document.querySelector("#salida");
	var palabra="";

	input.focus();
	//input1="";

	function codificar(palabra){

		let encriptado="";	

		palabra = palabra.toLowerCase();
				
		for (var i=0;i<palabra.length;i++){

			if(palabra[i]=="a"){
				
				encriptado=encriptado.concat("ai");
			}
			else if(palabra[i]=="e"){
				
				encriptado=encriptado.concat("enter");
			}
			else if(palabra[i]=="i"){
				
				encriptado=encriptado.concat("imes");
			}
			else if(palabra[i]=="o"){
				
				encriptado=encriptado.concat("ober");
			}
			else if(palabra[i]=="u"){
				
				encriptado=encriptado.concat("ufat");
			}
			else{
				encriptado=encriptado.concat(palabra[i]);
			}
			
			input1.value=encriptado;
		}
		
		return encriptado;
	}



	function decodificar(palabra){
		
		let matrixCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  		palabra = palabra.toLowerCase();
  		for(let i = 0; i < matrixCode.length; i++){
    		if(palabra.includes(matrixCode[i][1])){
     		 palabra = palabra.replaceAll(matrixCode[i][1],matrixCode[i][0]);
    		}
    	}
    		return palabra;
	}

	

	


	//button.onclick = encriptar;

	btnCode.addEventListener("click", (e) => {
  		e.preventDefault();
  		const x = codificar(input.value);
  		input1.value = x;
  		input.value = "";
	})

	btnDecode.addEventListener("click", (e) => {
  		e.preventDefault();
  		const x = decodificar(input.value);
  		input1.value = x;
  		input.value = "";
	})


	/*btnCopy.addEventListener("click",(event)=>{
		event.preventDefault();
		const x = input1.value;
		input.value = x;
		if(input.value==x){
			input1="";
		}
	}) */

	btnCopy.addEventListener('click', (e) => {
		e.preventDefault();
		const copia = document.querySelector("#salida");
		copia.select();
		navigator.clipboard.writeText(copia.value);
		input.focus();

	}) 


	btnClear.addEventListener("click",(event)=>{
		event.preventDefault();
		//const x = input1.value;
		input.focus();
		//input.value = "null";
		input1="null";


	})

