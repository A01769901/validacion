function mostrar(){
	document.f_contra.c_pass.type="text";
}

function ocultar(){
	document.f_contra.c_pass.type="password";
}

function valida(){
	v_cta=document.f_contra.c_cta.value;
	v_pass=document.f_contra.c_pass.value;
	if (v_cta.length==0){
		alert("Se debe indicar la cuenta");
		document.f_contra.c_cta.style.background="red";
	}
	else{
		if(v_pass.length==0){
			alert("Se debe indicar la contraseña");
			document.f_contra.c_pass.style.background="red";
		}
		else{
			cta_encri=encripta(v_cta);
			pass_encri=encripta(v_pass);
			//alert(cta_encri+"  "+pass_encri);
			if ((cta_encri=="ulfkl")&&(pass_encri=="gulsl")){
				alert("ACCESO PERMITIDO !!!");
			}
			else{
				alert("ACCESO DENEGADO !!!");
			}
		}
	}
}

function encripta(cadena){
	abc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	llave="defghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabc";
	cont=0;
	salida="";
	while (cont<cadena.length){
		letra=cadena.charAt(cont);
		pos=abc.indexOf(letra);
		salida=salida+llave.charAt(pos);
		cont++;
	}
	return(salida);
}

function campos_azules(){
	document.f_contra.c_cta.style.background="blue";
	document.f_contra.c_pass.style.background="blue";
}