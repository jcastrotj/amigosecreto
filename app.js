// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const ingresoAmigo=document.getElementById("amigo")
const listaAmigos=[];
const ulListaAmigos=document.getElementById("listaAmigos");
const ulResultado=document.getElementById("resultado");

function agregarAmigo(){
    if (ingresoAmigo.value==="") {
        alert("Por favor ingrese un nombre válido");
    } else {
        listaAmigos.push(ingresoAmigo.value);
        ulListaAmigos.innerHTML+=`<li>${ingresoAmigo.value}</li>`;
    }
}

function sortearAmigo(){
    const amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    ulResultado.innerHTML=`<li>El amigo secreto es: ${amigoSorteado}</li>`;
}