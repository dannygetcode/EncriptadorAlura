// const textarea = document.querySelector(".cajatexto");
// const mensaje = document.querySelector(".texto_resultado");
// const copia = document.querySelector(".btn_copiar");
// copia.style.display = "none";

// function validarTexto() {
//     let textoEscrito = document.querySelector(".cajatexto").value;
//     let validador = textoEscrito.match(/^[a-z]*$/);

//     if (!validador || validador === 0) {
//         alert("solo son permitidos letras minusculas y sin acentos")
//         location.reload();
//         return true;
//     }
// }

// function btn_encriptar() {
//     if (!validarTexto()) {
//         const textoEncriptado = encriptar(textarea.value);
//         mensaje.value = textoEncriptado;
//         mensaje.style.backgroundImage = "none";
//         textarea.value = "";
//         copia.style.display = "block";        
//     }
// }
// btn_encriptar();

// function encriptar(stringEncriptada) {
//     let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//     stringEncriptada = stringEncriptada.toLowerCase();

//     for (let i = 0; i < matrizCodigo.length; i++) {
//         if (stringEncriptada.includes(matrizCodigo[i][0])) {
//             stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
//         }
//     }
//     return stringEncriptada;
// }


// function btn_desencriptar() {
//     const textoEncriptado = desencriptar(textarea.value);
//     mensaje.value = textoEncriptado;
//     textarea.value = "";
// }
// btn_desencriptar();

// function desencriptar(stringDesencriptada) {
//     let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//     stringDesencriptada = stringDesencriptada.toLowerCase();

//     for (let i = 0; i < matrizCodigo.length; i++) {
//         if (stringDesencriptada.includes(matrizCodigo[i][1])) {
//             stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
//         }
//     }
//     return stringDesencriptada;
// }



// function btn_copiar() {
//     mensaje.select();
//     navigator.clipboard.writeText(mensaje.value)
//     mensaje.value = "";
//     alert("Texto Copiado!");
// }
// btn_copiar()


// var botonEncriptar = document.querySelector(".btn_encriptar");
// var botonDesencriptar = document.querySelector(".btn_desencriptar");
// var munieco = document.querySelector(".contenedormunieco");
// var contenedor = document.querySelector(".contenedor_parrafo");
// var resultado = document.querySelector(".texto_resultado");


// botonEncriptar.onclick = encriptar;
// botonDesencriptar.onclick = desencriptar;

// function encriptar(){
//     ocultarAdelante();
//     var cajatexto = recuperarTexto();
//     resultado.textContent = encriptarTexto(cajatexto);
// }

// function desencriptar(){
//     ocultarAdelante();
//     var cajatexto = recuperarTexto();
//     resultado.textContent = desencriptarTexto(cajatexto);
// }

// function recuperarTexto(){
//     var cajatexto = document.querySelector(".cajatexto")
//     return cajatexto.value
// }

// function ocultarAdelante(){
//     munieco.classList.add("ocultar");
//     contenedor.classList.add("ocultar");
// }

// function encriptar(stringEncriptada) {
//     let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//     stringEncriptada = stringEncriptada.toLowerCase();

//     for (let i = 0; i < matrizCodigo.length; i++) {
//         if (stringEncriptada.includes(matrizCodigo[i][0])) {
//             stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
//         }
//     }
//     return stringEncriptada;
// }


// function desencriptar(stringDesencriptada) {
//     let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//     stringDesencriptada = stringDesencriptada.toLowerCase();

//     for (let i = 0; i < matrizCodigo.length; i++) {
//         if (stringDesencriptada.includes(matrizCodigo[i][1])) {
//             stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
//         }
//     }
//     return stringDesencriptada;
// }


// const btnCopiar = document.querySelector(".btn_copiar");
//     btnCopiar.addEventListener("click", copiar = () =>{
//         var contenido = document.querySelector(".texto_resultado").textContent;
//         navigator.clipboard.writeText(contenedor);
//         console.log("hola")
//     })


var botonEncriptar = document.querySelector(".btn_encriptar");
var botonDesencriptar = document.querySelector(".btn_desencriptar");
var munieco = document.querySelector(".contenedormunieco");
var contenedor = document.querySelector(".contenedor_parrafo");
var resultado = document.querySelector(".texto_resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".btn_copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});
